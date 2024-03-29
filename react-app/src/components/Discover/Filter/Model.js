import {
  Box,
  Checkbox,
  Chip,
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";

import Accordion from "../../../styledComponents/Accordion";
import AccordionSummary from "../../../styledComponents/AccordionSummary";
import AccordionDetails from "../../../styledComponents/AccordionDetails";

const Model = ({ models, handleSelectModel, filter }) => {
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
            Model
          </Typography>
          {filter.get("model") && (
            <Chip size="small" label={filter.get("model")} color="primary" />
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {models &&
            models.map((model) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      onChange={handleSelectModel}
                      checked={model === filter.get("model")}
                      name={model}
                      color="secondary"
                    />
                  }
                  label={<Typography variant="body2">{model}</Typography>}
                />
              );
            })}
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default Model;
