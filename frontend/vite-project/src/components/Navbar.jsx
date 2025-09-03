import React from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-7xl p-7">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Note App</h1>
          <div className="flex items-center gap-10">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span className="ml-2">New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
