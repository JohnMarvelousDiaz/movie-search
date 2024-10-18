import React from "react";
import { Container, Box, Typography, Avatar, Grid } from "@mui/material";

function AboutDeveloper() {
  return (
    <Container
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: "#F5F5F5",
        maxWidth: "100vw",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#E8E8E8",
        border: "1px solid black"
      }}
      maxWidth={false}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          marginBottom: 2,
          color: "primary.main",
        }}
      >
        About the Developer
      </Typography>

      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Developer's Avatar */}
        <Grid item xs={12} sm={4} md={3}>
          <Avatar
            alt="Developer Avatar"
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
            }}
            src="about_pic.jpg"
          />
        </Grid>

        {/* Developer's Info */}
        <Grid item xs={12} sm={8} md={6}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: 1,
                color: "text.primary",
              }}
            >
              John Marvelous Diaz
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              [Brief Bio about you, your expertise, and background.]
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Contact: [Your Email or Contact Information]
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Location: [Your Location]
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutDeveloper;
