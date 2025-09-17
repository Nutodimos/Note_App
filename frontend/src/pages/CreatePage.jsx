import React, { use } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../lib/axios.js";
const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      if (error.response.status === 429) {
        toast.error("Too many requests. Please try again later.", {
          duration: 4000,
        });
      } else {
        toast.error("Error creating note", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base  100">
      <div className="container mx-auto  py-8">
        <div className="max-w-sm mx-auto p-2  bg-black/55  rounded-lg shadow-md  ">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="inline-block w-3 h-4 mr-2" />
            Back to Notes
          </Link>
          <div className="card bg-base 100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-24"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <div className="card-actions justify-end">
                    <button
                      type="submit"
                      className={`btn btn-primary mt-4 ${
                        loading ? "loading..." : ""
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Note"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
