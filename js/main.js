$(function () {
    var $dados = $('#dados');

    $.getJSON('https://hydroapi.herokuapp.com/dados', function (data) {
        if (data == null) {
            $dados.append('<spam>Não existem dados à serem exibidos</spam>');
        }
        else {
            $dados.append('<tbody>');
            $.each(data, function (key, value) {
                $dados.append('<tr><td>' + value.temperaturaInterna + ' °C</td>' +
                              '<td>' + value.umidadeInterna + ' %</td></tr>');
            });
            $dados.append('</tbody>');
        }
    });
});