import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import saveTime from "./save-time.svg";
import saveMoney from "./save.svg";
import transparent from "./transparent.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ paddingTop: { xs: 7, sm: 8 } }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#1976d2",
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h5" color="white">
            Discover the best auto lease deals from trusted brokers nationwide.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="start" pt={2}>
            <Button color="inherit" variant="contained" size="medium">
              Join for free
            </Button>
            <Button
              color="inherit"
              sx={{ color: "white" }}
              variant="outlined"
              size="medium"
              onClick={() => navigate("/discover")}
            >
              Discover deals
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container mt={5} height={300}>
          <Grid item xs={6}>
            <Container
              sx={{ height: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={transparent}
                  style={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6} />
        </Grid>
        <Grid container mt={5} height={300}>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography variant="h5">
                  Transparency from the start.
                </Typography>
                <Typography variant="h6" color="GrayText">
                  Many don't know that auto leases have varying interest rates.
                  Brokers make these rates transparent to you as well as any
                  additional fees.
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container
              sx={{ height: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={saveTime}
                  style={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
        <Grid container mt={5} height={300}>
          <Grid item xs={6}>
            <Container
              sx={{ height: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={saveMoney}
                  style={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography variant="h5">Save time.</Typography>
                <Typography variant="h6" color="GrayText">
                  Experienced brokers help you save time at the dealer by
                  providing bottom line numbers and facilitating the sale.
                </Typography>
              </Stack>
            </Container>
          </Grid>
        </Grid>
        <Grid container mt={5} height={300}>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography variant="h5">Save money.</Typography>
                <Typography variant="h6" color="GrayText">
                  Brokers often have access to inventory that dealers either
                  need to sell to meet a certain goal or vehicles that are new
                  but have a couple extra miles.
                </Typography>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
