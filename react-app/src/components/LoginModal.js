import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/session";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 300,
  background: "white",
  padding: 2,
};

const LoginModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await dispatch(login(values.username, values.password));
    },
  });

  return (
    <>
      <Button color="inherit" variant="text" size="small" onClick={handleOpen}>
        Log in
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ pb: 3 }}>
            <Typography variant="h6">Log in</Typography>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <TextField
                id="username"
                name="username"
                label="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                size="small"
                required
              />
              <TextField
                type="password"
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                size="small"
                required
              />
              <Button color="primary" variant="contained" type="submit">
                Log in
              </Button>
              <Button color="primary" variant="outlined">
                Demo
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
