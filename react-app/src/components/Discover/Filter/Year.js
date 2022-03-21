import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";
import { useEffect, useState } from "react";

const Year = ({ years, handleSelectYear, filter }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    setSelectedYear(parseInt(filter.get("year")));
  }, [filter]);

  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ flexGrow: 1 }} variant="body2">
            Year
          </Typography>
          {filter.get("year") && (
            <Chip size="small" label={filter.get("year")} color="primary" />
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {years.map((year) => (
            <FormControlLabel
              key={year}
              control={
                <Checkbox
                  size="small"
                  onChange={handleSelectYear}
                  checked={year === selectedYear}
                  name={year}
                  color="secondary"
                />
              }
              label={<Typography variant="body2">{year}</Typography>}
            />
          ))}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Year;
