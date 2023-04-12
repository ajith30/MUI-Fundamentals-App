import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { useState } from "react";
//customising MUI Toolbar

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

//customising HTM div and giving border radius value from theme
const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius, //This value applied here comes from default theme.shape.borderRadius
    width: "40%",
}));

//In small screen Icons will not be shown and only  UserBox will be shown.

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));


const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

function Navbar({mode}) {
    const [open, setOpen] = useState(false);

    return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography component="a" href="/"
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" }, textDecoration: "none" }}
            color="white"
          >
            AK Social
          </Typography>
          <Pets sx={{ display: { xs: "block", sm: "none" } }} />

          <Search>
            <InputBase inputProps={{style: {color: (mode=== "dark") ? "rgba(0, 0, 0, 0.87)": null}}} placeholder="search..." />
          </Search>

          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              onClick={(e) => {setOpen(true)}}
              sx={{ width: 30, height: 30 }}
              src="https://randomuser.me/api/portraits/men/11.jpg"
            />
          </Icons>

          <UserBox onClick={(e) => {setOpen(true)}}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://randomuser.me/api/portraits/men/11.jpg"
            />
            <Typography variant="span">Ajithkumar</Typography>
          </UserBox>
        </StyledToolbar>

        {/* MUI Menu:  when profile is clicked (Icons Avatar/UserBox) Menu will be shown */}

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => {setOpen(false)}}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    );
}

export default Navbar;