import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const LoginModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Log in</Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Log in</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
