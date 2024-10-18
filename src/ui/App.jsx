import React, { useState, useEffect } from "react";
import MovieSearch from "../components/MovieSearch";
import Movies from "../components/Movies";
import axiosClient from "../api/axios";
import { CircularProgress, Box, Typography } from "@mui/material";

function App() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [plot, setPlot] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const API_KEY = "c7b50a28";

  useEffect(() => {
    let timer;
    if (loading && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => Math.min(prev + 1, 100));
      }, 30);
    }

    return () => clearInterval(timer);
  }, [loading, progress]);

  const handleSearch = async () => {
    setHasSearched(true);
    setLoading(true);
    setProgress(0);

    if (search.trim()) {
      try {
        const queryParams = [
          `s=${encodeURIComponent(search.trim())}`,
          year.trim() && `y=${encodeURIComponent(year.trim())}`,
          `apikey=${API_KEY}`,
        ]
          .filter(Boolean)
          .join("&");

        const response = await axiosClient.get(`/?${queryParams}`);
        setProgress(30);

        if (
          response.data.Response === "True" &&
          Array.isArray(response.data.Search)
        ) {
          const movieDetailsPromises = response.data.Search.map(
            async (movie) => {
              const movieDetailResponse = await axiosClient.get(
                `/?i=${movie.imdbID}&plot=${plot}&apikey=${API_KEY}`
              );
              setProgress((prev) =>
                Math.min(prev + 60 / response.data.Search.length, 100)
              );
              return movieDetailResponse.data;
            }
          );

          const movieDetails = await Promise.all(movieDetailsPromises);
          setMovies(movieDetails);
          console.log(movieDetails);
        } else {
          setMovies([]);
        }
      } catch (err) {
        console.error("Error: ", err);
      } finally {
        setProgress(100);
        setLoading(false);
      }
    } else {
      console.log("Empty Input");
      setLoading(false);
    }
  };

  return (
    <>
      <MovieSearch
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        plot={plot}
        setPlot={setPlot}
        handleSearch={handleSearch}
        slot={
          <>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70vh",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={80}
                />
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
            ) : (
              <Movies movies={movies} hasSearched={hasSearched} />
            )}
          </>
        }
      />
    </>
  );
}

export default App;
