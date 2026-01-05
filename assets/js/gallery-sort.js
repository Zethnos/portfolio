"use strict";
var gal = {};
gal.hide = function (sel) {
    gal.hideElements(gal.getElements(sel));
};
gal.hideElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.hideElement(elements[i]);
    }
};
gal.hideElement = function (element) {
    gal.styleElement(element, "display", "none");
};
gal.show = function (sel, a) {
    var elements = gal.getElements(sel);
    if (a) {
        gal.hideElements(elements);
    }
    gal.showElements(elements);
};
gal.showElements = function (elements) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.showElement(elements[i]);
    }
};
gal.showElement = function (element) {
    gal.styleElement(element, "display", "block");
};
gal.styleElement = function (element, prop, val) {
    element.style.setProperty(prop, val);
};
gal.toggleShow = function (sel) {
    var i, x = gal.getElements(sel),
        l = x.length;
    for (i = 0; i < l; i++) {
        if (x[i].style.display == "none") {
            gal.styleElement(x[i], "display", "block");
        } else {
            gal.styleElement(x[i], "display", "none");
        }
    }
};
gal.addClass = function (sel, name) {
    gal.addClassElements(gal.getElements(sel), name);
};
gal.addClassElements = function (elements, name) {
    var i, l = elements.length;
    for (i = 0; i < l; i++) {
        gal.addClassElement(elements[i], name);
    }
};
gal.addClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
};
gal.removeClass = function (sel, name) {
    gal.removeClassElements(gal.getElements(sel), name);
};
gal.removeClassElements = function (elements, name) {
    var i, l = elements.length,
        arr1, arr2, j;
    for (i = 0; i < l; i++) {
        gal.removeClassElement(elements[i], name);
    }
};
gal.removeClassElement = function (element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
};
gal.getElements = function (id) {
    if (typeof id == "object") {
        return [id];
    } else {
        return document.querySelectorAll(id);
    }
};
