import {Box} from "@mui/material";

import Post from "./Post";

function Feed() {
    const rivers = [
        "https://cdn.pixabay.com/photo/2016/08/12/20/14/river-1589616__340.jpg",
        "https://cdn.pixabay.com/photo/2014/10/26/17/19/fisherman-504098_960_720.jpg",
        "https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972__340.jpg",
        "https://cdn.pixabay.com/photo/2016/08/12/23/44/river-1590010__340.jpg",
        "https://cdn.pixabay.com/photo/2012/03/04/00/05/cascade-21749_960_720.jpg",
    ]
    return (
      <Box flex={4} p={2}>
        {rivers.map((river, index) => {
            return <Post key={index} image={river}/>
        })}
      </Box>
    );
}

export default Feed;