app.service('ChartServiceHc', function() {
    this.createChart = function(containerCC, title, Now, Required,Required2,changeTheme,buyOption) {

        // var HCDefaults = $.extend(true, {}, Highcharts.getOptions(), {});

        if (changeTheme) {
            Highcharts.theme.chart.style.fontFamily = 'Arial';
            Highcharts.theme.title.style.fontWeight = 'normal';
            Highcharts.theme.title.style.fontSize = '15px';
            Highcharts.theme.xAxis.labels.style.fontWeight = 'normal';
            Highcharts.theme.yAxis.labels.style.fontWeight = 'normal';
            Highcharts.theme.yAxis.title.style.fontWeight = 'normal';
            Highcharts.setOptions(Highcharts.theme);
        } else {
            Highcharts.theme.chart.style.fontFamily = 'Dosis, sans-serif';
            Highcharts.theme.title.style.fontWeight = 'bold';
            Highcharts.theme.title.style.fontSize = '20px';
            Highcharts.theme.xAxis.labels.style.fontWeight = 'bold';
            Highcharts.theme.yAxis.labels.style.fontWeight = 'bold';
            Highcharts.theme.yAxis.title.style.fontWeight = 'bold';
            Highcharts.setOptions(Highcharts.theme);
        }

        var series;

        if(buyOption){
                        series = [{
                colorByPoint: true,
                data: [{
                    name: 'Scenario One',
                    y: Required,
                }, {
                    name: 'Scenario Two',
                    y: Required2,
                }]
            }];
        }else{
            series = [{
                colorByPoint: true,
                data: [{
                    name: 'Suggested Cover',
                    y: Required,
                }]
            }];
        }



    Highcharts.setOptions({lang: {
            }
        });

        $(containerCC).highcharts({
            chart: {
                type: 'column',
                options3d: {
              enabled: true,
                 alpha: 7,
                 beta: 18,
                 depth: 47,
                 viewDistance: 25
   }
            },
            colors: ['#071520', '#0d2f47', '#195c8d', '#1a74b7', '#2599f0'],
            title: {
                text: title,
                marginLeft: 0,
                marginRight: 0
            },
            exporting: {
                enabled: false
            },
            xAxis: {
                type: 'category',
                labels: {
                    autoRotation: false,
                },
                gridLineColor: 'transparent',
            },
            yAxis: {
                title: {
                    text: 'Suggested Cover Amount($)'
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    animation : false
                }
            },
            tooltip: {
                headerFormat: '<span style="font-weight:700;font-size:14px;">{point.key}</span><br>',
                pointFormatter: function() {
                    return '<b>' + 'Amount : $' + Highcharts.numberFormat((((this.y)).toFixed(2)), 2, '.') + '</b>';

                }
            },
            credits: {
                enabled: false
            },

            series: series,

        },
        function(chart){

            if(!buyOption){
           // chart.series[0].data[0].graphic.attr({
           //      width:50
           //  });
           // chart.xAxis.plotLines.label.attr({
           //      x:0
           //  });
                }


        });

    }
});
