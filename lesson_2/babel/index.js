"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

var _employers = _interopRequireDefault(require("./employers"));

var _money = require("./money");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Business =
/*#__PURE__*/
function () {
  function Business(_ref) {
    var owner = _ref.owner,
        _ref$director = _ref.director,
        director = _ref$director === void 0 ? "Victor" : _ref$director,
        cash = _ref.cash,
        emp = _ref.emp;

    _classCallCheck(this, Business);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(Business, [{
    key: "makeBusiness",
    value: function makeBusiness() {
      var _console;

      var eu = _money.sponsors.eu,
          rus = _money.sponsors.rus;
      var sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ["unexpected sponsor"]);
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log("And we have a sponsors: ");

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(_money.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return Business;
}();

var business = new Business({
  owner: "Sam",
  cash: _money.money,
  emp: _employers.default
});
business.makeBusiness();