import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { jsonb, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { APIEndpoint } from "./APIEndpoint";
import { CacheType } from "./CacheType";

export const APIRequest = pgTable(
    'api_request',
    {
        id: serial('id').primaryKey(),
        apiEndpointId: serial('api_endpoint_id').notNull().references(() => APIEndpoint.id),
        cacheTypeId: serial('cache_type_id').references(() => CacheType.id),
        startedAt: timestamp('started_at').defaultNow().notNull(),
        query: jsonb('query'),
        endedAt: timestamp('ended_at'),
        statusCode: text('status_code'),
    },
)

export type APIRequestRow = InferSelectModel<typeof APIRequest>;
export type NewAPIRequest = InferInsertModel<typeof APIRequest>;

