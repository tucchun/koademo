const path = require("path");
const bodyParser = require("koa-bodyparser");
const nunjucks = require("../../node_modules/koa-nunjucks-2/compiled");
const serve = require("koa-static");
const miSend = require("./mi-send/index.js");
const miLog = require("./mi-log/logger.js");
const miHttpError = require("./mi-http-error/index.js");
const miRule = require("./mi-rule");

module.exports = app => {
  miRule({
    app,
    rules: [
      {
        folder: path.join(__dirname, '../controller'),
        name: 'controller'
      },
      {
        folder: path.join(__dirname, '../service'),
        name: 'service'
      }
    ]
  });
  app.use(
    miHttpError({
      errorPageFolder: path.resolve(__dirname, "../errorPage")
    })
  );
  app.use(miLog());
  app.use(
    serve(path.join(__dirname, "../../public"), {
      maxage: 30 * 24 * 60 * 60 * 1000
    })
  );
  app.use(
    nunjucks({
      ext: "html",
      path: path.join(__dirname, "../views"),
      nunjucksConfig: {
        trimBlocks: true
      }
    })
  );
  app.use(bodyParser());
  app.use(miSend());
};
