"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./components/ActiveLink.js






const ActiveLink = ({ children , activeClassName , ...props })=>{
    const { asPath , isReady  } = (0,router_namespaceObject.useRouter)();
    const child = external_react_.Children.only(children);
    const childClassName = child.props.className || '';
    const { 0: className , 1: setClassName  } = (0,external_react_.useState)(childClassName);
    (0,external_react_.useEffect)(()=>{
        // Check if the router fields are updated client-side
        if (isReady) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL(props.as || props.href, location.href).pathname;
            // Using URL().pathname to get rid of query and hash
            const activePathname = new URL(asPath, location.href).pathname;
            const newClassName = linkPathname === activePathname ? `${childClassName} ${activeClassName}`.trim() : childClassName;
            if (newClassName !== className) {
                setClassName(newClassName);
            }
        }
    }, [
        asPath,
        isReady,
        props.as,
        props.href,
        childClassName,
        activeClassName,
        setClassName,
        className, 
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        ...props,
        children: /*#__PURE__*/ external_react_default().cloneElement(child, {
            className: className || null
        })
    }));
};
ActiveLink.propTypes = {
    activeClassName: (external_prop_types_default()).string.isRequired
};
/* harmony default export */ const components_ActiveLink = (ActiveLink);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "react-bootstrap"
const external_react_bootstrap_namespaceObject = require("react-bootstrap");
;// CONCATENATED MODULE: ./components/Nav.js






function NavBar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_namespaceObject.Nav, {
        id: "nav",
        className: "navbar fixed-top navbar-expand-lg navbar-dark",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "navbar-brand",
                    style: {
                        marginLeft: 10
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/img/logo_yellow.svg",
                        className: "d-inline-block align-top",
                        alt: "Database Logo",
                        width: 36,
                        height: 36
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNavAltMarkup",
                "aria-controls": "navbarNavAltMarkup",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "navbar-toggler-icon"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "collapse navbar-collapse",
                id: "navbarNavAltMarkup",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "navbar-nav mr-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                activeClassName: "active",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link",
                                    children: " Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_ActiveLink, {
                                activeClassName: "active",
                                href: "/submissions",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "nav-link",
                                    children: " Submissions"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/layout.js



function Layout({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicon/apple-touch-icon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon/favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon/favicon-16x16.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/site.webmanifest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Ratik Koka, John You"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Maker Summit Project Showcase"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Maker Summit"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    }));
};

;// CONCATENATED MODULE: external "next/Script"
const Script_namespaceObject = require("next/Script");
var Script_default = /*#__PURE__*/__webpack_require__.n(Script_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Script_default()), {
                src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
                integrity: "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Script_default()), {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js",
                integrity: "sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF",
                crossorigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664], () => (__webpack_exec__(972)));
module.exports = __webpack_exports__;

})();