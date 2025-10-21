import React from "react";
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router";

const AppData = ({ singleData }) => {
  console.log(singleData);

  const {image,title,downloads,ratingAvg,id} = singleData;

  return (
    <div>
      <Link to={`/fastPageData/${id}`}>
         <div className="card bg-base-100 w-96 mx-auto shadow-sm">
        <figure>
          <img className="h-[170px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-medium">
            {title}
          </h2>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-outline font-medium bg-[#F1F5E8] text-[#00D390]"><FaDownload />{downloads}</div>
            <div className="badge badge-outline bg-[#FFF0E1] text-[#FF8811]"><FaStar />{ratingAvg}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default AppData;
