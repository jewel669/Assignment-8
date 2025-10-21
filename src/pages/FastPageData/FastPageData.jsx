import React from 'react';
import { useLoaderData, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import downloadspic from "../../assets/icon-downloads.png";
import ratingspic from "../../assets/icon-ratings.png";
import reviewpic from "../../assets/icon-review.png";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
// import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const FastPageData = () => {
     const { id } = useParams();
      const appsId = parseInt(id);
      const data = useLoaderData();
      const singleApps = data?.find((apps) => apps.id === appsId);
      const {
        image,
        companyName,
        reviews,
        ratingAvg,
        downloads,
        description,
        ratings,
      } = singleApps || {};
    
    return (
        <div>
            <div className="lg:p-20 p-10">
                  <div className="lg:flex items-center gap-10">
                    <div>
                      <img className="w-[200px] h-[200px] lg:w-[400px] lg:h-[350px]" src={image} alt="" />
                    </div>
                    <div className="w-full">
                      <h2 className="text-3xl font-bold">{companyName}</h2>
                      <h2 className="border-t-2 border-gray-300 w-full my-7 mt-7 block"></h2>
                      <div className="flex gap-9">
                        <div className="">
                          <img src={downloadspic} alt="" />
                          <p>Downloads</p>
                          <h2 className="text-4xl font-extrabold">{downloads}</h2>
                        </div>
                        <div>
                          <img src={ratingspic} alt="" />
                          <p>Average Ratings</p>
                          <h2 className="text-4xl font-extrabold">{ratingAvg}</h2>
                        </div>
                        <div>
                          <img src={reviewpic} alt="" />
                          <p>Total Reviews</p>
                          <h2 className="text-4xl font-extrabold">{reviews}</h2>
                        </div>
                      </div>
                      <button className="text-[20px] font-semibold cursor-pointer px-5 py-3.5 bg-[#00D390] text-white mt-7">
                        Install Now (291 MB)
                      </button>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-300 w-full m-10"></div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ratings</h3>
                    <ResponsiveContainer lg:width={1000} height={500}>
                      <BarChart
                        data={ratings}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                      >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" reversed/>
            
                        <Bar dataKey="count" fill="#FF8811" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="border-t-2 border-gray-300 w-full m-10"></div>
                  <div>
                    <h2 className="text-2xl font-semibold">Description</h2>
                    <p className="text-[#627382] text-[20px]">{description}</p>
                  </div>
                </div>
        </div>
    );
};

export default FastPageData;