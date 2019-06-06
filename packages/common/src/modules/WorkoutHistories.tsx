import { observer } from "mobx-react-lite";
import * as React from "react";
import { Button, Text, View } from "react-native";
import { RootStoreContext } from "../stores/rootStore";

interface Props {}

export const WorkoutHistory: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button
        title="create workout"
        onPress={() => {
          rootStore.workoutStore.currentExcercises.push(
            {
              excercise: "Squat",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 260
            },
            {
              excercise: "Bench Press",
              numSets: 5,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 200
            },
            {
              excercise: "Deadlift",
              numSets: 1,
              reps: 5,
              sets: ["", "", "", "", ""],
              weight: 360
            }
          );
          rootStore.routerStore.screen = "CurrentWorkout";
        }}
      />
    </View>
  );
});
