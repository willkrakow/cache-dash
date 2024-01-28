import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from "@vercel/postgres";
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';
import { seed } from './seed';
import { InferInsertModel, InferSelectModel } from 'drizzle-orm';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const ExampleTable = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        email: text('email').notNull(),
        image: text('image').notNull(),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(users.email),
        };
    },
)

export type UserRow = InferSelectModel<typeof ExampleTable>;
export type NewUser = InferInsertModel<typeof ExampleTable>;


export const getExampleTable = async () => {
    await seed();
    return db.select().from(ExampleTable)
};

export const insertUser = async (user: NewUser) => {
    await seed();
    return db.insert(ExampleTable).values(user).returning()
}