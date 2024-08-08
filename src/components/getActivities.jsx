import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const GetActivities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`
        );
        console.log("blogs", response.data);
        if (response.data.success) {
          setData(response.data.activities);
          console.log(response.data.activities);
        } else {
          console.error("Failed to fetch data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleView = (id) => {
    console.log("View item:", id);
  };
  console.log("data", data);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/blog/${id}`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        // Update the state to reflect the deleted item
        setData(response.data.blogs);
      } else {
        console.error("Failed to delete item:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <main>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <h3 className="d-flex justify-content-center py-4">
          <span className="d-none d-lg-block border-bottom border-danger border-2">
            All Activities
          </span>
        </h3>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-bordered ms-5">
              <thead className="thead-dark">
                <tr>
                  <th className="text-center">Details</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <h3>{item.title}</h3>
                      <img
                        src={`${
                          import.meta.env.VITE_SERVERAPI
                        }/${item.image.replace(/\\/g, "/")}`}
                        alt={item.title}
                        width="100"
                        className="img-fluid rounded"
                      />
                      <div>
                        <strong>Category: </strong>

                        <span>{item.category.title}</span>
                      </div>
                      <div>
                        <strong>Category: </strong>

                        <span>
                          {(() => {
                            const date = new Date(item.createdAt);
                            const options = {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            };
                            const formattedDate = date
                              .toLocaleDateString("en-US", options)
                              .split(", ");

                            return `${formattedDate[1]} ${formattedDate[0]}, ${formattedDate[2]}`;
                          })()}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-info btn-sm mx-1"
                        onClick={() => handleView(item.id)}
                      >
                        <Link to={`./${item._id}`}>
                          <i className="bi bi-eye"></i>
                        </Link>
                      </button>

                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => handleDelete(item._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetActivities;
