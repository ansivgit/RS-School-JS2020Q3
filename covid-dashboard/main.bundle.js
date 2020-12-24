/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/_common/Element.js":
/*!*******************************************!*\
  !*** ./src/components/_common/Element.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Element = /*#__PURE__*/function () {
  /**
   * @param {Object} params - an object with instance params
   * @param {String} params.tagName - name of created HTML Element
   * @param {String} params.className - a space-delimited string of CSS classes
   * @param {Array<Array<String>>} params.textContent - an array of ["attr", "value"] pairs
   */
  function Element() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$tagName = _ref.tagName,
        tagName = _ref$tagName === void 0 ? _js_constants_index__WEBPACK_IMPORTED_MODULE_0__.TAGS.DIV : _ref$tagName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        _ref$textContent = _ref.textContent,
        textContent = _ref$textContent === void 0 ? null : _ref$textContent,
        _ref$attrs = _ref.attrs,
        attrs = _ref$attrs === void 0 ? null : _ref$attrs;

    _classCallCheck(this, Element);

    this.element = document.createElement(tagName);
    this.addClasses(className);
    this.addAttrs(attrs);

    if (textContent) {
      this.element.textContent = textContent;
    }
  }

  _createClass(Element, [{
    key: "addClasses",
    value: function addClasses(str) {
      if (str) {
        var _this$element$classLi;

        (_this$element$classLi = this.element.classList).add.apply(_this$element$classLi, _toConsumableArray(str.split(' ')));
      }
    }
  }, {
    key: "addAttrs",
    value: function addAttrs(arr) {
      var _this = this;

      if (arr) {
        arr.forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              attr = _ref3[0],
              val = _ref3[1];

          _this.element.setAttribute(attr, val !== null && val !== void 0 ? val : '');
        });
      }
    }
    /**
     * @param {Object} params - an object with instance params
     * @param {String} params.tagName - name of created HTML Element
     * @param {String} params.className - a space-delimited string of CSS classes
     * @param {Array<Array<String>>} params.textContent - an array of ["attr", "value"] pairs
     */

  }], [{
    key: "createDOM",
    value: function createDOM(params) {
      return new this(params).element;
    }
  }, {
    key: "sendUpdateRequest",
    value: function sendUpdateRequest(dispatcher, key, value) {
      var customEvent = new CustomEvent('updateRequest', {
        bubbles: true,
        detail: _defineProperty({}, key, value)
      });
      dispatcher.dispatchEvent(customEvent);
    }
  }]);

  return Element;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);

/***/ }),

/***/ "./src/components/_common/fullscreenContainer/FullscreenContainer.js":
/*!***************************************************************************!*\
  !*** ./src/components/_common/fullscreenContainer/FullscreenContainer.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FullscreenContainer.scss */ "./src/components/_common/fullscreenContainer/FullscreenContainer.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var FullscreenContainer = /*#__PURE__*/function (_Element) {
  _inherits(FullscreenContainer, _Element);

  var _super = _createSuper(FullscreenContainer);

  function FullscreenContainer() {
    var _this;

    _classCallCheck(this, FullscreenContainer);

    _this = _super.call(this, {
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.FULLSCREEN
    });
    _this.fullscreenButton = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.FULLSCREEN_BTN
    });

    _this.element.append(_this.fullscreenButton);

    _this.fullscreenButton.addEventListener('click', function () {
      _this.element.classList.toggle(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.FULLSCREEN_ACTIVE);

      var event = new CustomEvent('fullscreenSet', {
        bubbles: true
      });

      _this.fullscreenButton.dispatchEvent(event);
    });

    return _this;
  }

  return FullscreenContainer;
}(_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullscreenContainer);

/***/ }),

/***/ "./src/components/_common/searchItem/SearchItem.js":
/*!*********************************************************!*\
  !*** ./src/components/_common/searchItem/SearchItem.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SearchItem_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchItem.scss */ "./src/components/_common/searchItem/SearchItem.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SearchItem = /*#__PURE__*/function (_Element) {
  _inherits(SearchItem, _Element);

  var _super = _createSuper(SearchItem);

  function SearchItem(_ref) {
    var _this;

    var flag = _ref.flag,
        name = _ref.name,
        value = _ref.value,
        currentName = _ref.currentName;

    _classCallCheck(this, SearchItem);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH["SEARCH-ITEM"],
      attrs: [['data-state-name', name]]
    });
    _this.name = name;

    if (name === currentName) {
      _this.element.classList.add('search-item--active');
    }

    var titleElem = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H3,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH["SEARCH-ITEM_TITLE"],
      textContent: name
    });
    var valueElem = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H3,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH["SEARCH-ITEM_VALUE"],
      textContent: value.toLocaleString('ru-RU') || '0'
    });
    var flagElem = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM();

    if (flag) {
      flagElem = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
        tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.IMG,
        className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH["SEARCH-ITEM_FLAG"],
        attrs: [['alt', name], ['src', flag]]
      });
    }

    _this.element.append(flagElem, titleElem, valueElem);

    _this.element.addEventListener('click', function () {
      SearchItem.sendUpdateRequest(_this.element, 'name', _this.name);
    });

    return _this;
  }

  return SearchItem;
}(_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchItem);

/***/ }),

/***/ "./src/components/_common/tableRow/TableRow.js":
/*!*****************************************************!*\
  !*** ./src/components/_common/tableRow/TableRow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _TableRow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableRow.scss */ "./src/components/_common/tableRow/TableRow.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var TableRow = /*#__PURE__*/function (_Element) {
  _inherits(TableRow, _Element);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        status = _ref.status,
        outerClasses = _ref.outerClasses;

    _classCallCheck(this, TableRow);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE["TABLE-ROW"])
    });

    _this.addClasses(outerClasses);

    var title = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.P,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE["TABLE-ROW_TITLE"],
      textContent: status
    });
    _this.value = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE["TABLE-ROW_VALUE"]
    });

    _this.element.append(title, _this.value);

    return _this;
  }

  _createClass(TableRow, [{
    key: "update",
    value: function update(val) {
      this.value.textContent = val.toLocaleString('ru-RU');
    }
  }]);

  return TableRow;
}(_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRow);

/***/ }),

/***/ "./src/components/_common/tabs/Tabs.js":
/*!*********************************************!*\
  !*** ./src/components/_common/tabs/Tabs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Tabs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.scss */ "./src/components/_common/tabs/Tabs.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Tabs = /*#__PURE__*/function (_Element) {
  _inherits(Tabs, _Element);

  var _super = _createSuper(Tabs);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, {
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TABS_CONTAINER
    });
    _this.btnCases = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TABS_BTN, " ").concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TABS_BTN-ACTIVE"]),
      textContent: 'Cases',
      attrs: [['data-state-key', 'status'], ['data-state-value', 'cases']]
    });
    _this.btnDeaths = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TABS_BTN,
      textContent: 'Deaths',
      attrs: [['data-state-key', 'status'], ['data-state-value', 'deaths']]
    });
    _this.btnRecovered = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TABS_BTN,
      textContent: 'Recovered',
      attrs: [['data-state-key', 'status'], ['data-state-value', 'recovered']]
    });
    _this.buttons = [_this.btnCases, _this.btnDeaths, _this.btnRecovered];

    _this.element.append(_this.btnCases, _this.btnDeaths, _this.btnRecovered);

    _this.element.addEventListener('click', function (event) {
      var targetCond = event.target.classList.contains(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TABS_BTN);
      var activeCond = event.target.classList.contains(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TABS_BTN-ACTIVE"]);

      if (targetCond && !activeCond) {
        var changedKey = event.target.dataset.stateKey;
        var changedValue = event.target.dataset.stateValue;
        Tabs.sendUpdateRequest(event.target, changedKey, changedValue);
      }
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "update",
    value: function update(state) {
      this.buttons.forEach(function (button) {
        var btnKey = button.dataset.stateKey;
        var btnValue = button.dataset.stateValue;

        if (state[btnKey] === btnValue) {
          button.classList.add(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TABS_BTN-ACTIVE"]);
        } else {
          button.classList.remove(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TABS_BTN-ACTIVE"]);
        }
      });
    }
  }]);

  return Tabs;
}(_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./src/components/_common/toggle/Toggle.js":
/*!*************************************************!*\
  !*** ./src/components/_common/toggle/Toggle.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggle.scss */ "./src/components/_common/toggle/Toggle.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Toggle = /*#__PURE__*/function (_Element) {
  _inherits(Toggle, _Element);

  var _super = _createSuper(Toggle);

  /**
   * @param {Object} params - an object with instance params
   * @param {String} params.type - string 'period' or 'amount' - toggle period or amount
   * @param {Array} params.btnTitles - an array of titles for buttons
   */
  function Toggle() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? null : _ref$type,
        _ref$btnTitles = _ref.btnTitles,
        btnTitles = _ref$btnTitles === void 0 ? null : _ref$btnTitles;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, {
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES, " ").concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES, "--").concat(type)
    });
    var key = type === 'period' ? 'figure' : type;
    var values = {
      figure: {
        total: 'all',
        'last day': 'today',
        daily: 'today'
      },
      amount: {
        abs: 'abs',
        'per 100K': '100k'
      }
    };
    _this.btnLeft = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_BTN, " ").concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TOGGLES_BTN-ACTIVE"]),
      textContent: btnTitles[0],
      attrs: [['data-state-key', key], ['data-state-value', values[key][btnTitles[0]]]]
    });
    _this.btnRight = _Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_BTN),
      textContent: btnTitles[1],
      attrs: [['data-state-key', key], ['data-state-value', values[key][btnTitles[1]]]]
    });
    _this.buttons = [_this.btnRight, _this.btnLeft];

    _this.element.append(_this.btnLeft, _this.btnRight);

    _this.element.addEventListener('click', function (event) {
      var targetCond = event.target.classList.contains(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_BTN);
      var activeCond = event.target.classList.contains(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TOGGLES_BTN-ACTIVE"]);

      if (targetCond && !activeCond) {
        var changedKey = event.target.dataset.stateKey;
        var changedValue = event.target.dataset.stateValue;
        Toggle.sendUpdateRequest(event.target, changedKey, changedValue);
      }
    });

    return _this;
  }

  _createClass(Toggle, [{
    key: "update",
    value: function update(state) {
      this.buttons.forEach(function (button) {
        var btnKey = button.dataset.stateKey;
        var btnValue = button.dataset.stateValue;

        if (state[btnKey] === btnValue) {
          button.classList.add(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TOGGLES_BTN-ACTIVE"]);
        } else {
          button.classList.remove(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["TOGGLES_BTN-ACTIVE"]);
        }
      });
    }
  }]);

  return Toggle;
}(_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Toggle);

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.scss */ "./src/components/footer/Footer.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _assets_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/rs_school_logo.svg */ "./src/assets/rs_school_logo.svg");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Footer = /*#__PURE__*/function (_Element) {
  _inherits(Footer, _Element);

  var _super = _createSuper(Footer);

  function Footer() {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.FOOTER,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.FOOTER
    });
    var wrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.CONTENT_WRAPPER
    });
    var authors = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.FOOTER_AUTHORS,
      textContent: 'Created by: '
    });
    var author1 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.A,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["FOOTER_AUTHORS-PERS"],
      textContent: 'va-z',
      attrs: [['href', 'https://github.com/va-z'], ['target', '_blank']]
    });
    var author2 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.A,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["FOOTER_AUTHORS-PERS"],
      textContent: 'AnnaZAS',
      attrs: [['href', 'https://github.com/ansivgit'], ['target', '_blank']]
    });
    var rssLogo = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.A,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["FOOTER_RSS-LOGO"],
      attrs: [['href', 'https://rs.school/js/'], ['target', '_blank']]
    });
    var logoImg = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.IMG,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["RSS-LOGO_IMG"],
      attrs: [['src', _assets_rs_school_logo_svg__WEBPACK_IMPORTED_MODULE_3__], ['alt', 'RSS-logo']]
    });
    authors.append(author1, ' and ', author2, ' in 2020');
    rssLogo.append(logoImg);
    wrapper.append(authors, rssLogo);

    _this.element.append(wrapper);

    return _this;
  }

  return Footer;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/graph/Graph.js":
/*!***************************************!*\
  !*** ./src/components/graph/Graph.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Graph_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph.scss */ "./src/components/graph/Graph.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/fullscreenContainer/FullscreenContainer */ "./src/components/_common/fullscreenContainer/FullscreenContainer.js");
/* harmony import */ var _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/toggle/Toggle */ "./src/components/_common/toggle/Toggle.js");
/* harmony import */ var _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/tabs/Tabs */ "./src/components/_common/tabs/Tabs.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Graph = /*#__PURE__*/function (_FullscreenContainer) {
  _inherits(Graph, _FullscreenContainer);

  var _super = _createSuper(Graph);

  function Graph() {
    var _this;

    _classCallCheck(this, Graph);

    _this = _super.call(this);

    _this.addClasses(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.GRAPH.GRAPH);

    _this.title = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H2,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.GRAPH.GRAPH_TITLE,
      textContent: 'Global/Country'
    });
    _this.graph = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.GRAPH.GRAPH_BLOCK
    });
    _this.togglesContainer = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_CONTAINER
    });
    _this.togglePeriod = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_4__.default({
      type: 'period',
      btnTitles: ['total', 'daily']
    });
    _this.toggleAmount = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_4__.default({
      type: 'amount',
      btnTitles: ['abs', 'per 100K']
    });
    _this.tabs = new _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__.default();
    _this.controls = [_this.togglePeriod, _this.toggleAmount, _this.tabs];

    _this.togglesContainer.append(_this.togglePeriod.element, _this.toggleAmount.element);

    _this.element.append(_this.title, _this.graph, _this.togglesContainer, _this.tabs.element);

    return _this;
  }

  _createClass(Graph, [{
    key: "update",
    value: function update(_ref) {
      var state = _ref.state,
          data = _ref.data,
          change = _ref.change;

      if (change) {
        this.controls.forEach(function (control) {
          control.update(state);
        });
      }

      this.title.textContent = state.name;
    }
  }, {
    key: "getSize",
    value: function getSize() {
      var size = {
        height: 200,
        width: 274
      };

      if (this.element.classList.contains('fullscreen--active') && !window.innerWidth < 1024) {
        size.height = this.element.clientHeight - 100;
        size.width = this.element.clientWidth - 26;
      }

      if (window.innerWidth < 1024) {
        size.width = 425;
      }

      return size;
    }
  }]);

  return Graph;
}(_common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_3__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.scss */ "./src/components/header/Header.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Header = /*#__PURE__*/function (_Element) {
  _inherits(Header, _Element);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.HEADER,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.HEADER
    });
    var wrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.CONTENT_WRAPPER
    });
    var title = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H1,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.HEADER_TITLE,
      textContent: 'RSS COVID-19 Dashboard'
    });
    var dateWrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.HEADER_INFO
    });
    var text = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      textContent: 'Last updated: '
    });
    _this.date = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.P
    });
    _this.button = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: 'header__button',
      textContent: 'Save as JSON'
    });
    dateWrapper.append(text, _this.date);
    wrapper.append(title, dateWrapper, _this.button);

    _this.element.append(wrapper);

    return _this;
  }

  _createClass(Header, [{
    key: "update",
    value: function update(_ref) {
      var updateTimestamp = _ref.updateTimestamp;
      this.date.textContent = new Date(updateTimestamp).toUTCString();
    }
  }]);

  return Header;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/loading-screen/LoadingScreen.js":
/*!********************************************************!*\
  !*** ./src/components/loading-screen/LoadingScreen.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingScreen.scss */ "./src/components/loading-screen/LoadingScreen.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var LoadingScreen = /*#__PURE__*/function (_Element) {
  _inherits(LoadingScreen, _Element);

  var _super = _createSuper(LoadingScreen);

  function LoadingScreen() {
    var _this;

    _classCallCheck(this, LoadingScreen);

    _this = _super.call(this, {
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.LOADING_SCREEN
    });
    var featuresWrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.LOADING_SCREEN_WRAPPER
    });
    var featuresGreeting = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.P,
      className: 'loading-screen__p',
      textContent: 'Уважаемые проверяющие!'
    });
    var featuresP = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.P,
      className: 'loading-screen__p',
      textContent: 'Экстра-фичи нашего проекта:'
    });
    var featuresUL = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.UL
    });
    var featuresLI1 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      textContent: 'Кнопка сохранения данных в текстовом формате'
    });
    var featuresLI2 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      textContent: 'Выбор страны по клику на кружочек карты'
    });
    var featuresLI3 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      textContent: 'Разноцветные кружки для разных случаев заболевания'
    });
    var featuresLI4 = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.LI,
      textContent: 'Этот экран-заглушка на время загрузки данных :)'
    });
    var headingWrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.LOADING_SCREEN_HEADING_WRAPPER
    });
    _this.heading = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H2,
      textContent: 'Loading...'
    });
    _this.closingButton = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.BUTTON,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.LOADING_SCREEN_BUTTON,
      textContent: 'Open App'
    });
    headingWrapper.append(_this.heading, _this.closingButton);
    featuresUL.append(featuresLI1, featuresLI2, featuresLI3, featuresLI4);
    featuresWrapper.append(featuresGreeting, featuresP, featuresUL);

    _this.element.append(headingWrapper, featuresWrapper);

    _this.closingButton.addEventListener('click', function () {
      _this.element.remove();
    });

    return _this;
  }

  _createClass(LoadingScreen, [{
    key: "setLoaded",
    value: function setLoaded() {
      this.heading.textContent = 'Loading done!';
      this.element.classList.add(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.LOADING_SCREEN__LOADED);
    }
  }]);

  return LoadingScreen;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingScreen);

/***/ }),

/***/ "./src/components/map-legend/MapLegend.js":
/*!************************************************!*\
  !*** ./src/components/map-legend/MapLegend.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _MapLegend_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapLegend.scss */ "./src/components/map-legend/MapLegend.scss");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MapLegend = /*#__PURE__*/function (_Element) {
  _inherits(MapLegend, _Element);

  var _super = _createSuper(MapLegend);

  function MapLegend(minA, maxA) {
    var _this;

    _classCallCheck(this, MapLegend);

    _this = _super.call(this, {
      className: 'map-legend'
    });
    var maxSide = "".concat(parseInt(2 * Math.sqrt(maxA / Math.PI), 10), "px");
    var midSide = "".concat(parseInt(2 * Math.sqrt((maxA - minA) / (2 * Math.PI)), 10), "px");
    var minSide = "".concat(parseInt(2 * Math.sqrt(minA / Math.PI), 10), "px");
    _this.title = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      tagName: 'h3',
      className: 'map-legend__title',
      textContent: ''
    });
    var maxRow = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__row'
    });
    var midRow = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__row'
    });
    var minRow = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__row'
    });
    var maxContainer = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle-container',
      attrs: [['style', "width: ".concat(maxSide, "; height: ").concat(maxSide)]]
    });
    _this.maxCircle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle',
      attrs: [['style', "width: ".concat(maxSide, "; height: ").concat(maxSide)]]
    });
    var midContainer = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle-container',
      attrs: [['style', "width: ".concat(maxSide, "; height: ").concat(maxSide)]]
    });
    _this.midCircle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle',
      attrs: [['style', "width: ".concat(midSide, "; height: ").concat(midSide)]]
    });
    var minContainer = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle-container',
      attrs: [['style', "width: ".concat(maxSide, "; height: ").concat(maxSide)]]
    });
    _this.minCircle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      className: 'map-legend__circle',
      attrs: [['style', "width: ".concat(minSide, "; height: ").concat(minSide)]]
    });
    _this.maxTitle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      tagName: 'p'
    });
    _this.midTitle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      tagName: 'p'
    });
    _this.minTitle = _common_Element__WEBPACK_IMPORTED_MODULE_1__.default.createDOM({
      tagName: 'p'
    });
    maxContainer.append(_this.maxCircle);
    midContainer.append(_this.midCircle);
    minContainer.append(_this.minCircle);
    maxRow.append(maxContainer, _this.maxTitle);
    midRow.append(midContainer, _this.midTitle);
    minRow.append(minContainer, _this.minTitle);

    _this.element.append(_this.title, maxRow, midRow, minRow);

    return _this;
  }

  _createClass(MapLegend, [{
    key: "update",
    value: function update(_ref) {
      var minVal = _ref.minVal,
          maxVal = _ref.maxVal,
          title = _ref.title,
          status = _ref.status;
      this.title.textContent = title;
      this.maxTitle.textContent = maxVal.toLocaleString('ru-RU');
      this.midTitle.textContent = parseInt((maxVal - minVal) / 2, 10).toLocaleString('ru-RU');
      this.minTitle.textContent = minVal.toLocaleString('ru-RU');
      this.maxCircle.style.backgroundColor = "".concat(MapLegend.getColor(status), "69");
      this.midCircle.style.backgroundColor = "".concat(MapLegend.getColor(status), "69");
      this.minCircle.style.backgroundColor = "".concat(MapLegend.getColor(status), "69");
      this.maxCircle.style.borderColor = "".concat(MapLegend.getColor(status));
      this.minCircle.style.borderColor = "".concat(MapLegend.getColor(status));
      this.midCircle.style.borderColor = "".concat(MapLegend.getColor(status));
    }
  }], [{
    key: "getColor",
    value: function getColor(status) {
      var colors = {
        cases: '#9f0000',
        deaths: '#5d1048',
        recovered: '#ff523c'
      };
      return colors[status];
    }
  }]);

  return MapLegend;
}(_common_Element__WEBPACK_IMPORTED_MODULE_1__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapLegend);

