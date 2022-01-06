import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/styles";

import "./styles.scss";
interface CardDefaultProps {
  resumeCard: string;
  value: string | undefined;
  classCard: "cardInput" | "cardOutput";
  lg: number;
  md: number;
  sm: number;
  xs: number;
}

const useStyles = makeStyles(() => ({
  cardInput: {
    minWidth: 275,
    height: 150,
    backgroundColor: "green",
  },
  cardOutput: {
    height: 150,
    backgroundColor: "red",
  },
}));

const CardDefault: React.FC<CardDefaultProps> = ({
  resumeCard,
  value,
  classCard,
  lg,
  md,
  sm,
  xs,
}) => {
  const classes = useStyles();

  return (
    <Grid item lg={lg} md={md} sm={sm} xs={xs}>
      <Card
        className={
          classCard === "cardOutput" ? classes.cardOutput : classes.cardInput
        }
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, color: "white", textAlign: "center" }}
            gutterBottom
          >
            {resumeCard}
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardDefault;
