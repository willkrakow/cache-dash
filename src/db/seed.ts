import { sql } from "@vercel/postgres";
let seeded = false;

export async function seed(){
    if(seeded) return;
    await sql.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            image TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `);
    // Create team table
    await sql.query(`
        CREATE TABLE IF NOT EXISTS team (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            city TEXT NOT NULL,
            state TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `)

    // Creat player table
    await sql.query(`
        CREATE TABLE IF NOT EXISTS player (
            id SERIAL PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            position TEXT NOT NULL,
            team_id INTEGER REFERENCES team(id),
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `)

    // Create statistic table
    await sql.query(`
        CREATE TABLE IF NOT EXISTS statistic (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            category TEXT NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `)

    // Create game table
    await sql.query(`
        CREATE TABLE IF NOT EXISTS game (
            id SERIAL PRIMARY KEY,
            home_team_id INTEGER REFERENCES team(id),
            away_team_id INTEGER REFERENCES team(id),
            home_team_score INTEGER NOT NULL,
            away_team_score INTEGER NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `)

    // Create player_statistic table
    await sql.query(`
        CREATE TABLE IF NOT EXISTS player_statistic (
            id SERIAL PRIMARY KEY,
            player_id INTEGER REFERENCES player(id),
            statistic_id INTEGER REFERENCES statistic(id),
            game_id INTEGER REFERENCES game(id),
            value INTEGER NOT NULL,
            created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )
    `)

    seeded = true;
}