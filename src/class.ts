import { DecoratorWithParam } from "./decorators";

@DecoratorWithParam("Expample param 1")
export class Sum {
  constructor(private value1: number, private value2: number) {}
  public result(): number {
    return this.value1 + this.value2;
  }
}