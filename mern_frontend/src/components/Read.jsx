import React, { useEffect, useState } from "react";

function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:5000");
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
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
    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    } else {
      setError("Deleted Successfuly");
      setTimeout(() => {
        setError("");
        getData();
      }, 2000);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">All data</h2>
      <div className="row">
        {data?.map((element) => (
          <div key={element._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {element.email}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">{element.age}</h6>
                <a
                  href="#"
                  className="card-link"
                  onClick={() => handleDelete(element._id)}
                >
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
