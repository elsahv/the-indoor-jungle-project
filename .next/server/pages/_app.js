"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/styles/Global.js

const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["*{box-sizing:border-box;margin:0;padding:0;}body{color:hsl(192,100%,9%);font-family:'Teko',sans-serif;}p{opacity:0.6;line-height:1.5;}"]);
/* harmony default export */ const Global = (GlobalStyles);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./components/styles/Sidebar.styled.js

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "Sidebarstyled__Wrapper",
  componentId: "sc-ke0ny3-0"
})(["@media only screen and (min-width:835px){display:none;}@media only screen and (max-width:834px){display:flex;justify-content:center;width:100%;.nav-menu{background-color:#fff;width:100%;height:100%;display:flex;justify-content:center;position:fixed;top:0;right:100%;transition:850ms;}.nav-menu.active{right:0;transition:350ms;}.navbar-toggle{width:100%;height:80px;display:flex;justify-content:start;align-items:center;}@media only screen and (min-width:769px){display:none;}"]);
const Logo = external_styled_components_default().h1.withConfig({
  displayName: "Sidebarstyled__Logo",
  componentId: "sc-ke0ny3-1"
})(["font-size:24px;a{color:#2d6a4f;text-decoration:none;}"]);
const MenuOpen = external_styled_components_default().div.withConfig({
  displayName: "Sidebarstyled__MenuOpen",
  componentId: "sc-ke0ny3-2"
})(["font-size:1.5rem;margin:0 25px;color:#6a040f;cursor:pointer;"]);
const MenuClose = external_styled_components_default().div.withConfig({
  displayName: "Sidebarstyled__MenuClose",
  componentId: "sc-ke0ny3-3"
})(["font-size:2rem;width:100%;display:flex;justify-content:flex-start;margin-right:335px;padding:10px;cursor:pointer;"]);
const SidebarLinks = external_styled_components_default().div.withConfig({
  displayName: "Sidebarstyled__SidebarLinks",
  componentId: "sc-ke0ny3-4"
})(["display:flex;justify-content:center;flex-direction:column;font-size:25px;padding:25px;a{text-decoration:none;color:black;}"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Sidebar.js








const Sidebar = () => {
  const {
    0: sidebar,
    1: setSidebar
  } = (0,external_react_.useState)(false);

  const showSidebar = () => setSidebar(!sidebar);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MenuOpen, {
      children: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaBars, {
        onClick: showSidebar
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Logo, {
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: "The Indoor Jungle Project"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: sidebar ? 'nav-menu active' : 'nav-menu',
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "nav-menu-items",
        onClick: showSidebar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "navbar-toggle",
          children: /*#__PURE__*/jsx_runtime_.jsx(MenuClose, {
            children: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiOutlineClose, {})
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SidebarLinks, {
          children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/plants",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Plants"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/fish",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "Fish"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
            href: "/outdoor-section",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "The Outdoor Section"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Sidebar = (Sidebar);
;// CONCATENATED MODULE: ./components/styles/Header.styled.js
 //STYLES

const NavSection = external_styled_components_default().header.withConfig({
  displayName: "Headerstyled__NavSection",
  componentId: "sc-da20c1-0"
})(["width:100%;top:0;position:sticky;border-bottom:solid 2px #6a040f;background:#fff;z-index:5000;padding:45px 0 20px 0;"]);
const NavLinks = external_styled_components_default().section.withConfig({
  displayName: "Headerstyled__NavLinks",
  componentId: "sc-da20c1-1"
})(["padding-top:8px;font-size:20px;display:flex;justify-content:center;align-items:center;a{margin:0 10px;text-decoration:none;color:#6a040f;&:hover{color:#2d6a4f;transition:1s;}}@media only screen and (max-width:1024px){font-size:18px;}@media only screen and (max-width:768px){display:none;}"]);
const Header_styled_Logo = external_styled_components_default().h1.withConfig({
  displayName: "Headerstyled__Logo",
  componentId: "sc-da20c1-2"
})(["font-size:30px;margin-right:55px;a{color:#2d6a4f;text-decoration:none;}@media only screen and (max-width:1024px){font-size:18px;a{}}"]);
const SmIcons = external_styled_components_default().section.withConfig({
  displayName: "Headerstyled__SmIcons",
  componentId: "sc-da20c1-3"
})(["width:100px;margin-left:15px;margin-top:10px;a{margin:2px;color:#6c757d;&:hover{color:#2d6a4f;transition:1s;}}@media only screen and (max-width:768px){display:none;}"]); //END STYLES
;// CONCATENATED MODULE: ./components/Header.js







const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavSection, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Sidebar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavLinks, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header_styled_Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          children: "The Indoor Jungle Project"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/plants",
        children: "Plants"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/fish",
        children: "Fish"
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/outdoor-section",
        children: "The Outdoor Section"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SmIcons, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "http://pinterest.com",
          children: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaPinterestP, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "http://facebook.com",
          children: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaFacebookF, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "https://www.instagram.com",
          children: /*#__PURE__*/jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {})
        })]
      })]
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./components/styles/Footer.styled.js
 //STYLES

const FooterBanner = external_styled_components_default().footer.withConfig({
  displayName: "Footerstyled__FooterBanner",
  componentId: "sc-1ptyarp-0"
})(["width:100%;height:200px;background:teal;border-top:solid 3px black;@media only screen and (max-width:768px){}"]);
const FooterSection = external_styled_components_default().footer.withConfig({
  displayName: "Footerstyled__FooterSection",
  componentId: "sc-1ptyarp-1"
})(["border-top:solid 3px black;display:flex;justify-content:space-around;align-items:center;padding:10px;@media only screen and (max-width:1024px){padding:auto;margin:auto;}@media only screen and (max-width:768px){}"]);
const FooterMenu1 = external_styled_components_default().ul.withConfig({
  displayName: "Footerstyled__FooterMenu1",
  componentId: "sc-1ptyarp-2"
})(["a{color:black;text-decoration:none;}a:hover{text-decoration:underline;}"]);
const FooterMenu2 = external_styled_components_default().ul.withConfig({
  displayName: "Footerstyled__FooterMenu2",
  componentId: "sc-1ptyarp-3"
})(["a{color:#000;text-decoration:none;}a:hover{text-decoration:underline;}@media only screen and (max-width:768px){padding-left:13px;}"]);
const FooterMenuTitle = external_styled_components_default().span.withConfig({
  displayName: "Footerstyled__FooterMenuTitle",
  componentId: "sc-1ptyarp-4"
})(["@media only screen and (max-width:768px){font-size:15px;}"]);
const FooterMenuItem = external_styled_components_default().li.withConfig({
  displayName: "Footerstyled__FooterMenuItem",
  componentId: "sc-1ptyarp-5"
})(["list-style:none;a{color:#2d6a4f;}@media only screen and (max-width:768px){text-align:left;}"]); //END STYLES
;// CONCATENATED MODULE: ./components/Footer.js




function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(FooterBanner, {
      children: "Footer Banner"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterSection, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterMenu1, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(FooterMenuItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/contact",
            children: "Contact"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(FooterMenuTitle, {
          children: "The Indoor Jungle Project- Copyright @2022"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(FooterMenu2, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FooterMenuItem, {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "http://elsahovey.com",
            children: "created by Elsa Hovey"
          })
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Layout.js






function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Global, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664], () => (__webpack_exec__(1994)));
module.exports = __webpack_exports__;

})();