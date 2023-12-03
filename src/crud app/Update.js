import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3030/users/${id}`, inputData).then((res) => {
      alert("Data Updated Successfully!");
      navigate("/");
    });
  };

  return (
    <Container maxWidth="md" mt={5}>
      <Paper elevation={3} p={5}>
        <Typography variant="h4" mb={3}>
          Update User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="ID"
            type="number"
            disabled
            value={inputData.id}
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Name"
            type="text"
            name="name"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={inputData.email}
            onChange={(e) =>
              setInputData({ ...inputData, email: e.target.value })
            }
            variant="outlined"
            margin="normal"
          />
          <br />
          <Button type="submit" variant="contained" color="info">
            Update
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Update;
