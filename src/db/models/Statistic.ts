import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp,  } from "drizzle-orm/pg-core";

export const Statistic = pgTable(
    'statistic',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        description: text('description').notNull(),
        category: text('category').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)

export type StatisticRow = InferSelectModel<typeof Statistic>;
export type NewStatistic = InferInsertModel<typeof Statistic>;

