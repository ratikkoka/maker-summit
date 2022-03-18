"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-awesome-reveal"
const external_react_awesome_reveal_namespaceObject = require("react-awesome-reveal");
;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./lib/dbConnect.js

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */ let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = external_mongoose_default().connect(MONGODB_URI, opts).then((mongoose1)=>{
            return mongoose1;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
/* harmony default export */ const lib_dbConnect = (dbConnect);

;// CONCATENATED MODULE: ./models/Submission.js

const SubmissionSchema = new (external_mongoose_default()).Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    studentId: {
        type: Number
    },
    phone: {
        type: Number
    },
    groupCheck: {
        type: String
    },
    groupMembers: {
        type: String
    },
    entryType: {
        type: String
    },
    category: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    },
    film: {
        type: String
    },
    images: {
        type: String
    },
    attending: {
        type: String
    },
    notes: {
        type: String
    }
});
/* harmony default export */ const Submission = ((external_mongoose_default()).models.Submission || external_mongoose_default().model('Submission', SubmissionSchema));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./pages/index.js





function Home({ submissions  }) {
    const driveLoader = ({ src  })=>{
        return `https://drive.google.com/${src}`;
    };
    function getImages(image) {
        let images = image.split(', ');
        return 'uc?' + images[0].substring(30);
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_awesome_reveal_namespaceObject.Slide, {
            direction: "up",
            children: submissions.map((submission)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                loader: driveLoader,
                                alt: "Project Image",
                                layout: "fill",
                                src: getImages(submission.images)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "submission-name",
                                children: submission.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "submission-name",
                                        children: submission.firstName + " " + submission.lastName
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "likes info",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "label",
                                            children: submission.desc
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }, submission._id)
            )
        })
    }));
};
/* Retrieves submission(s) data from mongodb database */ async function getServerSideProps() {
    try {
        await lib_dbConnect();
        /* find all the data in our database */ const result = await Submission.find({});
        const submission1 = result.map((doc)=>{
            const submission = doc.toObject();
            submission._id = submission._id.toString();
            return submission;
        });
        return {
            props: {
                submissions: submission1
            }
        };
    } catch (e) {
        console.log(e);
    }
}


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(297)));
module.exports = __webpack_exports__;

})();