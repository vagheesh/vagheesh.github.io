---
layout: page
permalink: /location/
title: "location"
description: 
nav: true
nav_order: 4
---

<!DOCTYPE html>
<html style="height: 100%">
<head>
    <meta charset="UTF-8">
    <title>Boston Map with Locations</title>
    <script src="https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js"></script>
</head>
<body style="height: 100%; margin: 0">
    <div id="main" style="height: 100%"></div>
    <script>
        var chart = echarts.init(document.getElementById('main'));

        // Load GeoJSON data for Boston
        fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/boston.geojson')
            .then(response => response.json())
            .then(geoJson => {
                echarts.registerMap('Boston', geoJson);

                var option = {
                    title: {
                        text: 'Boston Map with Key Locations',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return params.name || params.seriesName;
                        }
                    },
                    geo: {
                        map: 'Boston',
                        roam: true,
                        zoom: 1.2,
                        center: [-71.085, 42.35],
                        label: {
                            show: true
                        },
                        itemStyle: {
                            areaColor: '#d1e9ff',
                            borderColor: '#111'
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: '#8ec1da'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Locations',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            data: [
                                { name: 'Massachusetts General Hospital', value: [-71.0695, 42.3626] },
                                { name: 'Harvard Medical School', value: [-71.1040, 42.3365] }
                            ],
                            symbolSize: 12,
                            label: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            },
                            itemStyle: {
                                color: '#ff5722'
                            }
                        },
                        {
                            type: 'lines',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 6,
                                trailLength: 0.7,
                                color: '#ffdc34',
                                symbolSize: 6
                            },
                            lineStyle: {
                                color: '#ffa726',
                                width: 2,
                                opacity: 0.6,
                                curveness: 0.2
                            },
                            data: [{
                                coords: [
                                    [-71.0695, 42.3626],
                                    [-71.1040, 42.3365]
                                ]
                            }]
                        }
                    ]
                };

                chart.setOption(option);
            });
    </script>
</body>
</html>
