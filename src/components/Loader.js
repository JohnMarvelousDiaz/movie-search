import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader = ({ progress }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <CircularProgress variant="determinate" value={progress} size={80} />
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          color: "primary.main",
          fontWeight: "bold",
          fontSize: "1.5rem",
        }}
      >
        {progress}%
      </Typography>
    </Box>
  );
};

export default Loader;
