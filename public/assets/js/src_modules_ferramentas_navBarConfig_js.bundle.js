"use strict";
(self["webpackChunkjavascript"] = self["webpackChunkjavascript"] || []).push([["src_modules_ferramentas_navBarConfig_js"],{

/***/ "./src/modules/ferramentas/icon.js":
/*!*****************************************!*\
  !*** ./src/modules/ferramentas/icon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Icon = /*#__PURE__*/function () {
  function Icon(name) {
    var image = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    _classCallCheck(this, Icon);
    this.name = name;
    this.image = image;
  }
  _createClass(Icon, [{
    key: "create",
    value: function create() {
      var profile = this.createProfileIcon();
      var span = this.createSpan();
      var divUser = this.createDiv();
      profile.appendChild(span);
      divUser.appendChild(profile);
      return {
        icone: divUser,
        profile: profile,
        span: span
      };
    }
  }, {
    key: "createDiv",
    value: function createDiv() {
      var div = document.createElement('div');
      div.setAttribute('class', 'user');
      return div;
    }
  }, {
    key: "createProfileIcon",
    value: function createProfileIcon() {
      var div = document.createElement('div');
      div.setAttribute('class', 'profile-icon');
      return div;
    }
  }, {
    key: "createSpan",
    value: function createSpan() {
      var span = document.createElement('span');
      span.setAttribute('class', 'initials');
      span.innerText = this.name.charAt(0);
      return span;
    }
  }, {
    key: "colorChange",
    value: function colorChange(div) {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      window.addEventListener('DOMContentLoaded', function () {
        // Gerar uma cor aleatória
        var randomColor = color;

        // Definir a cor de fundo do ícone de perfil

        div.style.backgroundColor = randomColor;
      });
    }
  }]);
  return Icon;
}();


/***/ }),

/***/ "./src/modules/ferramentas/navBarConfig.js":
/*!*************************************************!*\
  !*** ./src/modules/ferramentas/navBarConfig.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navBarConfigs)
/* harmony export */ });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/modules/ferramentas/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var navBarConfigs = /*#__PURE__*/function () {
  function navBarConfigs(navBar, username, status) {
    _classCallCheck(this, navBarConfigs);
    this.username = username;
    this.status = status;
    this.navBar = navBar;
    this.indexConfig();
  }
  _createClass(navBarConfigs, [{
    key: "indexConfig",
    value: function indexConfig() {
      var urlAtual = window.location.href;
      document.addEventListener('click', function (element) {
        if (element.target.classList.contains('logo') && urlAtual != "http://localhost:3000/E-gamers/public/html/") {
          window.location.href = "http://localhost:3000/E-gamers/public/html";
        }
      });
      if (this.status === 'true') {
        var icone = new _icon__WEBPACK_IMPORTED_MODULE_0__["default"](this.username);
        var perfil = icone.create();
        this.navBar.appendChild(perfil.icone);
        icone.colorChange(perfil.profile);
        document.addEventListener('click', function (event) {
          var clickedElement = event.target;
          if (clickedElement.classList.contains('profile-icon') || clickedElement.classList.contains('initials') && urlAtual != "http://localhost:3000/E-gamers/public/html/config.html") {
            var navContentAncestor = clickedElement.closest('.nav-content');
            if (navContentAncestor) {
              var dropdownMenu = navContentAncestor.querySelector('.dropdown-menu');
              dropdownMenu.classList.toggle('active');
            }

            // Obtém os elementos de ícone do menu
            var cogIcon = document.querySelector('.fa-cog');
            var userLargeIcon = document.querySelector('.fa-user-large');
            var signOutIcon = document.querySelector('.fa-sign-out-alt');

            // Evento de clique para o ícone de configuração (cog)
            cogIcon.addEventListener('click', function () {
              window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
            });

            // Evento de clique para o ícone de perfil (user-large)
            userLargeIcon.addEventListener('click', function () {
              window.location.href = "http://localhost:3000/E-gamers/public/html/config.html";
            });

            // Evento de clique para o ícone de sair (sign-out)
            signOutIcon.addEventListener('click', function () {
              var exit = false;
              sessionStorage.setItem("status", exit);
              window.location.href = "http://localhost:3000/E-gamers/public/html/index.html";
            });
          } else {
            // Se clicar fora do menu, feche-o
            var dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(function (menu) {
              menu.classList.remove('active');
            });
          }
        });
      }

      // Criação dos botões de login e registro
      var navContent = document.querySelector('.nav-content');
      var userDiv = document.createElement('div');
      userDiv.classList.add('user');
      var loginButton = document.createElement('button');
      loginButton.textContent = 'Logar';
      loginButton.setAttribute('class', 'login');
      loginButton.addEventListener('click', function () {
        window.location.href = "http://localhost:3000/E-gamers/public/html/login.html";
      });
      var registerButton = document.createElement('button');
      registerButton.textContent = 'Registrar';
      registerButton.setAttribute('class', 'register');
      registerButton.addEventListener('click', function () {
        window.location.href = "http://localhost:3000/E-gamers/public/html/register.html";
      });
      userDiv.appendChild(loginButton);
      userDiv.appendChild(registerButton);
      navContent.appendChild(userDiv);

      // Selecionar o elemento de input de busca
      var searchInput = document.querySelector('.search-input');

      // Verificar se o usuário está logado
      if (sessionStorage.getItem('status') === 'true') {
        searchInput.style.width = '49.5em';
        registerButton.style.display = 'none';
        loginButton.style.display = 'none';
      }
    }
  }]);
  return navBarConfigs;
}();


/***/ })

}]);
//# sourceMappingURL=src_modules_ferramentas_navBarConfig_js.bundle.js.map