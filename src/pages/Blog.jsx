import React, { useState } from 'react';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title) newErrors.title = 'Please, enter the blog title!';
    if (!image) newErrors.image = 'Please, choose an image!';
    if (!description) newErrors.description = 'Please, enter the description!';
    if (!category) newErrors.category = 'Please, select a category!';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('category', category);


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
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <span className="d-none d-lg-block">Latest-Blog</span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body py-4">
                      <form
                        className="row g-3 needs-validation"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12">
                          <label htmlFor="blogtitle" className="form-label">
                            Blog Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                            id="blogtitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                          />
                          {errors.title && (
                            <div className="invalid-feedback">
                              {errors.title}
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          <label htmlFor="blogimage" className="form-label">
                            Image
                          </label>
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
                            <div className="invalid-feedback">
                              {errors.image}
                            </div>
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
                          <label
                            htmlFor="blogdescription"
                            className="form-label"
                          >
                            Description
                          </label>
                          <textarea
                            name="description"
                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                            id="blogdescription"
                            rows="4"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                          ></textarea>
                          {errors.description && (
                            <div className="invalid-feedback">
                              {errors.description}
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          <label htmlFor="blogcategory" className="form-label">
                            Category
                          </label>
                          <select
                            name="category"
                            className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                            id="blogcategory"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                          >
                            <option value="">Choose...</option>
                            <option value="tech">Tech</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="education">Education</option>
                          </select>
                          {errors.category && (
                            <div className="invalid-feedback">
                              {errors.category}
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Create Blog
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

export default Blog;
