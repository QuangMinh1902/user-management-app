import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // const navigate = useNavigate();

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
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success my-3">
        Create User
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link
                  className="text-decoration-none btn btn-sm btn-primary"
                  to={`/read/${d.id}`}
                >
                  Read
                </Link>
                <Link
                  className="text-decoration-none btn btn-sm btn-success"
                  to={`/update/${d.id}`}
                >
                  Update
                </Link>
                <button
                  className="text-decoration-none btn btn-sm btn-danger"
                  onClick={(e) => handleDelete(d.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
