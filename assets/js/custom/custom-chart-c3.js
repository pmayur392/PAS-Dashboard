/*
---------------------------------
    : Custom - C3 Charts js :
---------------------------------
*/
"use strict";
$(document).ready(function () {   

    /* -- C3 - Stacked Area Chart New -- */
    var stackedChart = c3.generate({
        bindto: '#c3-stacked-area',
        color: { pattern: ["#0080ff", "#18d26b"] },
        data: {
            columns: [
                ['SalesAnalytics', 100, 75, 50, 75, 50, 75, 100],
                ['MonthlyEarnings', 90, 65, 40, 65, 40, 65, 90]
            ],
            types: {
                SalesAnalytics: 'area-spline',
                MonthlyEarnings: 'area-spline'
            },
            groups: [['SeriesA', 'SeriesB']]
        }
    });


    /* -- C3 - Bar Chart -- */
    var barChart = c3.generate({
        bindto: '#c3-bar',
        color: { pattern: ["#0080ff", "#18d26b"] },
        data: {
            columns: [
                ['SeriesA', 30, 200, 100, 400, 150, 250],
                ['SeriesB', 130, 100, 140, 200, 150, 50]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5
            }
        }
    });

    /* -- C3 - Pie Chart -- */
    var pieChart = c3.generate({
        bindto: '#c3-pie',
        color: { pattern: ["#0080ff", "#d4d8de", "#18d26b"] },
        data: {
            columns: [
                ['SeriesA', 40],
                ['SeriesB', 25],
                ['SeriesC', 35],
            ],
            type: 'pie',
            onclick: function (d, i) { },
            onmouseover: function (d, i) { },
            onmouseout: function (d, i) { }
        }
    });

    /* -- C3 - Donut Chart -- */
    var donutChart = c3.generate({
        bindto: '#c3-donut',
        color: { pattern: ["#0080ff", "#d4d8de", "#18d26b"] },
        data: {
            columns: [
                ['SeriesA', 40],
                ['SeriesB', 25],
                ['SeriesC', 35],
            ],
            type: 'donut',
            onclick: function (d, i) { },
            onmouseover: function (d, i) { },
            onmouseout: function (d, i) { }
        },
        donut: {
            title: "Iris Petal Width",
            width: 40,
            label: {
                show: 0
            }
        }
    });



});