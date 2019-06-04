import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: "column"
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  topRowText: {
    fontSize: 16
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 14
  },
  circle: {
    borderRadius: 100,
    backgroundColor: "#8FB299",
    padding: 15
  },
  circleText: {
    color: "#fff"
  }
});

export const WorkoutCard: React.FC<Props> = ({
  sets,
  excercise,
  repsAndWeight
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{excercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, index) => {
          if (set === "x") {
            return <Text key={set + index}>x</Text>;
          }
          if (set === "") {
            return <Text key={set + index} />;
          }
          return (
            <View style={styles.circle} key={set + index}>
              <Text style={styles.circleText}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
