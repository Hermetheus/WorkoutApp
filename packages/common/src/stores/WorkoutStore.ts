import { observable } from "mobx";
import { RootStore } from "./rootStore";

type WorkoutDay = "a" | "b";

interface WorkoutHistory {
  [key: string]: Array<{
    excercise: string;
    value: number;
  }>;
}

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

interface CurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  excercise: string;
  sets: string[];
}

export class WorkoutStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable currentSquat: number;
  @observable currentBench: number;
  @observable currentOverheadPress: number;
  @observable currentDeadlift: number;
  @observable currentBarbellRow: number;

  @observable lastWorkoutType: WorkoutDay;

  @observable currentExcercises: CurrentExcercise[] = [];

  @observable history: WorkoutHistory;
}
