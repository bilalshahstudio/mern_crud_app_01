import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TableView() {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response?.json();
      console.log(result);

      if (!response?.ok) {
        console.log(result.error);
        setError(result?.error);
      } else {
        setData(result);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch data");
    }
  }
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    if (!response?.ok) {
      console.log(result?.error);
      setError(result?.error);
    } else {
      setError("Deleted Successfuly");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div>
        <h2>
          CRUD - Table View
          <p>
            <Link to="/create" className="btn btn-primary float-right">
              Create CRUD
            </Link>
          </p>
        </h2>
        <hr />
      </div>

      <div className="table-responsive">
        <table className="table riped  table-hover table-bordered container">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Location</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <Link to={`/cruds/${item._id}`} className="link-line">
                        {item.companyName}
                      </Link>
                    </td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.location}</td>
                    <td>
                      <Link to={`/${item._id}`} className="btn btn-warning">
                        View
                      </Link>
                    </td>
                    <td>
                      <Link to={`/${item._id}`} className="btn btn-success">
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableView;
