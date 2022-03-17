import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getMakesByYear, getModelsByMake } from "./carmakemodelapi";
import Filter from "./Filter";

const Discover = () => {
  return (
    <Box
      sx={{
        paddingY: { xs: 9, sm: 10 },
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={3}>
            <Filter />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Box
              sx={{
                borderRadius: 1,
                border: "1px solid rgba(0, 0, 0, 0.12)",
                height: "100%",
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Discover;
