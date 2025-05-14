/* eslint-disable @typescript-eslint/no-unused-vars */
export const poly = () => {
    // 숫자 전용
    // type SuperPrint = {
    //   (arr: number[]): void;
    // };

    //숫자, 불리언 전용
    // type SuperPrint = {
    //   (arr: number[]): void;
    //   (arr: boolean[]): void;
    // };
    // const superPrint: SuperPrint = (arr) => {
    //   arr.forEach((i) => console.log(i));
    // };
    // superPrint([1, 2, 3, 4]);
    // superPrint([true, false, true]);
    // superPrint(['1', '2', '3']); // 에러


    // 제네릭 버전
    // type SuperPrint = {
    //   <TypePlaceholder>(arr: TypePlaceholder[]): void;
    //   // <T>(arr: T[]): void; // 동일한 의미
    // };

    // const superPrint: SuperPrint = (arr) => {
    //   arr.forEach((i) => console.log(i));
    // };

    // superPrint([1, 2, 3, 4]);
    // superPrint([true, false, true]);
    // superPrint(["1", "2", "3"]);
    // superPrint([1, 2, false, true]);
    // 전부 가능


    // 4. Generic + Return 타입 지정
    // type SuperPrint = {
    //   <TypePlaceholder>(arr: TypePlaceholder[]):void;
    // };

    // const superPrint: SuperPrint = (arr) =>{ console.log(arr[0])};

    // superPrint([1, 2, 3, 4]);
    // superPrint([true, false, true]);
    // superPrint(["1", "2", "3"]);
    // superPrint([1, 2, false, true]);
    // superPrint([1, 2, false, true, "hello"]);


    // 5. SuperPrint + SuperReturn 분리

    // type SuperPrint = { <T>(arr: T[]): void };
    // type SuperReturn = { <T>(arr: T[]): T };

    // const superPrint: SuperPrint = (arr) => {
    //   arr.forEach((i) => console.log(i));
    // };

    // const superReturn: SuperReturn = (arr) => arr[0];

    // superPrint([1, 2, false, true]);
    // console.log(superReturn([1, 2, 3, 4]));


    // 6. any 타입 사용 시 문제점

    // type SuperReturn = { (arr: any[]): any };

    // const superReturn: SuperReturn = (arr) => arr[0];

    // console.log(superReturn([1, 2, false, true, "hello"]));


    // 7. 제네릭 2개 사용

    // type SuperReturn = { <T, M>(arr: T[], b: M): T };
    // const superReturn: SuperReturn = (arr) => arr[0];

    // console.log(superReturn([1, 2, 3, 4], "x"));
    // superReturn([true, false, true], 1);
    // superReturn(["1", "2", "3"], false);
    // superReturn([1, 2, false, true, "hello"], []);


    // 8. Type alias와 function 선언 방식

    type Print = <T, M>(arr: T[], b: M) => T;
    const arrFunc: Print = (arr) => arr[0];

    function arrFunc3<V, N>(arr: V[], b: N) {
    return arr[0];
    }

    // const a = arrFunc3<number, string>([1, 2, 3, 4], 'one'); // OK
    // const a = arrFunc3<boolean, string>([1, 2, 3, 4], 'one'); // 에러


    // 9. const 화살표 함수 사용

    const arrFunc2 = <V, N>(arr: V[], b: N) => arr[0];

    const aa = arrFunc2([1, 2, 3, 4], "one");
    const bb = arrFunc3(["1", "2", "3"], 1);
    const cc = arrFunc([false, true, false, false], true);
    const dd = arrFunc([1, 2, "3", false], {});


    // 10. Generic type 객체 예시

    type Player<E> = {
    name: string;
    extraInfo: E;
    };

    const user: Player<{ favFood: string }> = {
    name: "user",
    extraInfo: { favFood: "kimchi" },
    };

    // 11. Type alias 활용

    type JitPlayer = Player<{ favFood: string }>;
    const user2: JitPlayer = {
    name: "user2",
    extraInfo: { favFood: "kimchi" },
    };

    // 실습 

    function printItems<T>(arr: T[]): void {
        arr.forEach((item) => console.log(item));
    }
    console.log('printItems');
    printItems([1, 2, 3]);
    printItems(['a', 'b', 'c']);
    printItems([true, false, true]);

    function getFirstItem<T>(arr: T[]): T {
        return arr[0];
    }

    console.log('getFirstItem');
    console.log(getFirstItem(['apple', 'banana']));
    console.log(getFirstItem([100, 200]));

    type People<T> = {
        name: string;
        extraInfo: T;
        
    };

    const people1: People<{ age: number }> = {
        name: 'kim',
        extraInfo: { age: 28 }
    };

    const people2: People<null> = {
        name: 'pack',
        extraInfo: null
    };
    console.log('people1');
    console.log(people1);
    console.log('people2');
    console.log(people2);

    function getFirstAndCheckType<T, U>(arr: T[], b: U): boolean {
        return typeof arr[0] === typeof b;
    }   
    console.log('getFirstAndCheckType');
    console.log(getFirstAndCheckType(['x', 'y'], 999));
    console.log(getFirstAndCheckType(['true', false], 'test'));
}