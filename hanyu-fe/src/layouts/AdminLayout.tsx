import * as React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { Button, Stack } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import { useAppDispatch } from "~/redux/hooks";
import { logout } from "~/redux/slices/authSlice";
import { remove } from "~/redux/slices/profileSlice";
import AppRoutes from "~/router/AppRoutes";

const MainListItems = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate(AppRoutes.manage, { replace: true })}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate(`${AppRoutes.manage}/users`, { replace: true })}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý người dùng" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate(`${AppRoutes.manage}/ratings`, { replace: true })}>
        <ListItemIcon>
          <ReviewsIcon />
        </ListItemIcon>
        <ListItemText primary="Quản lý đánh giá" />
      </ListItemButton>
    </React.Fragment>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://hanyu-chinesee-learning.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Panda Hanyu
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
              Quản lý
            </Typography>
            <Stack direction="row" spacing={3}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button
                variant="contained"
                color="success"
                onClick={() => navigate(AppRoutes.home, { replace: true })}
              >
                Trở lại ứng dụng
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(logout());
                  dispatch(remove());
                }}
              >
                Đăng xuất
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            paddingTop: 4,
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <Toolbar />
          <Grid container>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
