export const classes = [];

export function DecoratorWithParam(param: string) {
  console.log("DecoratorWithParam, param: ", param);
  return (target: Function) => {
    console.log("DecoratorWithParam, param, target: ", param, target);
    classes.push(target)
  };
}
