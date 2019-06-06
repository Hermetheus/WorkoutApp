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
exports.WorkoutHistory = mobx_react_lite_1.observer(function () {
    var rootStore = React.useContext(rootStore_1.RootStoreContext);
    return (React.createElement(react_native_1.View, null,
        React.createElement(react_native_1.Text, null, "Workout History Page"),
        React.createElement(react_native_1.Button, { title: "create workout", onPress: function () {
                rootStore.workoutStore.currentExcercises.push({
                    excercise: "Squat",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 260
                }, {
                    excercise: "Bench Press",
                    numSets: 5,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 200
                }, {
                    excercise: "Deadlift",
                    numSets: 1,
                    reps: 5,
                    sets: ["", "", "", "", ""],
                    weight: 360
                });
                rootStore.routerStore.screen = "CurrentWorkout";
            } })));
});
