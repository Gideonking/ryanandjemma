require('./bootstrap');

$(function() {
    var scene = document.querySelectorAll('.js--cutout')[0];
    var parallaxInstance = new Parallax(scene);
});