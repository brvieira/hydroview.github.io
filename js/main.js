$(function () {
    var dados = $('#dados');
    var date;
    $.getJSON('https://hydroapi.herokuapp.com/dados', function (data) {
        if (data.length == 0) {
            dados.append('<spam>Não existem dados à serem exibidos</spam>');
        }
        else {
            dados.append("<thead>");
            dados.append("<tr>");
            dados.append("<th>Data</th>");
            dados.append("<th>Temperatura Solução</th>");
            dados.append("<th>Temperatura Interna</th>");
            dados.append("<th>Umidade Interna</th>");
            dados.append("</tr>");
            dados.append("</thead>");
            dados.append("<tbody>");
            $.each(data, function (key, value) {
                date = new Date(value.data);

                dados.append('<tr><td>' + date + '</td><td>' + value.temperaturaSolucao.toFixed(2) + ' °C</td>' +
                    '<td>' + value.temperaturaInterna + ' °C</td>' +
                    '<td>' + value.umidadeInterna + ' %</td></tr>');
            });
            dados.append('</tbody>');
        }
    });
});