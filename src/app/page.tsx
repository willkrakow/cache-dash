import styles from "./page.module.css";
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
export default function Home() {
  return (
    <main className={styles.main}>
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
