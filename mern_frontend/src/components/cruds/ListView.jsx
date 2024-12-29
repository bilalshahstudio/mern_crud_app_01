import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ListView() {
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
      <h2>
        Crud - List View
        <p>
          <Link to="/create" className="btn btn-primary">
            Create item
          </Link>
        </p>
      </h2>
      <hr />

      {data?.map((item) => {
        return (
          <div
            className="card mb-3"
            style={{ maxWidth: "800px" }}
            key={item._id}
          >
            <div className="row g-0">
              <div className="col-md-4 pl-5 ">
                {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                <h5>Logo</h5>
              </div>
              <div className="col-md-8">
                <div className="card-header">
                  <h5 className="card-title">
                    <Link to={`/items/${item._id}`} className="link-line">
                      {item.name}
                    </Link>
                  </h5>
                </div>
                <div className="card-body ">
                  <h6 className="d-flex align-items-center">
                    <i className="bi bi-telephone-fill text-success"></i>
                    <a
                      className="card-subtitle m-2"
                      href={`tel:+${item.phone}`}
                    >
                      {item.email}
                    </a>
                  </h6>
                  <p className="card-text limit-char">{item.description}</p>
                  <p className="card-text  d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-warning"></i>
                    <small className="text-muted one-liner">
                      {item.location}
                    </small>
                  </p>

                  <div className="card-footer">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListView;
