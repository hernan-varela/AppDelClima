import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CardWeather from "./components/CardWeather";
import CardLocation from "./components/CardLocation";
import NextHours from "./components/NextHours";

function TodayContainer(props) {
  return (
    <Container sx={{ Width: "100vw", height: "87vh" }}>
      <Grid item xs={12}>
        <CardLocation />
      </Grid>

      <Grid item xs={12}>
        <CardWeather />
      </Grid>

      <Grid item xs={12}>
       <NextHours />
      </Grid>
    </Container>
  );
}

export default TodayContainer;
