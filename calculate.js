
// This is JavaScript. It is similar to Python

let a,
    b,
    radA,
    radB,
    sinApB,
    sinAmB,
    cosApB,
    cosAmB;

function valuesChanged() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    radA = toRadians(a);
    radB = toRadians(b);
    fillTable();
}

function fillTable() {
    document.getElementById("at").innerText = a;
    document.getElementById("bt").innerText = b;
    sinPlus();
    sinMinus();
    cosPlus();
    cosMinus();
}

function sinPlus() {
    let ans = (Math.sin(radA) * Math.cos(radB)) + (Math.cos(radA) * Math.sin(radB));
    document.getElementById("s1t").innerText = ans.toFixed(2);
}

function sinMinus() {
    let ans = (Math.sin(radA) * Math.cos(radB)) - (Math.cos(radA) * Math.sin(radB));
    document.getElementById("s2t").innerText = ans.toFixed(2);
}

function cosPlus() {
    let ans = (Math.cos(radA) * Math.cos(radB)) - (Math.sin(radA) * Math.sin(radB));
    document.getElementById("c1t").innerText = ans.toFixed(2);
}

function cosMinus() {
    let ans = (Math.cos(radA) * Math.cos(radB)) + (Math.sin(radA) * Math.sin(radB));
    document.getElementById("c2t").innerText = ans.toFixed(2);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

valuesChanged();