export function oopTest() {
  class Player {
    constructor(private firstName: string, private lastName: string, public nickName: string) {}
  }

  const player1 = new Player('hw', 'kim', '혁누')
  console.log('닉네임:', player1.nickName)
  // console.log(player1.firstName); // private이라 접근 불가

  type Words = {
    [key: string]: string | string[]
  }

  class Word {
    constructor(public term: string, public def: string | string[]) {}

    toString() {
      console.log(`${this.term}: [뜻] ${this.def}`)
    }

    addDef(newDef: string) {
      if (typeof this.def === 'string') {
        this.def = [this.def, newDef]
      } else {
        this.def = [...this.def, newDef]
      }
    }

    updateDef(oldDef: string, newDef: string) {
      if (typeof this.def === 'string') {
        if (oldDef === this.def) this.def = newDef
      } else {
        this.def = this.def.filter((val) => val !== oldDef)
        this.def.push(newDef)
      }
    }
  }

  const kimchi = new Word('kimchi', '한국의 음식')

  // Word 메서드 테스트
  kimchi.toString()
  kimchi.addDef('발효된 채소')
  kimchi.toString()
  kimchi.updateDef('한국의 음식', '한국 전통 음식')
  kimchi.toString()

  class Dict {
    private words: Words
    constructor() {
      this.words = {}
    }

    add(word: Word) {
      if (!this.words[word.term]) {
        this.words[word.term] = word.def
      }
    }

    find(term: string) {
      return this.words[term]
    }

    rmv(term: string) {
      delete this.words[term]
    }

    update(oldTerm: string, newTerm: string) {
      if (Object.prototype.hasOwnProperty.call(this.words, oldTerm)) {
        this.words[newTerm] = this.words[oldTerm]
        delete this.words[oldTerm]
      }
    }

    size() {
      return Object.keys(this.words).length
    }

    all() {
      for (const [key, value] of Object.entries(this.words)) {
        console.log(`${key}: ${value}`)
      }
    }

    static hello() {
      return 'hello'
    }

    updateDef(term: string, oldDef: string, newDef: string) {
      const def = this.words[term]

      if (!def) {
        console.log(`[updateDef] 단어 '${term}'가 사전에 없습니다.`)
        return
      }

      if (typeof def === 'string') {
        if (def === oldDef) {
          this.words[term] = newDef
        }
      } else {
        const filtered = def.filter((d) => d !== oldDef)
        this.words[term] = [...filtered, newDef]
      }
    }
  }

  const dict = new Dict()

  // dict 메서드 테스트
  dict.add(kimchi)
  console.log('find:', dict.find('kimchi'))
  console.log('size:', dict.size())
  console.log('call all method')
  dict.all()

  dict.updateDef('kimchi', '발효된 채소', '맵다, 배추, 고춧가루')
  console.log('after updateDef')
  dict.all()

  dict.update('kimchi', 'gimchi')
  console.log('after update dict: ')
  dict.all()

  dict.rmv('gimchi')
  console.log('after remove:')
  dict.all()

  console.log('hello:', Dict.hello())
}
