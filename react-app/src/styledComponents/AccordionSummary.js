import { styled, AccordionSummary as MuiAccordionSummary } from "@mui/material";

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={"+"} {...props} />
))(({ theme }) => ({
  color: theme.palette.primary.main,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

export default AccordionSummary;
