import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import saveTime from "./save-time.svg";
import saveMoney from "./save.svg";
import transparent from "./transparent.svg";

const Home = () => {
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user);

  return (
    <Box sx={{ paddingTop: { xs: 7, sm: 8 }, backgroundColor: "white" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#242582",
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="h2" color="white">
            Discover the best auto lease deals from trusted brokers nationwide.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="start" pt={2}>
            {!sessionUser && (
              <Button color="secondary" variant="contained" size="small">
                Join for free
              </Button>
            )}
            <Button
              color="secondary"
              variant="outlined"
              size="small"
              onClick={() => navigate("/discover")}
            >
              Discover deals
            </Button>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container mt={5} height={200}>
          <Grid item xs={6}>
            <Container
              sx={{ height: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={transparent}
                  style={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6} />
        </Grid>
        <Grid container mt={2} height={200}>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography color="secondary" variant="h5">
                  Transparency from the start.
                </Typography>
                <Typography variant="body1" color="GrayText">
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
                    maxHeight: 200,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
        </Grid>
        <Grid container mt={2} height={200}>
          <Grid item xs={6}>
            <Container
              sx={{ height: "100%", display: "flex", alignItems: "flex-end" }}
            >
              <Box sx={{ width: "100%" }}>
                <img
                  src={saveMoney}
                  style={{
                    width: "100%",
                    maxHeight: 200,
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography color="secondary" variant="h5">
                  Save time.
                </Typography>
                <Typography variant="body1" color="GrayText">
                  Experienced brokers help you save time at the dealer by
                  providing bottom line numbers and facilitating the sale.
                </Typography>
              </Stack>
            </Container>
          </Grid>
        </Grid>
        <Grid container mt={2} height={200}>
          <Grid item xs={6}>
            <Container>
              <Stack spacing={0.5}>
                <Typography color="secondary" variant="h5">
                  Save money.
                </Typography>
                <Typography variant="body1" color="GrayText">
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
