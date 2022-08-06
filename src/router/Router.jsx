import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        {console.log(page1Routes)}
        {page1Routes.map((route) => (
          <Route 
            key={route.path} 
            exact={route.exact} 
            path={`/page1${route.path}`}
            element={route.children}
            >
          </Route>
        ))}
      </Routes>
      <Routes>
        {page2Routes.map((route) => (
          <Route 
            key={route.path} 
            exact={route.exact} 
            path={`/page2${route.path}`}
            element={route.children}
            >
          </Route>
        ))}
      </Routes>
    </>
  );
};
