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
    calories: number
    gram: number
  }

  // 교집합
  type MapoDon = MapoTofu & Rice

  const mapoDon: MapoDon = {
    calories: 500,
    gram: 100,
    spicyLevel: 5,
  }

  // optional field 추가
  interface Bread {
    brand?: string
  }

  const baguette: Bread = {
    calories: 270,
    type: 'crusty',
    brand: 'FrenchDelight',
  }

  console.log('Baguette:', baguette)

  const spicyDon: MapoDon = {
    calories: 600,
    spicyLevel: 7,
    gram: 150,
  }

  console.log('Spicy Don:', spicyDon)
}
