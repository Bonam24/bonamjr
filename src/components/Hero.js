"use client"

import { Box, Typography, Container, Button, Grid, Avatar } from "@mui/material"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        background: "linear-gradient(135deg, #007749 0%, #0033A0 100%)",
        color: "white",
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 15 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mb: 2,
                opacity: 0.9,
                letterSpacing: 1.5,
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Hi, I'm Bonam Osene
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: 400,
                mb: 4,
                maxWidth: "600px",
              }}
            >
              A proficient software engineer with a keen interest Artificial Intelligence and Machine Learning in particular.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#projects"
                sx={{
                  bgcolor: "white",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              alt="Bonam Osene"
              src="/bonamphoto.jpg?height=300&width=300"
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                border: "5px solid white",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-20px)",
              },
              "60%": {
                transform: "translateY(-10px)",
              },
            },
          }}
        >
          <Button
            href="#about"
            sx={{
              color: "white",
              borderRadius: "50%",
              minWidth: "auto",
              p: 1,
            }}
          >
            <ArrowDownwardIcon fontSize="large" />
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
