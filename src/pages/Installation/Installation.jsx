


import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook, removeFromStoredDB } from "../../Utility/addToBT";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installation = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedData = getStoredBook();
    const myReadList = data.filter((app) =>
      storedData.includes(String(app.id))
    );
    setReadList(myReadList);
  }, [data]);

  const handleUninstall = (id, name) => {
    removeFromStoredDB(id);
    const remaining = readList.filter((app) => app.id !== id);
    setReadList(remaining);
    toast.info(`${name} has been uninstalled`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="m-20">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">My Installation</h2>
        <p className="text-[20px] text-[#627382] mt-4">
          Manage all your installed apps easily.
        </p>
      </div>

      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-semibold">{readList.length} Apps Installed</h2>
      </div>

      <div>
        {readList.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white shadow-sm border border-gray-100 rounded-xl p-4 mb-4 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-md">
                <img src={app.image} alt={app.companyName} />
              </div>
              <div>
                <h2 className="text-gray-900 font-medium text-sm">{app.companyName}</h2>
                <p className="text-gray-500 text-xs">Downloads: {app.downloads}</p>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app.id, app.companyName)}
              className="bg-red-500 text-white px-4 py-1.5 text-sm rounded-md hover:bg-red-600 transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Installation;

