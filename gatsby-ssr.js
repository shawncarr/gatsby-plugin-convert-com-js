"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  var projectId = pluginOptions.projectId,
      requireProduction = pluginOptions.requireProduction;

  var shouldLoad = process.env.NODE_ENV === "production" || !requireProduction;

  if (shouldLoad && projectId) {
    var url = "//cdn-3.convertexperiments.com/js/" + projectId + ".js";
    setHeadComponents([_react2.default.createElement("script", { key: "plugin-convert-js", type: "text/javascript", src: url })]);
  }
};