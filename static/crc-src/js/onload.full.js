function downloadJSAtOnload() {
  var databaseApp = document.createElement("script");
  databaseApp.src = "https://www.gstatic.com/firebasejs/5.2.0/firebase-app.js";
  document.body.appendChild(databaseApp);

  var database = document.createElement("script");
  database.src = "https://www.gstatic.com/firebasejs/5.2.0/firebase-database.js";
  document.body.appendChild(database);

  var selectCarApp = document.createElement("script");
  selectCarApp.src = "media/system/js/chart.bundle.js";
  document.body.appendChild(selectCarApp);
}
if (window.addEventListener)
  window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
  window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;
