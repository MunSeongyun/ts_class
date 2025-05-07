/* eslint-disable @typescript-eslint/no-unused-vars */
import World from './world' // webpack.config.js파일의 resolve 설정에 따라 ts 생략 가능
import { anySample, primitiveSample, unknownSample } from './basic'
import notExistSample from './basic/notExist'
import {
  logMessage,
  logMessage2,
  logMessage3,
  logMessage4,
  alwaysThrowError,
  logMessage5,
  logMessage6,
  add2,
  add,
} from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameter'
import objectSample from './object/object'
import typeAliasSample from './object/alias'
import arraySample from './array/array'
import tupleSample from './array/tuple'
import genericsSample from './generics/basic'
import advancedSample from './generics/advanced'
const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello World!!!')
world.sayHello(root)

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// logMessage('Hello TypeScript!')
// logMessage2('Hello TypeScript!')
// logMessage3('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// alwaysThrowError('Hello TypeScript!')
// logMessage4('Hello TypeScript!')
// isUserSignedIn('ABC', 'JiaSW')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// const sum = sumProductsPrice(1000, 2000, 500, 3000, 250)
// console.log('Function parameters sample 5: Total price:', sum)
// logMessage5('Hello Type Signature!')
// logMessage6('Hello Type Signature!')

// console.log('add', add(1, 'hello'))
// console.log('add', add(1, 2))
// console.log('add2', add2(1, 2))
// console.log('add2', add2(1, 2, 3))
// objectSample()
// typeAliasSample()
// arraySample()
// tupleSample()
// genericsSample()
advancedSample()
