export default function advancedSample() {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]
  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '456', '001'], (item) => Number(item))
  console.log('generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('generics advanced sample 2:', strings)

  const forEachNumber = (array: number[], fn: (item: number) => void) => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      fn(element)
    }
  }
  forEachNumber([1, 2, 3, 4, 5], (item) => console.log('generics advanced sample 3:', item))

  const filterNumber = (array: number[], fn: (item: number) => boolean) => {
    const result = []
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      if (fn(element)) {
        result.push(element)
      }
    }
    return result
  }
  const filterResult = filterNumber([1, 2, 3, 4, 5], (item) => item % 2 == 0)
  console.log('generics advanced sample 4:', filterResult)
}