/***/ }),

/***/ "./src/components/map/Map.js":
/*!***********************************!*\
  !*** ./src/components/map/Map.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Map_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map.scss */ "./src/components/map/Map.scss");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/fullscreenContainer/FullscreenContainer */ "./src/components/_common/fullscreenContainer/FullscreenContainer.js");
/* harmony import */ var _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/tabs/Tabs */ "./src/components/_common/tabs/Tabs.js");
/* harmony import */ var _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_common/toggle/Toggle */ "./src/components/_common/toggle/Toggle.js");
/* harmony import */ var _map_legend_MapLegend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map-legend/MapLegend */ "./src/components/map-legend/MapLegend.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var Map = /*#__PURE__*/function (_FullscreenContainer) {
  _inherits(Map, _FullscreenContainer);

  var _super = _createSuper(Map);

  function Map() {
    var _this;

    _classCallCheck(this, Map);

    _this = _super.call(this);

    _this.addClasses(_js_constants_index__WEBPACK_IMPORTED_MODULE_3__.CLASSES.MAP.MAP);

    _this.circles = [];
    _this.minA = 50;
    _this.maxA = 750;
    var mapWrapper = _common_Element__WEBPACK_IMPORTED_MODULE_4__.default.createDOM({
      className: 'map-wrapper'
    });
    var mapContainer = _common_Element__WEBPACK_IMPORTED_MODULE_4__.default.createDOM({
      className: 'map-container'
    });
    var togglesContainer = _common_Element__WEBPACK_IMPORTED_MODULE_4__.default.createDOM({
      className: 'map__toggles'
    });
    _this.map = leaflet__WEBPACK_IMPORTED_MODULE_2___default().map(mapContainer, {
      attributionControl: false
    });

    _this.map.setView([51.505, -0.09], 3);

    var attribution = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var tiles = 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';
    var accessToken = 'pk.eyJ1IjoidmEteiIsImEiOiJja2l6eDllcG0wNWp2MzNxajl0NTc3a2pkIn0.LB0pyLi9ckMonbnpiQ-i9g';
    leaflet__WEBPACK_IMPORTED_MODULE_2___default().tileLayer(tiles, {
      attribution: attribution,
      accessToken: accessToken,
      maxZoom: 18,
      minZoom: 2,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(_this.map);
    leaflet__WEBPACK_IMPORTED_MODULE_2___default().control.attribution({
      attribution: attribution,
      position: 'topright'
    }).addTo(_this.map);
    var bounds = leaflet__WEBPACK_IMPORTED_MODULE_2___default().latLngBounds([[-90, -180], [90, 180]]);

    _this.map.setMaxBounds(bounds);

    _this.legend = new _map_legend_MapLegend__WEBPACK_IMPORTED_MODULE_8__.default(_this.minA, _this.maxA);
    setTimeout(function () {
      return _this.map.invalidateSize();
    }, 500);
    _this.togglePeriod = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_7__.default({
      type: 'period',
      btnTitles: ['total', 'last day']
    });
    _this.toggleAmount = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_7__.default({
      type: 'amount',
      btnTitles: ['abs', 'per 100K']
    });
    _this.tabs = new _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__.default();
    _this.controls = [_this.togglePeriod, _this.toggleAmount, _this.tabs];
    togglesContainer.append(_this.togglePeriod.element, _this.toggleAmount.element);
    mapWrapper.append(mapContainer, togglesContainer, _this.legend.element);

    _this.element.append(mapWrapper, _this.tabs.element);

    _this.element.addEventListener('fullscreenSet', function () {
      _this.map.invalidateSize();
    });

    return _this;
  }

  _createClass(Map, [{
    key: "update",
    value: function update(_ref) {
      var state = _ref.state,
          data = _ref.data,
          change = _ref.change;

      if (change) {
        this.controls.forEach(function (control) {
          control.update(state);
        });

        if (Object.keys(change)[0] === 'name') {
          return;
        }
      }

      this.mapData(data, state);
    }
  }, {
    key: "mapData",
    value: function mapData(data, state) {
      var _this2 = this;

      var key = state.getKey();

      var _Map$filterData = Map.filterData(data, key),
          _Map$filterData2 = _slicedToArray(_Map$filterData, 3),
          minVal = _Map$filterData2[0],
          maxVal = _Map$filterData2[1],
          filteredData = _Map$filterData2[2];

      var minA = this.minA,
          maxA = this.maxA;
      this.legend.update({
        minVal: minVal,
        maxVal: maxVal,
        title: state.getDescription(),
        status: state.status
      });

      if (this.circles.length === 0) {
        filteredData.forEach(function (_ref2) {
          var name = _ref2.name,
              lat = _ref2.lat,
              _long = _ref2["long"],
              val = _ref2.val;
          var radius = Map.getRadius(val, minVal, maxVal, minA, maxA);
          var color = Map.getColor(state.status);
          var circle = leaflet__WEBPACK_IMPORTED_MODULE_2___default().circleMarker([lat, _long], {
            color: color,
            fillColor: color,
            fillOpacity: '0.3',
            radius: radius
          }).bindTooltip("".concat(name, " - ").concat(state.getDescription(), " - ").concat(val.toLocaleString('ru-RU'))).addTo(_this2.map);
          circle.addEventListener('click', function () {
            Map.sendUpdateRequest(_this2.element, 'name', name);
          });

          _this2.circles.push(circle);
        });
      } else {
        this.circles.forEach(function (circle, index) {
          var _filteredData$index = filteredData[index],
              name = _filteredData$index.name,
              val = _filteredData$index.val;
          var radius = Map.getRadius(val, minVal, maxVal, minA, maxA);
          var color = Map.getColor(state.status);
          circle.setRadius(radius);
          circle.setTooltipContent("".concat(name, " - ").concat(state.getDescription(), " - ").concat(val.toLocaleString('ru-RU')));
          circle.setStyle({
            color: color,
            fillColor: color
          });
        });
      }
    }
  }], [{
    key: "filterData",
    value: function filterData(data, key) {
      var minVal = Infinity;
      var maxVal = 0;
      var filteredData = data.reduce(function (acc, datum) {
        var name = datum.name,
            lat = datum.lat,
            _long2 = datum["long"],
            val = datum[key];

        if (name === 'World') {
          return acc;
        }

        if (val < minVal) {
          minVal = val;
        }

        if (val > maxVal) {
          maxVal = val;
        }

        acc.push({
          name: name,
          lat: lat,
          "long": _long2,
          val: val
        });
        return acc;
      }, []);
      return [minVal, maxVal, filteredData];
    }
  }, {
    key: "getRadius",
    value: function getRadius(val, minVal, maxVal, minA, maxA) {
      var A0 = maxA * (val - minVal) / (maxVal - minVal);

      if (A0 < minA) {
        A0 = minA;
      }

      return Math.sqrt(A0 / Math.PI);
    }
  }, {
    key: "getColor",
    value: function getColor(status) {
      var colors = {
        cases: '#9f0000',
        deaths: '#8d3f74',
        recovered: '#ff523c'
      };
      return colors[status];
    }
  }]);

  return Map;
}(_common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);

/***/ }),

/***/ "./src/components/searchInput/SearchInput.js":
/*!***************************************************!*\
  !*** ./src/components/searchInput/SearchInput.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SearchInput_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput.scss */ "./src/components/searchInput/SearchInput.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _searchSuggestion_SearchSuggestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchSuggestion/SearchSuggestion */ "./src/components/searchSuggestion/SearchSuggestion.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SearchInput = /*#__PURE__*/function (_Element) {
  _inherits(SearchInput, _Element);

  var _super = _createSuper(SearchInput);

  function SearchInput() {
    var _this;

    _classCallCheck(this, SearchInput);

    _this = _super.call(this, {
      className: 'search-input__wrapper'
    });
    _this.input = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.INPUT,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH.SEARCH_INPUT,
      attrs: [['type', 'text'], ['placeholder', 'Type to search'], ['id', 'input']]
    });
    _this.dropdown = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: 'search-input__dropdown'
    });

    _this.element.append(_this.input, _this.dropdown);

    _this.input.addEventListener('input', function () {
      var value = _this.input.value;

      if (value === '') {
        setTimeout(function () {
          _this.dropdown.innerHTML = '';
        }, 100);
      }

      _this.addSuggestions(value);
    });

    _this.input.addEventListener('focus', function () {
      var value = _this.input.value;

      if (value !== '') {
        _this.addSuggestions(value);
      }
    });

    _this.element.addEventListener('suggestionClicked', function (event) {
      var name = event.detail.name;
      _this.dropdown.innerHTML = '';
      _this.input.value = name;
      SearchInput.sendUpdateRequest(_this.element, 'name', name);
    });

    _this.element.addEventListener('keydown', function (event) {
      var keyCond = event.key === 'Enter';

      if (keyCond) {
        _this.handleEnter();
      }
    });

    document.addEventListener('click', function (event) {
      var isInput = event.target.classList.contains('search__input');
      var isDropdown = event.target.closest('.search-input__dropdown');
      var isVirtualKeyboard = event.target.closest('.simple-keyboard');

      if (!isInput && !isDropdown && !isVirtualKeyboard) {
        _this.input.blur();

        _this.dropdown.innerHTML = '';
      }
    });
    return _this;
  }

  _createClass(SearchInput, [{
    key: "handleEnter",
    value: function handleEnter() {
      var _this2 = this;

      var value = this.input.value;
      var valCond = value !== '';

      if (valCond) {
        var name = this.names.find(function (str) {
          return str === value;
        });

        if (name) {
          SearchInput.sendUpdateRequest(this.element, 'name', name);
          this.dropdown.innerHTML = '';
        } else if (this.dropdown.children.length !== 0) {
          name = this.dropdown.firstElementChild.textContent;
          this.input.value = name;
          SearchInput.sendUpdateRequest(this.element, 'name', name);
          this.dropdown.innerHTML = '';
        } else {
          this.input.style.backgroundColor = '#eb4034';
          setTimeout(function () {
            _this2.input.style.backgroundColor = '';
          }, 300);
        }
      }
    }
  }, {
    key: "addSuggestions",
    value: function addSuggestions(value) {
      var _this3 = this;

      this.dropdown.innerHTML = '';
      var regex = new RegExp("^".concat(value), 'i');
      var filtered = this.names.filter(function (item) {
        return regex.test(item);
      });
      filtered.forEach(function (name) {
        var suggestion = _searchSuggestion_SearchSuggestion__WEBPACK_IMPORTED_MODULE_3__.default.createDOM(name);

        _this3.dropdown.append(suggestion);
      });
    }
  }, {
    key: "getNames",
    value: function getNames(arr) {
      this.names = arr;
    }
  }]);

  return SearchInput;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

/***/ }),

/***/ "./src/components/searchSuggestion/SearchSuggestion.js":
/*!*************************************************************!*\
  !*** ./src/components/searchSuggestion/SearchSuggestion.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchSuggestion.scss */ "./src/components/searchSuggestion/SearchSuggestion.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SearchSuggestion = /*#__PURE__*/function (_Element) {
  _inherits(SearchSuggestion, _Element);

  var _super = _createSuper(SearchSuggestion);

  function SearchSuggestion(name) {
    var _this;

    _classCallCheck(this, SearchSuggestion);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.P,
      className: 'search-suggestion',
      textContent: name
    });
    _this.name = name;

    _this.element.addEventListener('click', function () {
      var event = new CustomEvent('suggestionClicked', {
        bubbles: true,
        detail: {
          name: _this.name
        }
      });

      _this.element.dispatchEvent(event);
    });

    return _this;
  }

  return SearchSuggestion;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSuggestion);

/***/ }),

/***/ "./src/components/search/Search.js":
/*!*****************************************!*\
  !*** ./src/components/search/Search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.scss */ "./src/components/search/Search.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _searchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../searchInput/SearchInput */ "./src/components/searchInput/SearchInput.js");
/* harmony import */ var _common_searchItem_SearchItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/searchItem/SearchItem */ "./src/components/_common/searchItem/SearchItem.js");
/* harmony import */ var _common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/fullscreenContainer/FullscreenContainer */ "./src/components/_common/fullscreenContainer/FullscreenContainer.js");
/* harmony import */ var _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_common/toggle/Toggle */ "./src/components/_common/toggle/Toggle.js");
/* harmony import */ var _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_common/tabs/Tabs */ "./src/components/_common/tabs/Tabs.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










var Search = /*#__PURE__*/function (_FullscreenContainer) {
  _inherits(Search, _FullscreenContainer);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this);

    _this.addClasses(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH.SEARCH);

    _this.names = [];
    _this.listItems = [];
    var title = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H2,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH.SEARCH_TITLE,
      textContent: 'Cases by countries'
    });
    var togglesContainer = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_CONTAINER
    });
    _this.searchInput = new _searchInput_SearchInput__WEBPACK_IMPORTED_MODULE_3__.default();
    _this.searchList = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.UL,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.SEARCH.SEARCH_LIST
    });
    _this.togglePeriod = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_6__.default({
      type: 'period',
      btnTitles: ['total', 'last day']
    });
    _this.toggleAmount = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_6__.default({
      type: 'amount',
      btnTitles: ['abs', 'per 100K']
    });
    _this.tabs = new _common_tabs_Tabs__WEBPACK_IMPORTED_MODULE_7__.default();
    _this.controls = [_this.togglePeriod, _this.toggleAmount, _this.tabs];
    togglesContainer.append(_this.togglePeriod.element, _this.toggleAmount.element);

    _this.element.append(title, _this.searchInput.element, _this.searchList, togglesContainer, _this.tabs.element);

    return _this;
  }

  _createClass(Search, [{
    key: "update",
    value: function update(_ref) {
      var _this2 = this;

      var data = _ref.data,
          state = _ref.state,
          change = _ref.change;

      if (change) {
        this.controls.forEach(function (control) {
          control.update(state);
        });

        if (Object.keys(change)[0] === 'name') {
          this.listItems.forEach(function (item) {
            if (state.name === item.dataset.stateName) {
              item.classList.add('search-item--active');
            } else {
              item.classList.remove('search-item--active');
            }
          });
          this.scrollToActive();
          return;
        }
      }

      var key = state.getKey();
      var filteredData = data.map(function (obj) {
        return {
          flag: obj.flag,
          name: obj.name,
          value: obj[key]
        };
      }).sort(function (_ref2, _ref3) {
        var val1 = _ref2.value;
        var val2 = _ref3.value;
        return val2 - val1;
      });

      if (this.names.length === 0) {
        filteredData.forEach(function (obj) {
          var li = _common_searchItem_SearchItem__WEBPACK_IMPORTED_MODULE_4__.default.createDOM(_objectSpread(_objectSpread({}, obj), {}, {
            currentName: state.name
          }));

          _this2.searchList.append(li);

          _this2.names.push(obj.name);

          _this2.listItems.push(li);
        });
        this.searchInput.getNames(this.names);
      } else {
        this.listItems = [];
        this.searchList.innerHTML = '';
        filteredData.forEach(function (obj) {
          var li = _common_searchItem_SearchItem__WEBPACK_IMPORTED_MODULE_4__.default.createDOM(_objectSpread(_objectSpread({}, obj), {}, {
            currentName: state.name
          }));

          _this2.searchList.append(li);

          _this2.listItems.push(li);
        });
      }

      this.scrollToActive();
    }
  }, {
    key: "scrollToActive",
    value: function scrollToActive() {
      var activeItem = this.listItems.find(function (elem) {
        return elem.classList.contains('search-item--active');
      });
      activeItem.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }]);

  return Search;
}(_common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_5__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/components/table/Table.js":
/*!***************************************!*\
  !*** ./src/components/table/Table.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Table_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.scss */ "./src/components/table/Table.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _common_tableRow_TableRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_common/tableRow/TableRow */ "./src/components/_common/tableRow/TableRow.js");
/* harmony import */ var _common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_common/fullscreenContainer/FullscreenContainer */ "./src/components/_common/fullscreenContainer/FullscreenContainer.js");
/* harmony import */ var _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_common/toggle/Toggle */ "./src/components/_common/toggle/Toggle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Table = /*#__PURE__*/function (_FullscreenContainer) {
  _inherits(Table, _FullscreenContainer);

  var _super = _createSuper(Table);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this);

    _this.addClasses(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE.TABLE);

    _this.statuses = ['Cases', 'Deaths', 'Recovered'];
    _this.rows = [];
    _this.title = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.H2,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE.TABLE_TITLE,
      textContent: 'Global/Country'
    });
    var table = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.UL,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE.TABLE_BLOCK
    });

    _this.statuses.forEach(function (status) {
      _this["".concat(status, "Row")] = new _common_tableRow_TableRow__WEBPACK_IMPORTED_MODULE_3__.default({
        status: status,
        outerClasses: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.TABLE["TABLE-ROW-".concat(status.toUpperCase())]
      });

      _this.rows.push(_this["".concat(status, "Row")]);

      table.append(_this["".concat(status, "Row")].element);
    });

    var togglesContainer = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.TOGGLES_CONTAINER
    });
    _this.togglePeriod = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__.default({
      type: 'period',
      btnTitles: ['total', 'last day']
    });
    _this.toggleAmount = new _common_toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__.default({
      type: 'amount',
      btnTitles: ['abs', 'per 100K']
    });
    _this.controls = [_this.togglePeriod, _this.toggleAmount];
    togglesContainer.append(_this.togglePeriod.element, _this.toggleAmount.element);

    _this.element.append(_this.title, table, togglesContainer);

    return _this;
  }

  _createClass(Table, [{
    key: "update",
    value: function update(_ref) {
      var _this2 = this;

      var data = _ref.data,
          state = _ref.state,
          change = _ref.change;

      if (change) {
        this.controls.forEach(function (control) {
          control.update(state);
        });
      }

      var name = state.name,
          figure = state.figure,
          amount = state.amount;
      var src = data.find(function (obj) {
        return obj.name === name;
      });
      this.title.textContent = name;
      this.statuses.forEach(function (status, ind) {
        var key = figure + status + (amount === 'abs' ? '' : '100k');
        var val = src[key];

        _this2.rows[ind].update(val);
      });
    }
  }]);

  return Table;
}(_common_fullscreenContainer_FullscreenContainer__WEBPACK_IMPORTED_MODULE_4__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./src/components/view/View.js":
/*!*************************************!*\
  !*** ./src/components/view/View.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _View_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.scss */ "./src/components/view/View.scss");
