import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SafeHtml from "./safeHtml";

export default function GetActivity() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getSelectedPost() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVERAPI}/api/v1/activity/${id}`
        );
        if (response.data.success) {
          setPost(response.data.activity);
        } else {
          console.error("Failed to fetch data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getSelectedPost();
  }, [id]);

  console.log(post);

  return (
    <main>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="mt-5 mx-5 border w-50 h-100 p-2">
          {!loading && (
            <>
              <Link to={"./edit"}>Edit this Activity</Link>{" "}
              <Link to={"./reupload"}>Reupload Image</Link>
              <img
                src={`${import.meta.env.VITE_SERVERAPI}/${post.image.replace(
                  /\\/g,
                  "/"
                )}`}
                alt=""
              />
              <h2>{post.title}</h2>
              <div>
                <strong>Category: </strong>

                <span>{post.title}</span>
              </div>
              <SafeHtml htmlString={post.description} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
