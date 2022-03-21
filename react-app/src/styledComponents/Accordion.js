import { styled, Accordion as MuiAccordion } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: "rgba(0,0,0,0.03)",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  width: "200px",
}));

export default Accordion;
