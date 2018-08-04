export class LoggingService {
  instanceCounter: number;
  constructor() {
    this.instanceCounter = Math.random();
  }
  public log(output: string) {
    console.log(output, this.instanceCounter);
  }
}
