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
  Grid,
} from "@mui/material";

function MovieSearch({
  search,
  setSearch,
  year,
  setYear,
  plot,
  setPlot,
  handleSearch,
  slot,
}) {
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
          width: "100%",
          maxWidth: "1120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingX: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Bebas Neue, Arial, sans-serif",
            color: "red",
            textAlign: "center",
            textShadow: "2px 2px 4px black",
            fontSize: { xs: "3rem", sm: "4rem", md: "5rem" }, 
          }}
        >
          MOVIES SEARCH APP
        </Typography>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <TextField
              type="text"
              label="Search Movie Title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              sx={{ backgroundColor: "#F6F6F6" }}
            />
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <TextField
              type="text"
              label="Search Year Released..."
              value={year}
              onChange={(e) => setYear(e.target.value)}
              fullWidth
              sx={{ backgroundColor: "#F6F6F6" }}
            />
          </Grid>

          <Grid item xs={12} sm={3} md={3} lg={2}>
            <FormControl fullWidth sx={{ backgroundColor: "#F6F6F6" }}>
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
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{
                height: "100%",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      {slot}
    </Container>
  );
}

export default MovieSearch;
