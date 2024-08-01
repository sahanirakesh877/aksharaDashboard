import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import "ckeditor5/ckeditor5.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";
import { BeatLoader, ClipLoader, FadeLoader, MoonLoader } from "react-spinners";

const ActivityBlog = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [activitySubmitLoading, setBlogSubmitLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [newCategory, setNewCategory] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const editorRef = useRef();

  const [addCategory, setAddCategory] = useState(false);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activityCategory`
        );
        if (response.data.success) {
          setCategories(response.data.categories);
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong with the contact form");
      } finally {
        setLoading(false);
      }
    }
    getCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!title) newErrors.title = "Please, enter the activity title!";
    if (!image) newErrors.image = "Please, choose an image!";
    if (!description) newErrors.description = "Please, enter the description!";
    if (!selectedCategory) newErrors.category = "Please, select a category!";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!validateForm()) {
      setSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("activityImage", image);
    formData.append("description", description);
    formData.append("category", selectedCategory);

    console.log(title, image, description, selectedCategory);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/`,
        formData
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setTitle("");
        setImage(null);
        setDescription("");
        setSelectedCategory("");
        setImagePreview(null);
        setErrors({});
        editorRef.current.setData("");
      } else {
        toast.error(response.data.error);
        console.log(response, "res with error");
      }
    } catch (error) {
      // console.error("Error submitting form:", error);
      console.log(error);

      toast.error("Error submitting form!");
    } finally {
      setSubmitting(false);
    }
  };

  const addCategoryHandler = async (e) => {
    setLoading(true);
    console.log(newCategory);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVERAPI}/api/v1/activityCategory`,
        { title: newCategory }
      );
      if (response.data.success) {
        setCategories(response.data.categories);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the contact form");
    } finally {
      setLoading(false);
      setAddCategory(false);
    }
  };

  return (
    <>
      <main>
        <div className="container">
          <section className="section border register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container w-100">
              <div className="row justify-content-center w-100">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center w-100">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <span className="d-none d-lg-block">
                        Create Activity Form
                      </span>
                    </a>
                  </div>
                  <div className="card mb-3 ms-5 w-100">
                    <div className="card-body py-4">
                      <form
                        className="row g-3 needs-validation w-100"
                        noValidate
                        onSubmit={handleSubmit}
                      >
                        <div className="col-12">
                          <label htmlFor="activitytitle" className="form-label">
                            Activity Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            className={`form-control ${
                              errors.title ? "is-invalid" : ""
                            }`}
                            id="activitytitle"
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
                          <label htmlFor="activityimage" className="form-label">
                            Image
                          </label>
                          <input
                            type="file"
                            name="image"
                            className={`form-control ${
                              errors.image ? "is-invalid" : ""
                            }`}
                            id="activityimage"
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
                          <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <img
                              src={imagePreview}
                              alt="Selected"
                              className="img-fluid"
                            />
                            <button
                              className="bg-danger text-white p-2 mt-3"
                              onClick={() => {
                                setImage(null);
                                setImagePreview(null);
                              }}
                            >
                              cancel
                            </button>
                          </div>
                        )}

                        <div className="col-12">
                          <label
                            htmlFor="activityDescription"
                            className="form-label"
                          >
                            Description
                          </label>
                          <CKEditor
                            editor={ClassicEditor}
                            id="activityDescription"
                            config={{
                              toolbar: [
                                "undo",
                                "redo",
                                "|",
                                "heading",
                                "|",
                                "bold",
                                "italic",
                                "|",
                                "link",
                                "insertTable",
                                "mediaEmbed",
                                "|",
                                "bulletedList",
                                "numberedList",
                                "indent",
                                "outdent",
                              ],
                              plugins: [
                                Bold,
                                Essentials,
                                Heading,
                                Indent,
                                IndentBlock,
                                Italic,
                                Link,
                                List,
                                MediaEmbed,
                                Paragraph,
                                Table,
                                Undo,
                              ],
                            }}
                            onReady={(editor) => {
                              editorRef.current = editor;
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();
                              setDescription(data);
                            }}
                          />
                          {errors.description && (
                            <div className="invalid-feedback">
                              {errors.description}
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          <label
                            htmlFor="activitycategory"
                            className="form-label"
                          >
                            Category
                          </label>
                          {loading ? (
                            <div className="d-flex">
                              Please wait <BeatLoader color="black" size={20} />
                            </div>
                          ) : addCategory ? (
                            <>
                              <input
                                type="text"
                                placeholder="Category Name"
                                className={`form-control ${
                                  errors.image ? "is-invalid" : ""
                                }`}
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                              />
                              <button
                                className={`btn btn-primary w-100 my-2 ${
                                  loading ? "wait" : ""
                                }`}
                                onClick={addCategoryHandler}
                                disabled={loading}
                              >
                                {loading ? "Adding" : "Add"}
                              </button>
                              <button
                                className="btn btn-secondary w-100 my-2"
                                onClick={() => setAddCategory(false)}
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <select
                              name="category"
                              className={`form-select ${
                                errors.category ? "is-invalid" : ""
                              }`}
                              id="activitycategory"
                              value={selectedCategory}
                              onChange={(e) => {
                                if (e.target.value === "add-new") {
                                  setAddCategory(true);
                                } else {
                                  setSelectedCategory(e.target.value);
                                }
                              }}
                              required
                            >
                              <option value="">Choose...</option>
                              {categories && categories.length ? (
                                categories.map((x, i) => (
                                  <option value={x._id} key={i}>
                                    {x.title}
                                  </option>
                                ))
                              ) : (
                                <option value="" disabled>
                                  No categories
                                </option>
                              )}
                              <option value="add-new">+ Add Category</option>
                            </select>
                          )}
                          {errors.category && (
                            <div className="invalid-feedback">
                              {errors.category}
                            </div>
                          )}
                        </div>

                        <div className="col-12">
                          <button
                            className={`btn btn-primary w-100`}
                            type="submit"
                            disabled={submitting}
                            style={{
                              cursor: submitting ? "wait" : "pointer",
                              position: "relative",
                            }}
                          >
                            {submitting ? (
                              <span className="d-flex justify-content-center align-items-center">
                                Please Wait{" "}
                                <ClipLoader
                                  className="mx-4 "
                                  color="white"
                                  size={20}
                                />
                              </span>
                            ) : (
                              <span>Create Activity</span>
                            )}
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

export default ActivityBlog;
