import { db } from "@/db/drizzle";
import { Team } from "@/db/models/Team";
import { Button, Grid, TextField } from "@mui/material";
import { revalidatePath } from 'next/cache'
import TeamsTable from "./table";

export default async function Teams() {
    let teams = await db.select().from(Team).execute();

    const createTeam = async (formData: FormData) => {
        'use server'

        const rawData = {
            name: formData.get('name'),
            city: formData.get('city'),
            state: formData.get('state')
        }

        await db.insert(Team).values({
            name: rawData.name?.toString() ?? '',
            city: rawData.city?.toString() ?? '',
            state: rawData.state?.toString() ?? ''
        }).execute();

        revalidatePath('/teams');
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <TeamsTable teams={teams} />
            </Grid>
            <form action={createTeam}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name='name'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            name='city'
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="State"
                            variant="outlined"
                            fullWidth
                            name='state'
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color='primary'>Create</Button>
            </form>
        </Grid>
    )
}