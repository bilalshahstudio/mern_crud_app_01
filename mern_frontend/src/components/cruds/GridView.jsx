import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function GridView() {
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
  //   const handleDelete = async (id) => {
  //     const response = await fetch(`http://localhost:5000/${id}`, {
  //       method: "DELETE",
  //     });
  //     const result = await response.json();
  //     if (!response?.ok) {
  //       console.log(result?.error);
  //       setError(result?.error);
  //     } else {
  //       setError("Deleted Successfuly");
  //       setTimeout(() => {
  //         setError("");
  //         getData();
  //       }, 1000);
  //     }
  //   };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <h2>
        Crud - Grid View
        <p>
          <Link to="/create" className="btn btn-primary float-right">
            Create item
          </Link>
        </p>
      </h2>
      <hr />
      <div>
        <div className="d-flex flex-wrap">
          {data?.map((item) => {
            return (
              <div
                className="card"
                style={{ width: 250, margin: 30 }}
                key={item._id}
              >
                <div className="card-header">
                  <h5 className="card-title">
                    {/* <Link to={`/${item._id}`} className="link-line">
                      {item.name}
                    </Link> */}
                    {item.name}
                  </h5>
                </div>
                <div className="card-body">
                  <h5 className="d-flex align-items-center">
                    {/* <i className="bi bi-telephone-fill text-success"></i>
                    <a className="card-subtitle" href={`tel:+${item.phone}`}>
                      {item.email}
                    </a> */}
                    {item.email}
                  </h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">
                              {item.phone}
                          </h6> */}
                  <p className="card-text limit-char">{item.age}</p>
                  <p className="card-text d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-warning"></i>
                    <small className="text-muted one-liner">
                      {item.location}
                    </small>
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center">
                  <Link to={`/${item._id}`} className="btn btn-primary">
                    Edit
                  </Link>
                  <span>
                    <small>
                      <Link to={`/${item._id}`} className="link-line">
                        Read More...
                      </Link>
                    </small>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GridView;
