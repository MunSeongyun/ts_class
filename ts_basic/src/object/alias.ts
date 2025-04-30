export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }
  const korea: Country = {
    capital: 'Seoul',
    language: 'Korean',
    name: 'Republic of Korea',
  }
  console.log('Object alias sample 1:', korea)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample 2:', america)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard // Knight나 Wizard 하나는 만족해야함

  type Paladin = Knight & Wizard // Knight랑 Wizard 둘 다 만족해야함

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '목검',
    swordSkill: '발도술',
  }
  console.log('Object alias sample 3:', adventurer1)

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '마법 지팡이',
    magicSkill: '화염구',
  }
  console.log('Object alias sample 4:', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100, // 필수
    weapon: '망치',
    swordSkill: '내려치기',
    magicSkill: '화염구', // 필수
  }
  console.log('Object alias sample 5:', paladin)
}
