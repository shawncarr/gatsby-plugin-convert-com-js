import React from "react";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { projectId, requireProduction = true } = pluginOptions;
  const shouldLoad =
    process.env.NODE_ENV === "production" || requireProduction !== true;

  // only render snippet if projectId exists and shouldLoad is true
  if (shouldLoad && projectId) {
    const url = `//cdn-3.convertexperiments.com/js/${projectId}.js`;
    setHeadComponents([
      <script key="plugin-convert-js" type="text/javascript" src={url} />,
    ]);
  }
};
