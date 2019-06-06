"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_react_lite_1 = require("mobx-react-lite");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var rootStore_1 = require("../stores/rootStore");
var WorkoutCard_1 = require("../ui/WorkoutCard");
var WorkoutTimer_1 = require("../ui/WorkoutTimer");
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        padding: 10
    }
});
exports.CurrentWorkout = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(rootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, { style: styles.container },
        rootStore.workoutStore.currentExcercises.map(function (e) {
            return (React.createElement(WorkoutCard_1.WorkoutCard, { onSetPress: function (setIndex) {
                    var v = e.sets[setIndex];
                    var newValue;
                    if (v === "") {
                        newValue = "" + e.reps;
                    }
                    else if (v === "0") {
                        newValue = "";
                    }
                    else {
                        newValue = "" + (parseInt(v) - 1);
                    }
                    e.sets[setIndex] = newValue;
                }, key: e.excercise, sets: e.sets, excercise: e.excercise, repsAndWeight: e.numSets + "x" + e.reps + " " + e.weight }));
        }),
        React.createElement(WorkoutTimer_1.WorkoutTimer, { onXPress: function () { } })));
});
