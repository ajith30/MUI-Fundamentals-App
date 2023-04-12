import { AccountBox, Article, Groups, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";

function Sidebar({setMode, mode}) {
    
    return (
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#page">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#group">
                <ListItemIcon>
                  <Groups />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#marketplace">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#friends">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Friends" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#settings">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#profile">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#moon">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onClick={(e) => {setMode((mode === "light") ? "dark" :  "light")}} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
}

export default Sidebar;