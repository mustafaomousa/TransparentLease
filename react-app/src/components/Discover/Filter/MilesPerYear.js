import { Slider, Typography } from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";

const MilesPerYear = () => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="body2">Miles</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Slider
          color="secondary"
          size="small"
          step={2500}
          marks={[
            { value: 2500, label: "2.5k" },
            { value: 5000, label: "5k" },
            { value: 7500, label: "7.5k" },
            { value: 10000, label: "10k" },
            { value: 12500, label: "12k" },
            { value: 15000, label: "15k" },
          ]}
          min={2500}
          max={15000}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default MilesPerYear;
