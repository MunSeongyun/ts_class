export default function genericsSample() {
  type Reduce = {
    (array: string[], initialValue: string): string
  }
  const stringReduce: Reduce = (array: string[], initialValue: string) => {
    let result = initialValue
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      result += element
    }
    return result
  }
  console.log('generics sample 1:', stringReduce(['may', 'the', 'force', 'be', 'with', 'you'], ''))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      result += element
    }
    return result
  }

  console.log('generics sample 2:', numberReduce([1, 2, 3, 4, 5], 190))

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result += item
    }
    return result
  }

  console.log('generics sample 3:', genericStringReduce(['MAKE ', 'AMERICA ', 'GREAT ', 'AGAIN'], ''))

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result += item
    }
    return result
  }

  console.log('generics sample 4:', genericNumberReduce([-1, -2, -3], 10))
}
