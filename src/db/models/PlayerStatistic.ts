import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, text, timestamp,  } from "drizzle-orm/pg-core";
import { Statistic } from "./Statistic";
import { Game } from "./Game";
import { Player } from "./Player";

export const PlayerStatistic = pgTable(
    'player_statistic',
    {
        id: serial('id').primaryKey(),
        playerId: serial('player_id').notNull().references(() => Player.id),
        statisticId: serial('statistic_id').notNull().references(() => Statistic.id),
        gameId: serial('game_id').notNull().references(() => Game.id),
        display_value: text('display_value').notNull(),
        value_numeric: text('value_numeric'),
        value_numerator: text('value_numerator'),
        value_denominator: text('value_denominator'),
        unit: text('unit').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)



export type PlayerStatisticRow = InferSelectModel<typeof PlayerStatistic>;
export type NewPlayerStatistic = InferInsertModel<typeof PlayerStatistic>;

