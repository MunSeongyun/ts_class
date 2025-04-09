export default function unknownSample() {
  const maybeNumber: unknown = 'foo'
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const foo = maybeNumber === 'foo'
  console.log('unknown sample 2:', typeof foo, foo)

  if (typeof maybeNumber == 'number') {
    const sum = maybeNumber + 50
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
