import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function MovieSearch  ({
  search,
  setSearch,
  year,
  setYear,
  plot,
  setPlot,
  handleSearch,
  slot,
}){
  return (
    <Container
      sx={{
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: "#E8E8E8",
        maxWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maxWidth={false}
    >
      <Box
        component="section"
        sx={{
          width: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Bebas Neue, Arial, sans-serif",
            color: "red",
            textAlign: "center",
            textShadow: "2px 2px 4px black",
          }}
        >
          MOVIES SEARCH APP
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", marginTop: 1 }}>
          <TextField
            type="text"
            label="Search Movie Title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 500, backgroundColor: "#F6F6F6", marginRight: 5 }}
          />

          <TextField
            type="text"
            label="Search Year Released..."
            value={year}
            onChange={(e) => setYear(e.target.value)}
            sx={{ width: 200, backgroundColor: "#F6F6F6", marginRight: 5 }}
          />

          <FormControl
            sx={{ width: 200, backgroundColor: "#F6F6F6", marginRight: 5 }}
          >
            <InputLabel>Plot</InputLabel>
            <Select
              value={plot}
              onChange={(event) => setPlot(event.target.value)}
              label="Plot"
              displayEmpty
            >
              <MenuItem value="Full">Full</MenuItem>
              <MenuItem value="Short">Short</MenuItem>
            </Select>
          </FormControl>

          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Box>

      {slot}
    </Container>
  );
};

export default MovieSearch;
