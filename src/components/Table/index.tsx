import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import { TypeMovimentEnum, ResumeWithMoviments } from "../../models/moviments";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    border: 0,
    boxShadow: "none",
  },
}));

interface TableDefaultProps {
  dataTable: ResumeWithMoviments | undefined;
}

const TableDefault: React.FC<TableDefaultProps> = ({ dataTable }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} classes={{ root: classes.table }}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Item</TableCell>
            <TableCell align="center">Responsável</TableCell>
            <TableCell align="center">Movimentação</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable?.moviments.map((row, pos) => (
            <TableRow key={row.id}>
              <TableCell align="center">{pos + 1}</TableCell>
              <TableCell align="center">{row.user.name}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">
                {new Date(row.updatedAt).toLocaleDateString("pt-BR")}
              </TableCell>
              <TableCell align="center">
                {Number(row.value).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableDefault;
