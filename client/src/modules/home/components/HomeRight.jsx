import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import SearchCity from "../../navbar/components/SearchCity";

function HomeRight() {
  return (
    <Box
      sx={{
        minHeight: "56vh",
        maxWidth:'90vw',
        padding: 0,
        margin: '1rem',
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border : 'solid 1px black',
        paddingBottom: '1rem',
        borderRadius:'10% 5%',
        boxShadow: '0px 6px 12px black'
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center",  }}
      >
        Bienvenido!!
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="spam"
          sx={{
            display: "flex",
            textAlign: "justify",
            padding: "1rem",
            width: "90vw",
            fontWeight: "bold",
          }}
        >
          Descubre el clima en cualquier lugar y en cualquier momento. Con
          nuestra aplicación, estarás siempre preparado para enfrentar el día.
          Obtén pronósticos precisos, información detallada sobre las
          condiciones climáticas actuales y descubre las tendencias para los
          próximos días. Explora nuestras funciones personalizadas, desde
          alertas meteorológicas hasta mapas interactivos. Ya sea que estés
          planeando una escapada de fin de semana o simplemente quieras saber
          qué te depara el día, estamos aquí para ayudarte a tomar decisiones
          informadas. ¡Comienza a explorar y disfruta de una experiencia
          meteorológica única con ClimaNow!"
        </Typography>
      </Box>

      <Paper sx={{display: 'flex',backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' , width: {xs: '70%' ,md : '40%'}, height: '8vh'}} >
        <SearchCity />
      </Paper>
    </Box>
  );
}

export default HomeRight;
