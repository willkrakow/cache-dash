import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { Team } from "./Team";

export const Game = pgTable(
    'game',
    {
        id: serial('id').primaryKey(),
        homeTeamId: serial('home_team_id').notNull().references(() => Team.id),
        awayTeamId: serial('away_team_id').notNull().references(() => Team.id),
        homeTeamScore: integer('home_team_score').notNull(),
        awayTeamScore: integer('away_team_score').notNull(),
        gameDate: timestamp('game_date').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)

export type GameRow = InferSelectModel<typeof Game>;
export type NewGame = InferInsertModel<typeof Game>;

