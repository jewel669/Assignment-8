import React, { Suspense, } from 'react';
import AppData from '../AppData/AppData';
import { Link } from 'react-router';

const BangladeshApp = ({data}) => {

    // const [allData,setAllData] = useState([]);

    // useEffect(() => {
    //     fetch('appDataFastPage.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllData(data)
    //     })
    // })

    return (
        <div className='lg:m-20'>
            <div className='text-center p-6 mt-20'>
                <h2 className='text-5xl font-bold mb-4'>Trending Apps</h2>
                <p className='text-[20px] text-[#627382] mb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                data.map((singleData) => <AppData key={singleData.id} singleData={singleData}></AppData>)
              }
              </div>
            </Suspense>
            <div className='flex justify-center mt-10'>
                <Link to='/apps'><button className='px-4 py-3 cursor-pointer font-semibold rounded-[4px] text-white bg-gradient-to-r from-[#632ee3] to-[#9F62F2]'>Show All</button></Link>
            </div>
        </div>
    );
};

export default BangladeshApp;