"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sponsors = exports.money = void 0;
var sponsors = {
  cache: [40000, 5000, 30400, 12000],
  eu: ["SRL", "PLO", "J&K"],
  rus: ["RusAuto", "SBO"]
};
exports.sponsors = sponsors;
var own = 0;
var money = sponsors.cache.reduce(function (sum, item) {
  return sum += item;
}, 0) + own;
exports.money = money;