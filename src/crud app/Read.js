import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Paper, Typography, Button, Box } from "@mui/material";

const Read = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container maxWidth="md" mt={5}>
      <Paper elevation={3} p={5}>
        <Typography variant="h4" mb={3}>
          User Details
        </Typography>
        <Typography variant="h6">ID: {data.id}</Typography>
        <Typography variant="h6">Name: {data.name}</Typography>
        <Typography variant="h6">Email: {data.email}</Typography>
      </Paper>
      <Box mt={3}>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          color="primary"
        >
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default Read;
