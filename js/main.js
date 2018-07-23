$(function () {
    var $dados = $('#dados');

    $.getJSON('https://hydroapi.herokuapp.com/dados', function (data) {
        console.log(data);
        if (data.length == 0) {
            $dados.append('<spam>Não existem dados à serem exibidos</spam>');
        }
        else {
            $dados.append("<thead>");
            $dados.append("<tr>");
            $dados.append("<th>Temperatura Interna</th>");
            $dados.append("<th>Umidade Interna</th>");
            $dados.append("</tr>");
            $dados.append("</thead>");
            $dados.append("<tbody>");
            $.each(data, function (key, value) {
                $dados.append('<tr><td>' + value.temperaturaInterna + ' °C</td>' +
                              '<td>' + value.umidadeInterna + ' %</td></tr>');
            });
            $dados.append('</tbody>');
        }
    });
});