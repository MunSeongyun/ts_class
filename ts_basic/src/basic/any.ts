/* eslint-disable @typescript-eslint/no-explicit-any */

export default function anySample() {
  let name: any = 'JIT'
  console.log('any sample 1:', typeof name, name)
  name = 28
  console.log('any sample 2:', typeof name, name)
}
