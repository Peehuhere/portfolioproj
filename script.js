var options = {
  chart: {
    type: "radar",
    height: 800,
  },
  series: [
    {
      name: "Radar Series 1",
      data: [45, 52, 38, 24, 33, 10],
    },
    {
      name: "Radar Series 2",
      data: [35, 42, 28, 14, 23, 20],
    },
    {
      name: "Radar Series 3",
      data: [73, 62, 48, 24, 43, 30],
    },
    {
      name: "Radar Series 4",
      data: [25, 32, 18, 44, 13, 40],
    },
    {
      name: "Radar Series 5",
      data: [65, 72, 58, 54, 53, 50],
    },
  ],
  labels: ["April", "May", "June", "July", "August"],
  stroke: {
    width: 1,
  },
  fill: {
    opacity: .1,
  },
  markers: {
    size: 0,
  },
  yaxis: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();