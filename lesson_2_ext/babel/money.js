"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cache =
/*#__PURE__*/
function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.sponsors = {
      cache: [40000, 5000, 30400, 12000],
      eu: ["SRL", "PLO", "J&K"],
      rus: ["RusAuto", "SBO"]
    };
  }

  _createClass(Cache, [{
    key: "calcCash",
    value: function calcCash() {
      var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var everyCash = this.sponsors.cache.reduce(function (sum, item) {
        return sum += item;
      }, 0);
      return own + everyCash;
    }
  }, {
    key: "getSponsors",
    value: function getSponsors() {
      return this.sponsors;
    }
  }]);

  return Cache;
}();

exports.default = Cache;