import {Box, Stack, ThemeProvider,  createTheme} from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";




function App() {

  //Dark and light mode by using theme
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" >
        <Navbar mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;


/* 
Notes:
-------
<Box> --> Its just a wrapper equelent to <div>
<Container> -> It just has some default margin and pading. Ifwe wrap content inside it will add some margin ,padding at left and right sides.
<Stack> --> It's a one dimensional layout system. Eighther it can align the flex items in vertiaclly or horizondally.
            It has some props for alowing us some space, dividers between items (ex: spacing, divider,etc..)
            Also we can use alignItems, justifyContent, direction, spacing properties on It.
*/