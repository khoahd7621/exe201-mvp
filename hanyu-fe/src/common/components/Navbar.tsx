import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Dictionary",
  "Translate",
  "Community",
  "Test",
  "Notebook",
  "Reading",
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="/hanyu_logo_whiteblack.svg"
                alt="Hanyu Logo"
                width="32"
                height="32"
              />
            </Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                marginLeft: 1,
                marginBottom: 1
              }}
            >
              Hanyu
            </Typography>
          </Box>
          <Box
            sx={{ display: { xs: "none", sm: "block", height: "4rem", p: 0 } }}
          >
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
                }}
                onClick={() => routeChange(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ m: 1, display: "flex", alignItems: "center", cursor: 'pointer' }}>
              <SettingsIcon />
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus
          quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi
          perferendis in cum quibusdam sed quae, accusantium et aperiam? Quod
          itaque exercitationem, at ab sequi qui modi delectus quia corrupti
          alias distinctio nostrum.
        </Typography>
      </Box>
    </Box>
  );
}
