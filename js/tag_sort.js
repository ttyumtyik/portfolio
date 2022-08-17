'use strict';

const allTag = document.getElementById('all');
const uiuxTag = document.getElementById('uiux_d');
const graphicTag = document.getElementById('graphic_d');
const civiTag = document.getElementById('civi_d');
const webTag = document.getElementById('web_d');
const motionTag = document.getElementById('motion_d');
const planningTag = document.getElementById('planning');
const htmlTag = document.getElementById('html_tag');
const cssTag = document.getElementById('css_tag');
const jsTag = document.getElementById('js_tag');
const drawingTag = document.getElementById('drawing');
const illustrationTag = document.getElementById('illustration');
const calligraphyTag = document.getElementById('calligraphy');
const aiTag = document.getElementById('adobe_ai');
const psTag = document.getElementById('adobe_ps');
const xdTag = document.getElementById('adobe_xd');
const aeTag = document.getElementById('adobe_ae');
const prTag = document.getElementById('adobe_pr');

let uiuxCont = document.querySelectorAll('.uiux_d');
let graphicCont = document.querySelectorAll('.graphic_d');
let civiCont = document.querySelectorAll('.civi_d');
let webCont = document.querySelectorAll('.web_d');
let motinoCont = document.querySelectorAll('.motion_d');
let planningCont = document.querySelectorAll('.planning');
let htmlCont = document.querySelectorAll('.html_tag');
let cssCont = document.querySelectorAll('.css_tag');
let jsCont = document.querySelectorAll('.js_tag');
let drawingCont = document.querySelectorAll('.drawing');
let illustrationCont = document.querySelectorAll('.illustration');
let calligraphyCont = document.querySelectorAll('.calligraphy');
let aiCont = document.querySelectorAll('.adobe_ai');
let psCont = document.querySelectorAll('.adobe_ps');
let xdCont = document.querySelectorAll('.adobe_xd');
let aeCont = document.querySelectorAll('.adobe_ae');
let prCont = document.querySelectorAll('.adobe_pr');


/* 複数のクラスを付加して、displayで切り替えする場合、
　　1つのクラスでdisplay:noneが効いてしまうと、非表示になってしまう。
　　→ どうやって切り替える？条件分岐の必要がある？
*/
allTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    graphicCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    civiCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    webCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    motinoCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    planningCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    htmlCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    cssCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    jsCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    drawingCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    illustrationCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    calligraphyCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    aiCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    psCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    xdCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    aeCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    prCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
};

uiuxTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('uiux_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

graphicTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('graphic_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

civiTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('civi_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

webTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('web_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

motionTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('motion_d') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

planningTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('planning') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

// htmlTag.onclick = function() {
//     uiuxCont.forEach(function(item) {
//         item.style.display = 'none';
//     });
//     graphicCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     civiCont.forEach(function(item) {
//         item.style.display = 'block';
//     })
//     webCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     motinoCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     planningCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     htmlCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     cssCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     jsCont.forEach(function(item) {
//         item.style.display = 'nonek';
//     })
//     drawingCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     illustrationCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     calligraphyCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aiCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     psCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     xdCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aeCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     prCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
// };

// cssTag.onclick = function() {
//     uiuxCont.forEach(function(item) {
//         item.style.display = 'none';
//     });
//     graphicCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     civiCont.forEach(function(item) {
//         item.style.display = 'block';
//     })
//     webCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     motinoCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     planningCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     htmlCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     cssCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     jsCont.forEach(function(item) {
//         item.style.display = 'nonek';
//     })
//     drawingCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     illustrationCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     calligraphyCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aiCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     psCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     xdCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aeCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     prCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
// };

// jsTag.onclick = function() {
//     uiuxCont.forEach(function(item) {
//         item.style.display = 'none';
//     });
//     graphicCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     civiCont.forEach(function(item) {
//         item.style.display = 'block';
//     })
//     webCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     motinoCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     planningCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     htmlCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     cssCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     jsCont.forEach(function(item) {
//         item.style.display = 'nonek';
//     })
//     drawingCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     illustrationCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     calligraphyCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aiCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     psCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     xdCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aeCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     prCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
// };

// drawingTag.onclick = function() {
//     uiuxCont.forEach(function(item) {
//         item.style.display = 'none';
//     });
//     graphicCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     civiCont.forEach(function(item) {
//         item.style.display = 'block';
//     })
//     webCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     motinoCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     planningCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     htmlCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     cssCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     jsCont.forEach(function(item) {
//         item.style.display = 'nonek';
//     })
//     drawingCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     illustrationCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     calligraphyCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aiCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     psCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     xdCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aeCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     prCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
// };

// illustrationTag.onclick = function() {
//     uiuxCont.forEach(function(item) {
//         item.style.display = 'none';
//     });
//     graphicCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     civiCont.forEach(function(item) {
//         item.style.display = 'block';
//     })
//     webCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     motinoCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     planningCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     htmlCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     cssCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     jsCont.forEach(function(item) {
//         item.style.display = 'nonek';
//     })
//     drawingCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     illustrationCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     calligraphyCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aiCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     psCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     xdCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     aeCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
//     prCont.forEach(function(item) {
//         item.style.display = 'none';
//     })
// };

calligraphyTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('calligraphy') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

aiTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('adobe_ai') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

psTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('adobe_ps') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

xdTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('adobe_xd') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

aeTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
    prCont.forEach(function(item) {
        if(item.classList.contains('adobe_ae') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
};

prTag.onclick = function() {
    uiuxCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    graphicCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    civiCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    webCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    motinoCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    planningCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    htmlCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    cssCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    jsCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    drawingCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    illustrationCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    calligraphyCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aiCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    psCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    xdCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    aeCont.forEach(function(item) {
        if(item.classList.contains('adobe_pr') == true) {
            item.classList.remove('none_display');
        } else {
            item.classList.remove('none_display');
            item.classList.add('none_display');
        }
    });
    prCont.forEach(function(item) {
        item.classList.remove('none_display');
    });
};
