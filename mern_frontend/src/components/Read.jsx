import React, { useEffect, useState } from "react";

function Read() {
  const [data, setData] = useState();
  const [error, setError] = useState("");

  async function getData() {
    const reponse = await fetch("http://localhost:5000/");
    const result = await reponse.json();

    if (!result.ok) {
      console.log(result.error);
      setError(result.error);
    }
    if (result.ok) {
      setData(result);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="container my-2">
      <h2 className="text-center">All data</h2>
      <div className="row">
        {data.map((element) => (
          <div key={element._id} className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {element.email}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">{element.age}</h6>
                <a href="#" className="card-link">
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
