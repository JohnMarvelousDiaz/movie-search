import React from "react";
import { CircularProgress, Box } from "@mui/material";

const ScreenLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent", 
        zIndex: 9999, 
      }}
    >
      <CircularProgress size={80} />
    </Box>
  );
};

export default ScreenLoader;
