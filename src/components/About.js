"use client"

import { useState, useEffect } from "react"
import { Box, Container, Typography, Grid, Paper, Chip, Divider, Button } from "@mui/material"

const skills = {
  languages: ["JavaScript", "Python", "Java", "C++", "HTML/CSS", "SQL"],
  frameworks: ["React JS", "Node.js", "Express", "Django", "Scikit", "Next.js","Material UI", "Bootstrap"],
  tools: ["Git", "Docker", "VS Code", "Firebase", "PostgreSQL", "Microsoft Azure", "colab", "Supabase"],
  other: ["Machine Learning", "Data Analysis", "RESTful APIs", "ChartJS", "CI/CD", "Agile Methodology"],
}

export default function About() {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const toggleReadMore = () => setShowAll((prev) => !prev)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600)

    checkMobile() // Run on mount
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "rgba(0, 119, 73, 0.05)",
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
          About Me
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
          My journey, skills, and aspirations
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
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
                My Story
              </Typography>

              <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                I am Bonam Osene, a passionate and ambitious technologist with a strong foundation in science 
and a drive for innovation. I completed my high school education in Kumba at the Cameroon 
College of Arts and Science. There, I excelled academically, earning an impressive 23 out of 
25 points at the GCE Advanced level, and placed regional third in the Engineering Olympiads 
organized by MIA and ASEND, which further fuelled my interest in technology and 
engineering. 
              </Typography>

              <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                Motivated by a desire to turn knowledge into real-world solutions, I pursued a degree in 
Applied Computer Technology. Throughout my university studies, I maintained a strong 
academic record, graduating with a GPA of 3.8 out of 4.0. This program equipped me with core 
skills in software development, systems thinking, and practical computing, laying the 
groundwork for a career in tech.
              </Typography>

              {/* Conditional paragraphs */}
              {(showAll || !isMobile) && (
                <>
                  <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                    I am currently embarking on my professional journey as a software engineer, with a focus on 
learning, building, and collaborating on impactful projects. I am especially drawn to initiatives 
that create value for communities and provide scalable solutions to everyday problems.
                  </Typography>

                  <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                    In addition to my technical interests, I am deeply committed to personal growth, leadership, 
and service. I believe in using technology not just as a tool, but as a force for positive change. 
I take pride in being both a learner and a contributor in every environment I find myself.
                  </Typography>

                  <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                    Looking ahead, I am eager to specialize in machine learning, combining my background in 
software engineering with emerging technologies to solve complex challenges. My long-term 
goal is to become a machine learning engineer who develops innovative, inclusive solutions 
that push the boundaries of what technology can achieve.
                  </Typography>
                </>
              )}

              {/* Show toggle button only on mobile */}
              {isMobile && (
                <Button
                  onClick={toggleReadMore}
                  sx={{
                    mt: 2,
                    color: "primary.main",
                    textTransform: "none",
                  }}
                >
                  {showAll ? "Read Less" : "Read More"}
                </Button>
              )}
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Skills content remains unchanged */}
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
                Skills & Expertise
              </Typography>

              {["languages", "frameworks", "tools", "other"].map((category) => (
                <Box key={category} sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "secondary.main" }}>
                    {category === "languages"
                      ? "Programming Languages"
                      : category === "frameworks"
                      ? "Frameworks & Libraries"
                      : category === "tools"
                      ? "Tools & Platforms"
                      : "Other Skills"}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {skills[category].map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          bgcolor: "rgba(0, 51, 160, 0.1)",
                          color: "secondary.main",
                        }}
                      />
                    ))}
                  </Box>
                  {category !== "other" && <Divider sx={{ my: 2 }} />}
                </Box>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
