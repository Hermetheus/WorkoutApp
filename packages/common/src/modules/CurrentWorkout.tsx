import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/rootStore";
import { WorkoutCard } from "../ui/WorkoutCard";
import { WorkoutTimer } from "../ui/WorkoutTimer";

interface Props {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);
  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExcercises.map(e => {
        return (
          <WorkoutCard
            onSetPress={setIndex => {
              const v = e.sets[setIndex];

              let newValue: string;

              if (v === "") {
                newValue = `${e.reps}`;
              } else if (v === "0") {
                newValue = "";
              } else {
                newValue = `${parseInt(v) - 1}`;
              }

              e.sets[setIndex] = newValue;
            }}
            key={e.excercise}
            sets={e.sets}
            excercise={e.excercise}
            repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
          />
        );
      })}
      <WorkoutTimer onXPress={() => {}} />
    </View>
  );
});
