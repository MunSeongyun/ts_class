export const logMessage = (message: string): void => {
  console.log('Function basic sample 1:', message)
}
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message)
}
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message)
}
export const logMessage4 = (message: string): void => console.log('Function basic sample 4:', message)
export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

type LogMessage = (message: string) => void

export const logMessage5: LogMessage = (message) => {
  console.log('Function basic sample 5:', message)
}

type FullLogMessage = {
  (message: string): void
}
export const logMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}

type Add = {
  (a: number, b: number): number
  (a: number, b: string): number
}

export const add: Add = (a, b) => {
  if (typeof b === 'string') return a
  return a + b
}
type Add2 = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

export const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c
  return a + b
}
