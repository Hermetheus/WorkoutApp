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
    justifyContent: "space-between",
    marginTop: 14
  },
  circle: {
    borderRadius: 25,
    backgroundColor: "#8FB299",
    height: 50,
    width: 50
  },
  whiteText: {
    color: "#fff"
  },
  circleText: {
    fontSize: 16,
    margin: "auto"
  },
  grayText: {
    color: "#655252"
  },
  fadedBackground: {
    backgroundColor: "#B2A1A1"
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
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              >
                <Text style={[styles.grayText, styles.circleText]}>X</Text>
              </View>
            );
          }
          if (set === "") {
            return (
              <View
                style={[styles.circle, styles.fadedBackground]}
                key={set + index}
              />
            );
          }
          return (
            <View style={styles.circle} key={set + index}>
              <Text style={[styles.whiteText, styles.circleText]}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
