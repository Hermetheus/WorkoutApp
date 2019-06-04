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
    card: {
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        flexDirection: "column"
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    topRowText: {
        fontSize: 16
    },
    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 14
    },
    circle: {
        borderRadius: 100,
        backgroundColor: "#8FB299",
        padding: 15
    },
    circleText: {
        color: "#fff"
    }
});
exports.WorkoutCard = function (_a) {
    var sets = _a.sets, excercise = _a.excercise, repsAndWeight = _a.repsAndWeight;
    return (React.createElement(react_native_1.View, { style: styles.card },
        React.createElement(react_native_1.View, { style: styles.topRow },
            React.createElement(react_native_1.Text, { style: styles.topRowText }, excercise),
            React.createElement(react_native_1.Text, { style: styles.topRowText }, repsAndWeight)),
        React.createElement(react_native_1.View, { style: styles.bottomRow }, sets.map(function (set, index) {
            if (set === "x") {
                return React.createElement(react_native_1.Text, { key: set + index }, "x");
            }
            if (set === "") {
                return React.createElement(react_native_1.Text, { key: set + index });
            }
            return (React.createElement(react_native_1.View, { style: styles.circle, key: set + index },
                React.createElement(react_native_1.Text, { style: styles.circleText }, set)));
        }))));
};
