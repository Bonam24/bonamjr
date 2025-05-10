"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Awards", href: "#awards" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.main", fontWeight: "bold" }}>
        Bonam Osene
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} component="a" href={item.href}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color="default"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              color: scrolled ? "primary.main" : "primary.main",
              fontWeight: "bold",
            }}
          >
            Bonam Osene
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{
                  color: scrolled ? "text.primary" : "text.primary",
                  "&:hover": {
                    color: "primary.main",
                  },
                  mx: 1,
                }}
                component="a"
                href={item.href}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar /> {/* This empty Toolbar creates space below the AppBar */}
    </Box>
  )
}
