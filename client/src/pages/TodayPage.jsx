import React from "react";
import TodayContainer from "../modules/today/TodayContainer";
import { Box } from "@mui/material";
import fondo from '../assets/images/todayImage.jpg'

function TodayPage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${fondo})`, 
        backgroundSize: 'cover', // Ajusta según tus preferencias
        backgroundPosition: 'center', // Ajusta según tus preferencias
        minHeight: 'calc(100vh-70px)', // Ajusta según tus preferencias
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    
      }}
    >
      <TodayContainer />
    </Box>
  );
}

export default TodayPage;
