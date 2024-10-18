import React from "react";
import { Grid, Box } from "@mui/material";
import MovieCard from "../components/MovieCard.jsx";

function Movies ({ movies, hasSearched }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        minHeight: "70vh",
        maxWidth: "100vw",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 0,
      }}
    >
      {movies.length > 0
        ? movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie.imdbID}
              sx={{ height: 550 }}
            >
              <MovieCard movieData={movie} />
            </Grid>
          ))
        : hasSearched && (
            <Box
              sx={{
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="no-movies.png"
                style={{ width: 1000 }}
                alt="No movies found"
              />
            </Box>
          )}
    </Grid>
  );
};

export default Movies;
