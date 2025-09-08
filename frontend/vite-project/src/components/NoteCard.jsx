import { PenSquareIcon, Trash2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      // Call your delete API here
      await api.delete(`/notes/${id}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Error deleting note");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card-body bg-black/40 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
    >
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold mb-2">{note.title}</h2>
        <p className="text-gray-600">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-gray-500/60">{note.createdAt}</span>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost btn-sm text-gray-500">
              <PenSquareIcon className="size-4" />
            </button>
            <button
              className="btn btn-ghost btn-sm text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
