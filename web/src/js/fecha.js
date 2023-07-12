
$(document).ready(function () {
    $("#botonFecha").click(function () {
        $("#fecha").datepicker({
            dateFormat: "dd/mm/yy"
        }).datepicker("show");
    });
});