/* harmony import */ var _js_constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _common_Element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_common/Element */ "./src/components/_common/Element.js");
/* harmony import */ var _loading_screen_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading-screen/LoadingScreen */ "./src/components/loading-screen/LoadingScreen.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _search_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/Search */ "./src/components/search/Search.js");
/* harmony import */ var _map_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map/Map */ "./src/components/map/Map.js");
/* harmony import */ var _table_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../table/Table */ "./src/components/table/Table.js");
/* harmony import */ var _graph_Graph__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../graph/Graph */ "./src/components/graph/Graph.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _js_graphDraw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../js/graphDraw */ "./src/js/graphDraw.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View(parent) {
    var _this;

    _classCallCheck(this, View);

    _this = _super.call(this, {
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.DIV,
      className: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.VIEW
    });
    var mainWrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      tagName: _js_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.MAIN
    });
    var wrapper = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: "".concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC.CONTENT_WRAPPER, " ").concat(_js_constants_index__WEBPACK_IMPORTED_MODULE_1__.CLASSES.STATIC["CONTENT_WRAPPER-MAIN"])
    });
    _this.loadingScreen = new _loading_screen_LoadingScreen__WEBPACK_IMPORTED_MODULE_3__.default();
    _this.header = new _header_Header__WEBPACK_IMPORTED_MODULE_4__.default();
    _this.search = new _search_Search__WEBPACK_IMPORTED_MODULE_5__.default();
    _this.map = new _map_Map__WEBPACK_IMPORTED_MODULE_6__.default();
    _this.table = new _table_Table__WEBPACK_IMPORTED_MODULE_7__.default();
    _this.graph = new _graph_Graph__WEBPACK_IMPORTED_MODULE_8__.default();
    _this.footer = new _footer_Footer__WEBPACK_IMPORTED_MODULE_9__.default();
    _this.keyboardContainer = _common_Element__WEBPACK_IMPORTED_MODULE_2__.default.createDOM({
      className: 'simple-keyboard'
    });
    _this.dataBlocks = [_this.header, _this.search, _this.map, _this.table, _this.graph];
    wrapper.append(_this.search.element, _this.map.element, _this.table.element, _this.graph.element);
    mainWrapper.append(wrapper);

    _this.element.append(_this.loadingScreen.element, _this.header.element, mainWrapper, _this.footer.element, _this.keyboardContainer);

    parent.insertAdjacentElement('afterbegin', _this.element);
    _this.size = _this.graph.getSize();
    return _this;
  }

  _createClass(View, [{
    key: "init",
    value: function init(params) {
      var _this2 = this;

      this.loadingScreen.setLoaded();
      this.update(params);
      this.graphResizeBtn = this.graph.fullscreenButton;
      this.graphResizeBtn.addEventListener('click', function () {
        _this2.size = _this2.graph.getSize();
        (0,_js_graphDraw__WEBPACK_IMPORTED_MODULE_10__.default)(params.data, params.state, _this2.size);
      });
    }
    /**
     * @param {Object} params - object of parameters
     * @param {Number} params.updateTimestamp - timestamp of the last update received from the server
     * @param {Array} params.data - data array
     * @param {Object} params.state - the state of the App
     * @param {Object} params.change - param changed in previous update request
     */

  }, {
    key: "update",
    value: function update(params) {
      this.dataBlocks.forEach(function (block) {
        block.update(params);
      });
      (0,_js_graphDraw__WEBPACK_IMPORTED_MODULE_10__.default)(params.data, params.state, this.size);
    }
  }]);

  return View;
}(_common_Element__WEBPACK_IMPORTED_MODULE_2__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _data_URLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/URLS */ "./src/js/data/URLS.js");
/* harmony import */ var _data_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/getData */ "./src/js/data/getData.js");
/* harmony import */ var _State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./State */ "./src/js/State.js");
/* harmony import */ var _components_view_View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/view/View */ "./src/components/view/View.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var App = /*#__PURE__*/function () {
  function App(parent) {
    var _this = this;

    _classCallCheck(this, App);

    this.state = new _State__WEBPACK_IMPORTED_MODULE_3__.default();
    this.view = new _components_view_View__WEBPACK_IMPORTED_MODULE_4__.default(parent);
    this.setData(_data_URLS__WEBPACK_IMPORTED_MODULE_1__.default);
    this.view.element.addEventListener('updateRequest', function (event) {
      var change = event.detail;

      _this.state.update(change);

      _this.view.update({
        data: _this.data,
        updateTimestamp: _this.updateTimestamp,
        state: _this.state,
        change: change
      });
    });
    this.view.header.button.addEventListener('click', function () {
      var link = document.createElement('a');
      var name = _this.state.name;

      var obj = _this.data.filter(function (datum) {
        return datum.name === name;
      })[0];

      var file = new Blob([JSON.stringify(obj)], {
        type: 'text/plain'
      });
      link.download = "".concat(name, "data.json");
      link.href = URL.createObjectURL(file);
      link.click();
      link.remove();
    });
  }

  _createClass(App, [{
    key: "setData",
    value: function () {
      var _setData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_data_getData__WEBPACK_IMPORTED_MODULE_2__.default)(url);

              case 2:
                data = _context.sent;
                this.data = data.data;
                this.updateTimestamp = data.updateTimestamp;
                this.view.init({
                  data: this.data,
                  updateTimestamp: this.updateTimestamp,
                  state: this.state
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setData(_x) {
        return _setData.apply(this, arguments);
      }

      return setData;
    }()
  }], [{
    key: "create",
    value: function create(parent) {
      return new App(parent);
    }
  }]);

  return App;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/js/State.js":
/*!*************************!*\
  !*** ./src/js/State.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_cap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/cap */ "./src/js/helpers/cap.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var State = /*#__PURE__*/function () {
  /**
   * @param {Object} params - state params
   * @param {String} params.figure - "all" or "today"
   * @param {String} params.amount - "abs" or "100k"
   * @param {String} params.status - "cases", "deaths" or "recovered"
   * @param {String} params.name - "World" or country name
   */
  function State() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$figure = _ref.figure,
        figure = _ref$figure === void 0 ? 'all' : _ref$figure,
        _ref$amount = _ref.amount,
        amount = _ref$amount === void 0 ? 'abs' : _ref$amount,
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? 'cases' : _ref$status,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'World' : _ref$name;

    _classCallCheck(this, State);

    this.figure = figure;
    this.amount = amount;
    this.status = status;
    this.name = name;
  }

  _createClass(State, [{
    key: "getKey",
    value: function getKey() {
      var result = '';
      result += this.figure;
      result += (0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(this.status);
      result += this.amount === '100k' ? this.amount : '';
      return result;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var getFigureStr = function getFigureStr(str) {
        return str === 'all' ? 'all time' : 'today';
      };

      var getAmountStr = function getAmountStr(str) {
        return str === '100k' ? 'per 100k ' : ' ';
      };

      return "".concat((0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(this.status), " ").concat(getAmountStr(this.amount), "(").concat(getFigureStr(this.figure), ")");
    }
  }, {
    key: "update",
    value: function update(params) {
      var _Object$entries$ = _slicedToArray(Object.entries(params)[0], 2),
          key = _Object$entries$[0],
          val = _Object$entries$[1];

      this[key] = val;
    }
  }]);

  return State;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);

/***/ }),

/***/ "./src/js/VirtualKeyboard.js":
/*!***********************************!*\
  !*** ./src/js/VirtualKeyboard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var simple_keyboard_build_css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-keyboard/build/css/index.css */ "./node_modules/simple-keyboard/build/css/index.css");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-keyboard */ "./node_modules/simple-keyboard/build/index.js");
/* harmony import */ var simple_keyboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_keyboard__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var VirtualKeyboard = /*#__PURE__*/function () {
  function VirtualKeyboard(host) {
    var _this = this;

    _classCallCheck(this, VirtualKeyboard);

    this.inputInstance = host.view.search.searchInput;
    this.inputElem = host.view.element.querySelector('#input');
    this.keyboardContainer = host.view.keyboardContainer;
    this.keyboard = new (simple_keyboard__WEBPACK_IMPORTED_MODULE_1___default())({
      physicalKeyboardHighlight: true,
      layout: {
        "default": ['q w e r t y u i o p {close}', 'a s d f g h j k l {bksp}', 'z x c v b n m {shift}', '{space} {enter}'],
        shift: ['Q W E R T Y U I O P {close}', 'A S D F G H J K L {bksp}', 'Z X C V B N M {shift}', '{space} {enter}']
      },
      mergeDisplay: true,
      display: {
        '{close}': '[X]',
        '{del}': 'del'
      },
      onChange: function onChange(input) {
        return _this.onChange(input);
      },
      onKeyPress: function onKeyPress(button) {
        return _this.onKeyPress(button);
      }
    });
    this.inputElem.addEventListener('focus', function () {
      _this.keyboardContainer.style.display = 'block';
    });
    this.inputElem.addEventListener('input', function (event) {
      _this.keyboard.setInput(event.target.value);
    });
  }

  _createClass(VirtualKeyboard, [{
    key: "onChange",
    value: function onChange(input) {
      var _this2 = this;

      this.inputElem.value = input;
      setTimeout(function () {
        _this2.inputElem.focus();
      }, 10);
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(button) {
      if (button === '{shift}') {
        this.handleShift();
      } else if (button === '{close}') {
        this.keyboardContainer.style.display = '';
      } else if (button === '{enter}') {
        this.inputInstance.handleEnter();
      }
    }
  }, {
    key: "handleShift",
    value: function handleShift() {
      var currentLayout = this.keyboard.options.layoutName;
      var shiftToggle = currentLayout === 'default' ? 'shift' : 'default';
      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
    }
  }], [{
    key: "create",
    value: function create(host) {
      return new VirtualKeyboard(host);
    }
  }]);

  return VirtualKeyboard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VirtualKeyboard);

/***/ }),

/***/ "./src/js/constants/_classes.js":
/*!**************************************!*\
  !*** ./src/js/constants/_classes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _css_blocks_static__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-blocks/_static */ "./src/js/constants/css-blocks/_static.js");
/* harmony import */ var _css_blocks_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-blocks/_search */ "./src/js/constants/css-blocks/_search.js");
/* harmony import */ var _css_blocks_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-blocks/_map */ "./src/js/constants/css-blocks/_map.js");
/* harmony import */ var _css_blocks_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css-blocks/_table */ "./src/js/constants/css-blocks/_table.js");
/* harmony import */ var _css_blocks_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css-blocks/_graph */ "./src/js/constants/css-blocks/_graph.js");





var CLASSES = {
  STATIC: _css_blocks_static__WEBPACK_IMPORTED_MODULE_0__.default,
  SEARCH: _css_blocks_search__WEBPACK_IMPORTED_MODULE_1__.default,
  MAP: _css_blocks_map__WEBPACK_IMPORTED_MODULE_2__.default,
  TABLE: _css_blocks_table__WEBPACK_IMPORTED_MODULE_3__.default,
  GRAPH: _css_blocks_graph__WEBPACK_IMPORTED_MODULE_4__.default
};
Object.freeze(CLASSES);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CLASSES);

/***/ }),

/***/ "./src/js/constants/_numbers.js":
/*!**************************************!*\
  !*** ./src/js/constants/_numbers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var NUMBERS = {
  MS_IN_SS: 1000,
  SS_IN_MM: 60,
  MM_IN_HH: 60,
  ZERO: 0,
  TWO: 2,
  SIX: 6,
  SIXTY: 60,
  EIGHTY_THREE: 83,
  '100K': 100000
};
Object.freeze(NUMBERS);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NUMBERS);

/***/ }),

/***/ "./src/js/constants/_strings.js":
/*!**************************************!*\
  !*** ./src/js/constants/_strings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _helpers_deepFreeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/deepFreeze */ "./src/js/helpers/deepFreeze.js");

var STRINGS = {
  KEY: 'vazSavedState',
  TYPES: {
    CASES: 'cases',
    DEATHS: 'deaths',
    RECOVERED: 'recovered'
  }
};
(0,_helpers_deepFreeze__WEBPACK_IMPORTED_MODULE_0__.default)(STRINGS);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STRINGS);

/***/ }),

/***/ "./src/js/constants/_tags.js":
/*!***********************************!*\
  !*** ./src/js/constants/_tags.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var TAGS = {
  DIV: 'div',
  SPAN: 'span',
  HEADER: 'header',
  MAIN: 'main',
  FOOTER: 'footer',
  P: 'p',
  UL: 'ul',
  LI: 'li',
  A: 'a',
  SVG: 'svg',
  IMG: 'img',
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  BUTTON: 'button',
  INPUT: 'input'
};
Object.freeze(TAGS);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TAGS);

/***/ }),

/***/ "./src/js/constants/css-blocks/_graph.js":
/*!***********************************************!*\
  !*** ./src/js/constants/css-blocks/_graph.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var GRAPH = {
  GRAPH: 'graph',
  GRAPH_TITLE: 'graph__title',
  GRAPH_BLOCK: 'graph__block',
  GRAPH_TOGGLES: 'graph__toggles',
  GRAPH_TABS: 'graph__tabs'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GRAPH);

/***/ }),

/***/ "./src/js/constants/css-blocks/_map.js":
/*!*********************************************!*\
  !*** ./src/js/constants/css-blocks/_map.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var MAP = {
  MAP: 'map',
  MAP_BLOCK: 'map__block',
  MAP_TOGGLES: 'map__toggles',
  MAP_CONTROL: 'map__control',
  MAP_TABS: 'map__tabs',
  CONTROL_SCALE: 'control__scale',
  CONTROL_LEGEND: 'control__legend'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MAP);

/***/ }),

/***/ "./src/js/constants/css-blocks/_search.js":
/*!************************************************!*\
  !*** ./src/js/constants/css-blocks/_search.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var SEARCH = {
  SEARCH: 'search',
  SEARCH_TITLE: 'search__title',
  SEARCH_INPUT: 'search__input',
  SEARCH_LIST: 'search__list',
  SEARCH_TOGGLES: 'search__toggles',
  SEARCH_TABS: 'search__tabs',
  'SEARCH-ITEM': 'search-item',
  'SEARCH-ITEM_FLAG': 'search-item__flag',
  'SEARCH-ITEM_TITLE': 'search-item__title',
  'SEARCH-ITEM_VALUE': 'search-item__value'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEARCH);

/***/ }),

/***/ "./src/js/constants/css-blocks/_static.js":
/*!************************************************!*\
  !*** ./src/js/constants/css-blocks/_static.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var STATIC = {
  VIEW: 'view',
  HEADER: 'header',
  HEADER_TITLE: 'header__title',
  HEADER_INFO: 'header__info',
  FOOTER: 'footer',
  FOOTER_AUTHORS: 'footer__authors',
  'FOOTER_AUTHORS-PERS': 'footer__authors--pers',
  'FOOTER_RSS-LOGO': 'footer__RSS-logo',
  'RSS-LOGO_IMG': 'rss-logo__img',
  // commons
  CONTENT_WRAPPER: 'content-wrapper',
  'CONTENT_WRAPPER-MAIN': 'content-wrapper--main',
  FULLSCREEN: 'fullscreen',
  FULLSCREEN_BTN: 'fullscreen-btn',
  FULLSCREEN_ACTIVE: 'fullscreen--active',
  TOGGLES: 'toggles',
  TOGGLES_CONTAINER: 'toggles-container',
  TOGGLES_PERIOD: 'toggles__period',
  TOGGLES_AMOUNT: 'toggles__amount',
  TOGGLES_BTN: 'toggles__btn',
  'TOGGLES_BTN-LEFT': 'toggles__btn--left',
  'TOGGLES_BTN-RIGHT': 'toggles__btn--right',
  'TOGGLES_BTN-ACTIVE': 'toggles__btn--active',
  TABS_CONTAINER: 'tabs-container',
  TABS_BTN: 'tabs__btn',
  'TABS_BTN-ACTIVE': 'tabs__btn--active',
  SVG_WRAPPER: 'svg-wrapper',
  LOADING_SCREEN: 'loading-screen',
  LOADING_SCREEN_WRAPPER: 'loading-screen__wrapper',
  LOADING_SCREEN_HEADING_WRAPPER: 'loading-screen__heading-wrapper',
  LOADING_SCREEN_BUTTON: 'loading-screen__button',
  LOADING_SCREEN__LOADED: 'loading-screen--loaded'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (STATIC);

/***/ }),

/***/ "./src/js/constants/css-blocks/_table.js":
/*!***********************************************!*\
  !*** ./src/js/constants/css-blocks/_table.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var TABLE = {
  TABLE: 'table',
  TABLE_TITLE: 'table__title',
  TABLE_BLOCK: 'table__block',
  TABLE_TOGGLES: 'table__toggles',
  TABLE_TABS: 'table__tabs',
  'TABLE-ROW': 'table-row',
  'TABLE-ROW_CASES': 'table-row--total',
  'TABLE-ROW-RECOVERED': 'table-row--recovery',
  'TABLE-ROW-DEATHS': 'table-row--deaths',
  'TABLE-ROW_TITLE': 'table-row--title',
  'TABLE-ROW_VALUE': 'table-row--value'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TABLE);

/***/ }),

/***/ "./src/js/constants/index.js":
/*!***********************************!*\
  !*** ./src/js/constants/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUMBERS": () => /* reexport safe */ _numbers__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "TAGS": () => /* reexport safe */ _tags__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "CLASSES": () => /* reexport safe */ _classes__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "STRINGS": () => /* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_3__.default
/* harmony export */ });
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_numbers */ "./src/js/constants/_numbers.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_tags */ "./src/js/constants/_tags.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_classes */ "./src/js/constants/_classes.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_strings */ "./src/js/constants/_strings.js");






/***/ }),

/***/ "./src/js/data/URLS.js":
/*!*****************************!*\
  !*** ./src/js/data/URLS.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var URLS = {
  LAST_WORLD: 'https://disease.sh/v3/covid-19/all?yesterday=true',
  LAST_COUNTRIES: 'https://disease.sh/v3/covid-19/countries?yesterday=true',
  CUMULATIVE_WORLD_BASE: 'https://disease.sh/v3/covid-19/historical/all',
  CUMULATIVE_COUNTRIES_BASE: 'https://disease.sh/v3/covid-19/historical/',
  CUMULATIVE_PARAM: '?lastdays=all'
};
Object.freeze(URLS);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (URLS);

/***/ }),

/***/ "./src/js/data/_fetchData.js":
/*!***********************************!*\
  !*** ./src/js/data/_fetchData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var LAST_COUNTRIES, LAST_WORLD, CUMULATIVE_WORLD_BASE, CUMULATIVE_COUNTRIES_BASE, CUMULATIVE_PARAM, dataArr, alpha2Codes, url, cumulativeCountries;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            LAST_COUNTRIES = _ref.LAST_COUNTRIES, LAST_WORLD = _ref.LAST_WORLD, CUMULATIVE_WORLD_BASE = _ref.CUMULATIVE_WORLD_BASE, CUMULATIVE_COUNTRIES_BASE = _ref.CUMULATIVE_COUNTRIES_BASE, CUMULATIVE_PARAM = _ref.CUMULATIVE_PARAM;
            _context.next = 3;
            return Promise.all([fetch(LAST_WORLD).then(function (res) {
              return res.json();
            }), fetch(CUMULATIVE_WORLD_BASE + CUMULATIVE_PARAM).then(function (res) {
              return res.json();
            }), fetch(LAST_COUNTRIES).then(function (res) {
              return res.json();
            })]);

          case 3:
            dataArr = _context.sent;
            alpha2Codes = dataArr[2].reduce(function (acc, _ref2) {
              var iso2 = _ref2.countryInfo.iso2;
              return "".concat(acc, ",").concat(iso2);
            }, '').slice(1);
            url = "".concat(CUMULATIVE_COUNTRIES_BASE).concat(alpha2Codes).concat(CUMULATIVE_PARAM);
            _context.next = 8;
            return fetch(url).then(function (res) {
              return res.json();
            });

          case 8:
            cumulativeCountries = _context.sent;
            dataArr.push(cumulativeCountries);
            return _context.abrupt("return", dataArr);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchData.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/js/data/_getRawData.js":
/*!************************************!*\
  !*** ./src/js/data/_getRawData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/storage */ "./src/js/helpers/storage.js");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_fetchData */ "./src/js/data/_fetchData.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





