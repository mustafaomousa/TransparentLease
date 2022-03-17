import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";

const Make = ({ makes, handleSelectMake, filter }) => {
  return (
    <Accordion
      disableGutters
      expanded={filter.get("year") && !filter.get("make")}
    >
      <AccordionSummary>
        <Typography variant="body2">Make</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {makes &&
            makes.map((make) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      onChange={handleSelectMake}
                      checked={make === filter.get("make")}
                      name={make}
                      color="secondary"
                    />
                  }
                  label={<Typography variant="body2">{make}</Typography>}
                />
              );
            })}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Make;
