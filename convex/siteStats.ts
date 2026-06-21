import { v } from "convex/values";
import type { MutationCtx } from "./_generated/server";
import { mutation, query } from "./_generated/server";

const GLOBAL_KEY = "global";

const viewCountReturns = v.object({
  views: v.number(),
});

const recordVisitReturns = v.object({
  views: v.number(),
  recorded: v.boolean(),
});

async function getOrCreateGlobalStats(ctx: MutationCtx) {
  const existing = await ctx.db
    .query("siteStats")
    .withIndex("by_key", (q) => q.eq("key", GLOBAL_KEY))
    .unique();

  if (existing) {
    return existing;
  }

  const id = await ctx.db.insert("siteStats", { key: GLOBAL_KEY, views: 0 });
  const created = await ctx.db.get("siteStats", id);
  if (!created) {
    throw new Error("Failed to initialize site stats");
  }
  return created;
}

export const getViewCount = query({
  args: {},
  returns: viewCountReturns,
  handler: async (ctx) => {
    const stats = await ctx.db
      .query("siteStats")
      .withIndex("by_key", (q) => q.eq("key", GLOBAL_KEY))
      .unique();

    return { views: stats?.views ?? 0 };
  },
});

export const recordVisit = mutation({
  args: {
    visitorId: v.string(),
  },
  returns: recordVisitReturns,
  handler: async (ctx, args) => {
    const visitorId = args.visitorId.trim();
    if (!visitorId || visitorId.length > 64) {
      throw new Error("Invalid visitor id");
    }

    const globalStats = await getOrCreateGlobalStats(ctx);

    const existingSession = await ctx.db
      .query("siteVisitSessions")
      .withIndex("by_visitorId", (q) => q.eq("visitorId", visitorId))
      .unique();

    if (existingSession) {
      return { views: globalStats.views, recorded: false };
    }

    await ctx.db.insert("siteVisitSessions", {
      visitorId,
      visitedAt: Date.now(),
    });

    const nextViews = globalStats.views + 1;
    await ctx.db.patch("siteStats", globalStats._id, { views: nextViews });

    return { views: nextViews, recorded: true };
  },
});
