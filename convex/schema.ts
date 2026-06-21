import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),
  contactRateLimitEvents: defineTable({
    clientId: v.string(),
    email: v.string(),
    submittedAt: v.number(),
  })
    .index("by_clientId_submittedAt", ["clientId", "submittedAt"])
    .index("by_email_submittedAt", ["email", "submittedAt"]),
});
