import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function CardWeatherByHours(props) {
    return (
        
          <Grid item xs={4}>
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
            <Typography>17: 00 Hs</Typography>
            <Typography variant="h4">24°C</Typography>

            <Typography>Despejado</Typography>
          </Paper>
        </Grid>

    );
}

export default CardWeatherByHours;