import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Link,
  Avatar,
  useTheme,
  Paper
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import NatureIcon from "@mui/icons-material/Nature";

const technicalProjects = [
  {
    id: 1,
    title: "Event Booking platform",
    description:
      "An event booking platform that showcases various events and allow users to book tickets and get their receipts",
    tags: ["Next JS", "Material UI", "JSON", ],
    github: "https://github.com/Bonam24/ticketbooking",
    demo: "https://ticket-booking-origin-1hqb.vercel.app/",
  },
  {
    id: 2,
    title: "Clinic Project",
    description:
      "A web application for managing clinic appointments, patient records, and patient queue. Built with a modern tech stack for seamless user experience.",
    tags: ["Bootstrap", "Node.js", "Json", "Express"],
    github: "https://github.com/Bonam24/clinicProject",
    demo: "https://clinicproject-4c0q.onrender.com/",
  },
  {
    id: 3,
    title: "deeptrack website",
    description:
      "This is a website for deeptrack, a company that specializes in providing cyber security solutions. The website is designed to showcase the company's services and expertise in the field of cybersecurity.",
    tags: ["React", "Firebase", "Shadcn", "Typescript"],
    github: "#",
    demo: "https://www.deeptrack.io/",
  },
  {
    id: 4,
    title: "SafronSat website",
    description:
      "This is a website for SafronSat, a company that specializes in providing satellite communication solutions. The website is designed to showcase the company's services and expertise in the field of satellite communication.",
    tags: ["React", "Firebase", "Next JS", "Material UI"],
    github: "https://github.com/Bonam24/safronsat",
    demo: "https://safronsat.vercel.app/",
  },
  {
    id: 5,
    title: "BundlesBets AI platform",
    description:
      "BundlesBets is a platform that provides users with the ability to place bets on various sports events. The platform uses AI technology to analyze data and provide users with insights and predictions to help them make informed betting decisions.",
    tags: ["Gemini", "Firebase", "Next JS", "Material UI"],
    github: "https://github.com/Bonam24/CasinoApp",
    demo: "https://www.bundlesbets.casino/",
  },
];

// Community project data with new design
const communityProjects = [
  {
    id: 6,
    title: "Kibera Cyber Cafe",
    shortDescription: "An initiative that has provided basic computer skills to over 1000 students in Kibera, Nairobi.",
    impact: "1000+ students trained",
    icon: <PeopleIcon fontSize="large" />,
    tags: ["community Impact", "Technology"],
    color: "#4e79a7"
  },
  {
    id: 7,
    title: "Mentorship",
    shortDescription: "Made career guidiance and academic excellence presentation to over 2000+ students across 10+ schools in Kenya, career guidance.",
    impact: "Mentored 20+ students",
    icon: <SchoolIcon fontSize="large" />,
    tags: ["Education", "Community"],
    color: "#59a14f"
  },
  {
    id: 8,
    title: "Solar Project",
    shortDescription: "Putting solar panels in village community halls to provide free electricity.",
    impact: "served over 1000 people",
    icon: <NatureIcon fontSize="large" />,
    tags: ["Sustainability", "Energy"],
    color: "#f28e2b"
  },
];


export default function Projects() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 800,
              color: theme.palette.text.primary,
              mb: 2,
              letterSpacing: '0.5px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '2rem'
              }
            }}
          >
            My Portfolio
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              color: theme.palette.text.secondary,
              fontSize: '1.1rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1rem'
              }
            }}
          >
            Bridging technical innovation with meaningful social impact
          </Typography>
        </Box>

        <Paper elevation={0} sx={{ 
          mb: 8, 
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{
              '& .MuiTabs-indicator': {
                height: '4px',
                borderRadius: '2px',
                backgroundColor: theme.palette.primary.main
              }
            }}
          >
            <Tab label={
              <Typography variant="subtitle1" fontWeight="600">
                Technical Projects
              </Typography>
            } 
            sx={{ 
              py: 3, 
              px: 4,
              textTransform: 'none',
              fontSize: '1rem'
            }} />
            <Tab label={
              <Typography variant="subtitle1" fontWeight="600">
                Community Initiatives
              </Typography>
            } 
            sx={{ 
              py: 3, 
              px: 4,
              textTransform: 'none',
              fontSize: '1rem'
            }} />
          </Tabs>
        </Paper>

        {tabValue === 0 ? (
          <Grid container spacing={4} justifyContent="center">
            {technicalProjects.map((project) => (
              <Grid item xs={12} sm={10} md={6} lg={5} xl={5} key={project.id}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(8px)',
                  maxWidth: 500,
                  mx: 'auto',
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                  }
                }}>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: '#1e293b' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 2, fontSize: '0.95rem' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 119, 73, 0.1)',
                            color: '#007749',
                            fontWeight: 500,
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between' }}>
                    {project.github !== '#' && (
                      <Button
                        size="medium"
                        startIcon={<GitHubIcon />}
                        component={Link}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#007749',
                          fontWeight: 500,
                          fontSize: '0.875rem',
                          '&:hover': {
                            bgcolor: 'rgba(0, 119, 73, 0.05)'
                          }
                        }}
                      >
                        Source Code
                      </Button>
                    )}
                    <Button
                      size="medium"
                      endIcon={<LaunchIcon />}
                      component={Link}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: '#007749',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        '&:hover': {
                          bgcolor: 'rgba(0, 119, 73, 0.05)'
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {communityProjects.map((project) => (
              <Grid item xs={12} sm={10} md={6} lg={5} xl={5} key={project.id}>
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${project.color}08 0%, ${project.color}03 100%)`,
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  maxWidth: 500,
                  mx: 'auto',
                  width: '100%',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 24px ${project.color}20`,
                  }
                }}>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Avatar sx={{
                      bgcolor: `${project.color}15`,
                      color: project.color,
                      width: 72,
                      height: 72,
                      mb: 3,
                      fontSize: '2rem'
                    }}>
                      {project.icon}
                    </Avatar>
                    
                    <Typography variant="h5" fontWeight="700" gutterBottom sx={{ color: '#1e293b' }}>
                      {project.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ 
                      mb: 3,
                      fontSize: '0.95rem'
                    }}>
                      {project.shortDescription}
                    </Typography>
                    
                    <Paper elevation={0} sx={{
                      px: 2,
                      py: 1,
                      mb: 3,
                      bgcolor: `${project.color}10`,
                      borderRadius: '6px',
                      width: '100%'
                    }}>
                      <Typography variant="subtitle2" sx={{ color: project.color, fontWeight: 600 }}>
                        {project.impact}
                      </Typography>
                    </Paper>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 1, 
                      justifyContent: 'center',
                      mt: 'auto'
                    }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: `${project.color}15`,
                            color: project.color,
                            fontWeight: 500,
                            borderRadius: '4px',
                            fontSize: '0.75rem'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        
      </Container>
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
    </Box>
    
  );
}