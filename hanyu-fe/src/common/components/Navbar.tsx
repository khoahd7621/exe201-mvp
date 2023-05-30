import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import AppRoutes from "~/router/AppRoutes";
import AccountMenu from "./AccountMenu";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Dictionary", "Translate", "Community", "Test", "Notebook", "Reading"];

export default function Navbar({ window }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const routeChange = (item: string) => {
    const path = item.toLowerCase();
    navigate(`/${path}`, { replace: true });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Hanyu
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={() => routeChange(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        height: {
          xs: "56px",
          sm: "4rem",
        },
      }}
    >
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#000",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/pandahanyu_logo _for_web.svg" alt="Hanyu Logo" width="48" height="48" />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "block" },
                marginLeft: 1,
              }}
            >
              Hanyu
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block", height: "4rem", p: 0 } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  height: "100%",
                  borderBottom: 3,
                  borderBottomColor: "#000",
                  borderRadius: 0,
                  "&:hover": {
                    borderBottom: 3,
                    borderBottomColor: "#fff",
                    borderRadius: 0,
                  },
                  "&:focus": {
                    borderBottom: 3,
                    borderBottomColor: "#fff",
                    borderRadius: 0,
                  },
                  "&.active": {
                    borderBottom: 3,
                    borderBottomColor: "#fff",
                  },
                }}
                className={location.pathname === `/${item.toLowerCase()}` ? "active" : ""}
                onClick={() => routeChange(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ m: 1, display: "flex", alignItems: "center", cursor: "pointer" }}>
              <AccountMenu />
            </Box>
            <Box sx={{ m: 1 }}>
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  "&:hover": {
                    textDecoration: "underline #fff",
                  },
                }}
                onClick={() => navigate(AppRoutes.login)}
              >
                Login
              </Button>
            </Box>
            <Box sx={{ m: 1 }}>
              <Button
                variant="contained"
                sx={{
                  background: "#fff",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#EEEEEE",
                    textDecoration: "underline #000000",
                  },
                }}
                onClick={() => navigate(AppRoutes.register)}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
