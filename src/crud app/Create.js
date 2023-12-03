import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const StyledBox = styled(Box)({
  width: "50%",
  border: "1px solid #ccc",
  padding: "20px",
  backgroundColor: "#f5f5f5",
});

const StyledButton = styled(Button)({
  marginTop: "10px",
});

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleSubmit = function (e) {
    e.preventDefault();
    axios.post("http://localhost:3030/users", inputData).then((res) => {
      alert("Data Posted Successfully!");
      navigate("/");
    });
  };

  return (
    <StyledContainer>
      <StyledBox>
        <Typography variant="h4" gutterBottom>
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setInputData({ ...inputData, name: e.target.value })}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(e) => setInputData({ ...inputData, email: e.target.value })}
          />
          <StyledButton variant="contained" color="primary" type="submit">
            Submit
          </StyledButton>
        </form>
      </StyledBox>
    </StyledContainer>
  );
};

export default Create;
