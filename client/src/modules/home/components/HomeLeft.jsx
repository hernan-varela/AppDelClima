import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import fondo from "../../../assets/images/homeBackground.jpg";
import logo from "../../../assets/logos/logo_large.png";

function HomeLeft() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover", // Ajusta según tus preferencias
        backgroundPosition: "center", // Ajusta según tus preferencias
        minWidth: "100vw",
        alignItems: "center",
        justifyContent: "center",
        height: {md:"31.8vh", xs:'20vh'},
      }}
    >
      <Container>
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundPosition: "center",
              display: "flex",
  
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "80%", height: "50%", paddingTop:'5vh' }}
              src={logo}
              alt="img logo"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeLeft;
