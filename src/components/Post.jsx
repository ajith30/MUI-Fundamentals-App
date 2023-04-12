import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

function Post({image}) {
    
    return(
        <Card sx={{mx: 5, mb: 5}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Rivers"
            subheader="March 12, 2023"
          />
          <CardMedia
            component="img"
            height="20%"
            image={image}
            alt="river"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
                International Rivers is a non-profit, non-governmental, environmental, and human rights organization. Founded in 1985 by 
                social and environmental activists, International Rivers works with policy and financial analysts, scientists, journalists, 
                development specialists, and volunteers to combat the adverse effects of dams and their legacies in over 60 countries.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />}  />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
          
        </Card>
    );
}

export default Post;