

import React, { Suspense, useState } from "react";
import AppsDetails from "../AppsDetails/AppsDetails";
import NoappIng from "../../../src/assets/App-Error.png";
import { Link } from "react-router";

const AppsTaitel = ({ data }) => {
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const serachedProducts = term
    ? data.filter((product) => product.title.toLocaleLowerCase().includes(term))
    : data;

  return (
    <div>
      <div className="lg:m-20 m-8">
        <div className="mb-10 text-center">
          <h2 className="text-5xl mb-4 font-bold">Our All Applications</h2>
          <p className="text-[20px] text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between py-5 items-center">
          <h2 className="text-2xl font-semibold">
            {" "}
            ({serachedProducts.length}) Apps Found
          </h2>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
            ></input>
          </label>
        </div>

        <div>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            {serachedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serachedProducts.map((fainalData) => (
                  <AppsDetails
                    key={fainalData.id}
                    fainalData={fainalData}
                  ></AppsDetails>
                ))}
              </div>
            ) : (
              <div>
                <div className="flex justify-center">
                  <img src={NoappIng} alt="" />
                </div>
                <div className="flex justify-center mt-10">
                  <Link to="/">
                    <button className="px-4 py-3 cursor-pointer font-semibold rounded-[4px] text-white bg-gradient-to-r from-[#632ee3] to-[#9F62F2]">
                      Show All Apps
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AppsTaitel;
