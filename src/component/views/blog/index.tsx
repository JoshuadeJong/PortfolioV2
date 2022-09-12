import React from "react";
import { Route, Routes } from "react-router-dom";

import SessionContext from "provider/SessionContext";

import FeatureFlag from "type/FeatureFlag";
import View from "type/View";
import Error from "component/views/error";

function Blog() {
  const { featureFlags } = React.useContext(SessionContext);

  // @ts-ignore
  if (!featureFlags[FeatureFlag.BLOG]) {
    return <Error code={404} />;
  }

  return (
    <Routes>
      <Route
        path={View.BLOG.path + "/:article"}
        element={<Error code={503} />}
      />
      <Route path={""} element={<Error code={501} />} />
    </Routes>
  );
}

export default Blog;
