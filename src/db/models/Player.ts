import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp,  } from "drizzle-orm/pg-core";
import { Team } from "./Team";

export const Player = pgTable(
    'player',
    {
        id: serial('id').primaryKey(),
        firstName: text('first_name').notNull(),
        lastName: text('last_name').notNull(),
        position: text('position').notNull(),
        teamId: serial('team_id').notNull().references(() => Team.id),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)

export type PlayerRow = InferSelectModel<typeof Player>;
export type NewPlayer = InferInsertModel<typeof Player>;

