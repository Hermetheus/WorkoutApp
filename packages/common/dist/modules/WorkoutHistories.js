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
var HistoryCard_1 = require("../ui/HistoryCard");
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    cardContainer: {
        flex: 1,
        padding: 10
    }
});
exports.WorkoutHistory = mobx_react_lite_1.observer(function (_a) {
    var history = _a.history;
    var rootStore = React.useContext(rootStore_1.RootStoreContext);
    var rows = [];
    Object.entries(rootStore.workoutStore.history).forEach(function (_a, i) {
        var date = _a[0], exercises = _a[1];
        if (i % 3 === 0) {
            rows.push([
                {
                    date: date,
                    exercises: exercises
                }
            ]);
        }
        else {
            rows[rows.length - 1].push({
                date: date,
                exercises: exercises
            });
        }
    });
    /*
  [
    [hc, hc],
    [hc, hc],
    [hc, hc]
  ]
    */
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
                history.push("/current-workout");
            } }),
        React.createElement(react_native_1.FlatList, { renderItem: function (_a) {
                var item = _a.item;
                return (React.createElement(react_native_1.View, { style: styles.row },
                    item.map(function (_a) {
                        var date = _a.date, exercises = _a.exercises;
                        return (React.createElement(react_native_1.View, { key: date, style: styles.cardContainer },
                            React.createElement(HistoryCard_1.HistoryCard, { onPress: function () {
                                    var parts = date.split("-");
                                    history.push("/workout/" + parts[0] + "/" + parts[1] + "/" + parts[2]);
                                }, header: date, currentExercises: exercises })));
                    }),
                    item.length < 3 ? React.createElement(react_native_1.View, { style: styles.cardContainer }) : null,
                    item.length < 2 ? React.createElement(react_native_1.View, { style: styles.cardContainer }) : null));
            }, data: rows, keyExtractor: function (item) { return item.reduce(function (pv, cv) { return pv + " " + cv.date; }, ""); } })));
});
