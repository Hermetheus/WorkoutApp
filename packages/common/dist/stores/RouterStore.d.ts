import { RootStore } from "./rootStore";
declare type Routes = "WorkoutHistory" | "CurrentWorkout";
export declare class RouterStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore);
    screen: Routes;
}
export {};
