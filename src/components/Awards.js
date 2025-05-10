"use client"

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"

const awards = [
  {
    id: 1,
    name: "BlipeEarth innovation Award 2023",
    issuer: "BlipeEarth",
    date: "2023",
    description:
      "Recognized for developing an innovative irrigation system that optimizes water usage and enhances crop yield.",
  },
  {
    id: 2,
    name: "Palantir Future (Global) Scholar",
    issuer: "Palantir Technologies",
    date: "June 2023",
    description:
      "Awarded to students who demonstrate exceptional potential to be leaders in technology and data science.",
  },
  {
    id: 3,
    name: "Deans List Award",
    issuer: "United States International University",
    date: "throughout my studies",
    description:
      "Recognized for maintaining a GPA of 3.5 or higher while taking a full course load.",
  },
  {
    id: 4,
    name: "Mastercard Foundation Scholarship",
    issuer: "Mastercard Foundation",
    date: "2021",
    description:
      "Awarded to students from economically disadvantaged backgrounds who demonstrate academic excellence and leadership potential.",
  },
  {
    id: 5,
    name: "Outstanding Leadership Award",
    issuer: "United States International University",
    date: "2023",
    description:
      "Awarded to students who have demonstrated exceptional leadership skills and made significant contributions to the university community.",
  },
]

export default function Awards() {
  const isOdd = awards.length % 2 === 1
  const lastIndex = awards.length - 1

  return (
    <Box
      id="awards"
      sx={{
        py: { xs: 8, md: 12 },
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
          Awards & Recognition
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
          Achievements that highlight my commitment to excellence
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {awards.map((award, index) => {
            const isLastCard = isOdd && index === lastIndex
            return (
              <Grid
                item
                xs={12}
                sm={6}
                key={award.id}
                sx={{
                  display: "flex",
                  justifyContent: isLastCard ? "center" : "flex-start",
                }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: 550,
                    height: "100%",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                    },
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        sx={{
                          bgcolor: "rgba(0, 119, 73, 0.1)",
                          color: "primary.main",
                          width: 50,
                          height: 50,
                          mr: 2,
                        }}
                      >
                        <EmojiEventsIcon />
                      </Avatar>
                      <Typography variant="h5" component="h3" fontWeight="600">
                        {award.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 2,
                      }}
                    >
                      <Typography variant="subtitle1" color="text.secondary">
                        {award.issuer}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {award.date}
                      </Typography>
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="body1">{award.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

        {/* Gradient Divider at the bottom */}
        <Box
          sx={{
            mt: 10,
            height: 5,
            width: "100%",
            borderRadius: "4px",
            background:
              "linear-gradient(to right, #007749 0%, #0033A0 100%)",
          }}
        />
      </Container>
    </Box>
  )
}
