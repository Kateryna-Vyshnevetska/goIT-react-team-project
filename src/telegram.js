const tg = require("telegram-node-bot")(
  "1209405278:AAFMxNOJm_26Hizs7yJq1toKBF_DoWKMZjg"
);

tg.router.when(["ping"], "PingController");

tg.controller("PingController", ($) => {
  tg.for("ping", () => {
    $.sendMessage("pong");
  });
});
