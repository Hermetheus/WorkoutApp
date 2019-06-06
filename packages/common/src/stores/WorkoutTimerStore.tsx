import dayjs from "dayjs";
import { action, computed, observable } from "mobx";

export class WorkoutTimerStore {
  @observable startTime = dayjs();
  @observable isRunning = false;
  @observable seconds = 0;

  @action measure() {
    if (!this.isRunning) return;

    this.seconds = dayjs().diff(this.startTime, "second");

    setTimeout(() => this.measure(), 1000);
  }

  @action startTimer() {
    this.isRunning = true;
    this.startTime = dayjs();
    this.measure();
  }

  @action endTimer() {
    this.isRunning = false;
  }

  @computed get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60;
    return `${minutes}:${seconds}`;
  }
}