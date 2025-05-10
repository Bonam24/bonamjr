"use client"

import { Box, Container, Typography, Grid, Card, CardContent, Divider, Avatar } from "@mui/material"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import GroupsIcon from "@mui/icons-material/Groups"
import SchoolIcon from "@mui/icons-material/School"

// Sample leadership data
const leadershipRoles = [
  {
    id: 1,
    title: "AI/ML Track Lead",
    organization: "Google Developer Group",
    dates: "Jan 2024 - Dec 2024",
    description:
      "Organized activities that have helped more than 20 new students understand Linear Regression and logistics regression"+
      "and also did an AI project  signature recognition system that takes class attendance for over 30 students.",
    icon: <BusinessCenterIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    id: 2,
    title: "Thomas Sankara Buddy group head",
    organization: "Mastercard Foundation Scholar Program @USIU Africa",
    dates: "Mar 2022 - Mar 2023",
    description:
      "Helped 50+ students with their academic and personal development, fostering a supportive community. Also help them smoothly integrate to campus",
    icon: <GroupsIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  {
    id: 3,
    title: "Co-Founder & Instructor",
    organization: "Innovation Cameroon",
    dates: "Sep 2019 - present",
    description:
      "Taught web development to 50+ students, with 85% successfully transitioning to tech majors and also building a Find Home application."+
      "with 100+ users.",
    icon: <SchoolIcon sx={{ fontSize: 40, color: "primary.main" }} />,
  },
  
]

export default function Leadership() {
  return (
    <Box
      id="leadership"
      sx={{
        mt: 0,
        pt: 0,
        bgcolor: "rgba(0, 51, 160, 0.05)",
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
            color: "secondary.main",
          }}
        >
          Leadership
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
          Roles where I've made an impact through leadership and mentorship
        </Typography>

        <Grid container spacing={4}>
          {leadershipRoles.map((role) => (
            <Grid item xs={12} md={6} key={role.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Avatar
                      sx={{
                        bgcolor: "rgba(0, 51, 160, 0.1)",
                        width: 60,
                        height: 60,
                        mr: 2,
                      }}
                    >
                      {role.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" component="h3" fontWeight="600">
                        {role.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {role.organization}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                    }}
                  >
                    {role.dates}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body1">{role.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
