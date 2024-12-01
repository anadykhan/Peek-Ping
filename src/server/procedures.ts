import { Pool } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Redis } from "@upstash/redis/cloudflare"
import { env } from "hono/adapter"
import { cacheExtension } from "./__internals/db/cache-extension"
import { j } from "./__internals/j"


/**
 * Public (unauthenticated) procedures
 *
 * This is the base piece you use to build new queries and mutations on your API.
 */
export const baseProcedure = j.procedure
export const publicProcedure = baseProcedure
