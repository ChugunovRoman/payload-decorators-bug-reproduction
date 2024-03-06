# Payload decorators bug reproduction

1. Clone this repo
2. npm i
3. npm run build:payload

And We got an error:
```
> payload-decorators-bug-reproduction@1.0.0 build:payload
> cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload build

/home/ruut/Projects/payload-tests/decorators/node_modules/@swc/core/index.js:244
            return bindings.transformSync(isModule ? JSON.stringify(src) : src, isModule, toBuffer(newOptions));
                            ^

Error: 
  × Expression expected
   ╭─[/home/ruut/Projects/payload-tests/decorators/src/class.ts:1:1]
 1 │ import { DecoratorWithParam } from "./decorators";
 2 │ 
 3 │ @DecoratorWithParam("Expample param 1")
   · ─
 4 │ export class Sum {
 5 │   constructor(private value1: number, private value2: number) {}
 6 │   public result(): number {
   ╰────


Caused by:
    Syntax Error
    at Compiler.transformSync (/home/ruut/Projects/payload-tests/decorators/node_modules/@swc/core/index.js:244:29)
    at Object.transformSync (/home/ruut/Projects/payload-tests/decorators/node_modules/@swc/core/index.js:351:21)
    at compile (/home/ruut/Projects/payload-tests/decorators/node_modules/@swc/register/lib/node.js:76:22)
    at compileHook (/home/ruut/Projects/payload-tests/decorators/node_modules/@swc/register/lib/node.js:91:16)
    at Module._compile (/home/ruut/Projects/payload-tests/decorators/node_modules/pirates/lib/index.js:113:29)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Object.newLoader [as .ts] (/home/ruut/Projects/payload-tests/decorators/node_modules/pirates/lib/index.js:121:7)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Module.require (node:internal/modules/cjs/loader:1235:19) {
  code: 'GenericFailure'
}

Node.js v20.11.1
```