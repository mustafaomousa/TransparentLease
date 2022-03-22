import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const Broker = () => {
  return (
    <Container>
      <form>
        <Typography sx={{ mb: 1 }}>Vehicle Information</Typography>
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <FormControl size="small">
            <InputLabel id="year-label">Year</InputLabel>
            <Select
              labelId="year-label"
              size="small"
              label="Year"
              id="year"
              name="year"
            ></Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="year-label">Make</InputLabel>
            <Select
              labelId="year-label"
              size="small"
              label="Make"
              id="make"
              name="make"
            ></Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="year-label">Model</InputLabel>
            <Select
              labelId="year-label"
              size="small"
              label="Model"
              id="year"
              name="year"
            ></Select>
          </FormControl>
          <FormControl size="small">
            <InputLabel id="year-label">Trim</InputLabel>
            <Select
              labelId="year-label"
              size="small"
              label="Trim"
              id="trim"
              name="trim"
            ></Select>
          </FormControl>
        </Stack>
        <Typography sx={{ mb: 1, mt: 3 }}>Deal Information</Typography>
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="msrp"
              name="msrp"
              label="MSRP"
              //   value={formik.values.username}
              //   onChange={formik.handleChange}
              //   error={formik.touched.username && Boolean(formik.errors.username)}
              //   helperText={formik.touched.username && formik.errors.username}
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="discount"
              name="discount"
              label="Discount"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="months"
              name="months"
              label="Months"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="miles"
              name="miles"
              label="Miles per year"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="residual"
              name="residual"
              label="Residual"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="money_factor"
              name="money_factor"
              label="Money Factor"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="payment"
              name="payment"
              label="Payment"
              size="small"
              required
            />
          </FormControl>
          <FormControl size="small">
            <TextField
              type="number"
              color="secondary"
              id="additional_fees"
              name="additional_fees"
              label="Additional fees"
              size="small"
              required
            />
          </FormControl>
          <FormControlLabel control={<Switch />} label="Demo" />
        </Stack>
        <Typography sx={{ mb: 1, mt: 3 }}>Visibility</Typography>
        <Stack spacing={2} sx={{ maxWidth: 300 }}>
          <FormControl size="small">
            <TextField
              type="date"
              color="secondary"
              id="active_month_year"
              name="active_month_year"
              size="small"
              required
            />
          </FormControl>
          <FormControlLabel control={<Switch />} label="Listed" />
        </Stack>
      </form>
    </Container>
  );
};

export default Broker;
