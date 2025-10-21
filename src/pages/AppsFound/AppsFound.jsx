import React from "react";
import { FaDownload } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

const AppsFound = ({ found,handleUninstall }) => {
  console.log(found);
  const { image, companyName, downloads, ratingAvg } = found;
  return (
    <div>
      <div class="flex items-center justify-between bg-white shadow-sm border border-gray-100 rounded-xl p-4 mb-4 hover:shadow-md transition-all">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-gray-200 rounded-md">
            <img src={image} alt="" />
          </div>
          <div>
            <h2 class="text-gray-900 font-medium text-sm">
              {companyName}
            </h2>
            <div class="flex items-center gap-3 text-gray-500 text-xs mt-1">
              <div className="flex font-medium text-[#00D390]">
                <FaDownload/>
                <span>{downloads}</span>
              </div>
              <div className="flex font-medium text-[#FF8811]">
                <IoIosStar className="mt-0.5"/>
              <span>{ratingAvg}</span>
              </div>
              <span>258 MB</span>
            </div>
          </div>
        </div>
        <button onClick={() => handleUninstall(found.id)} class="bg-emerald-400 text-white px-4 py-1.5 text-sm rounded-md hover:bg-emerald-500 transition">
          Uninstall
      </button>
      </div>
    </div>
  );
};

export default AppsFound;
