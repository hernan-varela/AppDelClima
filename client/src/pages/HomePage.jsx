import React from "react";
import HomeContainer from "../modules/home/HomeContainer";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <Box
      sx={{
         // Ajusta según tus preferencias
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        
        padding: 0,
        margin:0,
       
        
      }}
    >
      <HomeContainer />
    </Box>
  );
}

export default HomePage;
