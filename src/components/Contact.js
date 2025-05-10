"use client"

import { useState } from "react"
import { Box, Container, Typography, Grid, TextField, Button, Paper, IconButton, Snackbar, Alert } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import SendIcon from "@mui/icons-material/Send"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log("Form submitted:", formData)

      // Show success message
      setSnackbar({
        open: true,
        message: "Message sent successfully! I will get back to you soon.",
        severity: "success",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } else {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form.",
        severity: "error",
      })
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }))
  }

  return (
    <Box
      id="contact"
      sx={{
        mt: 0,
        pt: 0,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            color: "primary.main",
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          color="textSecondary"
          sx={{
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          Have a question or want to work together? Feel free to contact me!
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "white",
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom color="primary.main" fontWeight="600">
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph>
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <EmailIcon sx={{ color: "primary.main", mr: 2 }} />
                  <Typography variant="body1">bonamjr24@gmail.com</Typography>
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mt: 4, mb: 2, color: "secondary.main" }}>
                Connect with me
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <IconButton
                  aria-label="GitHub"
                  sx={{
                    bgcolor: "rgba(0, 119, 73, 0.1)",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                  href="https://github.com/Bonam24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  sx={{
                    bgcolor: "rgba(0, 119, 73, 0.1)",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                  href="https://www.linkedin.com/in/bonam-osene-10541719a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  aria-label="Email"
                  sx={{
                    bgcolor: "rgba(0, 119, 73, 0.1)",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                  href="mailto:bonamjr24@gmail.com"
                >
                  <EmailIcon />
                </IconButton>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "white",
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <Typography variant="h4" component="h3" gutterBottom color="primary.main" fontWeight="600">
                Send Me a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