function getRawData(_x) {
  return _getRawData.apply(this, arguments);
}

function _getRawData() {
  _getRawData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(urls) {
    var lastUpdate, lastTimestamp, newTimestamp, threshold, isUpdateRequired, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lastUpdate = _helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default.get(_constants_index__WEBPACK_IMPORTED_MODULE_0__.STRINGS.KEY);
            lastTimestamp = lastUpdate === null || lastUpdate === void 0 ? void 0 : lastUpdate[0].updated;
            newTimestamp = Date.now();
            threshold = _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.MS_IN_SS * _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.SS_IN_MM * _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.MM_IN_HH * _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.SIX;
            isUpdateRequired = !lastTimestamp || newTimestamp - lastTimestamp > threshold;

            if (!isUpdateRequired) {
              _context.next = 18;
              break;
            }

            _context.next = 8;
            return (0,_fetchData__WEBPACK_IMPORTED_MODULE_2__.default)(urls);

          case 8:
            data = _context.sent;
            _helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default.clear();
            _context.prev = 10;
            _helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default.set(_constants_index__WEBPACK_IMPORTED_MODULE_0__.STRINGS.KEY, data);
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](10);
            return _context.abrupt("return", data);

          case 17:
            return _context.abrupt("return", data);

          case 18:
            return _context.abrupt("return", lastUpdate);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 14]]);
  }));
  return _getRawData.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRawData);

/***/ }),

/***/ "./src/js/data/_helpers.js":
/*!*********************************!*\
  !*** ./src/js/data/_helpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTemplate": () => /* binding */ createTemplate,
/* harmony export */   "createHistoricTemplate": () => /* binding */ createHistoricTemplate,
/* harmony export */   "cap": () => /* reexport safe */ _helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "val100k": () => /* binding */ val100k
/* harmony export */ });
/* harmony import */ var _helpers_cap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/cap */ "./src/js/helpers/cap.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function val100k(val, pop) {
  return Math.round(_constants_index__WEBPACK_IMPORTED_MODULE_1__.NUMBERS["100K"] * (val / pop));
}

function createTypeFields(type) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "today".concat((0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(type)), 0), _defineProperty(_ref, "today".concat((0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(type), "100k"), 0), _defineProperty(_ref, "all".concat((0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(type)), 0), _defineProperty(_ref, "all".concat((0,_helpers_cap__WEBPACK_IMPORTED_MODULE_0__.default)(type), "100k"), 0), _ref;
}

function createDataFields() {
  return _objectSpread(_objectSpread(_objectSpread({}, createTypeFields(_constants_index__WEBPACK_IMPORTED_MODULE_1__.STRINGS.TYPES.CASES)), createTypeFields(_constants_index__WEBPACK_IMPORTED_MODULE_1__.STRINGS.TYPES.DEATHS)), createTypeFields(_constants_index__WEBPACK_IMPORTED_MODULE_1__.STRINGS.TYPES.RECOVERED));
}

function createHistoricTemplate(dateStr) {
  return _objectSpread({
    date: dateStr
  }, createDataFields());
}

function createTemplate() {
  return _objectSpread(_objectSpread({}, createDataFields()), {}, {
    historic: []
  });
}



/***/ }),

/***/ "./src/js/data/_processData.js":
/*!*************************************!*\
  !*** ./src/js/data/_processData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_helpers */ "./src/js/data/_helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function processData(last, timeline, pop) {
  var timelineEntries = Object.entries(timeline);
  var TYPES_AMOUNT = timelineEntries.length;
  var result = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createTemplate)();

  for (var i = _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.ZERO; i < TYPES_AMOUNT; i += 1) {
    var _timelineEntries$i = _slicedToArray(timelineEntries[i], 2),
        type = _timelineEntries$i[0],
        dates = _timelineEntries$i[1];

    var datesEntries = Object.entries(dates);
    var DAYS_AMOUNT = datesEntries.length;

    for (var j = _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.ZERO; j < DAYS_AMOUNT; j += 1) {
      var _datesEntries$, _datesEntries;

      var _datesEntries$j = _slicedToArray(datesEntries[j], 2),
          date = _datesEntries$j[0],
          value = _datesEntries$j[1];

      var prevValue = (_datesEntries$ = (_datesEntries = datesEntries[j - 1]) === null || _datesEntries === void 0 ? void 0 : _datesEntries[1]) !== null && _datesEntries$ !== void 0 ? _datesEntries$ : 0;
      var dailyValue = value - prevValue;

      if (i === _constants_index__WEBPACK_IMPORTED_MODULE_0__.NUMBERS.ZERO) {
        result.historic.push((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.createHistoricTemplate)(date));
      }

      var historicObj = result.historic[j];
      historicObj["today".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))] = dailyValue;
      historicObj["today".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type), "100k")] = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.val100k)(dailyValue, pop);
      historicObj["all".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))] = value;
      historicObj["all".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type), "100k")] = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.val100k)(dailyValue, pop);
    }

    var lastHistoricValue = result.historic[result.historic.length - 1]["all".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))];
    var allValue = last[type];
    var todayValue = last["today".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))];
    result["all".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))] = allValue || lastHistoricValue;
    result["all".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type), "100k")] = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.val100k)(allValue || lastHistoricValue, pop);
    result["today".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type))] = todayValue;
    result["today".concat((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.cap)(type), "100k")] = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.val100k)(todayValue, pop);
  }

  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processData);

/***/ }),

/***/ "./src/js/data/getData.js":
/*!********************************!*\
  !*** ./src/js/data/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _codes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_codes.json */ "./src/js/data/_codes.json");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./src/js/constants/index.js");
/* harmony import */ var _getRawData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getRawData */ "./src/js/data/_getRawData.js");
/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_processData */ "./src/js/data/_processData.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






function getData(_x) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(urls) {
    var _yield$getRawData, _yield$getRawData2, lastWorld, cumulativeWorld, lastCountries, cumulativeCountries, result, codesMap, COUNTRIES, i, lastCountry, cumulativeCountry, name, population, _lastCountry$countryI, iso2, lat, _long, flag, countryObj;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_getRawData__WEBPACK_IMPORTED_MODULE_2__.default)(urls);

          case 2:
            _yield$getRawData = _context.sent;
            _yield$getRawData2 = _slicedToArray(_yield$getRawData, 4);
            lastWorld = _yield$getRawData2[0];
            cumulativeWorld = _yield$getRawData2[1];
            lastCountries = _yield$getRawData2[2];
            cumulativeCountries = _yield$getRawData2[3];
            result = [_objectSpread({
              name: 'World',
              population: lastWorld.population
            }, (0,_processData__WEBPACK_IMPORTED_MODULE_3__.default)(lastWorld, cumulativeWorld, lastWorld.population))];
            codesMap = _codes_json__WEBPACK_IMPORTED_MODULE_0__.reduce(function (acc, obj) {
              acc[obj['alpha-2']] = obj['country-code'];
              return acc;
            }, {});
            COUNTRIES = lastCountries.length;

            for (i = _constants_index__WEBPACK_IMPORTED_MODULE_1__.NUMBERS.ZERO; i < COUNTRIES; i += 1) {
              lastCountry = lastCountries[i];
              cumulativeCountry = cumulativeCountries[i];

              if (cumulativeCountry) {
                name = lastCountry.country, population = lastCountry.population, _lastCountry$countryI = lastCountry.countryInfo, iso2 = _lastCountry$countryI.iso2, lat = _lastCountry$countryI.lat, _long = _lastCountry$countryI["long"], flag = _lastCountry$countryI.flag;
                countryObj = _objectSpread({
                  name: name,
                  population: population,
                  code: codesMap[iso2],
                  iso2: iso2,
                  lat: lat,
                  "long": _long,
                  flag: flag
                }, (0,_processData__WEBPACK_IMPORTED_MODULE_3__.default)(lastCountry, cumulativeCountry.timeline, population));
                result.push(countryObj);
              }
            }

            return _context.abrupt("return", {
              updateTimestamp: lastWorld.updated,
              data: result
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/js/graphDraw.js":
/*!*****************************!*\
  !*** ./src/js/graphDraw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/index */ "./src/js/constants/index.js");
/* eslint-disable prefer-template */



function graphDrow(allData, state, size) {
  var key = state.getKey();
  var currentCountry = allData.find(function (obj) {
    return obj.name === state.name;
  });
  var currentData = currentCountry.historic;
  var initialHeight = size.height;
  var initialWidth = size.width;
  var parent = document.querySelector('.graph__block');
  parent.innerText = '';
  var svg = (0,d3__WEBPACK_IMPORTED_MODULE_0__.select)('.graph__block').append("".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__.TAGS.SVG)).attr('height', initialHeight).attr('width', initialWidth);
  var width = +svg.attr('width');
  var height = +svg.attr('height');

  var render = function render(data) {
    var xValue = function xValue(d) {
      return new Date(d.date);
    };

    var yValue = function yValue(d) {
      return d[key];
    };

    var margin = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 40
    };
    var innerWidth = width - margin.left - margin.right;
    var innerHeight = height - margin.top - margin.bottom;
    var xScale = (0,d3__WEBPACK_IMPORTED_MODULE_0__.scaleBand)().domain(data.map(xValue)).range([0, innerWidth]);
    var yScale = (0,d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear)().domain([0, (0,d3__WEBPACK_IMPORTED_MODULE_0__.max)(data, yValue)]).range([innerHeight, 0]).nice();
    var g = svg.append('g').attr('transform', "translate(".concat(margin.left, ",").concat(margin.top, ")"));
    var xAxis = (0,d3__WEBPACK_IMPORTED_MODULE_0__.axisBottom)(xScale).tickFormat(function (d) {
      return d.date <= (0,d3__WEBPACK_IMPORTED_MODULE_0__.timeYear)(d) ? d.getFullYear() : null;
    }).tickSize(0); //  .tickFormat(timeFormat('%d%b%y'))

    var yAxis = (0,d3__WEBPACK_IMPORTED_MODULE_0__.axisLeft)(yScale).tickFormat((0,d3__WEBPACK_IMPORTED_MODULE_0__.format)('.2s')).tickSize(-innerWidth);
    g.append('g').call(yAxis);
    g.append('g').call(xAxis).attr('transform', "translate(0,".concat(innerHeight, ")"));
    g.selectAll('rect').data(data).enter().append('rect').attr('y', function (d) {
      return yScale(yValue(d));
    }).attr('x', function (d) {
      return xScale(xValue(d));
    }).attr('width', xScale.bandwidth()).attr('height', function (d) {
      return innerHeight - yScale(yValue(d));
    }).append('title').text(function (d) {
      return "".concat(d.date, ": ").concat(d[key]);
    });
  };

  render(currentData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (graphDrow);

/***/ }),

/***/ "./src/js/helpers/cap.js":
/*!*******************************!*\
  !*** ./src/js/helpers/cap.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function cap(str) {
  return str[0].toUpperCase() + str.slice(1);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cap);

/***/ }),

/***/ "./src/js/helpers/deepFreeze.js":
/*!**************************************!*\
  !*** ./src/js/helpers/deepFreeze.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ZERO = 0;

function deepFreeze(obj) {
  Object.freeze(obj);
  var vals = Object.values(obj);
  var valsLength = vals.length;

  var isObj = function isObj(val) {
    return _typeof(val) === 'object' && val !== null;
  };

  for (var i = ZERO; i < valsLength; i += 1) {
    var val = vals[i];

    if (isObj(val)) {
      deepFreeze(val);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deepFreeze);

/***/ }),

/***/ "./src/js/helpers/storage.js":
/*!***********************************!*\
  !*** ./src/js/helpers/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function set(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function get(key) {
  var data = window.localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function remove(key) {
  window.localStorage.removeItem(key);
}

function clear() {
  window.localStorage.clear();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  set: set,
  get: get,
  remove: remove,
  clear: clear
});

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/App */ "./src/js/App.js");
/* harmony import */ var _js_VirtualKeyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/VirtualKeyboard */ "./src/js/VirtualKeyboard.js");



