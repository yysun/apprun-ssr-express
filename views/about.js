"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apprun_1 = require("apprun");
var layout_1 = require("./layout");
exports.default = (function (_a) {
    var title = _a.title;
    return apprun_1.default.createElement(layout_1.default, null,
        title,
        " - ",
        new Date().toLocaleTimeString());
});
