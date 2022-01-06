import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import CardDefault from "../../components/Card";
import ModalDefault from "../../components/Modal";
import Grid from "@mui/material/Grid";
import TableDefault from "../../components/Table";
import ResponsiveAppBar from "../../components/AppBar";
import { findAllMoviments } from "../../api/moviments";
import { ResumeWithMoviments } from "../../models/moviments";
const useStyles = makeStyles(() => ({
  cards: {
    marginTop: 50,
  },
}));

const Dashboard: React.FC = () => {
  const classes = useStyles();

  const [moviments, setMoviments] = useState<ResumeWithMoviments>();

  const loadMoviments = async () => {
    const moviments = await findAllMoviments();
    setMoviments(moviments);
  };

  useEffect(() => {
    loadMoviments();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={4} className={classes.cards}>
        <CardDefault
          resumeCard="Total receitas"
          value={moviments?.totalDeposit.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
          classCard="cardInput"
          lg={6}
          md={6}
          sm={6}
          xs={12}
        />
        <CardDefault
          resumeCard="Total gastos"
          value={moviments?.totalWithdraw.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
          classCard="cardOutput"
          lg={6}
          md={6}
          sm={6}
          xs={12}
        />
      </Grid>

      <ModalDefault />
      <Grid container>
        <TableDefault dataTable={moviments} />
      </Grid>
    </>
  );
};

export default Dashboard;
