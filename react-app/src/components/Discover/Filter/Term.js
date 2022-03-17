import { Slider, Typography } from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";

const Term = () => {
  return (
    <Accordion disableGutters>
      <AccordionSummary>
        <Typography variant="body2">Term</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Slider
          color="secondary"
          size="small"
          step={12}
          marks={[
            { value: 12, label: "12" },
            { value: 24, label: "24" },
            { value: 36, label: "36" },
            { value: 48, label: "48" },
          ]}
          min={12}
          max={48}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Term;
