import React from "react";
import { Route, Routes } from "react-router";

import WatchList from "../watchlist-view/WatchList";
import { GeneralContextProvider } from "../context/GeneralContext";

import Summary from "../pages-view/Summary";
import Orders from "../pages-view/Orders";
import Holdings from "../pages-view/Holdings";
import Positions from "../pages-view/Positions";
import Funds from "../pages-view/Funds";


function Dashboard(){
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
