export default function arraySample() {
    const colors: string[] = ['red', 'blue']
    colors.push('yellow')
    console.log('array sample 1:', colors)
    
    const even: Array<number> = [2, 4, 6]
    even.push(8)
    console.log('array sample 2:', even)

    const ids: (string | number)[] = ['abc',123]
    ids.push('def')
    ids.push(456)
    console.log('array sample 3:', ids)

    const generateSomeArray = () =>{
        const _someArray = []
        _someArray.push(1234)
        _someArray.push('abc')
        return _someArray
    }

    const someArray = generateSomeArray()
    console.log('array sample 4:', someArray)

    const commands: readonly string[] = [
        'git add', 'git commit'
    ]
    // commands.push("hello")
    console.log('array sample 5:', commands)

    const immutableNumbers: ReadonlyArray<number> = [1,2,3]
    // immutableNumbers.push(5)
    console.log('array sample 6:', immutableNumbers)

    /**
     * readonly number[]	number[] 배열의 요소를 읽기 전용으로 지정하는 구문적 축약형
     * ReadonlyArray<number>	readonly number[]와 같은 의미를 갖는 제네릭 타입 표현
     * 둘은 동일한 타입을 의미함
     */
    
}