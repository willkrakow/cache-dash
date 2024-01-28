import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp,  } from "drizzle-orm/pg-core";

export const Team = pgTable(
    'team',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        city: text('city').notNull(),
        state: text('state').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)

export type TeamRow = InferSelectModel<typeof Team>;
export type NewTeam = InferInsertModel<typeof Team>;

