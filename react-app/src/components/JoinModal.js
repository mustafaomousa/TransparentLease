import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const JoinModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Join</Button>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography>Join</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default JoinModal;
