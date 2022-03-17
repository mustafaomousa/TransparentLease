import { styled, AccordionDetails as MuiAccordionDetails } from "@mui/material";

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  maxHeight: 180,
  overflowY: "scroll",
  backgroundColor: "white",
}));

export default AccordionDetails;
