// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://791df71f251f44b8a2b9a84aee468648@o554343.ingest.sentry.io/5682811",
  //   {
  //     release: "1-0-0",
  //     environment: "development",
  //   }
  // ).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  log,
  init,
};
