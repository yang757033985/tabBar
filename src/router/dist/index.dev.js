"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//安装路由
_vue["default"].use(_vueRouter["default"]); //定义路由映射  懒加载


var Home = function Home() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Home.vue'));
  });
};

var Category = function Category() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Category'));
  });
};

var Shopcart = function Shopcart() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Shopcart'));
  });
};

var Profile = function Profile() {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../views/Profile'));
  });
}; //创建对象


var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '',
    redirect: '/Home'
  }, {
    path: '/Home',
    component: Home,
    meta: {
      title: '首页'
    }
  }, {
    path: '/Category',
    component: Category,
    meta: {
      title: '分类'
    }
  }, {
    path: '/Shopcart',
    component: Shopcart,
    meta: {
      title: '购物车'
    }
  }, {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }]
}); //导出对象

var _default = router;
exports["default"] = _default;
router.beforeEach(function (to, from, next) {
  // to and from are both route objects. must call `next`.
  document.title = to.matched[0].meta.title;
  next(); // console.log(to)
});