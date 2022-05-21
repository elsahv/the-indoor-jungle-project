"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subscribeApi";
exports.ids = ["pages/api/subscribeApi"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "(api)/./pages/api/subscribeApi.js":
/*!***********************************!*\
  !*** ./pages/api/subscribeApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  const {\n    email\n  } = req.body;\n\n  if (!email || !email.length) {\n    return res.status(400).json({\n      error: 'Email is required'\n    });\n  }\n\n  const API_KEY = process.env.MAILCHIMP_API_KEY;\n  const API_SERVER = process.env.MAILCHIMP_API_SERVER;\n  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;\n  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;\n  const data = {\n    email_address: email,\n    status: 'subscribed'\n  };\n  const options = {\n    headers: {\n      'Content-Type': 'application/json',\n      Authorization: `api_key ${API_KEY}`\n    }\n  };\n\n  try {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(url, data, options);\n\n    if (response.status >= 400) {\n      return res.status(400).json({\n        error: `There was an error subscribing to the newsletter. Shoot me an email at elsahvy@gmail and I'll add you to the list.`\n      });\n    }\n\n    return res.status(201).json({\n      message: 'success'\n    });\n  } catch (error) {\n    console.log(error);\n    return res.status(500).json({\n      error: error.message\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3Vic2NyaWJlQXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZRixHQUFHLENBQUNHLElBQXRCOztBQUVBLE1BQUksQ0FBQ0QsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ0UsTUFBckIsRUFBNkI7QUFDM0IsV0FBT0gsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBckIsQ0FBUDtBQUNEOztBQUVELFFBQU1DLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE1QjtBQUNBLFFBQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUEvQjtBQUNBLFFBQU1DLFdBQVcsR0FBR0wsT0FBTyxDQUFDQyxHQUFSLENBQVlLLHFCQUFoQztBQUVBLFFBQU1DLEdBQUcsR0FBSSxXQUFVSixVQUFXLGdDQUErQkUsV0FBWSxVQUE3RTtBQUVBLFFBQU1HLElBQUksR0FBRztBQUNYQyxJQUFBQSxhQUFhLEVBQUVoQixLQURKO0FBRVhHLElBQUFBLE1BQU0sRUFBRTtBQUZHLEdBQWI7QUFLQSxRQUFNYyxPQUFPLEdBQUc7QUFDZEMsSUFBQUEsT0FBTyxFQUFFO0FBQ1Asc0JBQWdCLGtCQURUO0FBRVBDLE1BQUFBLGFBQWEsRUFBRyxXQUFVYixPQUFRO0FBRjNCO0FBREssR0FBaEI7O0FBT0EsTUFBSTtBQUNGLFVBQU1jLFFBQVEsR0FBRyxNQUFNdkIsaURBQUEsQ0FBV2lCLEdBQVgsRUFBZ0JDLElBQWhCLEVBQXNCRSxPQUF0QixDQUF2Qjs7QUFDQSxRQUFJRyxRQUFRLENBQUNqQixNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCLGFBQU9KLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxRQUFBQSxLQUFLLEVBQUc7QUFEa0IsT0FBckIsQ0FBUDtBQUdEOztBQUNELFdBQU9OLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVrQixNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0QsR0FSRCxDQVFFLE9BQU9qQixLQUFQLEVBQWM7QUFDZGtCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBWjtBQUNBLFdBQU9OLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDaUI7QUFBZixLQUFyQixDQUFQO0FBQ0Q7QUFDRixDQXJDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL3N1YnNjcmliZUFwaS5qcz82OTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5XG5cbiAgaWYgKCFlbWFpbCB8fCAhZW1haWwubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdFbWFpbCBpcyByZXF1aXJlZCcgfSlcbiAgfVxuXG4gIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVBJX0tFWVxuICBjb25zdCBBUElfU0VSVkVSID0gcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9TRVJWRVJcbiAgY29uc3QgQVVESUVOQ0VfSUQgPSBwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVVESUVOQ0VfSURcbiAgXG4gIGNvbnN0IHVybCA9IGBodHRwczovLyR7QVBJX1NFUlZFUn0uYXBpLm1haWxjaGltcC5jb20vMy4wL2xpc3RzLyR7QVVESUVOQ0VfSUR9L21lbWJlcnNgXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBlbWFpbF9hZGRyZXNzOiBlbWFpbCxcbiAgICBzdGF0dXM6ICdzdWJzY3JpYmVkJ1xuICB9XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQXV0aG9yaXphdGlvbjogYGFwaV9rZXkgJHtBUElfS0VZfWBcbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiBgVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nIHRvIHRoZSBuZXdzbGV0dGVyLiBTaG9vdCBtZSBhbiBlbWFpbCBhdCBlbHNhaHZ5QGdtYWlsIGFuZCBJJ2xsIGFkZCB5b3UgdG8gdGhlIGxpc3QuYFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ3N1Y2Nlc3MnIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSlcbiAgfVxufSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsInJlcyIsImVtYWlsIiwiYm9keSIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTUFJTENISU1QX0FQSV9LRVkiLCJBUElfU0VSVkVSIiwiTUFJTENISU1QX0FQSV9TRVJWRVIiLCJBVURJRU5DRV9JRCIsIk1BSUxDSElNUF9BVURJRU5DRV9JRCIsInVybCIsImRhdGEiLCJlbWFpbF9hZGRyZXNzIiwib3B0aW9ucyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicmVzcG9uc2UiLCJwb3N0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/subscribeApi.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/subscribeApi.js"));
module.exports = __webpack_exports__;

})();