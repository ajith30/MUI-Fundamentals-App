import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { useState } from "react";
import styled from "@emotion/styled";


//Customizing MUI Modal
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

//Customizing MUI BOX
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
});

//MUI Tooltip with Fab(Floating Action Button) And Modal
function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip onClick={(e) => {setOpen(true)}}
    title="Add" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>

    <StyledModal
      open={open}
      onClose={(e) => {setOpen(false)}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="background.default" color="text.primary" borderRadius={5} p={3}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
                alt="Ajithkumar K"
                src="https://randomuser.me/api/portraits/men/11.jpg"
              />
            <Typography variant="span"  fontWeight={500}>Ajithkumar K</Typography>
          </UserBox>

          <TextField  sx={{width: "100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind ?"
              variant="standard"
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button onClick={(e) => {setOpen(false)}}>Post</Button>
            <Button sx={{width: "100px"}}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add;
