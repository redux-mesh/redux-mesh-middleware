"use strict";
exports.__esModule = true;
exports.reduxMesh = function (store) { return function (next) { return function (action) {
    console.log(action);
    return next(action);
}; }; };
