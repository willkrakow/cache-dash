import styles from "./page.module.css";
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { ExampleTable, db, insertUser } from "@/db/drizzle";
import { seed } from "@/db/seed";
async function getData() {
  const res = await insertUser({
    name: "Will",
    email: "willkrakow@example.com",
    image: "",
  });
  const other = await db.select().from(ExampleTable);
  console.log(other);
  console.log("asdfasdfads")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  return res;
}
export default async function Home() {
  const data = await getData();
  await seed();
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardHeader>
              Data
            </CardHeader>
            <CardContent>
              <Typography variant="body1">
                Here is content
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
