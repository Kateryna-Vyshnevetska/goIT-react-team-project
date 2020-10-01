import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isAuthUser } from "../redux/selectors";
import { CheckStartPage } from "../helpers/checkStartPage";

export function App() {
  const state = useSelector((state) => state);
  const [page, setPage] = useState(false);

  useEffect(() => {
    setPage(CheckStartPage(isAuthUser(state)));
  }, [isAuthUser(state)]);

  return (
    <>
      {page}
      {/* <HomePage /> */}
    </>
  );
}
