import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  const sign = async () => {
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <>
      <Typography textAlign={"center"} marginTop={10}>
        Bem vindo :)
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: 10,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="inputEmail"
          label="Email"
          defaultValue=""
          sx={{ minWidth: 300, maxWidth: 500 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="inputPassword"
          label="Password"
          type="password"
          sx={{
            marginTop: 2,
            minWidth: 300,
            maxWidth: 500,
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          onClick={sign}
          sx={{ marginTop: 2, minWidth: 300, maxWidth: 500 }}
        >
          Entrar
        </Button>
      </Box>
    </>
  );
};

export default Login;
