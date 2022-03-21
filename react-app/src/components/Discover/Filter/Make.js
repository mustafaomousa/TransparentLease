import {
  AccordionActions,
  Badge,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";
import { Box } from "@mui/system";

const Make = ({ makes, handleSelectMake, filter }) => {
  return (
    <Accordion
      disableGutters
      // expanded={filter.get("year") && !filter.get("make")}
    >
      <AccordionSummary>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography sx={{ flexGrow: 1 }} variant="body2">
            Make
          </Typography>
          {filter.get("make") && (
            <Chip size="small" label={filter.get("make")} color="primary" />
          )}
        </Box>
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
