function loadJS(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // Success
  scriptEle.addEventListener("load", () => {
    console.log("ubg235 served!");
  });

   // Error
  scriptEle.addEventListener("error", () => {
    console.log("ubg235 shut up!");
  });
}

window.addEventListener("load", function () {
  loadJS("https://jacerenzo43backup-bot.github.io/js/jacerenzo43backup-bot_server_v1_0.js", true);
});
