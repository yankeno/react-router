import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Home } from "../Home";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../Page404";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {page1Routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={`/page1${route.path}`}
            element={route.children}
          ></Route>
        ))}
        {page2Routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={`/page2${route.path}`}
            element={route.children}
          ></Route>
        ))}
        <Route path="*" exact={true} element={<Page404 />}></Route>
      </Routes>
    </>
  );
};
