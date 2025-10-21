import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import DataDetails from '../pages/DataDetails/DataDetails';
import Installation from '../pages/Installation/Installation';
import FastPageData from '../pages/FastPageData/FastPageData';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index:true,
            loader:() => fetch('/appDataFastPage.json'),
            path:'/',
            Component:Home,
        },
        {
          path:'/installation',
          loader:() => fetch('/appData.json'),
          Component:Installation
        },
        {
            path:'/apps',
            loader:() => fetch('/appData.json'),
            Component:Apps
        },
        {
          path:'dataDetails/:id',
          loader:() => fetch('/appData.json'),
          Component:DataDetails
        },
        {
          path:'fastPageData/:id',
          loader:() => fetch('/appDataFastPage.json'),
          Component:FastPageData
        }
    ]
  },
]);