"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#486550",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30
    },
    x: {
        color: "#B2A1A1",
        fontSize: 30
    },
    timeText: {
        color: "#fff",
        fontSize: 18
    }
});
exports.WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress;
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.Text, { style: styles.timeText }, "Hello"),
        React.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
            React.createElement(react_native_1.Text, { style: styles.x }, "X"))));
};
