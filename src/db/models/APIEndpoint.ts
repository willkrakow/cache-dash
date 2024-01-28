import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { jsonb, pgTable, serial, text, timestamp,  } from "drizzle-orm/pg-core";

export const APIEndpoint = pgTable(
    'api_endpoint',
    {
        id: serial('id').primaryKey(),
        path: text('path').notNull(),
        method: text('method').notNull(),
        queryParams: jsonb('query_params'),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
)

export type APIEndpointRow = InferSelectModel<typeof APIEndpoint>;
export type NewAPIEndpoint = InferInsertModel<typeof APIEndpoint>;

