import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import ThermostatIcon from "@mui/icons-material/Thermostat";

function CardWeather(props) {
  return (
    <Paper
      sx={{
        bgcolor: "rgba(0, 0, 0, 0.3)",
        color: "white",
        overflow: "hidden",
        boxShadow: "0px 8px 15px rgba(255, 255, 255, 0.3)",
        marginTop: "1rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            <ThermostatIcon sx={{ fontSize: "3rem" }} /> 27° C
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sx={{ display: "flex", overflow: "hidden", textAlign: "center" }}
        >
          <Grid item xs={6} sx={{ padding: "1rem" }}>
            <Typography> Humedad</Typography>
            <Typography>99%</Typography>
          </Grid>

          <Grid item xs={6} sx={{ padding: "1rem" }}>
            <Typography> Visibilidad</Typography>
            <Typography>9Km</Typography>
          </Grid>

          <Grid item xs={6} sx={{ padding: "1rem" }}>
            <Typography> Presión atm.</Typography>
            <Typography>1054hPa</Typography>
          </Grid>

          <Grid item xs={6} sx={{ padding: "1rem" }}>
            <Typography> Viento</Typography>
            <Typography>12kmh</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CardWeather;
