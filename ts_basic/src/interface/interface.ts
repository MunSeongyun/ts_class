/* eslint-disable @typescript-eslint/no-unused-vars */
export default function interfacePractice() {
  // 선언을 통해서 머지
  interface Bread {
    calories: number
  }

  interface Bread {
    type: string
  }

  const francePan: Bread = {
    calories: 350,
    type: 'hard',
  }

  type MapoTofu = {
    calories: number
    spicyLevel: number
  }

  type Rice = {
    // calories: number
    gram: number
  }

  // 교집합
  type MapoDon = MapoTofu & Rice

  const mapoDon: MapoDon = {
    calories: 500,
    gram: 100,
    spicyLevel: 5,
  }

  const baguette: Bread = {
    calories: 270,
    type: '바삭함',
  }

  console.log('Baguette:', baguette)

  const spicyDon: MapoDon = {
    calories: 600,
    spicyLevel: 7,
    gram: 150,
  }

  console.log('Spicy Don:', spicyDon)

  interface Book {
    page: number
    title: string
  }

  interface Magazine extends Book {
    cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
  }

  const jump: Magazine = {
    cycle: 'weekly',
    page: 300,
    title: '소년점프',
  }

  console.log('Magazine:', jump)

  type BookType = {
    page: number
    title: string
  }

  interface HandBook extends BookType {
    theme: string
  }

  const goTrip: HandBook = {
    page: 120,
    theme: '여행',
    title: 'GO Trip!',
  }
  console.log('HandBook:', goTrip)

  interface Book {
    page: number
    title: string
  }

  class Comic implements Book {
    // page: number;
    // title: string;

    constructor(public page: number, public title: string, private publishYear: string) {
      // this.page = page;
      // this.title = title;
    }

    getPublishYear() {
      return this.title + '이/가 판매된 것은 ' + this.publishYear + '년입니다.'
    }
  }

  const demonSlayer = new Comic(200, '귀멸의 칼날', '2016')
  const attackOnTitan = new Comic(250, '진격의 거인', '2013')

  console.log(demonSlayer.getPublishYear())
  console.log(attackOnTitan.getPublishYear())

  // User 추상 클래스
  abstract class User {
    constructor(protected firstName: string, protected lastName: string) {}

    abstract sayHi(name: string): string
    abstract fullName(): string
  }

  // 추상 클래스 상속
  class Player extends User {
    sayHi(name: string) {
      return `hi ${name}. My name is ${this.fullName()}`
    }

    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }

  // User 인터페이스
  interface UserInterface {
    sayHi(name: string): string
    fullName(): string
  }

  // 인터페이스 구현
  class PlayerInterface implements UserInterface {
    constructor(private firstName: string, private lastName: string) {}

    sayHi(name: string): string {
      return `hi ${name}. My name is ${this.fullName()}`
    }

    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
  }

  const player1 = new Player('Minho', 'Kim')
  console.log(player1.sayHi('Jisoo'))

  const player2 = new PlayerInterface('Seongyun', 'Mun')
  console.log(player2.sayHi('Pack'))
}
