import { observer } from "mobx-react-lite";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RootStoreContext } from "../stores/rootStore";
import { WorkoutCard } from "../ui/WorkoutCard";

interface Props {}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    margin: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {
  const rootStore = React.useContext(RootStoreContext);
  return (
    <View style={styles.container}>
      {rootStore.workoutStore.currentExcercises.map(e => {
        return (
          <WorkoutCard
            key={e.excercise}
            sets={e.sets}
            excercise={e.excercise}
            repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`}
          />
        );
      })}
    </View>
  );
});
