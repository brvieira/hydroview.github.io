google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart);

var date;
var dataArray = ['Dia, Temperatura Interna'];
var row;
function drawChart() {
    $.getJSON('https://hydroapi.herokuapp.com/dados', function (data) {
        $.each(data, function (key, value) {
            date = new Date(value.data);
            row = [date, value.temperaturaInterna];
            dataArray.push(row);    
        });
    });
    var options = {
        chart: {
            title: 'Temperatura Interna',
            subtitle: 'Em graus Celsius'
        },
        width: 900,
        height: 500
    };

    var dados = google.visualization.arrayToDataTable(dataArray);
    
    var chart = new google.charts.Line(document.getElementById('line-chart'));

    chart.draw(dados, google.charts.Line.convertOptions(options));

}