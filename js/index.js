/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('a#btn-start-login').click(function () {

        var html = $('div#form-login').html();

        bootbox.dialog({
            title: "Connexion à la plateforme",
            message: html,
            buttons: {
                main: {
                    label: "Conexion",
                    className: "btn-primary",
                    callback: function () {
                        bootbox.alert("C'est parti !")
                    }
                }
            }
        });

    });
});