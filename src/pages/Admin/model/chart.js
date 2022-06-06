export const charts = {
  options: {
    colors: ['#003545', '#ffcc00', '#9C27B0'],
    chart: {
      id: 'basic-bar',
      background: ' #ffcc',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: 'People Born',
      data: [30, 20, 15, 50, 23, 60, 50, 91],
    },
    {
      name: 'People Died',
      data: [30, 40, 45, 10, 49, 60, 70, 91],
    },
  ],
};
