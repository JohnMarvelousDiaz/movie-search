import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import StarIcon from '@mui/icons-material/Star';

import MovieDialog from "./MovieDialog";

function MovieCard ({ movieData }){
  const [openDialog, setOpenDialog] = useState(false);
  const [imgSrc, setImgSrc] = useState(movieData.Poster);

  const getColorByRating = (rating) => {
    switch (rating) {
      case "G":
      case "TV-G":
        return "green";
      case "PG":
      case "PG-13":
        return "blue";
      case "R":
      case "TV-MA":
        return "red";
      default:
        return "text.secondary";
    }
  };

  const handleOpenDialog = () => {
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
  };

  return (
    <>
      <Card
        sx={{
          height: "100%",
          position: "relative",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          image={imgSrc}
          onError={() => setImgSrc("no-poster.png")}
          
          sx={{ height: 300, objectFit: "cover" }}
        />
        <CardContent sx={{ paddingBottom: "60px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {movieData.Title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: getColorByRating(movieData.Rated), fontWeight: 700 }}
          >
            {movieData.Rated}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieData.Genre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {movieData.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Runtime: {movieData.Runtime}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display: 'flex', alignItems: 'center'}}>
            Ratings: {movieData.imdbRating} <StarIcon color="warning" sx={{fontSize: 18}}/>
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            right: 16,
            bottom: 16,
          }}
          onClick={handleOpenDialog}
        >
          Play
        </Button>
      </Card>

      <MovieDialog 
        open={openDialog} 
        onClose={handleCloseDialog} 
        movieData={movieData} 
      />
    </>
  );
};

export default MovieCard;
