import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = function (id) {
    console.log("Delete button clicked for user ID:", id);
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      axios
        .delete(`http://localhost:3030/users/${id}`)
        .then((res) => {
          console.log("Delete response:", res.data);
          alert("Data deleted successfully!");
          axios
            .get("http://localhost:3030/users")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          console.error("Delete error:", error);
        });
    }
  };

  return (
    <Container maxWidth="md" mt={5}>
      <Link to="/create">
        <Button variant="contained" color="success" my={3}>
          Create User
        </Button>
      </Link>
      <TableContainer component={Paper} mt={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d, i) => (
              <TableRow key={i}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.email}</TableCell>
                <TableCell>
                  <Link to={`/read/${d.id}`} style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="primary" size="small">
                      <FaEye style={{ fontSize: "20px" }} />
                    </Button>
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" color="warning" size="small">
                      <FaRegEdit style={{ fontSize: "20px" }} />
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={(e) => handleDelete(d.id)}
                  >
                    <FaRegTrashAlt style={{ fontSize: "20px" }} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;
