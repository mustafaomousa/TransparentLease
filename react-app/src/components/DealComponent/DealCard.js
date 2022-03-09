import React from "react";
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const DealCard = ({ deal }) => (
  <Card sx={{ minWidth: 200 }}>
    <CardMedia component="img" alt="" height="100" />
    <CardContent>
      <Typography>
        {deal.lease_info.trim.make.name} {deal.lease_info.trim.model.name}
      </Typography>
      <Typography variant="body2" color="GrayText">
        ${deal.lease_info.payment} mo.
      </Typography>
      <Typography variant="body2" color="GrayText">
        {deal.lease_info.months} mo. / {deal.lease_info.miles_yearly} mpy.
      </Typography>
    </CardContent>
    <CardActions sx={{ display: "flex", justifyContent: "end" }}>
      <Button variant="contained" size="small">
        More
      </Button>
    </CardActions>
  </Card>
);

export default DealCard;
