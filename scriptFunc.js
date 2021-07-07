$(document).ready(function () {
  var entries = [
    { label: "C#" },
    { label: ".NET" },
    { label: "VBA" },
    { label: "Blue Prism" },
    { label: "UiPath" },
    { label: "WinAutomation" },
    { label: "SQL" },
    { label: "ASP.NET" },
    { label: "Visual Studio" },
    { label: "VSCode" },
    { label: "WebAPI" },
    { label: "Entity Framework" },
    { label: "WPF" },
    { label: "WinForms" },
    { label: "Postman" },
    { label: "Angular" },
    { label: "HTML5" },
    { label: "CSS3" },
    { label: "SQLite" },
    { label: "Git" },
  ];

  var settings = {
    entries: entries,
    width: 1000,
    height: 600,
    radius: "65%",
    rediusMin: 75,
    bgDraw: true,
    bgColor: "#000",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.5,
    fontSize: "40",
    fontColor: "rgb(65, 20, 224)",
  };
  $("#tag").svg3DTagCloud(settings);
});