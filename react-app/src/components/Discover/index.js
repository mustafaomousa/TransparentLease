import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Filter from "./Filter";

const Discover = () => {
  return (
    <Container>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        Discover deals
      </Typography>
      <Stack direction="row" spacing={2}>
        <Filter />
        <Box
          sx={{
            borderRadius: 1,
            border: "1px solid rgba(0, 0, 0, 0.12)",
            minHeight: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              height: 48,
              backgroundColor: "rgba(0,0,0,0.03)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Typography>Deals</Typography>
          </Box>
          <Box>deals go here</Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default Discover;
