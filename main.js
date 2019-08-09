console.log("this script executes");

var d = [document.getElementById('layer1'), document.getElementById('layer2'), document.getElementById('layer3'), document.getElementById('layer4')];

// colors should be r,g,b so they can be dropped into rgba() filters
var colors = ['228,1,169,', '97,236,243,', '163,117,206,', '10,17,192,', '208,3,210,', '99,45,200,'];


for (var i = 0; i < 10; i++) {
    var c = [...Array(4)].map(x => {
            var colorCopy = [...colors];
            return [...Array(2)].map(x => colorCopy.splice(getRandomInt(0,colorCopy.length-1),1));
        }),
        deg = [...Array(4)].map(x => getRandomInt(0,359)),
        x1 = [...Array(4)].map(x => getRandomInt(0,100)),
        x2 = [...Array(4)].map(x => getRandomInt(0,100)),
        y1 = [...Array(4)].map(x => getRandomInt(0,50)),
        y2 = [...Array(4)].map(x => getRandomInt(50,100)),
        lr = [...Array(4)].map(x => getRandomInt(0,1)),
        bt = [...Array(4)].map(x => getRandomInt(0,1));
        s = [1,1,1,1],
        p = [...Array(4)].map(x => getRandomTriangle());

    for (var j = 0; j < 4; j++) {
        t1 = 1.0-(y1[j]<=50?(y1[j]/50.0):((y1[j]-100.0)/-50.0));
        t2 = 1.0-(y2[j]<=50?(y2[j]/50.0):((y2[j]-100.0)/-50.0));
        // console.log(`t: ${t1} => y: ${y1[j]}`);
        // console.log(`t: ${t2} => y: ${y2[j]}`);
        var insert1 = `<div style="border:1px solid rgba(255,255,255${t1}); position:absolute;${bt[j] ? 'bottom' : 'top'}: ${x1[j]}%;${lr[j] ? 'left' : 'right'}: ${y1[j]}%;"><div style="width:${50*s[j]+100}px;height:${50*s[j]+100}px;background:linear-gradient(${deg[j]}deg,rgba(${c[j][0]}${t1}),rgba(${c[j][1]}${t1}));clip-path:polygon(${p[j][0]}% ${p[j][1]}%, ${p[j][2]}% ${p[j][3]}%, ${p[j][4]}% ${p[j][5]}%);position:absolute;${bt[j] ? 'bottom' : 'top'}: ${x1[j]}%;${lr[j] ? 'left' : 'right'}: ${y1[j]}%;"></div></div>`;
        var insert2 = `<div style="border:1px solid rgba(255,255,255${t2}); position:absolute;${bt[j] ? 'bottom' : 'top'}: ${x2[j]}%;${lr[j] ? 'left' : 'right'}: ${y2[j]}%;"><div style="width:${50*s[j]+100}px;height:${50*s[j]+100}px;background:linear-gradient(${deg[j]}deg,rgba(${c[j][0]}${t2}),rgba(${c[j][1]}${t2}));clip-path:polygon(${p[j][0]}% ${p[j][1]}%, ${p[j][2]}% ${p[j][3]}%, ${p[j][4]}% ${p[j][5]}%);position:absolute;${bt[j] ? 'bottom' : 'top'}: ${x2[j]}%;${lr[j] ? 'left' : 'right'}: ${y2[j]}%;"></div></div>`;
        // console.log(insert1);
        // console.log(insert2);
        d[j].innerHTML += insert1 + insert2;
    }
}

window.addEventListener('scroll', () => {
    let parent = document.getElementById('sprites');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * (i+1) / (children.length*4)) + 'px)';
    }
}, false)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTriangle() {
    var x1, x2, x3, y1, y2, y3;

    x1 = getRandomInt(0,100);
    y1 = getRandomInt(0,25);
    x2 = getRandomInt(0,60);
    y2 = x1 < 50 ? getRandomInt(30, 100) : getRandomInt(0, 70);
    x3 = getRandomInt(40,100);
    y3 = x1 > 50 ? getRandomInt(30, 100) : getRandomInt(0, 70);

    return [x1, y1, x2, y2, x3, y3];
}