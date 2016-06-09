$(document).ready(function() {
    var project = 'boudreaubros';
    var url = window.location.href;
    option = url.match(/project=(.*)/)[1];
    showDiv(option);    
});
function showDiv(option) {
    $('.projects').hide();
    $('#' + option).show();
}