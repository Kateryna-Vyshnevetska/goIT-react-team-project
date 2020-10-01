import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { PageNotFound } from "../pages/pageNotFound/PageNotFound";
import { CheckListPage } from "../pages/checkListPage/CheckListPage";

export function App() {
  return (
    <>
      <CheckListPage />
      {/* <Suspense fallback={<Spinner />}> */}
      {/* <Switch> */}
      {/* {routes.map(({ path, name, exact, component }) => {
            return (
              <Route
                key={name}
                path={path}
                exact={exact}
                component={component}
              />
            );
          })} */}
      {/* <Route>
        <PageNotFound>
          <h1>PageNotFound</h1>
        </PageNotFound>
      </Route> */}
      {/* </Switch> */}
      {/* </Suspense> */}
    </>
  );
}
