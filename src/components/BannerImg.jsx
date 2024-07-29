

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BannerImg = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from an API
//     axios
//       .get("https://api.example.com/images")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const handleView = (id) => {
//     console.log("View item:", id);
//   };
//   const handleEdit = (id) => {
//     console.log("Edit item:", id);
//   };
//   const handleDelete = (id) => {
//     console.log("Delete item:", id);
//   };

//   return (
//     <main>
//       <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//         <h3 className="d-flex justify-content-center py-4">
//           <span className="d-none d-lg-block border-bottom border-danger border-2">3D Photos</span>
//         </h3>
//         <div className="container">
//           <div className="table-responsive">
//             <table className="table table-striped table-bordered">
//               <thead className="thead-dark">
//                 <tr>
//                   <th>Image</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item, index) => (
//                   <tr key={index}>
//                     <td className="text-center">
//                       <img src={item.imageUrl} alt={item.title} width="100" className="img-fluid rounded" />
//                     </td>
//                     <td className="text-center">
//                       <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(item.id)}>View</button>
//                       <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(item.id)}>Edit</button>
//                       <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(item.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default BannerImg;


import React from "react";

const BannerImg = () => {
  const data = [
    { id: 1, imageUrl: "https://img.freepik.com/free-photo/physician-with-stethoscope-virtual-screen-background_1232-181.jpg?t=st=1722167776~exp=1722171376~hmac=875f2d462c3e1dffa14bd47f47b67bd98faa67fbf3ffdc8f37692a56b2208d81&w=1380", title: "Image 1" },
    { id: 2, imageUrl: "https://img.freepik.com/premium-photo/world-health-day-essence-health-wellness-doctors-nurses-healthy-lifestyles-medical-equipmentgenerated-with-ai_130181-22934.jpg?w=1380", title: "Image 2" },
    { id: 3, imageUrl: "https://img.freepik.com/premium-photo/psd-doctors-day-banner-design-with-doctor-stethoscope_1121334-8599.jpg?w=1060", title: "Image 3" },
  ];

  const handleView = (id) => {
    console.log("View item:", id);
  };
  const handleEdit = (id) => {
    console.log("Edit item:", id);
  };
  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  return (
    <main>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <h3 className="d-flex justify-content-center py-4">
          <span className="d-none d-lg-block border-bottom border-danger border-2">Hero Page Photos</span>
        </h3>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Image</th>
                  <th className="">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <img src={item.imageUrl} alt={item.title} width="100" className="img-fluid rounded" />
                    </td>
                    <td className="text-center">
                      <button className="btn btn-info btn-sm mx-1" onClick={() => handleView(item.id)}><i class="bi bi-eye"></i></button>
                      <button className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(item.id)}><i class="bi bi-pencil-square"></i></button>
                      <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(item.id)}><i class="bi bi-trash"></i></button>
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

export default BannerImg;


