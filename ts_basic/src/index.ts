import World from './world' // webpack.config.js파일의 resolve 설정에 따라 ts 생략 가능
import { anySample, primitiveSample, unknownSample } from './basic'
import notExistSample from './basic/notExist'

const root: HTMLElement | null = document.getElementById('root')
const world = new World('Hello World!!!')
world.sayHello(root)

primitiveSample()
notExistSample()
anySample()
unknownSample()
