import React from "react";

function add(a,b){
    const c = a + b;
    return c;
}

function sub(d,e){
    const f = d - e;
    return f;
}

function mul(g,h){
    const i = g * h;
    return i;
}

function div(j,k){
    const l = j / k;
    return l;
}

export default add;

export {sub , mul , div};