import React from "react";

import { Typography, Card, CardContent } from "@material-ui/core";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="infoBox">
      {console.log("rendering infoBox.")}
      <CardContent className="infoBox__cardContent">
        <Typography
          className="infoBox__cardContent__cardTitle"
          color={"textSecondary"}
        >
          {title}
        </Typography>
        <Typography className="infoBox__cardContent__cardCases" variant="h2">
          {cases}
        </Typography>
        <Typography
          className="infoBox__cardContent__cardTotal"
          color={"textSecondary"}
        >
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
