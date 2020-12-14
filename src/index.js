(async function main(){
    init();
 })();

function init() {
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize(event) {
    var svg = document.querySelector('svg');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var svgWidth = svg.viewBox.baseVal.width;
    var svgHeight = svg.viewBox.baseVal.height;
    var ratio = width / height;
    var svgRatio = svgWidth / svgHeight

    if (ratio > svgRatio && !svg.classList.contains('fullwidth')) {
        svg.classList.remove('fullheight');
        return svg.classList.add('fullwidth');
    }

    if (ratio < svgRatio && !svg.classList.contains('fullheight')) {
        svg.classList.remove('fullwidth');
        return svg.classList.add('fullheight');
    }
}