var app = _js_App__WEBPACK_IMPORTED_MODULE_1__.default.create(document.body);
_js_VirtualKeyboard__WEBPACK_IMPORTED_MODULE_2__.default.create(app);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/fullscreenContainer/FullscreenContainer.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/fullscreenContainer/FullscreenContainer.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\nh1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.fullscreen {\n  position: relative;\n  padding: 0.8rem 0.8rem 0 0.8rem;\n  border-radius: 13px 13px 0 0;\n  background: #5d1048;\n  -webkit-box-shadow: 7px 7px 11px #3f0b31, -7px -7px 11px #7b155f;\n          box-shadow: 7px 7px 11px #3f0b31, -7px -7px 11px #7b155f;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.fullscreen-btn {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  height: 1.2rem;\n  width: 1.2rem;\n  border: 1px solid #adadad;\n  border-radius: 50%;\n  background-color: #3f0b31;\n  color: #adadad;\n  outline: none;\n  z-index: 20;\n}\n.fullscreen-btn::before {\n  content: \"⤢\";\n  position: absolute;\n  font-size: 1.1rem;\n  font-weight: lighter;\n  top: -4px;\n  left: 2px;\n}\n.fullscreen-btn:hover, .fullscreen-btn:focus {\n  border-color: #ffffff;\n}\n.fullscreen-btn:hover::before, .fullscreen-btn:focus::before {\n  color: #ffffff;\n}\n\n.fullscreen--active {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: calc(100vh - 30px);\n  width: calc(100% - 20px);\n  margin: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 30;\n}", "",{"version":3,"sources":["webpack://./src/components/_common/fullscreenContainer/FullscreenContainer.scss","webpack://./src/scss/variables.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACyDhB;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ADMrB;;AC8DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ADarB;;ACoFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ADqBrB;;ACgFA;EACE,yBA/FoB;ADkBtB;;AC6HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AD1HF;;AA/BA;EACE,kBAAA;EACA,+BAAA;EACA,4BAAA;EACA,mBCEoB;EDDpB,gEAAA;UAAA,wDAAA;EAEA,8BAAA;UAAA,sBAAA;AAiCF;;AA9BA;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,cCnBqB;EDoBrB,aAAA;EACA,WAAA;AAiCF;AA/BE;EACE,YAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,SAAA;EACA,SAAA;AAiCJ;AA9BE;EAEE,qBAAA;AA+BJ;AA5BE;EAEE,cAAA;AA6BJ;;AAzBA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,0BAAA;EACA,wBAAA;EACA,YAAA;EACA,8BAAA;UAAA,sBAAA;EACA,WAAA;AA4BF","sourcesContent":["@import \"./../../../scss/variables\";\r\n\r\n.fullscreen {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n             -7px -7px 11px #7b155f;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.fullscreen-btn {\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 3px;\r\n  height: 1.2rem;\r\n  width: 1.2rem;\r\n  border: 1px solid $secondary-text-color;\r\n  border-radius: 50%;\r\n  background-color: #3f0b31;\r\n  color: $secondary-text-color;\r\n  outline: none;\r\n  z-index: 20;\r\n\r\n  &::before {\r\n    content: \"\\2922\";\r\n    position: absolute;\r\n    font-size: 1.1rem;\r\n    font-weight: lighter;\r\n    top: -4px;\r\n    left: 2px;\r\n  }\r\n\r\n  &:hover,\r\n  &:focus {\r\n    border-color: #ffffff;\r\n  }\r\n\r\n  &:hover::before,\r\n  &:focus::before {\r\n    color: #ffffff;\r\n  }\r\n}\r\n\r\n.fullscreen--active {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: calc(100vh - 30px);\r\n  width: calc(100% - 20px);\r\n  margin: 10px;\r\n  box-sizing: border-box;\r\n  z-index: 30;\r\n}\r\n\r\n","//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/searchItem/SearchItem.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/searchItem/SearchItem.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-self: start;\n  padding: 10px;\n  margin: 0 10px 0 0;\n}\n.search-item:hover, .search-item:focus {\n  background-color: #6e0858;\n  cursor: pointer;\n}\n.search-item--active {\n  background-color: #a81187;\n}\n\n.search-item__flag {\n  width: 30px;\n  height: 20px;\n  margin-right: 10px;\n}\n\n.search-item__title {\n  width: 100%;\n  margin-right: 5px;\n}", "",{"version":3,"sources":["webpack://./src/components/_common/searchItem/SearchItem.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,kBAAA;AACF;AAEE;EAEE,yBAAA;EACA,eAAA;AADJ;AAIE;EACE,yBAAA;AAFJ;;AAMA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;AAHF","sourcesContent":[".search-item {\r\n  display: flex;\r\n  justify-self: start;\r\n  padding: 10px;\r\n  margin: 0 10px 0 0;\r\n\r\n\r\n  &:hover,\r\n  &:focus {\r\n    background-color: rgb(110, 8, 88);\r\n    cursor: pointer;\r\n  }\r\n\r\n  &--active {\r\n    background-color: rgb(168, 17, 135);\r\n  }\r\n}\r\n\r\n.search-item__flag {\r\n  width: 30px;\r\n  height: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.search-item__title {\r\n  width: 100%;\r\n  margin-right: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tableRow/TableRow.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tableRow/TableRow.scss ***!
  \******************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.table-row {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.3em;\n}\n.table-row:not(:last-child) {\n  border-bottom: 1px solid rgba(173, 173, 173, 0.7);\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/_common/tableRow/TableRow.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,gBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,mBAAA;MAAA,WAAA;UAAA,OAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;AAiCF;AA/BE;EACE,iDAAA;AAiCJ","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../../scss/variables.scss\";\r\n\r\n.table-row {\r\n  list-style: none;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex: 1;\r\n  align-items: center;\r\n  font-size: 1.3em;\r\n\r\n  &:not(:last-child) {\r\n    border-bottom: 1px solid rgba(173, 173, 173, 0.7);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tabs/Tabs.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tabs/Tabs.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.tabs-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 5px;\n  gap: 5px;\n  min-width: auto;\n  margin: 0 -0.8rem;\n  background-color: #3f0b31;\n}\n.tabs__btn {\n  width: 100%;\n  border: none;\n  background-color: #8d3f74;\n  color: #adadad;\n}\n.tabs__btn--active {\n  background-color: #5d1048;\n  color: #ffffff;\n  outline: none;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/_common/tabs/Tabs.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA7BE;EACE,aAAA;EACA,kCAAA;EACA,aAAA;EAAA,QAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;AAgCJ;AA7BE;EACE,WAAA;EACA,YAAA;EACA,yBDLkB;ECMlB,cDdmB;AC6CvB;AA7BI;EACE,yBDXgB;ECYhB,cDnBe;ECoBf,aAAA;AA+BN","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../../scss/variables\";\r\n\r\n.tabs {\r\n  &-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    gap: 5px;\r\n    min-width: auto;\r\n    margin: 0 -0.8rem;\r\n    background-color: #3f0b31;\r\n  }\r\n\r\n  &__btn {\r\n    width: 100%;\r\n    border: none;\r\n    background-color: $p-light-theme-color;\r\n    color: $secondary-text-color;\r\n\r\n    &--active {\r\n      background-color: $primary-theme-color;\r\n      color: $primary-text-color;\r\n      outline: none;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/toggle/Toggle.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/toggle/Toggle.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.toggles__btn {\n  width: 50%;\n  border: 1px solid #5d1048;\n  background-color: #ff523c;\n  color: #adadad;\n}\n.toggles__btn:first-child {\n  border-radius: 4px 0 0 4px;\n}\n.toggles__btn:last-child {\n  border-radius: 0 4px 4px 0;\n}\n.toggles__btn--active {\n  border-color: #9f0000;\n  background-color: #9f0000;\n  color: #ffffff;\n  outline: none;\n}\n\n.toggles-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 5px 0;\n}\n\n.toggles {\n  width: 49%;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/_common/toggle/Toggle.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA7BE;EACE,UAAA;EACA,yBAAA;EACA,yBDOkB;ECNlB,cDLmB;ACqCvB;AA9BI;EACE,0BAAA;AAgCN;AA7BI;EACE,0BAAA;AA+BN;AA5BI;EACE,qBDNe;ECOf,yBDPe;ECQf,cDnBe;ECoBf,aAAA;AA8BN;;AAzBA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,WAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,aAAA;AA4BF;;AAzBA;EACE,UAAA;AA4BF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../../scss/variables\";\r\n\r\n.toggles {\r\n  &__btn {\r\n    width: 50%;\r\n    border: 1px solid $primary-theme-color;\r\n    background-color: $s-light-theme-color;\r\n    color: $secondary-text-color;\r\n\r\n    &:first-child {\r\n      border-radius: 4px 0 0 4px;\r\n    }\r\n\r\n    &:last-child {\r\n      border-radius: 0 4px 4px 0;\r\n    }\r\n\r\n    &--active {\r\n      border-color: $s-dark-theme-color;\r\n      background-color: $s-dark-theme-color;\r\n      color: $primary-text-color;\r\n      outline: none;\r\n    }\r\n  }\r\n}\r\n\r\n.toggles-container {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  margin: 5px 0;\r\n}\r\n\r\n.toggles {\r\n  width: 49%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/Footer.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/Footer.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  background-color: #310021;\n}\n.footer .content-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n}\n.footer__RSS-logo {\n  background-color: #ffffff;\n}\n.footer__authors {\n  color: #adadad;\n}\n.footer__authors--pers {\n  color: #ffffff;\n  text-decoration: none;\n}\n.footer__authors--pers:hover {\n  color: #ffffff;\n  text-decoration: underline;\n}\n\n.rss-logo__img {\n  height: 2rem;\n  width: auto;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/footer/Footer.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,WAAA;EACA,yBDEmB;AC+BrB;AA/BE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;AAiCJ;AA9BE;EACE,yBAAA;AAgCJ;AA7BE;EACE,cDrBmB;ACoDvB;AA7BI;EACE,cAAA;EACA,qBAAA;AA+BN;AA7BM;EACE,cD7Ba;EC8Bb,0BAAA;AA+BR;;AAzBA;EACE,YAAA;EACA,WAAA;AA4BF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.footer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  background-color: $p-dark-theme-color;\r\n\r\n  .content-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n\r\n  &__RSS-logo {\r\n    background-color: #ffffff;\r\n  }\r\n\r\n  &__authors {\r\n    color: $secondary-text-color;\r\n\r\n    &--pers {\r\n      color: #ffffff;\r\n      text-decoration: none;\r\n\r\n      &:hover {\r\n        color: $primary-text-color;\r\n        text-decoration: underline;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.rss-logo__img {\r\n  height: 2rem;\r\n  width: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/graph/Graph.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/graph/Graph.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.graph {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  grid-row: 2/3;\n  grid-column: 3/4;\n}\n@media (max-width: 1023px) {\n  .graph__block {\n    width: 432px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\nrect {\n  fill: #9f0000;\n}\n\n.tick line {\n  stroke: #adadad;\n  opacity: 0.5;\n}\n\n.tabs-container {\n  margin-top: auto;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/graph/Graph.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,aAAA;EACA,gBAAA;AAiCF;AA9BI;EADF;IAEI,YAAA;IACA,iBAAA;IACA,kBAAA;EAiCJ;AACF;;AA7BA;EACE,aDNmB;ACsCrB;;AA7BA;EACE,eDpBqB;ECqBrB,YAAA;AAgCF;;AA7BA;EACE,gBAAA;AAgCF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.graph {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-row: 2 / 3;\r\n  grid-column: 3 / 4;\r\n\r\n  &__block {\r\n    @media (max-width: $media-midW) {\r\n      width: 432px;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n    }\r\n  }\r\n}\r\n\r\nrect {\r\n  fill: $s-dark-theme-color;\r\n}\r\n\r\n.tick line {\r\n  stroke: $secondary-text-color;\r\n  opacity: 0.5;\r\n}\r\n\r\n.tabs-container {\r\n  margin-top: auto;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/Header.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/Header.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.header {\n  width: 100%;\n  background-color: #310021;\n}\n.header .content-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0.5rem 1rem;\n}\n.header__info {\n  color: #adadad;\n}\n.header__button {\n  justify-self: end;\n  border: none;\n  background-color: #8d3f74;\n  color: #ffffff;\n  padding: 10px;\n  border-radius: 4px;\n}\n.header__button:hover {\n  background-color: #5d1048;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/header/Header.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,WAAA;EACA,yBDKmB;AC4BrB;AA/BE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;AAiCJ;AA9BE;EACE,cDdmB;AC8CvB;AA7BE;EACE,iBAAA;EACA,YAAA;EACA,yBDZkB;ECalB,cDtBiB;ECuBjB,aAAA;EACA,kBAAA;AA+BJ;AA7BI;EACE,yBDpBgB;ACmDtB","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.header {\r\n  width: 100%;\r\n  background-color: $p-dark-theme-color;\r\n\r\n  .content-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 0.5rem 1rem;\r\n  }\r\n\r\n  &__info {\r\n    color: $secondary-text-color;\r\n  }\r\n\r\n  &__button {\r\n    justify-self: end;\r\n    border: none;\r\n    background-color: $p-light-theme-color;\r\n    color: $primary-text-color;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background-color: $primary-theme-color;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading-screen/LoadingScreen.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading-screen/LoadingScreen.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.loading-screen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100vh;\n  background: #5d1048;\n  font-size: 1.2rem;\n}\n.loading-screen--loaded .loading-screen__button {\n  display: inline;\n}\n.loading-screen__heading-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 450px;\n  margin-bottom: 3rem;\n}\n.loading-screen__p {\n  margin-bottom: 10px;\n}\n.loading-screen__p:first-child {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.loading-screen__button {\n  display: none;\n  margin-left: 100px;\n  font-size: 1.1rem;\n  border: none;\n  background-color: #310021;\n  color: #ffffff;\n  padding: 0.8rem 1.3rem;\n  border-radius: 4px;\n}\n.loading-screen__button:hover {\n  background-color: #8d3f74;\n}\n\n.loading-screen__wrapper {\n  color: #adadad;\n}\n.loading-screen__wrapper ul {\n  text-align: left;\n  list-style-type: square;\n  list-style-position: inside;\n}\n.loading-screen__wrapper ul li {\n  margin: 10px;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/loading-screen/LoadingScreen.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,mBDLoB;ECMpB,iBAAA;AAiCF;AA9BI;EACE,eAAA;AAgCN;AA5BE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,YAAA;EACA,mBAAA;AA8BJ;AA3BE;EACE,mBAAA;AA6BJ;AA3BI;EACE,mBAAA;EACA,kBAAA;AA6BN;AAzBE;EACE,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,yBDpCiB;ECqCjB,cD7CiB;EC8CjB,sBAAA;EACA,kBAAA;AA2BJ;AAzBI;EACE,yBDzCgB;ACoEtB;;AAtBA;EACE,cDvDqB;ACgFvB;AAvBE;EACE,gBAAA;EACA,uBAAA;EACA,2BAAA;AAyBJ;AAtBE;EACE,YAAA;AAwBJ","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.loading-screen {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: $primary-theme-color;\r\n  font-size: 1.2rem;\r\n\r\n  &--loaded {\r\n    .loading-screen__button {\r\n      display: inline;\r\n    }\r\n  }\r\n\r\n  &__heading-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 450px;\r\n    margin-bottom: 3rem;\r\n  }\r\n\r\n  &__p {\r\n    margin-bottom: 10px;\r\n\r\n    &:first-child {\r\n      margin-bottom: 2rem;\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    display: none;\r\n    margin-left: 100px;\r\n    font-size: 1.1rem;\r\n    border: none;\r\n    background-color: $p-dark-theme-color;\r\n    color: $primary-text-color;\r\n    padding: 0.8rem 1.3rem;\r\n    border-radius: 4px;\r\n\r\n    &:hover {\r\n      background-color: $p-light-theme-color;\r\n    }\r\n  }\r\n}\r\n\r\n.loading-screen__wrapper {\r\n  color: $secondary-text-color;\r\n\r\n  ul {\r\n    text-align: left;\r\n    list-style-type: square;\r\n    list-style-position: inside;\r\n  }\r\n\r\n  ul li {\r\n    margin: 10px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map-legend/MapLegend.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map-legend/MapLegend.scss ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.map-legend {\n  position: absolute;\n  bottom: 5px;\n  right: 0;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 11rem;\n  padding: 0 10px;\n  border-top-left-radius: 13px;\n  border-bottom-left-radius: 13px;\n  background-color: rgba(141, 63, 116, 0.85);\n}\n\n.map-legend__row {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.map-legend__title {\n  padding: 5px;\n}\n\n.map-legend__circle-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 10px;\n}\n\n.map-legend__circle {\n  border-radius: 100%;\n  border-width: 3px;\n  border-style: solid;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/map-legend/MapLegend.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,kBAAA;EACA,WAAA;EACA,QAAA;EACA,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;EACA,+BAAA;EACA,0CAAA;AAiCF;;AA9BA;EACE,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;AAiCF;;AA9BA;EACE,YAAA;AAiCF;;AA9BA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,kBAAA;AAiCF;;AA9BA;EACE,mBAAA;EACA,iBAAA;EACA,mBAAA;AAiCF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.map-legend {\r\n  position: absolute;\r\n  bottom: 5px;\r\n  right: 0;\r\n  z-index: 10;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n  width: 11rem;\r\n  padding: 0 10px;\r\n  border-top-left-radius: 13px;\r\n  border-bottom-left-radius: 13px;\r\n  background-color: rgba(141, 63, 116, 0.85);\r\n}\r\n\r\n.map-legend__row {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.map-legend__title {\r\n  padding: 5px;\r\n}\r\n\r\n.map-legend__circle-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-right: 10px;\r\n}\r\n\r\n.map-legend__circle {\r\n  border-radius: 100%;\r\n  border-width: 3px;\r\n  border-style: solid;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map/Map.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map/Map.scss ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.map {\n  grid-row: 1/span 2;\n  grid-column: 2/3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.map__block {\n  -webkit-box-flex: 10;\n      -ms-flex: 10 10 auto;\n          flex: 10 10 auto;\n}\n.map .tabs-container {\n  margin-top: auto;\n}\n\n.map-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n.map-container {\n  min-height: 300px;\n  height: 100%;\n  z-index: 1;\n}\n\n.map__toggles {\n  position: absolute;\n  z-index: 2;\n  bottom: 5px;\n  left: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 10rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.map__toggles .toggles {\n  width: 100%;\n}\n.map__toggles .toggles:first-child {\n  margin-bottom: 3px;\n}\n\n.leaflet-control-attribution {\n  max-width: 70%;\n}\n\n.leaflet-control-zoom {\n  border: none !important;\n  border-radius: 1100px !important;\n  background-color: transparent;\n}\n\n.leaflet-control-zoom-in,\n.leaflet-control-zoom-out {\n  border-radius: 100% !important;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/map/Map.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,kBAAA;EACA,gBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;AAiCF;AA/BE;EACE,oBAAA;MAAA,oBAAA;UAAA,gBAAA;AAiCJ;AA7BE;EACE,gBAAA;AA+BJ;;AA3BA;EACE,kBAAA;EACA,YAAA;AA8BF;;AA3BA;EACE,iBAAA;EACA,YAAA;EACA,UAAA;AA8BF;;AA3BA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,SAAA;EAEA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;MAAA,eAAA;EACA,YAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AA6BF;AA3BE;EACE,WAAA;AA6BJ;AA1BE;EACE,kBAAA;AA4BJ;;AAxBA;EACE,cAAA;AA2BF;;AAxBA;EACE,uBAAA;EACA,gCAAA;EACA,6BAAA;AA2BF;;AAxBA;;EAEE,8BAAA;AA2BF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.map {\r\n  grid-row: 1 / span 2;\r\n  grid-column: 2 / 3;\r\n  display: flex; // потом убрать\r\n  flex-direction: column;\r\n\r\n  &__block {\r\n    flex: 10 10 auto;\r\n    //height: 100%;\r\n  }\r\n\r\n  .tabs-container {\r\n    margin-top: auto;\r\n  }\r\n}\r\n\r\n.map-wrapper {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n\r\n.map-container {\r\n  min-height: 300px;\r\n  height: 100%;\r\n  z-index: 1\r\n}\r\n\r\n.map__toggles {\r\n  position: absolute;\r\n  z-index: 2;\r\n  bottom: 5px;\r\n  left: 5px;\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 10rem;\r\n  justify-content: space-between;\r\n\r\n  .toggles {\r\n    width: 100%;\r\n  }\r\n\r\n  .toggles:first-child {\r\n    margin-bottom: 3px;\r\n  }\r\n}\r\n\r\n.leaflet-control-attribution {\r\n  max-width: 70%;\r\n}\r\n\r\n.leaflet-control-zoom {\r\n  border: none !important;\r\n  border-radius: 1100px !important;\r\n  background-color: transparent;\r\n}\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n  border-radius: 100% !important;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchInput/SearchInput.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchInput/SearchInput.scss ***!
  \****************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search__input {\n  width: 100%;\n  padding: 10px;\n  border: none;\n}\n\n.search-input__wrapper {\n  position: relative;\n  margin-bottom: 10px;\n}\n\n.search-input__dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  color: black;\n  width: 100%;\n  max-height: 300px;\n  overflow-y: scroll;\n  background-color: white;\n  -webkit-box-shadow: 0 2px 10px -3px inset black;\n          box-shadow: 0 2px 10px -3px inset black;\n}\n\n.search-suggestion {\n  padding: 10px;\n}\n.search-suggestion:hover {\n  background-color: rgba(70, 130, 180, 0.3);\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/components/searchInput/SearchInput.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EAEA,YAAA;EAEA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,+CAAA;UAAA,uCAAA;AADF;;AAIA;EACE,aAAA;AADF;AAGE;EACE,yCAAA;EACA,eAAA;AADJ","sourcesContent":[".search__input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  border: none;\r\n}\r\n\r\n.search-input__wrapper {\r\n  position: relative;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.search-input__dropdown {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n\r\n  color: black;\r\n\r\n  width: 100%;\r\n  max-height: 300px;\r\n  overflow-y: scroll;\r\n  background-color: white;\r\n  box-shadow: 0 2px 10px -3px inset black;\r\n}\r\n\r\n.search-suggestion {\r\n  padding: 10px;\r\n\r\n  &:hover {\r\n    background-color: rgba(steelblue, 0.3);\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchSuggestion/SearchSuggestion.scss":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchSuggestion/SearchSuggestion.scss ***!
  \**************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-suggestion {\n  padding: 10px;\n}\n.search-suggestion:hover {\n  background-color: rgba(70, 130, 180, 0.3);\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/components/searchSuggestion/SearchSuggestion.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;AACE;EACE,yCAAA;EACA,eAAA;AACJ","sourcesContent":[".search-suggestion {\r\n  padding: 10px;\r\n\r\n  &:hover {\r\n    background-color: rgba(steelblue, 0.3);\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/search/Search.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/search/Search.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.search {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  grid-column: 1/2;\n  grid-row: 1/3;\n}\n.search__title {\n  margin-bottom: 10px;\n}\n.search__list {\n  list-style: none;\n  overflow-y: scroll;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 1px;\n          flex: 1 0 1px;\n}\n@media (max-width: 1023px) {\n  .search__list {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    max-height: 50vh;\n  }\n}\n.search__list::-webkit-scrollbar {\n  width: 10px;\n  background-color: #bb5d5d;\n  border-radius: 100px;\n}\n.search__list::-webkit-scrollbar-thumb {\n  background-color: brown;\n  border-radius: 100px;\n}\n\n.fullscreen--active .search__list {\n  max-height: 70vh;\n}\n\n.simple-keyboard {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 30;\n  color: #310021;\n}\n.simple-keyboard--active {\n  display: block;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/search/Search.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,gBAAA;EACA,aAAA;AAiCF;AA/BE;EACE,mBAAA;AAiCJ;AA9BE;EACE,gBAAA;EACA,kBAAA;EACA,mBAAA;MAAA,iBAAA;UAAA,aAAA;AAgCJ;AA9BI;EALF;IAMI,mBAAA;QAAA,kBAAA;YAAA,cAAA;IACA,gBAAA;EAiCJ;AACF;AA/BI;EACE,WAAA;EACA,yBAAA;EACA,oBAAA;AAiCN;AA9BI;EACE,uBAAA;EACA,oBAAA;AAgCN;;AA3BA;EACE,gBAAA;AA8BF;;AA3BA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,cDpCmB;ACkErB;AA5BE;EACE,cAAA;AA8BJ","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.search {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 3;\r\n\r\n  &__title {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  &__list {\r\n    list-style: none;\r\n    overflow-y: scroll;\r\n    flex: 1 0 1px;\r\n\r\n    @media (max-width: $media-midW) {\r\n      flex: 0 0 auto;\r\n      max-height: 50vh;\r\n    }\r\n\r\n    &::-webkit-scrollbar {\r\n      width: 10px;\r\n      background-color: rgb(187, 93, 93);\r\n      border-radius: 100px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: brown;\r\n      border-radius: 100px;\r\n    }\r\n  }\r\n}\r\n\r\n.fullscreen--active .search__list {\r\n  max-height: 70vh;\r\n}\r\n\r\n.simple-keyboard {\r\n  display: none;\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 30;\r\n  color: $p-dark-theme-color;\r\n\r\n  &--active {\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/Table.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/Table.scss ***!
  \****************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n  grid-row: 1/2;\n  grid-column: 3/4;\n}\n.table .toggles-container {\n  margin-top: auto;\n}\n\n.table__block {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/table/Table.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;EACA,aAAA;EACA,gBAAA;AAiCF;AA3BE;EACE,gBAAA;AA6BJ;;AAzBA;EACE,mBAAA;MAAA,WAAA;UAAA,OAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,wBAAA;AA4BF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.table {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: stretch;\r\n  grid-row: 1 / 2;\r\n  grid-column: 3 / 4;\r\n  // grid-area: table;\r\n  // height: 100%;\r\n  //width: 25%;\r\n  //outline: 2px solid lightskyblue;\r\n\r\n  .toggles-container {\r\n    margin-top: auto;\r\n  }\r\n}\r\n\r\n.table__block {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: stretch;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/View.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/View.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1,\n.head1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 2rem;\n  color: #ffffff;\n}\n\nh2,\n.head2 {\n  font-style: normal;\n  font-size: 1.25rem;\n  color: #ffffff;\n}\n\nbody {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1rem;\n  color: #ffffff;\n}\n\nhtml {\n  background-color: #5d1048;\n}\n\nbutton {\n  font-family: RobotoCondensed, Arial, sans-serif;\n  padding: 1px 2px;\n  border-radius: 0;\n  cursor: pointer;\n}\n\n.view {\n  display: grid;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-row-gap: 1rem;\n  row-gap: 1rem;\n  height: 100vh;\n  background-color: #5d1048;\n}\n.view main {\n  display: contents;\n}\n\n.content-wrapper--main {\n  display: grid;\n  grid-template-columns: minmax(275px, 20%) 1fr 300px;\n  grid-template-rows: 1fr 2fr;\n  grid-gap: 1rem;\n  gap: 1rem;\n  padding: 0 1rem;\n}\n@media (max-width: 1023px) {\n  .content-wrapper--main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n\n.svg-container svg {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/scss/variables.scss","webpack://./src/components/view/View.scss"],"names":[],"mappings":"AAyDA;;EANE,kBAAA;EACA,iBAAA;EACA,eAAA;EACA,cArDmB;ACKrB;;AD+DA;;EANE,kBAAA;EAEA,kBAAA;EACA,cAjEmB;ACYrB;;ADqFA;EAPE,+CArEa;EAsEb,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,cA9FmB;ACoBrB;;ADiFA;EACE,yBA/FoB;ACiBtB;;AD8HA;EACE,+CAlIa;EAmIb,gBAAA;EACA,gBAAA;EACA,eAAA;AC3HF;;AA9BA;EACE,aAAA;EACA,0BAAA;MAAA,uBAAA;UAAA,oBAAA;EACA,0BAAA;EACA,iCAAA;EACA,kBAAA;EAAA,aAAA;EACA,aAAA;EACA,yBDDoB;ACkCtB;AA/BE;EACE,iBAAA;AAiCJ;;AA7BA;EACE,aAAA;EACA,mDAAA;EACA,2BAAA;EACA,cAAA;EAAA,SAAA;EACA,eAAA;AAgCF;AA9BE;EAPF;IAQI,oBAAA;IAAA,oBAAA;IAAA,aAAA;IACA,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;EAiCF;AACF;;AA9BA;EACE,WAAA;AAiCF","sourcesContent":["//* text, borders, etc\r\n$primary-text-color: #ffffff;\r\n$secondary-text-color: #adadad;\r\n// $middle-color: rgba(31, 32, 65, 0.5);\r\n// $lightest-color: rgba(31, 32, 65, 0.05);\r\n// $dark-color: #1F2041;\r\n\r\n//* theme colors\r\n$primary-theme-color: #5d1048;\r\n$p-dark-theme-color: #310021;\r\n$p-light-theme-color: #8d3f74;\r\n$secondary-theme-color: #d90110;\r\n$s-dark-theme-color: #9f0000;\r\n$s-light-theme-color: #ff523c;\r\n\r\n// $primary-gradient: linear-gradient(180deg, rgb(188, 156, 255) 0%, rgb(139, 164, 249) 100%);\r\n// $secondary-gradient: linear-gradient(180deg, rgb(111, 207, 151) 0%, rgb(102, 210, 234) 100%);\r\n\r\n// $primary-gradient-half-opacity: linear-gradient(180deg, rgba(188, 156, 255, 0.5) 0%, rgba(139, 164, 249, 0.5) 100%);\r\n// $secondary-gradient__half-opacity: linear-gradient(180deg, rgba(111, 207, 151, 0.5) 0%, rgba(102, 210, 234, 0.5) 100%);\r\n\r\n//* types\r\n$primary-type: RobotoCondensed, Arial, sans-serif;\r\n\r\n//* borders\r\n// $border-depth: 1px;\r\n// $border-style: solid;\r\n// $border-radius: 4px;\r\n\r\n// $border-base: $border-depth $border-style $secondary-color;\r\n// $border-accent: $border-depth $border-style $middle-color;\r\n// $border-light: $border-depth $border-style rgba(31, 32, 65, 0.1);\r\n\r\n\r\n//* базовые размеры шрифтов\r\n$font-body: 16rem;\r\n$font-h1: 32rem;\r\n$font-h2: 20rem;\r\n$font-h3: 18rem;\r\n\r\n\r\n//* брейкпоинты\r\n// $media-maxW: 1223px; // уменьшается только второстепенный шрифт и высота строки в футере\r\n$media-midW: 1023px; // уменьшается весь шрифт, мобильное меню и футер\r\n// $media-minW: 760px; // убираем бриф справа, центрируем карточку\r\n// $media-sMinW: 560px; // убираем логотип\r\n// $media-uMinW: 410px; // под узкие мобильные экраны - сужаем карточку\r\n\r\n\r\n\r\n@mixin head1 {\r\n  font-style: normal;\r\n  font-weight: bold;\r\n  font-size: #{$font-h1/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh1,\r\n.head1 {\r\n  @include head1;\r\n}\r\n\r\n@mixin head2 {\r\n  font-style: normal;\r\n  //font-weight: bold;\r\n  font-size: #{$font-h2/$font-body}rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nh2,\r\n.head2 {\r\n  @include head2;\r\n}\r\n\r\n// @mixin head3 {\r\n//   font-family: $primary-type;\r\n//   font-style: normal;\r\n//   font-weight: bold;\r\n//   font-size: #{$font-h3/$font-body}rem;\r\n//   line-height: 1.25em;\r\n//   /* identical to box height */\r\n//   text-transform: uppercase;\r\n//   color: $dark-color;\r\n// }\r\n\r\n// h3,\r\n// .head3 {\r\n//   @include head3;\r\n// }\r\n\r\n@mixin regular {\r\n  font-family: $primary-type;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-size: 1rem;\r\n  color: $primary-text-color;\r\n}\r\n\r\nbody {\r\n  @include regular;\r\n}\r\n\r\nhtml {\r\n  background-color: $primary-theme-color;\r\n}\r\n\r\n// //* bloks search, map, table & graph substrate\r\n@mixin blocks {\r\n  position: relative;\r\n  padding: 0.8rem 0.8rem 0 0.8rem;\r\n  border-radius: 13px 13px 0 0;\r\n  background: $primary-theme-color;\r\n  box-shadow: 7px 7px 11px #3f0b31,\r\n    -7px -7px 11px #7b155f;\r\n\r\n  // @media (max-width: $media-uMinW) {\r\n  //   width: 100%;\r\n  //   padding: 20px 5vw 10px 5vw;\r\n  //   border: $border-light;\r\n  //   box-shadow: 0px 0px 5vw rgba(0, 0, 0, 0.2);\r\n  // }\r\n}\r\n\r\n// //* миксины для медиазапросов\r\n\r\n// @mixin widthMax {\r\n//   @media (max-width: $media-maxW) {\r\n//     font-size: #{$font-h3/$font-body}rem;\r\n//   }\r\n// }\r\n\r\n// //! общие стили макета\r\n\r\n// html {\r\n//   width: 1440px; //убрать для прода\r\n//   @media (max-width: $media-midW) {\r\n//     font-size: 12px;\r\n//   }\r\n// }\r\n\r\n// .container {\r\n//   max-width: 1200px;\r\n//   margin: 0 auto;\r\n//   padding: 0 20px;\r\n\r\n//   @media (max-width: $media-uMinW) {\r\n//     width: 100vw;\r\n//     padding: 0 5vw;\r\n//   }\r\n// }\r\n\r\nbutton {\r\n  font-family: $primary-type;\r\n  padding: 1px 2px;\r\n  border-radius: 0;\r\n  cursor: pointer;\r\n}\r\n","@import \"./../../scss/variables\";\r\n\r\n.view {\r\n  display: grid;\r\n  align-items: stretch;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto 1fr auto;\r\n  row-gap: 1rem;\r\n  height: 100vh;\r\n  background-color: $primary-theme-color;\r\n\r\n  main {\r\n    display: contents;\r\n  }\r\n}\r\n\r\n.content-wrapper--main {\r\n  display: grid;\r\n  grid-template-columns: minmax(275px, 20%) 1fr 300px;\r\n  grid-template-rows: 1fr 2fr;\r\n  gap: 1rem;\r\n  padding: 0 1rem;\r\n\r\n  @media (max-width: $media-midW) {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n.svg-container svg {\r\n  width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_RobotoCondensed_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/RobotoCondensed-Regular.woff2 */ "./src/assets/fonts/RobotoCondensed-Regular.woff2");
/* harmony import */ var _assets_fonts_RobotoCondensed_Italic_woff2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/RobotoCondensed-Italic.woff2 */ "./src/assets/fonts/RobotoCondensed-Italic.woff2");
/* harmony import */ var _assets_fonts_RobotoCondensed_Bold_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/RobotoCondensed-Bold.woff2 */ "./src/assets/fonts/RobotoCondensed-Bold.woff2");
/* harmony import */ var _assets_fonts_RobotoCondensed_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/RobotoCondensed-BoldItalic.woff2 */ "./src/assets/fonts/RobotoCondensed-BoldItalic.woff2");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_RobotoCondensed_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_RobotoCondensed_Italic_woff2__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_RobotoCondensed_Bold_woff2__WEBPACK_IMPORTED_MODULE_5__);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_RobotoCondensed_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_6__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff2\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\");\n  font-weight: 700;\n  font-style: italic;\n}\nhtml {\n  background-color: #ffffff;\n}\n\nbody {\n  width: 100%;\n}\n\nhtml[dir=\"ltr\"],[dir=\"ltr\"] \nbody,[dir=\"ltr\"] \nsection,[dir=\"ltr\"] \nnav,[dir=\"ltr\"] \ndiv,[dir=\"ltr\"] \ndl,[dir=\"ltr\"] \ndt,[dir=\"ltr\"] \ndd,[dir=\"ltr\"] \nul,[dir=\"ltr\"] \nol,[dir=\"ltr\"] \nli,[dir=\"ltr\"] \nh1,[dir=\"ltr\"] \nh2,[dir=\"ltr\"] \nh3,[dir=\"ltr\"] \nh4,[dir=\"ltr\"] \nh5,[dir=\"ltr\"] \nh6,[dir=\"ltr\"] \npre,[dir=\"ltr\"] \nform,[dir=\"ltr\"] \nfieldset,[dir=\"ltr\"] \ninput,[dir=\"ltr\"] \nbutton,[dir=\"ltr\"] \ntextarea,[dir=\"ltr\"] \np,[dir=\"ltr\"] \nblockquote,[dir=\"ltr\"] \nth,[dir=\"ltr\"] \ntd,[dir=\"ltr\"] \nimg {\n  margin-left: 0;\n}\n\nhtml[dir=\"rtl\"],[dir=\"rtl\"] \nbody,[dir=\"rtl\"] \nsection,[dir=\"rtl\"] \nnav,[dir=\"rtl\"] \ndiv,[dir=\"rtl\"] \ndl,[dir=\"rtl\"] \ndt,[dir=\"rtl\"] \ndd,[dir=\"rtl\"] \nul,[dir=\"rtl\"] \nol,[dir=\"rtl\"] \nli,[dir=\"rtl\"] \nh1,[dir=\"rtl\"] \nh2,[dir=\"rtl\"] \nh3,[dir=\"rtl\"] \nh4,[dir=\"rtl\"] \nh5,[dir=\"rtl\"] \nh6,[dir=\"rtl\"] \npre,[dir=\"rtl\"] \nform,[dir=\"rtl\"] \nfieldset,[dir=\"rtl\"] \ninput,[dir=\"rtl\"] \nbutton,[dir=\"rtl\"] \ntextarea,[dir=\"rtl\"] \np,[dir=\"rtl\"] \nblockquote,[dir=\"rtl\"] \nth,[dir=\"rtl\"] \ntd,[dir=\"rtl\"] \nimg {\n  margin-right: 0;\n}\n\nhtml[dir=\"ltr\"],[dir=\"ltr\"] \nbody,[dir=\"ltr\"] \nsection,[dir=\"ltr\"] \nnav,[dir=\"ltr\"] \ndiv,[dir=\"ltr\"] \ndl,[dir=\"ltr\"] \ndt,[dir=\"ltr\"] \ndd,[dir=\"ltr\"] \nul,[dir=\"ltr\"] \nol,[dir=\"ltr\"] \nli,[dir=\"ltr\"] \nh1,[dir=\"ltr\"] \nh2,[dir=\"ltr\"] \nh3,[dir=\"ltr\"] \nh4,[dir=\"ltr\"] \nh5,[dir=\"ltr\"] \nh6,[dir=\"ltr\"] \npre,[dir=\"ltr\"] \nform,[dir=\"ltr\"] \nfieldset,[dir=\"ltr\"] \ninput,[dir=\"ltr\"] \nbutton,[dir=\"ltr\"] \ntextarea,[dir=\"ltr\"] \np,[dir=\"ltr\"] \nblockquote,[dir=\"ltr\"] \nth,[dir=\"ltr\"] \ntd,[dir=\"ltr\"] \nimg {\n  margin-right: 0;\n}\n\nhtml[dir=\"rtl\"],[dir=\"rtl\"] \nbody,[dir=\"rtl\"] \nsection,[dir=\"rtl\"] \nnav,[dir=\"rtl\"] \ndiv,[dir=\"rtl\"] \ndl,[dir=\"rtl\"] \ndt,[dir=\"rtl\"] \ndd,[dir=\"rtl\"] \nul,[dir=\"rtl\"] \nol,[dir=\"rtl\"] \nli,[dir=\"rtl\"] \nh1,[dir=\"rtl\"] \nh2,[dir=\"rtl\"] \nh3,[dir=\"rtl\"] \nh4,[dir=\"rtl\"] \nh5,[dir=\"rtl\"] \nh6,[dir=\"rtl\"] \npre,[dir=\"rtl\"] \nform,[dir=\"rtl\"] \nfieldset,[dir=\"rtl\"] \ninput,[dir=\"rtl\"] \nbutton,[dir=\"rtl\"] \ntextarea,[dir=\"rtl\"] \np,[dir=\"rtl\"] \nblockquote,[dir=\"rtl\"] \nth,[dir=\"rtl\"] \ntd,[dir=\"rtl\"] \nimg {\n  margin-left: 0;\n}\n\nhtml[dir=\"ltr\"],[dir=\"ltr\"] \nbody,[dir=\"ltr\"] \nsection,[dir=\"ltr\"] \nnav,[dir=\"ltr\"] \ndiv,[dir=\"ltr\"] \ndl,[dir=\"ltr\"] \ndt,[dir=\"ltr\"] \ndd,[dir=\"ltr\"] \nul,[dir=\"ltr\"] \nol,[dir=\"ltr\"] \nli,[dir=\"ltr\"] \nh1,[dir=\"ltr\"] \nh2,[dir=\"ltr\"] \nh3,[dir=\"ltr\"] \nh4,[dir=\"ltr\"] \nh5,[dir=\"ltr\"] \nh6,[dir=\"ltr\"] \npre,[dir=\"ltr\"] \nform,[dir=\"ltr\"] \nfieldset,[dir=\"ltr\"] \ninput,[dir=\"ltr\"] \nbutton,[dir=\"ltr\"] \ntextarea,[dir=\"ltr\"] \np,[dir=\"ltr\"] \nblockquote,[dir=\"ltr\"] \nth,[dir=\"ltr\"] \ntd,[dir=\"ltr\"] \nimg {\n  padding-left: 0;\n}\n\nhtml[dir=\"rtl\"],[dir=\"rtl\"] \nbody,[dir=\"rtl\"] \nsection,[dir=\"rtl\"] \nnav,[dir=\"rtl\"] \ndiv,[dir=\"rtl\"] \ndl,[dir=\"rtl\"] \ndt,[dir=\"rtl\"] \ndd,[dir=\"rtl\"] \nul,[dir=\"rtl\"] \nol,[dir=\"rtl\"] \nli,[dir=\"rtl\"] \nh1,[dir=\"rtl\"] \nh2,[dir=\"rtl\"] \nh3,[dir=\"rtl\"] \nh4,[dir=\"rtl\"] \nh5,[dir=\"rtl\"] \nh6,[dir=\"rtl\"] \npre,[dir=\"rtl\"] \nform,[dir=\"rtl\"] \nfieldset,[dir=\"rtl\"] \ninput,[dir=\"rtl\"] \nbutton,[dir=\"rtl\"] \ntextarea,[dir=\"rtl\"] \np,[dir=\"rtl\"] \nblockquote,[dir=\"rtl\"] \nth,[dir=\"rtl\"] \ntd,[dir=\"rtl\"] \nimg {\n  padding-right: 0;\n}\n\nhtml[dir=\"ltr\"],[dir=\"ltr\"] \nbody,[dir=\"ltr\"] \nsection,[dir=\"ltr\"] \nnav,[dir=\"ltr\"] \ndiv,[dir=\"ltr\"] \ndl,[dir=\"ltr\"] \ndt,[dir=\"ltr\"] \ndd,[dir=\"ltr\"] \nul,[dir=\"ltr\"] \nol,[dir=\"ltr\"] \nli,[dir=\"ltr\"] \nh1,[dir=\"ltr\"] \nh2,[dir=\"ltr\"] \nh3,[dir=\"ltr\"] \nh4,[dir=\"ltr\"] \nh5,[dir=\"ltr\"] \nh6,[dir=\"ltr\"] \npre,[dir=\"ltr\"] \nform,[dir=\"ltr\"] \nfieldset,[dir=\"ltr\"] \ninput,[dir=\"ltr\"] \nbutton,[dir=\"ltr\"] \ntextarea,[dir=\"ltr\"] \np,[dir=\"ltr\"] \nblockquote,[dir=\"ltr\"] \nth,[dir=\"ltr\"] \ntd,[dir=\"ltr\"] \nimg {\n  padding-right: 0;\n}\n\nhtml[dir=\"rtl\"],[dir=\"rtl\"] \nbody,[dir=\"rtl\"] \nsection,[dir=\"rtl\"] \nnav,[dir=\"rtl\"] \ndiv,[dir=\"rtl\"] \ndl,[dir=\"rtl\"] \ndt,[dir=\"rtl\"] \ndd,[dir=\"rtl\"] \nul,[dir=\"rtl\"] \nol,[dir=\"rtl\"] \nli,[dir=\"rtl\"] \nh1,[dir=\"rtl\"] \nh2,[dir=\"rtl\"] \nh3,[dir=\"rtl\"] \nh4,[dir=\"rtl\"] \nh5,[dir=\"rtl\"] \nh6,[dir=\"rtl\"] \npre,[dir=\"rtl\"] \nform,[dir=\"rtl\"] \nfieldset,[dir=\"rtl\"] \ninput,[dir=\"rtl\"] \nbutton,[dir=\"rtl\"] \ntextarea,[dir=\"rtl\"] \np,[dir=\"rtl\"] \nblockquote,[dir=\"rtl\"] \nth,[dir=\"rtl\"] \ntd,[dir=\"rtl\"] \nimg {\n  padding-left: 0;\n}\n\nhtml,\nbody,\nsection,\nnav,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\ninput,\nbutton,\ntextarea,\np,\nblockquote,\nth,\ntd,\nimg {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\nimg {\n  display: block;\n  height: 100%;\n  width: auto;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nsvg,\nsvg * {\n  line-height: 0;\n}\n\nbutton {\n  font-size: 15px;\n}", "",{"version":3,"sources":["webpack://./src/scss/_fonts.scss","webpack://./src/scss/index.scss","webpack://./src/scss/_global.scss"],"names":[],"mappings":"AAAA;EACE,8BAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;ACCF;ADCA;EACE,8BAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;ACCF;ADCA;EACE,8BAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;ACCF;ADCA;EACE,8BAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;ACCF;ACvBA;EACE,yBAAA;ADyBF;;ACtBA;EACE,WAAA;ADyBF;;ACtBA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiCE;AD8BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiCE;AD8BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkCE;AD6BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAkCE;AD6BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqCE;AD0BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAqCE;AD0BF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAsCE;ADyBF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAsCE;ADyBF;;AC/DA;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA4BE,8BAAA;UAAA,sBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,gBAAA;EAGA,cAAA;EACA,iBAAA;AD2BF;;ACtBA;EACE,cAAA;EACA,YAAA;EACA,WAAA;ADyBF;;ACtBA;;;;;;EAME,eAAA;EACA,mBAAA;ADyBF;;ACtBA;;EAEE,cAAA;ADyBF;;ACtBA;EACE,eAAA;ADyBF","sourcesContent":["@font-face {\r\n  font-family: \"RobotoCondensed\";\r\n  src: url(\"../assets/fonts/RobotoCondensed-Regular.woff2\") format(\"woff2\");\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"RobotoCondensed\";\r\n  src: url(\"../assets/fonts/RobotoCondensed-Italic.woff2\") format(\"woff2\");\r\n  font-weight: 400;\r\n  font-style: italic;\r\n}\r\n@font-face {\r\n  font-family: \"RobotoCondensed\";\r\n  src: url(\"../assets/fonts/RobotoCondensed-Bold.woff2\") format(\"woff2\");\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \"RobotoCondensed\";\r\n  src: url(\"../assets/fonts/RobotoCondensed-BoldItalic.woff2\") format(\"woff2\");\r\n  font-weight: 700;\r\n  font-style: italic;\r\n}\r\n","@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(\"../assets/fonts/RobotoCondensed-Regular.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(\"../assets/fonts/RobotoCondensed-Italic.woff2\") format(\"woff2\");\n  font-weight: 400;\n  font-style: italic;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(\"../assets/fonts/RobotoCondensed-Bold.woff2\") format(\"woff2\");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"RobotoCondensed\";\n  src: url(\"../assets/fonts/RobotoCondensed-BoldItalic.woff2\") format(\"woff2\");\n  font-weight: 700;\n  font-style: italic;\n}\nhtml {\n  background-color: #ffffff;\n}\n\nbody {\n  width: 100%;\n}\n\nhtml,\nbody,\nsection,\nnav,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\ninput,\nbutton,\ntextarea,\np,\nblockquote,\nth,\ntd,\nimg {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  margin-inline-start: 0;\n  margin-inline-end: 0;\n  padding-block-start: 0;\n  padding-block-end: 0;\n  padding-inline-start: 0;\n  padding-inline-end: 0;\n}\n\nimg {\n  display: block;\n  height: 100%;\n  width: auto;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\n\nsvg,\nsvg * {\n  line-height: 0;\n}\n\nbutton {\n  font-size: 15px;\n}","html {\r\n  background-color: #ffffff;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\nsection,\r\nnav,\r\ndiv,\r\ndl,\r\ndt,\r\ndd,\r\nul,\r\nol,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\npre,\r\nform,\r\nfieldset,\r\ninput,\r\nbutton,\r\ntextarea,\r\np,\r\nblockquote,\r\nth,\r\ntd,\r\nimg {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  margin-block-start: 0;\r\n  margin-block-end: 0;\r\n  margin-inline-start: 0;\r\n  margin-inline-end: 0;\r\n  padding-block-start: 0;\r\n  padding-block-end: 0;\r\n  padding-inline-start: 0;\r\n  padding-inline-end: 0;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  height: 100%;\r\n  width: auto;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: 100%;\r\n  font-weight: normal;\r\n}\r\n\r\nsvg,\r\nsvg * {\r\n  line-height: 0;\r\n}\r\n\r\nbutton {\r\n  font-size: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/_common/fullscreenContainer/FullscreenContainer.scss":
/*!*****************************************************************************!*\
  !*** ./src/components/_common/fullscreenContainer/FullscreenContainer.scss ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./FullscreenContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/fullscreenContainer/FullscreenContainer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./FullscreenContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/fullscreenContainer/FullscreenContainer.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./FullscreenContainer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/fullscreenContainer/FullscreenContainer.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FullscreenContainer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/_common/searchItem/SearchItem.scss":
/*!***********************************************************!*\
  !*** ./src/components/_common/searchItem/SearchItem.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./SearchItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/searchItem/SearchItem.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./SearchItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/searchItem/SearchItem.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./SearchItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/searchItem/SearchItem.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchItem_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/_common/tableRow/TableRow.scss":
/*!*******************************************************!*\
  !*** ./src/components/_common/tableRow/TableRow.scss ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TableRow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tableRow/TableRow.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TableRow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tableRow/TableRow.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./TableRow.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tableRow/TableRow.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TableRow_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/_common/tabs/Tabs.scss":
/*!***********************************************!*\
  !*** ./src/components/_common/tabs/Tabs.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Tabs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tabs/Tabs.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Tabs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tabs/Tabs.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Tabs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/tabs/Tabs.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Tabs_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/_common/toggle/Toggle.scss":
/*!***************************************************!*\
  !*** ./src/components/_common/toggle/Toggle.scss ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/toggle/Toggle.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/toggle/Toggle.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Toggle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/_common/toggle/Toggle.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Toggle_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/footer/Footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/Footer.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/Footer.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/Footer.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/footer/Footer.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/graph/Graph.scss":
/*!*****************************************!*\
  !*** ./src/components/graph/Graph.scss ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Graph.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/graph/Graph.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Graph.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/graph/Graph.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Graph.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/graph/Graph.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/Header.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/Header.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/Header.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/header/Header.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Header_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/loading-screen/LoadingScreen.scss":
/*!**********************************************************!*\
  !*** ./src/components/loading-screen/LoadingScreen.scss ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LoadingScreen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading-screen/LoadingScreen.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LoadingScreen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading-screen/LoadingScreen.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./LoadingScreen.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/loading-screen/LoadingScreen.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoadingScreen_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/map-legend/MapLegend.scss":
/*!**************************************************!*\
  !*** ./src/components/map-legend/MapLegend.scss ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./MapLegend.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map-legend/MapLegend.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./MapLegend.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map-legend/MapLegend.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./MapLegend.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map-legend/MapLegend.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MapLegend_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/map/Map.scss":
/*!*************************************!*\
  !*** ./src/components/map/Map.scss ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Map.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map/Map.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Map.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map/Map.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Map.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/map/Map.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Map_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/searchInput/SearchInput.scss":
/*!*****************************************************!*\
  !*** ./src/components/searchInput/SearchInput.scss ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchInput.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchInput/SearchInput.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchInput.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchInput/SearchInput.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchInput.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchInput/SearchInput.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchInput_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/searchSuggestion/SearchSuggestion.scss":
/*!***************************************************************!*\
  !*** ./src/components/searchSuggestion/SearchSuggestion.scss ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchSuggestion.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchSuggestion/SearchSuggestion.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchSuggestion.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchSuggestion/SearchSuggestion.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SearchSuggestion.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/searchSuggestion/SearchSuggestion.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SearchSuggestion_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/search/Search.scss":
/*!*******************************************!*\
  !*** ./src/components/search/Search.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/search/Search.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/search/Search.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Search.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/search/Search.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Search_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/table/Table.scss":
/*!*****************************************!*\
  !*** ./src/components/table/Table.scss ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Table.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/Table.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Table.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/Table.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Table.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/table/Table.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Table_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/view/View.scss":
/*!***************************************!*\
  !*** ./src/components/view/View.scss ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./View.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/View.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./View.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/View.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./View.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/view/View.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_View_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Bold.woff2":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Bold.woff2 ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "data:font/woff2;base64,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";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-BoldItalic.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-BoldItalic.woff2 ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:font/woff2;base64,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";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Italic.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Italic.woff2 ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "data:font/woff2;base64,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";

/***/ }),

/***/ "./src/assets/fonts/RobotoCondensed-Regular.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/RobotoCondensed-Regular.woff2 ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "data:font/woff2;base64,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";

/***/ }),

/***/ "./src/assets/rs_school_logo.svg":
/*!***************************************!*\
  !*** ./src/assets/rs_school_logo.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDU1Mi44IDIwNS4zIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9LnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyl9LnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyl9LnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyl9LnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0NXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0Niwuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q4LC5zdDl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKX0uc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjx0aXRsZT5yc19zY2hvb2xfanM8L3RpdGxlPjxwYXRoIGQ9Ik0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6Ii8+PHBhdGggZD0iTTEzMyAxNjcuMmwyNC4yIDcuM2MtMS4zIDYuMS00IDExLjktNy43IDE3LTMuNCA0LjUtNy45IDgtMTMgMTAuMy01LjIgMi4zLTExLjggMy41LTE5LjggMy41LTkuNyAwLTE3LjctMS40LTIzLjgtNC4yLTYuMi0yLjgtMTEuNS03LjgtMTYtMTQuOS00LjUtNy4xLTYuNy0xNi4yLTYuNy0yNy4zIDAtMTQuOCAzLjktMjYuMiAxMS44LTM0LjFzMTktMTEuOSAzMy40LTExLjljMTEuMyAwIDIwLjEgMi4zIDI2LjYgNi44IDYuNCA0LjYgMTEuMiAxMS42IDE0LjQgMjFsLTI0LjQgNS40Yy0uNi0yLjEtMS41LTQuMi0yLjctNi0xLjUtMi4xLTMuNC0zLjctNS43LTQuOS0yLjMtMS4yLTQuOS0xLjctNy41LTEuNy02LjMgMC0xMS4xIDIuNS0xNC40IDcuNi0yLjUgMy43LTMuOCA5LjYtMy44IDE3LjYgMCA5LjkgMS41IDE2LjcgNC41IDIwLjQgMyAzLjcgNy4yIDUuNSAxMi43IDUuNSA1LjMgMCA5LjMtMS41IDEyLTQuNCAyLjctMy4xIDQuNy03LjQgNS45LTEzem01Ni41LTUyLjhoMjcuNnYzMS4zaDMwLjJ2LTMxLjNoMjcuOHY4OS40aC0yNy44di0zNi4yaC0zMC4ydjM2LjJoLTI3LjZ2LTg5LjR6Ii8+PHBhdGggZD0iTTI3MS4zIDE1OS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjMgNCAzNC40IDEyUzM2NCAxNDQgMzY0IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOHM0LjktMTAuOCA0LjktMjAuOGMwLTguNC0xLjctMTQuNi01LjEtMTguNC0zLjQtMy45LTgtNS44LTEzLjgtNS44LTUuMS0uMi0xMCAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6bTkzLjQtLjFjMC0xNC42IDQuMS0yNiAxMi4yLTM0LjEgOC4xLTguMSAxOS41LTEyLjIgMzQtMTIuMiAxNC45IDAgMjYuNCA0IDM0LjQgMTJTNDg1IDE0NCA0ODUgMTU4LjRjMCAxMC41LTEuOCAxOS01LjMgMjUuNy0zLjQgNi42LTguNyAxMi0xNS4yIDE1LjYtNi43IDMuNy0xNSA1LjYtMjQuOSA1LjYtMTAuMSAwLTE4LjQtMS42LTI1LTQuOC02LjgtMy40LTEyLjQtOC43LTE2LjEtMTUuMi00LjEtNy02LjItMTUuNy02LjItMjYuMnptMjcuNi4xYzAgOSAxLjcgMTUuNSA1IDE5LjUgMy4zIDMuOSA3LjkgNS45IDEzLjcgNS45IDUuOSAwIDEwLjUtMS45IDEzLjgtNS44IDMuMy0zLjkgNC45LTEwLjggNC45LTIwLjggMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAuMSAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6Ii8+PHBhdGggZD0iTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHoiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDAiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48ZGVmcz48ZWxsaXBzZSBpZD0iU1ZHSURfMV8iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDEiPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDAiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjxnIGlkPSJMYXllcl8yXzFfIj48ZGVmcz48cGF0aCBpZD0iU1ZHSURfM18iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGlkPSJMYXllcl8xLTIiIGNsYXNzPSJzdDIiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0MCIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjxkZWZzPjxlbGxpcHNlIGlkPSJTVkdJRF81XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPjx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9InN0MyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF83XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF83XyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDQiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0NSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZz48cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpIiBjbGFzcz0ic3Q2IiBkPSJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6Ii8+PGVsbGlwc2UgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjbGFzcz0ic3Q3IiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF85XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzEwXyI+PHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz0ic3Q4Ij48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDUiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48L2c+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0OSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDciIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDciIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48cGF0aCBkPSJNMzkyLjQgNjEuM2wxMC03IDEyLjMgMTcuNWMyLjEgMi44IDMuNyA1LjggNC45IDkuMS43IDIuNS41IDUuMi0uNSA3LjYtMS4zIDMtMy40IDUuNS02LjIgNy4zLTMuMyAyLjMtNi4xIDMuNi04LjUgNC0yLjMuNC00LjcgMC02LjktMS0yLjQtMS4yLTQuNS0yLjktNi4xLTUuMWw4LjYtOGMuNyAxLjEgMS42IDIuMSAyLjYgMi45LjcuNSAxLjUuOCAyLjQuOC43IDAgMS40LS4zIDEuOS0uNyAxLS42IDEuNy0xLjggMS42LTMtLjMtMS43LTEtMy40LTIuMS00LjdsLTE0LTE5Ljd6bTMwIDExLjFsOS4xLTcuMmMxIDEuMiAyLjMgMi4xIDMuNyAyLjYgMiAuNiA0LjEuMiA1LjgtMS4xIDEuMi0uOCAyLjItMS45IDIuNi0zLjMuNi0xLjgtLjQtMy44LTIuMi00LjQtLjMtLjEtLjYtLjItLjktLjItMS4yLS4xLTMuMy40LTYuNCAxLjctNS4xIDIuMS05LjEgMi45LTEyLjEgMi42LTIuOS0uMy01LjYtMS44LTcuMi00LjMtMS4yLTEuNy0xLjgtMy43LTEuOS01LjcgMC0yLjMuNi00LjYgMS45LTYuNSAxLjktMi43IDQuMi01IDctNi44IDQuMi0yLjkgNy45LTQuMyAxMS4xLTQuMyAzLjIgMCA2LjIgMS41IDkgNC42bC05IDcuMWMtMS44LTIuMy01LjItMi44LTcuNS0xbC0uMy4zYy0xIC42LTEuNyAxLjUtMi4xIDIuNi0uMy44LS4xIDEuNy40IDIuNC40LjUgMSAuOSAxLjcuOS44LjEgMi4yLS4zIDQuMi0xLjIgNS0yLjEgOC44LTMuMyAxMS40LTMuNyAyLjItLjQgNC41LS4yIDYuNi43IDEuOS44IDMuNSAyLjIgNC42IDMuOSAxLjQgMiAyLjIgNC40IDIuMyA2LjkuMSAyLjYtLjYgNS4xLTIgNy4zLTEuOCAyLjctNC4xIDUtNi44IDYuOC01LjUgMy44LTEwIDUuNC0xMy42IDQuOC0zLjktLjYtNy4xLTIuNi05LjQtNS41eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./src/js/data/_codes.json":
/*!*********************************!*\
  !*** ./src/js/data/_codes.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse("[{\"name\":\"Afghanistan\",\"alpha-2\":\"AF\",\"country-code\":\"004\"},{\"name\":\"Åland Islands\",\"alpha-2\":\"AX\",\"country-code\":\"248\"},{\"name\":\"Albania\",\"alpha-2\":\"AL\",\"country-code\":\"008\"},{\"name\":\"Algeria\",\"alpha-2\":\"DZ\",\"country-code\":\"012\"},{\"name\":\"American Samoa\",\"alpha-2\":\"AS\",\"country-code\":\"016\"},{\"name\":\"Andorra\",\"alpha-2\":\"AD\",\"country-code\":\"020\"},{\"name\":\"Angola\",\"alpha-2\":\"AO\",\"country-code\":\"024\"},{\"name\":\"Anguilla\",\"alpha-2\":\"AI\",\"country-code\":\"660\"},{\"name\":\"Antarctica\",\"alpha-2\":\"AQ\",\"country-code\":\"010\"},{\"name\":\"Antigua and Barbuda\",\"alpha-2\":\"AG\",\"country-code\":\"028\"},{\"name\":\"Argentina\",\"alpha-2\":\"AR\",\"country-code\":\"032\"},{\"name\":\"Armenia\",\"alpha-2\":\"AM\",\"country-code\":\"051\"},{\"name\":\"Aruba\",\"alpha-2\":\"AW\",\"country-code\":\"533\"},{\"name\":\"Australia\",\"alpha-2\":\"AU\",\"country-code\":\"036\"},{\"name\":\"Austria\",\"alpha-2\":\"AT\",\"country-code\":\"040\"},{\"name\":\"Azerbaijan\",\"alpha-2\":\"AZ\",\"country-code\":\"031\"},{\"name\":\"Bahamas\",\"alpha-2\":\"BS\",\"country-code\":\"044\"},{\"name\":\"Bahrain\",\"alpha-2\":\"BH\",\"country-code\":\"048\"},{\"name\":\"Bangladesh\",\"alpha-2\":\"BD\",\"country-code\":\"050\"},{\"name\":\"Barbados\",\"alpha-2\":\"BB\",\"country-code\":\"052\"},{\"name\":\"Belarus\",\"alpha-2\":\"BY\",\"country-code\":\"112\"},{\"name\":\"Belgium\",\"alpha-2\":\"BE\",\"country-code\":\"056\"},{\"name\":\"Belize\",\"alpha-2\":\"BZ\",\"country-code\":\"084\"},{\"name\":\"Benin\",\"alpha-2\":\"BJ\",\"country-code\":\"204\"},{\"name\":\"Bermuda\",\"alpha-2\":\"BM\",\"country-code\":\"060\"},{\"name\":\"Bhutan\",\"alpha-2\":\"BT\",\"country-code\":\"064\"},{\"name\":\"Bolivia (Plurinational State of)\",\"alpha-2\":\"BO\",\"country-code\":\"068\"},{\"name\":\"Bonaire, Sint Eustatius and Saba\",\"alpha-2\":\"BQ\",\"country-code\":\"535\"},{\"name\":\"Bosnia and Herzegovina\",\"alpha-2\":\"BA\",\"country-code\":\"070\"},{\"name\":\"Botswana\",\"alpha-2\":\"BW\",\"country-code\":\"072\"},{\"name\":\"Bouvet Island\",\"alpha-2\":\"BV\",\"country-code\":\"074\"},{\"name\":\"Brazil\",\"alpha-2\":\"BR\",\"country-code\":\"076\"},{\"name\":\"British Indian Ocean Territory\",\"alpha-2\":\"IO\",\"country-code\":\"086\"},{\"name\":\"Brunei Darussalam\",\"alpha-2\":\"BN\",\"country-code\":\"096\"},{\"name\":\"Bulgaria\",\"alpha-2\":\"BG\",\"country-code\":\"100\"},{\"name\":\"Burkina Faso\",\"alpha-2\":\"BF\",\"country-code\":\"854\"},{\"name\":\"Burundi\",\"alpha-2\":\"BI\",\"country-code\":\"108\"},{\"name\":\"Cabo Verde\",\"alpha-2\":\"CV\",\"country-code\":\"132\"},{\"name\":\"Cambodia\",\"alpha-2\":\"KH\",\"country-code\":\"116\"},{\"name\":\"Cameroon\",\"alpha-2\":\"CM\",\"country-code\":\"120\"},{\"name\":\"Canada\",\"alpha-2\":\"CA\",\"country-code\":\"124\"},{\"name\":\"Cayman Islands\",\"alpha-2\":\"KY\",\"country-code\":\"136\"},{\"name\":\"Central African Republic\",\"alpha-2\":\"CF\",\"country-code\":\"140\"},{\"name\":\"Chad\",\"alpha-2\":\"TD\",\"country-code\":\"148\"},{\"name\":\"Chile\",\"alpha-2\":\"CL\",\"country-code\":\"152\"},{\"name\":\"China\",\"alpha-2\":\"CN\",\"country-code\":\"156\"},{\"name\":\"Christmas Island\",\"alpha-2\":\"CX\",\"country-code\":\"162\"},{\"name\":\"Cocos (Keeling) Islands\",\"alpha-2\":\"CC\",\"country-code\":\"166\"},{\"name\":\"Colombia\",\"alpha-2\":\"CO\",\"country-code\":\"170\"},{\"name\":\"Comoros\",\"alpha-2\":\"KM\",\"country-code\":\"174\"},{\"name\":\"Congo\",\"alpha-2\":\"CG\",\"country-code\":\"178\"},{\"name\":\"Congo, Democratic Republic of the\",\"alpha-2\":\"CD\",\"country-code\":\"180\"},{\"name\":\"Cook Islands\",\"alpha-2\":\"CK\",\"country-code\":\"184\"},{\"name\":\"Costa Rica\",\"alpha-2\":\"CR\",\"country-code\":\"188\"},{\"name\":\"Côte d'Ivoire\",\"alpha-2\":\"CI\",\"country-code\":\"384\"},{\"name\":\"Croatia\",\"alpha-2\":\"HR\",\"country-code\":\"191\"},{\"name\":\"Cuba\",\"alpha-2\":\"CU\",\"country-code\":\"192\"},{\"name\":\"Curaçao\",\"alpha-2\":\"CW\",\"country-code\":\"531\"},{\"name\":\"Cyprus\",\"alpha-2\":\"CY\",\"country-code\":\"196\"},{\"name\":\"Czechia\",\"alpha-2\":\"CZ\",\"country-code\":\"203\"},{\"name\":\"Denmark\",\"alpha-2\":\"DK\",\"country-code\":\"208\"},{\"name\":\"Djibouti\",\"alpha-2\":\"DJ\",\"country-code\":\"262\"},{\"name\":\"Dominica\",\"alpha-2\":\"DM\",\"country-code\":\"212\"},{\"name\":\"Dominican Republic\",\"alpha-2\":\"DO\",\"country-code\":\"214\"},{\"name\":\"Ecuador\",\"alpha-2\":\"EC\",\"country-code\":\"218\"},{\"name\":\"Egypt\",\"alpha-2\":\"EG\",\"country-code\":\"818\"},{\"name\":\"El Salvador\",\"alpha-2\":\"SV\",\"country-code\":\"222\"},{\"name\":\"Equatorial Guinea\",\"alpha-2\":\"GQ\",\"country-code\":\"226\"},{\"name\":\"Eritrea\",\"alpha-2\":\"ER\",\"country-code\":\"232\"},{\"name\":\"Estonia\",\"alpha-2\":\"EE\",\"country-code\":\"233\"},{\"name\":\"Eswatini\",\"alpha-2\":\"SZ\",\"country-code\":\"748\"},{\"name\":\"Ethiopia\",\"alpha-2\":\"ET\",\"country-code\":\"231\"},{\"name\":\"Falkland Islands (Malvinas)\",\"alpha-2\":\"FK\",\"country-code\":\"238\"},{\"name\":\"Faroe Islands\",\"alpha-2\":\"FO\",\"country-code\":\"234\"},{\"name\":\"Fiji\",\"alpha-2\":\"FJ\",\"country-code\":\"242\"},{\"name\":\"Finland\",\"alpha-2\":\"FI\",\"country-code\":\"246\"},{\"name\":\"France\",\"alpha-2\":\"FR\",\"country-code\":\"250\"},{\"name\":\"French Guiana\",\"alpha-2\":\"GF\",\"country-code\":\"254\"},{\"name\":\"French Polynesia\",\"alpha-2\":\"PF\",\"country-code\":\"258\"},{\"name\":\"French Southern Territories\",\"alpha-2\":\"TF\",\"country-code\":\"260\"},{\"name\":\"Gabon\",\"alpha-2\":\"GA\",\"country-code\":\"266\"},{\"name\":\"Gambia\",\"alpha-2\":\"GM\",\"country-code\":\"270\"},{\"name\":\"Georgia\",\"alpha-2\":\"GE\",\"country-code\":\"268\"},{\"name\":\"Germany\",\"alpha-2\":\"DE\",\"country-code\":\"276\"},{\"name\":\"Ghana\",\"alpha-2\":\"GH\",\"country-code\":\"288\"},{\"name\":\"Gibraltar\",\"alpha-2\":\"GI\",\"country-code\":\"292\"},{\"name\":\"Greece\",\"alpha-2\":\"GR\",\"country-code\":\"300\"},{\"name\":\"Greenland\",\"alpha-2\":\"GL\",\"country-code\":\"304\"},{\"name\":\"Grenada\",\"alpha-2\":\"GD\",\"country-code\":\"308\"},{\"name\":\"Guadeloupe\",\"alpha-2\":\"GP\",\"country-code\":\"312\"},{\"name\":\"Guam\",\"alpha-2\":\"GU\",\"country-code\":\"316\"},{\"name\":\"Guatemala\",\"alpha-2\":\"GT\",\"country-code\":\"320\"},{\"name\":\"Guernsey\",\"alpha-2\":\"GG\",\"country-code\":\"831\"},{\"name\":\"Guinea\",\"alpha-2\":\"GN\",\"country-code\":\"324\"},{\"name\":\"Guinea-Bissau\",\"alpha-2\":\"GW\",\"country-code\":\"624\"},{\"name\":\"Guyana\",\"alpha-2\":\"GY\",\"country-code\":\"328\"},{\"name\":\"Haiti\",\"alpha-2\":\"HT\",\"country-code\":\"332\"},{\"name\":\"Heard Island and McDonald Islands\",\"alpha-2\":\"HM\",\"country-code\":\"334\"},{\"name\":\"Holy See\",\"alpha-2\":\"VA\",\"country-code\":\"336\"},{\"name\":\"Honduras\",\"alpha-2\":\"HN\",\"country-code\":\"340\"},{\"name\":\"Hong Kong\",\"alpha-2\":\"HK\",\"country-code\":\"344\"},{\"name\":\"Hungary\",\"alpha-2\":\"HU\",\"country-code\":\"348\"},{\"name\":\"Iceland\",\"alpha-2\":\"IS\",\"country-code\":\"352\"},{\"name\":\"India\",\"alpha-2\":\"IN\",\"country-code\":\"356\"},{\"name\":\"Indonesia\",\"alpha-2\":\"ID\",\"country-code\":\"360\"},{\"name\":\"Iran (Islamic Republic of)\",\"alpha-2\":\"IR\",\"country-code\":\"364\"},{\"name\":\"Iraq\",\"alpha-2\":\"IQ\",\"country-code\":\"368\"},{\"name\":\"Ireland\",\"alpha-2\":\"IE\",\"country-code\":\"372\"},{\"name\":\"Isle of Man\",\"alpha-2\":\"IM\",\"country-code\":\"833\"},{\"name\":\"Israel\",\"alpha-2\":\"IL\",\"country-code\":\"376\"},{\"name\":\"Italy\",\"alpha-2\":\"IT\",\"country-code\":\"380\"},{\"name\":\"Jamaica\",\"alpha-2\":\"JM\",\"country-code\":\"388\"},{\"name\":\"Japan\",\"alpha-2\":\"JP\",\"country-code\":\"392\"},{\"name\":\"Jersey\",\"alpha-2\":\"JE\",\"country-code\":\"832\"},{\"name\":\"Jordan\",\"alpha-2\":\"JO\",\"country-code\":\"400\"},{\"name\":\"Kazakhstan\",\"alpha-2\":\"KZ\",\"country-code\":\"398\"},{\"name\":\"Kenya\",\"alpha-2\":\"KE\",\"country-code\":\"404\"},{\"name\":\"Kiribati\",\"alpha-2\":\"KI\",\"country-code\":\"296\"},{\"name\":\"Korea (Democratic People's Republic of)\",\"alpha-2\":\"KP\",\"country-code\":\"408\"},{\"name\":\"Korea, Republic of\",\"alpha-2\":\"KR\",\"country-code\":\"410\"},{\"name\":\"Kuwait\",\"alpha-2\":\"KW\",\"country-code\":\"414\"},{\"name\":\"Kyrgyzstan\",\"alpha-2\":\"KG\",\"country-code\":\"417\"},{\"name\":\"Lao People's Democratic Republic\",\"alpha-2\":\"LA\",\"country-code\":\"418\"},{\"name\":\"Latvia\",\"alpha-2\":\"LV\",\"country-code\":\"428\"},{\"name\":\"Lebanon\",\"alpha-2\":\"LB\",\"country-code\":\"422\"},{\"name\":\"Lesotho\",\"alpha-2\":\"LS\",\"country-code\":\"426\"},{\"name\":\"Liberia\",\"alpha-2\":\"LR\",\"country-code\":\"430\"},{\"name\":\"Libya\",\"alpha-2\":\"LY\",\"country-code\":\"434\"},{\"name\":\"Liechtenstein\",\"alpha-2\":\"LI\",\"country-code\":\"438\"},{\"name\":\"Lithuania\",\"alpha-2\":\"LT\",\"country-code\":\"440\"},{\"name\":\"Luxembourg\",\"alpha-2\":\"LU\",\"country-code\":\"442\"},{\"name\":\"Macao\",\"alpha-2\":\"MO\",\"country-code\":\"446\"},{\"name\":\"Madagascar\",\"alpha-2\":\"MG\",\"country-code\":\"450\"},{\"name\":\"Malawi\",\"alpha-2\":\"MW\",\"country-code\":\"454\"},{\"name\":\"Malaysia\",\"alpha-2\":\"MY\",\"country-code\":\"458\"},{\"name\":\"Maldives\",\"alpha-2\":\"MV\",\"country-code\":\"462\"},{\"name\":\"Mali\",\"alpha-2\":\"ML\",\"country-code\":\"466\"},{\"name\":\"Malta\",\"alpha-2\":\"MT\",\"country-code\":\"470\"},{\"name\":\"Marshall Islands\",\"alpha-2\":\"MH\",\"country-code\":\"584\"},{\"name\":\"Martinique\",\"alpha-2\":\"MQ\",\"country-code\":\"474\"},{\"name\":\"Mauritania\",\"alpha-2\":\"MR\",\"country-code\":\"478\"},{\"name\":\"Mauritius\",\"alpha-2\":\"MU\",\"country-code\":\"480\"},{\"name\":\"Mayotte\",\"alpha-2\":\"YT\",\"country-code\":\"175\"},{\"name\":\"Mexico\",\"alpha-2\":\"MX\",\"country-code\":\"484\"},{\"name\":\"Micronesia (Federated States of)\",\"alpha-2\":\"FM\",\"country-code\":\"583\"},{\"name\":\"Moldova, Republic of\",\"alpha-2\":\"MD\",\"country-code\":\"498\"},{\"name\":\"Monaco\",\"alpha-2\":\"MC\",\"country-code\":\"492\"},{\"name\":\"Mongolia\",\"alpha-2\":\"MN\",\"country-code\":\"496\"},{\"name\":\"Montenegro\",\"alpha-2\":\"ME\",\"country-code\":\"499\"},{\"name\":\"Montserrat\",\"alpha-2\":\"MS\",\"country-code\":\"500\"},{\"name\":\"Morocco\",\"alpha-2\":\"MA\",\"country-code\":\"504\"},{\"name\":\"Mozambique\",\"alpha-2\":\"MZ\",\"country-code\":\"508\"},{\"name\":\"Myanmar\",\"alpha-2\":\"MM\",\"country-code\":\"104\"},{\"name\":\"Namibia\",\"alpha-2\":\"NA\",\"country-code\":\"516\"},{\"name\":\"Nauru\",\"alpha-2\":\"NR\",\"country-code\":\"520\"},{\"name\":\"Nepal\",\"alpha-2\":\"NP\",\"country-code\":\"524\"},{\"name\":\"Netherlands\",\"alpha-2\":\"NL\",\"country-code\":\"528\"},{\"name\":\"New Caledonia\",\"alpha-2\":\"NC\",\"country-code\":\"540\"},{\"name\":\"New Zealand\",\"alpha-2\":\"NZ\",\"country-code\":\"554\"},{\"name\":\"Nicaragua\",\"alpha-2\":\"NI\",\"country-code\":\"558\"},{\"name\":\"Niger\",\"alpha-2\":\"NE\",\"country-code\":\"562\"},{\"name\":\"Nigeria\",\"alpha-2\":\"NG\",\"country-code\":\"566\"},{\"name\":\"Niue\",\"alpha-2\":\"NU\",\"country-code\":\"570\"},{\"name\":\"Norfolk Island\",\"alpha-2\":\"NF\",\"country-code\":\"574\"},{\"name\":\"North Macedonia\",\"alpha-2\":\"MK\",\"country-code\":\"807\"},{\"name\":\"Northern Mariana Islands\",\"alpha-2\":\"MP\",\"country-code\":\"580\"},{\"name\":\"Norway\",\"alpha-2\":\"NO\",\"country-code\":\"578\"},{\"name\":\"Oman\",\"alpha-2\":\"OM\",\"country-code\":\"512\"},{\"name\":\"Pakistan\",\"alpha-2\":\"PK\",\"country-code\":\"586\"},{\"name\":\"Palau\",\"alpha-2\":\"PW\",\"country-code\":\"585\"},{\"name\":\"Palestine, State of\",\"alpha-2\":\"PS\",\"country-code\":\"275\"},{\"name\":\"Panama\",\"alpha-2\":\"PA\",\"country-code\":\"591\"},{\"name\":\"Papua New Guinea\",\"alpha-2\":\"PG\",\"country-code\":\"598\"},{\"name\":\"Paraguay\",\"alpha-2\":\"PY\",\"country-code\":\"600\"},{\"name\":\"Peru\",\"alpha-2\":\"PE\",\"country-code\":\"604\"},{\"name\":\"Philippines\",\"alpha-2\":\"PH\",\"country-code\":\"608\"},{\"name\":\"Pitcairn\",\"alpha-2\":\"PN\",\"country-code\":\"612\"},{\"name\":\"Poland\",\"alpha-2\":\"PL\",\"country-code\":\"616\"},{\"name\":\"Portugal\",\"alpha-2\":\"PT\",\"country-code\":\"620\"},{\"name\":\"Puerto Rico\",\"alpha-2\":\"PR\",\"country-code\":\"630\"},{\"name\":\"Qatar\",\"alpha-2\":\"QA\",\"country-code\":\"634\"},{\"name\":\"Réunion\",\"alpha-2\":\"RE\",\"country-code\":\"638\"},{\"name\":\"Romania\",\"alpha-2\":\"RO\",\"country-code\":\"642\"},{\"name\":\"Russian Federation\",\"alpha-2\":\"RU\",\"country-code\":\"643\"},{\"name\":\"Rwanda\",\"alpha-2\":\"RW\",\"country-code\":\"646\"},{\"name\":\"Saint Barthélemy\",\"alpha-2\":\"BL\",\"country-code\":\"652\"},{\"name\":\"Saint Helena, Ascension and Tristan da Cunha\",\"alpha-2\":\"SH\",\"country-code\":\"654\"},{\"name\":\"Saint Kitts and Nevis\",\"alpha-2\":\"KN\",\"country-code\":\"659\"},{\"name\":\"Saint Lucia\",\"alpha-2\":\"LC\",\"country-code\":\"662\"},{\"name\":\"Saint Martin (French part)\",\"alpha-2\":\"MF\",\"country-code\":\"663\"},{\"name\":\"Saint Pierre and Miquelon\",\"alpha-2\":\"PM\",\"country-code\":\"666\"},{\"name\":\"Saint Vincent and the Grenadines\",\"alpha-2\":\"VC\",\"country-code\":\"670\"},{\"name\":\"Samoa\",\"alpha-2\":\"WS\",\"country-code\":\"882\"},{\"name\":\"San Marino\",\"alpha-2\":\"SM\",\"country-code\":\"674\"},{\"name\":\"Sao Tome and Principe\",\"alpha-2\":\"ST\",\"country-code\":\"678\"},{\"name\":\"Saudi Arabia\",\"alpha-2\":\"SA\",\"country-code\":\"682\"},{\"name\":\"Senegal\",\"alpha-2\":\"SN\",\"country-code\":\"686\"},{\"name\":\"Serbia\",\"alpha-2\":\"RS\",\"country-code\":\"688\"},{\"name\":\"Seychelles\",\"alpha-2\":\"SC\",\"country-code\":\"690\"},{\"name\":\"Sierra Leone\",\"alpha-2\":\"SL\",\"country-code\":\"694\"},{\"name\":\"Singapore\",\"alpha-2\":\"SG\",\"country-code\":\"702\"},{\"name\":\"Sint Maarten (Dutch part)\",\"alpha-2\":\"SX\",\"country-code\":\"534\"},{\"name\":\"Slovakia\",\"alpha-2\":\"SK\",\"country-code\":\"703\"},{\"name\":\"Slovenia\",\"alpha-2\":\"SI\",\"country-code\":\"705\"},{\"name\":\"Solomon Islands\",\"alpha-2\":\"SB\",\"country-code\":\"090\"},{\"name\":\"Somalia\",\"alpha-2\":\"SO\",\"country-code\":\"706\"},{\"name\":\"South Africa\",\"alpha-2\":\"ZA\",\"country-code\":\"710\"},{\"name\":\"South Georgia and the South Sandwich Islands\",\"alpha-2\":\"GS\",\"country-code\":\"239\"},{\"name\":\"South Sudan\",\"alpha-2\":\"SS\",\"country-code\":\"728\"},{\"name\":\"Spain\",\"alpha-2\":\"ES\",\"country-code\":\"724\"},{\"name\":\"Sri Lanka\",\"alpha-2\":\"LK\",\"country-code\":\"144\"},{\"name\":\"Sudan\",\"alpha-2\":\"SD\",\"country-code\":\"729\"},{\"name\":\"Suriname\",\"alpha-2\":\"SR\",\"country-code\":\"740\"},{\"name\":\"Svalbard and Jan Mayen\",\"alpha-2\":\"SJ\",\"country-code\":\"744\"},{\"name\":\"Sweden\",\"alpha-2\":\"SE\",\"country-code\":\"752\"},{\"name\":\"Switzerland\",\"alpha-2\":\"CH\",\"country-code\":\"756\"},{\"name\":\"Syrian Arab Republic\",\"alpha-2\":\"SY\",\"country-code\":\"760\"},{\"name\":\"Taiwan, Province of China\",\"alpha-2\":\"TW\",\"country-code\":\"158\"},{\"name\":\"Tajikistan\",\"alpha-2\":\"TJ\",\"country-code\":\"762\"},{\"name\":\"Tanzania, United Republic of\",\"alpha-2\":\"TZ\",\"country-code\":\"834\"},{\"name\":\"Thailand\",\"alpha-2\":\"TH\",\"country-code\":\"764\"},{\"name\":\"Timor-Leste\",\"alpha-2\":\"TL\",\"country-code\":\"626\"},{\"name\":\"Togo\",\"alpha-2\":\"TG\",\"country-code\":\"768\"},{\"name\":\"Tokelau\",\"alpha-2\":\"TK\",\"country-code\":\"772\"},{\"name\":\"Tonga\",\"alpha-2\":\"TO\",\"country-code\":\"776\"},{\"name\":\"Trinidad and Tobago\",\"alpha-2\":\"TT\",\"country-code\":\"780\"},{\"name\":\"Tunisia\",\"alpha-2\":\"TN\",\"country-code\":\"788\"},{\"name\":\"Turkey\",\"alpha-2\":\"TR\",\"country-code\":\"792\"},{\"name\":\"Turkmenistan\",\"alpha-2\":\"TM\",\"country-code\":\"795\"},{\"name\":\"Turks and Caicos Islands\",\"alpha-2\":\"TC\",\"country-code\":\"796\"},{\"name\":\"Tuvalu\",\"alpha-2\":\"TV\",\"country-code\":\"798\"},{\"name\":\"Uganda\",\"alpha-2\":\"UG\",\"country-code\":\"800\"},{\"name\":\"Ukraine\",\"alpha-2\":\"UA\",\"country-code\":\"804\"},{\"name\":\"United Arab Emirates\",\"alpha-2\":\"AE\",\"country-code\":\"784\"},{\"name\":\"United Kingdom of Great Britain and Northern Ireland\",\"alpha-2\":\"GB\",\"country-code\":\"826\"},{\"name\":\"United States of America\",\"alpha-2\":\"US\",\"country-code\":\"840\"},{\"name\":\"United States Minor Outlying Islands\",\"alpha-2\":\"UM\",\"country-code\":\"581\"},{\"name\":\"Uruguay\",\"alpha-2\":\"UY\",\"country-code\":\"858\"},{\"name\":\"Uzbekistan\",\"alpha-2\":\"UZ\",\"country-code\":\"860\"},{\"name\":\"Vanuatu\",\"alpha-2\":\"VU\",\"country-code\":\"548\"},{\"name\":\"Venezuela (Bolivarian Republic of)\",\"alpha-2\":\"VE\",\"country-code\":\"862\"},{\"name\":\"Viet Nam\",\"alpha-2\":\"VN\",\"country-code\":\"704\"},{\"name\":\"Virgin Islands (British)\",\"alpha-2\":\"VG\",\"country-code\":\"092\"},{\"name\":\"Virgin Islands (U.S.)\",\"alpha-2\":\"VI\",\"country-code\":\"850\"},{\"name\":\"Wallis and Futuna\",\"alpha-2\":\"WF\",\"country-code\":\"876\"},{\"name\":\"Western Sahara\",\"alpha-2\":\"EH\",\"country-code\":\"732\"},{\"name\":\"Yemen\",\"alpha-2\":\"YE\",\"country-code\":\"887\"},{\"name\":\"Zambia\",\"alpha-2\":\"ZM\",\"country-code\":\"894\"},{\"name\":\"Zimbabwe\",\"alpha-2\":\"ZW\",\"country-code\":\"716\"}]");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "style.css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "main." + __webpack_require__.h() + ".hot-update.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a7bf761d816c82f8d2a4"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "covid-dashboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_d3_index_js-node_modules_leafle-cb69da"],
/******/ 			["./src/main.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_d3_index_js-node_modules_leafle-cb69da"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatecovid_dashboard"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcovid_dashboard"] = self["webpackChunkcovid_dashboard"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map