import {Avatar, AvatarGroup, Badge, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography, styled} from "@mui/material";
import React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

function Rightbar() {
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },

      ];

    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} width={300}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={200}>
            Online Friends
          </Typography>

          <AvatarGroup max={5}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://randomuser.me/api/portraits/men/17.jpg"
              />
            </StyledBadge>
            <Avatar
              alt="Travis Howard"
              src="https://randomuser.me/api/portraits/men/13.jpg"
            />
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Cindy Baker"
                src="https://randomuser.me/api/portraits/women/11.jpg"
              />
            </StyledBadge>
            <Avatar
              alt="Agnes Walker"
              src="https://randomuser.me/api/portraits/women/12.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://randomuser.me/api/portraits/men/14.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://randomuser.me/api/portraits/women/13.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://randomuser.me/api/portraits/men/16.jpg"
            />
          </AvatarGroup>

          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>
          {/* MUI Image Lists */}
          <ImageList cols={3}>
            {itemData.map((item) => {
              return (
                <ImageListItem>
                  <img src={item.img} alt={item.title} />
                </ImageListItem>
              );
            })}
          </ImageList>

          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/31.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/41.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/51.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    );
}

export default Rightbar;