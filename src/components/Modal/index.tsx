import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@mui/icons-material/Add";
import { Box, TextareaAutosize } from "@material-ui/core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const useStyles = makeStyles(() => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    width: 250,
    height: 50,
    marginTop: 50,
  },
}));

export default function ModalDefault() {
  const classes = useStyles();

  const [age, setAge] = useState("DEPOSIT");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box className={classes.button}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.add}
        >
          Novo Lançamento
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fluxo de caixa</DialogTitle>
        <form onSubmit={(data) => alert(JSON.stringify(data))}>
          <DialogContent>
            <InputLabel id="demo-simple-select-standard-label">
              Tipo de operação
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Tipo de lançamento"
              fullWidth
            >
              <MenuItem value={"DEPOSIT"}>ENTRADA</MenuItem>
              <MenuItem value={"WITHDRAW"}>SAIDA</MenuItem>
            </Select>

            <TextField
              margin="dense"
              id="valor"
              label="Valor"
              fullWidth
              variant="standard"
              type="number"
            />

            <TextareaAutosize
              id="descricao"
              aria-label="Descrição"
              style={{
                width: "100%",
                height: 80,
                marginTop: 10,
                borderColor: "#80727B",
              }}
              placeholder="Descrição"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error" variant="outlined">
              Cancelar
            </Button>
            <Button
              onClick={handleClose}
              color="success"
              variant="outlined"
              type="submit"
            >
              Confirmar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
