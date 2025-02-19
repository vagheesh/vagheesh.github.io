---
layout: page
permalink: /location/
title: "Location"
description: 
nav: true
nav_order: 4
---

<div class="container">
  <h2>📍 Zoomed-In View: Boston & Cambridge, MA</h2>
  <div id="echarts-map" style="width: 100%; height: 600px;"></div>
</div>

<!-- Load ECharts from CDN -->
<script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts/map/js/world.js"></script>

<script>
  var chartDom = document.getElementById('echarts-map');
  var myChart = echarts.init(chartDom, 'dark');
  var option;

  option = {
    backgroundColor: '#2c343c',
    title: {
      text: '📍 Zoomed-In Map: Boston & Cambridge, MA',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 18
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return `${params.name}<br/>Lat: ${params.value[1]}<br/>Lon: ${params.value[0]}`;
      }
    },
    geo: {
      map: 'world',
      roam: true,
      zoom: 12, // Increased zoom level for a close-up view
      center: [-71.0589, 42.3601], // Centered on Boston
      emphasis: {
        label: {
          show: false
        }
      },
      itemStyle: {
        areaColor: '#323c48',
        borderColor: '#111'
      }
    },
    series: [
      {
        name: 'Locations',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 16,
        label: {
          show: true,
          formatter: '{b}',
          position: 'right',
          color: '#fff'
        },
        itemStyle: {
          color: '#ff7f50'
        },
        data: [
          { name: 'Cambridge, MA', value: [-71.1097, 42.3736] },
          { name: 'Boston, MA', value: [-71.0589, 42.3601] }
        ]
      }
    ]
  };

  myChart.setOption(option);

  // Click event to show detailed location info
  myChart.on('click', function (params) {
    alert(`📍 ${params.name}\nLatitude: ${params.value[1]}\nLongitude: ${params.value[0]}`);
  });

  window.addEventListener('resize', function () {
    myChart.resize();
  });
</script>
