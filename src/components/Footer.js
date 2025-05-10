"use client"

import { Box, Container, Typography, Link, IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "rgba(0, 51, 160, 0.05)",
        borderTop: "1px solid",
        borderColor: "rgba(0, 51, 160, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Bonam Osene. All rights reserved.
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              aria-label="GitHub"
              size="small"
              sx={{ color: "secondary.main" }}
              href="https://github.com/Bonam24"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              size="small"
              sx={{ color: "secondary.main" }}
              href="https://www.linkedin.com/in/bonam-osene-10541719a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Email"
              size="small"
              sx={{ color: "secondary.main" }}
              href="mailto:bonamjr24@gmail.com"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Link href="#hero" color="inherit" underline="hover" variant="body2">
              Home
            </Link>
            <Link href="#projects" color="inherit" underline="hover" variant="body2">
              Projects
            </Link>
            <Link href="#about" color="inherit" underline="hover" variant="body2">
              About
            </Link>
            <Link href="#contact" color="inherit" underline="hover" variant="body2">
              Contact
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
