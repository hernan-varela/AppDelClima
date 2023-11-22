import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const nextHours = [
  { hour: "17:00", temp: 22 },
  { hour: "19:00", temp: 17 },
  { hour: "21:00", temp: 15 },
];

function NextHours(props) {
  return (
    <Box sx={{ color: "white", textAlign: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ marginTop: "2rem" }}>
            En las próximas horas
          </Typography>
        </Grid>

        {nextHours.map((e) => (
          <Grid item xs={4} key={e.hour} display="flex">
            <Paper
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                overflow: "hidden",
                boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
                marginTop: "1rem",
                padding: "1rem",
              }}
            >
              <Typography>{e.hour} hs</Typography>
              <Typography>{e.temp} °C</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default NextHours;
