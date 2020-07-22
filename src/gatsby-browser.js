"use strict";

exports.onRouteUpdate = function () {
  function checkGoals() {
    window.setTimeout(function () {
      window._conv_q = window._conv_q || [];
      window._conv_q.push(["run", "true"]);
    }, 50);
  }

  if (window.convert) {
    checkGoals();
  }
};
