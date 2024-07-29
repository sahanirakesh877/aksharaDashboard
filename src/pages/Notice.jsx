import React, { useState } from 'react';

const Notice = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      setErrors({ ...errors, image: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setErrors({ ...errors, image: 'Please, choose an image!' });
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
  
  

    // try {
    //   const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
    //     method: 'POST',
    //     body: formData
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log('Form submitted successfully:', result);
    //   } else {
    //     console.error('Form submission failed:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h3 className="d-flex justify-content-center py-4 ">
                    <span className="d-none d-lg-block border-bottom border-danger border-2">Notices</span>
                  </h3>
                  <div className="card mb-3">
                    <div className="card-body py-4">
                      <form
                        className="row g-3 needs-validation"
                        noValidate
                        method='post'
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12">
                          <label htmlFor="blogimage" className="form-label">Image</label>
                          <input
                            type="file"
                            name="image"
                            className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                            id="blogimage"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
                          />
                          {errors.image && (
                            <div className="invalid-feedback">{errors.image}</div>
                          )}
                        </div>

                        {imagePreview && (
                          <div className="col-12">
                            <img
                              src={imagePreview}
                              alt="Selected"
                              className="img-fluid"
                            />
                          </div>
                        )}

                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">
                            Upload Banner Photo
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Notice;
