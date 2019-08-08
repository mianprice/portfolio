console.log("this script executes");

var d1 = document.getElementById('layer1');
var d2 = document.getElementById('layer1');
var d3 = document.getElementById('layer1');
var d4 = document.getElementById('layer1');

for (var i = 0; i < 50; i++) {
    var r1 = getRandomInt(0, 255),
        r2 = getRandomInt(0, 255),
        r3 = getRandomInt(0, 255),
        r4 = getRandomInt(0, 255),
        g1 = getRandomInt(0, 255),
        g2 = getRandomInt(0, 255),
        g3 = getRandomInt(0, 255),
        g4 = getRandomInt(0, 255),
        b1 = getRandomInt(0, 255),
        b2 = getRandomInt(0, 255),
        b3 = getRandomInt(0, 255),
        b4 = getRandomInt(0, 255),
        x1 = getRandomInt(0, 100),
        x2 = getRandomInt(0, 100),
        x3 = getRandomInt(0, 100),
        x4 = getRandomInt(0, 100),
        y1 = getRandomInt(0, 100),
        y2 = getRandomInt(0, 100),
        y3 = getRandomInt(0, 100),
        y4 = getRandomInt(0, 100),
        i1 = getRandomInt(0, 100),
        i2 = getRandomInt(0, 100),
        i3 = getRandomInt(0, 100),
        i4 = getRandomInt(0, 100),
        j1 = getRandomInt(0, 100),
        j2 = getRandomInt(0, 100),
        j3 = getRandomInt(0, 100),
        j4 = getRandomInt(0, 100),
        k1 = getRandomInt(0, 100),
        k2 = getRandomInt(0, 100),
        k3 = getRandomInt(0, 100),
        k4 = getRandomInt(0, 100),
        l1 = getRandomInt(0, 100),
        l2 = getRandomInt(0, 100),
        l3 = getRandomInt(0, 100),
        l4 = getRandomInt(0, 100),
        m1 = getRandomInt(0, 100),
        m2 = getRandomInt(0, 100),
        m3 = getRandomInt(0, 100),
        m4 = getRandomInt(0, 100),
        n1 = getRandomInt(0, 100),
        n2 = getRandomInt(0, 100),
        n3 = getRandomInt(0, 100),
        n4 = getRandomInt(0, 100);

    var one = `<div style="background-color:rgb(${r1},${g1},${b1});clip-path:polygon(${i1}% ${l1}%, ${j1}% ${m1}%, ${k1}% ${n1}%);position:absolute;top: ${x1}%;left: ${y1}%;"></div>`;
    var two = `<div style="background-color:rgb(${r2},${g2},${b2});clip-path:polygon(${i2}% ${l2}%, ${j2}% ${m2}%, ${k2}% ${n2}%);position:absolute;top: ${x2}%;left: ${y2}%;"></div>`;
    var three = `<div style="background-color:rgb(${r3},${g3},${b3});clip-path:polygon(${i3}% ${l3}%, ${j3}% ${m3}%, ${k3}% ${n3}%);position:absolute;top: ${x3}%;left: ${y3}%;"></div>`;
    var four = `<div style="background-color:rgb(${r4},${g4},${b4});clip-path:polygon(${i4}% ${l4}%, ${j4}% ${m4}%, ${k4}% ${n4}%);position:absolute;top: ${x4}%;left: ${y4}%;"></div>`;

    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);

    d1.innerHTML += one;
    d2.innerHTML += two;
    d3.innerHTML += three;
    d4.innerHTML += four;
}

window.addEventListener('scroll', () => {
    let parent = document.getElementById('sprites');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
 }, false)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}