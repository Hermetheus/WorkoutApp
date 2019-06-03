"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/*
{
  '02-18-2019: [
    {
      excercise: 'squat',
      value: 90
    }
  ]
}
*/
var WorkoutStore = /** @class */ (function () {
    function WorkoutStore() {
    }
    return WorkoutStore;
}());
exports.WorkoutStoreContext = react_1.createContext(new WorkoutStore());
