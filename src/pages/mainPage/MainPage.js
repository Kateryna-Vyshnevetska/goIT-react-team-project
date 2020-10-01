import React from "react";
import { LeftSideBar } from "../../components/leftSideBar/LeftSideBar";
import { CheckListPage } from "../checkListPage/CheckListPage";
import { RightSideBar } from "../../components/RightSideBar/RightSideBar";
export const MainPage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <LeftSideBar />
        <CheckListPage />
        <RightSideBar />
      </div>
    </>
  );
};
