import { RootStore } from "./rootStore";
declare type WorkoutDay = "a" | "b";
export interface CurrentExcercise {
    weight: number;
    reps: number;
    numSets: number;
    excercise: string;
    sets: string[];
}
interface WorkoutHistory {
    [key: string]: CurrentExcercise[];
}
export declare class WorkoutStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    currentSquat: number;
    currentBench: number;
    currentOverheadPress: number;
    currentDeadlift: number;
    currentBarbellRow: number;
    lastWorkoutType: WorkoutDay;
    currentExcercises: CurrentExcercise[];
    history: WorkoutHistory;
}
export {};
