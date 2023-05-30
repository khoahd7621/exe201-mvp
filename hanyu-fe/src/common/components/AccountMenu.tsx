import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logout } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AppRoutes from "~/router/AppRoutes";

export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            position: "relative",
            border: "1px solid #fff",
            "&.vip": {
              borderColor: "#FFC107",
            },
            "&.vip .icon": {
              display: "block",
            },
          }}
          className="vip"
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Max"
          />
          <DiamondIcon
            className="icon"
            sx={{
              fontSize: 12,
              color: "#fff",
              position: "absolute",
              bottom: -11,
              left: "50%",
              transform: "translateX(-50%)",
              display: "none",
            }}
          />
          <AutoAwesomeIcon
            className="icon"
            sx={{
              fontSize: 14,
              color: "#fff",
              position: "absolute",
              top: 6,
              right: -8,
              display: "none",
            }}
          />
          <AutoAwesomeIcon
            className="icon"
            sx={{
              fontSize: 14,
              color: "#fff",
              position: "absolute",
              bottom: 6,
              left: -8,
              display: "none",
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate(AppRoutes.profile)}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                position: "relative",
                border: "1px solid #fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                "&.vip": {
                  borderColor: "#FFC107",
                },
                "&.vip .icon": {
                  display: "block",
                },
              }}
              className="vip"
            >
              <Avatar
                sx={{ width: 30, height: 30, margin: "0 !important" }}
                src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Max"
              />
              <AutoAwesomeIcon
                className="icon"
                sx={{
                  fontSize: 14,
                  color: "#FFC107",
                  position: "absolute",
                  top: 2,
                  right: -8,
                  display: "none",
                }}
              />
              <AutoAwesomeIcon
                className="icon"
                sx={{
                  fontSize: 14,
                  color: "#FFC107",
                  position: "absolute",
                  bottom: 2,
                  left: -8,
                  display: "none",
                }}
              />
            </Stack>
            <Stack>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Nguyen Van A
              </Typography>
              <Typography component="p" fontSize="0.8rem">
                nguyenvana@sample.com
              </Typography>
            </Stack>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
