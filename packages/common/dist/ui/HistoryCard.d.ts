import * as React from "react";
import { CurrentExcercise } from "../stores/WorkoutStore";
interface Props {
    header: string;
    currentExercises: CurrentExcercise[];
    onPress: () => void;
}
export declare const HistoryCard: React.FC<Props>;
export {};
