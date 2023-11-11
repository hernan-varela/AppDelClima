import React from "react";
import { Box, Container, Grid } from "@mui/material";
import HomeLeft from "./components/HomeLeft";
import HomeRight from "./components/HomeRight";

function HomeContainer() {
  return (
    <Box >
      <Box>
        <HomeLeft />
      </Box>
      <Box sx={{ maxWidth: "95vw", display: "flex", justifyContent: "center" }}>
        <HomeRight />
      </Box>
    </Box>
  );
}

export default HomeContainer;
