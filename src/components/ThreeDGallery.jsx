import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ThreeDGallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/three/getallthreedimg"
        );
        console.log("response 3D image", response.data);
        if (response.data.success) {
          setData(response.data.gallery);
          console.log(response.data.gallery);
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
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/three/deletethreedimg/${id}`
      );
    
      if (response.data.success) {
        toast.success(response.data.message);
        // Update the state to reflect the deleted item
        setData(data.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete item:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <main>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-start py-4">
        <h3 className="d-flex justify-content-center pt-5">
          <span className="d-none d-lg-block border-bottom border-danger text-success border-2 fw-semibold">
            3D Photos
          </span>
        </h3>
        <div className="container">
          <div className="table-responsive ms-5">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark border border-danger">
                <tr>
                  <th className="text-center">Image</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="border border-info">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <img
                        src={`http://localhost:5000/${item.images[0].replace(
                          /\\/g,
                          "/"
                        )}`}
                        alt={item.title}
                        width="100"
                        className="img-fluid rounded"
                      />
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-info btn-md text-white mx-1"
                        onClick={() => handleView(item.id)}
                      >
                        <i className="bi bi-eye"></i>
                      </button>

                      <button
                        className="btn btn-danger btn-md mx-1"
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

export default ThreeDGallery;
