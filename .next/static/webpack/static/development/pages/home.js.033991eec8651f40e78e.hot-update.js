webpackHotUpdate("static/development/pages/home.js",{

/***/ "./component/home.js":
/*!***************************!*\
  !*** ./component/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/layout */ "./pages/layout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_weather__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/weather */ "./actions/weather.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");






var _jsxFileName = "/home/doesit-faris/Gen5/edikw/nextjs/component/home.js";






 // import store from '../store'



var store = Object(redux__WEBPACK_IMPORTED_MODULE_11__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_12__["default"]);
var API_KEY = "df05602edb5dcfcf3f9bf5e033234419";
var form = {
  background: 'rgba(255, 255, 255, 0.7)',
  height: '50vh'
};
var text = {
  color: '#e44534'
};
var title = {
  fontFamily: 'monospace',
  color: '#034172'
};
var input = {
  background: 'transparent',
  border: '1px solid #17a2b8'
};

var home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(home, _React$Component);

  function home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(home).call(this, props));
    _this.state = {
      location: '',
      data_weather: '',
      data_country: '',
      data_location: '',
      data_conditions: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(home, [{
    key: "handleInput",
    value: function handleInput(value) {
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value.target.name, value.target.value));
    }
  }, {
    key: "getWeather",
    value: function getWeather() {
      var _this2 = this;

      if (this.state.location != '') {
        var location = this.state.location; // this.props.getWeather(location).then(res => {
        // 	console.log(res)
        // })

        axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(location, "&appid=").concat(API_KEY, "&units=metric")).then(function (res) {
          console.log(res);

          _this2.setState({
            data_location: res.data,
            data_weather: res.data.main,
            data_country: res.data.sys,
            data_conditions: res.data.weather
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_pages_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "text-center py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        style: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Find out temperature, weather conditions and more")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-5 mx-auto p-5 rounded",
        style: form,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: " d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-2 col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        placeholder: "location",
        className: "form-control",
        name: "location",
        onChange: this.handleInput.bind(this),
        style: input,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "align-item-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "button",
        className: "btn btn-outline-info",
        onClick: function onClick() {
          return _this3.getWeather();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Get Weather"))), this.state.data_location != '' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Location : ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, " ", this.state.data_location.name, ", ", this.state.data_country.country))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "my-3 bg-mute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Temperature : ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.state.data_weather.temp, " 'C"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "my-3 bg-mute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-info font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Humidity : ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, this.state.data_weather.humidity))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "my-3 bg-mute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), this.state.data_conditions.map(function (cond, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "text-info font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, "Conditions : ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, cond.description)));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "my-3 bg-mute",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })) : null))));
    }
  }]);

  return home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (home); // export default connect(null, {getWeather})(home);

/***/ })

})
//# sourceMappingURL=home.js.033991eec8651f40e78e.hot-update.js.map