import React from 'react';
import {  Grid, Paper, Typography } from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";

function CardLocation(props) {

    const localidad = "Florencio Varela";

    return (
        <Paper
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          color: "white",
          overflow: "hidden",
          boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
          marginTop: "1rem",
          width: "100%",
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '1rem'
        }}
      >
        <Grid item xs={6}>
          <Typography sx={{ marginRight: "1rem" }}>Ahora 15:03 hs</Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography>
            {localidad} <RoomIcon />
          </Typography>
        </Grid>
      </Paper>
    );
}

export default CardLocation;