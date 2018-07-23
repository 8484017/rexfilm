"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wait = function wait(s) {
    return new Promise(function (r) { return setTimeout(r, s * 1000); });
};
