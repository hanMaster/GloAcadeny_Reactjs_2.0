!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);var o=["Alex","","ludmila","Viktor","","oleg","iNna","Ivan","Alex","Olga"," Ann"].filter(e=>""!=e).map(e=>e.toLowerCase().trim());const n={cache:[4e4,5e3,30400,12e3],eu:["SRL","PLO","J&K"],rus:["RusAuto","SBO"]};new class{constructor({owner:e,director:r="Victor",cash:t,emp:o}){this.owner=e,this.director=r,this.cash=t,this.emp=o}makeBusiness(){const{eu:e,rus:r}=n,t=[...e,...r,"unexpected sponsor"];console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`),console.log("And we have a sponsors: "),console.log(...t),console.log(`Note. Be careful with ${n.eu[0]}. It's a huge risk.`)}}({owner:"Sam",cash:((e=0)=>{return e+n.cache.reduce((e,r)=>e+r,0)})(100),emp:o}).makeBusiness()}]);