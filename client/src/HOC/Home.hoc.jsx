import React from "react";
import {Routes, Route } from "react-router-dom";

// layout

import HomeLayout from "../layout/Homepage.layout";

function HomeLayoutHoc({ component: component,path, ...rest }) {
  return (
    <>
      <Routes>
      <Route
      {...rest}
        path={path}
        element={
          <HomeLayout>
            <component />
          </HomeLayout>
        }
      />
      </Routes>
    </>
  );
}

export default HomeLayoutHoc;
