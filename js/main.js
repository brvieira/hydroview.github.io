$(function () {
    $('#data-inicial').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        endDate: new Date()
    });
    $('#data-final').datepicker({
        format: 'dd/mm/yyyy',
        language: 'pt-BR',
        endDate: new Date()
    });
});

$('#buscar').click(function () {
    var dataInicial = $('#data-inicial').data('datepicker').getDate().toISOString();
    var dataFinal = $('#data-final').data('datepicker').getDate().toISOString();
    var dataString = 'https://hydroapi.herokuapp.com/dados/' + dataInicial + '&' + dataFinal;
    var date;
    var dados = $('#dados');
    dados.empty();
    $.getJSON(dataString, function (data) {
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
                date = new Date(value.data).toLocaleString();

                dados.append('<tr><td>' + date + '</td><td>' + value.temperaturaSolucao.toFixed(2) + ' °C</td>' +
                    '<td>' + value.temperaturaInterna + ' °C</td>' +
                    '<td>' + value.umidadeInterna + ' %</td></tr>');
            });
            dados.append('</tbody>');
        }
    });
});