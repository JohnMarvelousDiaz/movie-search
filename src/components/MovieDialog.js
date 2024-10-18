import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";

function MovieDialog ({ open, onClose, movieData }) {
  return (
    <Dialog open={open} onClose={onClose} scroll="paper">
      <DialogTitle>{movieData.Title}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body1">Language: {movieData.Language}</Typography>
        <Typography variant="body1" sx={{marginBottom: 2}}>Country: {movieData.Country}</Typography>
        <Typography variant="body1">Director: {movieData.Director || "Unknown"}</Typography>
        <Typography variant="body1">Director: {movieData.Writer || "Unknown"}</Typography>
        <Typography variant="body1" sx={{marginBottom: 2}}>Actors: {movieData.Actors || "Unknown"}</Typography>
        <Typography variant="body1" >Plot: {movieData.Plot || "No plot available."}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDialog;
