import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const CacheType = pgTable(
    'cache_type',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
    (cacheTypes) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(cacheTypes.name),
        };
    },
)

export type CacheTypeRow = InferSelectModel<typeof CacheType>;
export type NewCacheType = InferInsertModel<typeof CacheType>;

