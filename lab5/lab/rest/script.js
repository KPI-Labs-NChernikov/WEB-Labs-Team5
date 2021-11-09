$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    $("#accordion").accordion();
});

$(function () {
    $("#menu").menu();
});

$('.prettySocial').prettySocial();

var iframe = '<iframe width="275" height="120" frameborder="0" src="https://informer.minfin.com.ua/ua/gen/course/?color=yellow" vspace="0" scrolling="no" hspace="0" allowtransparency="true"style="width:275px;height:120px;overflow:hidden;"></iframe>';
var cl = 'minfin-informer-m1Fn-currency';
document.getElementById(cl).innerHTML = iframe;

var css_file = document.createElement("link");
css_file.setAttribute("rel", "stylesheet");
css_file.setAttribute("href", "https://s.bookcdn.com//css/cl/bw-cl-180x170r9.css?v=0.0.1");
document.getElementsByTagName("head")[0].appendChild(css_file);

function fulltime() {
    var time = new Date();
    document.clock.full.value = time.toLocaleString();
    setTimeout('fulltime()', 500)
}

fulltime();

$('.gifplayer').gifplayer();