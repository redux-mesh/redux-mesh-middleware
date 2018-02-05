"use strict";
exports.__esModule = true;
var utils_1 = require("./lib/utils");
exports.reduxMesh = function (options) {
    var sessionId = utils_1.utils.generateSessionId();
    var mesh = function (store) { return function (next) { return function (action) {
        var timestamp = new Date().getTime();
        var eventType = action.type;
        var event = action;
        var body = {
            timestamp: timestamp,
            sessionId: sessionId,
            eventType: eventType,
            event: event,
            store: store.getState()
        };
        return next(action);
    }; }; };
    return mesh;
};
