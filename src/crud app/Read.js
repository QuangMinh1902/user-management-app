import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
        <div className="container p-5">
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <Link to='/'> Back</Link>
        </div>
    </div>
  );
};

export default Read;
