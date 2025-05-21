/* eslint-disable @typescript-eslint/no-unused-vars */
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 // 가로 좌표 1~9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' // 세로 좌표 1~9

type Player = 'first' | 'second'

// 말의 위치 및 거리 계산
class Position {
  constructor(private suji: Suji, private dan: Dan) {}

  distanceFrom(position: Position) {
    const resultSuji = Math.abs(position.suji - this.suji)
    const resultDan = Math.abs(Number(position.dan) - Number(this.dan))
    if (resultDan > 9 || resultDan < 1 || resultSuji > 9 || resultDan < 1) {
      return {
        suji: 100,
        dan: 100,
      }
    }
    return {
      suji: resultSuji,
      dan: resultDan,
    }
  }

  compareDirectionFrom(player: Player) {
    if (player === 'first') {
      return 1 // 앞으로
    } else {
      return -1 // 뒤로
    }
  }
}

abstract class Piece {
  protected position: Position

  constructor(public player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  moveTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position): boolean
}

// 왕
class Osho extends Piece {
  canMoveTo(position: Position): boolean {
    const distance = this.position.distanceFrom(position)
    if (distance.dan === 100 && distance.suji === 100) {
      return false
    }
    // 수직/수평/대각선으로 1칸이내 이동가능하므로 거리가 2보다 작아야 함
    return distance.suji < 2 && distance.dan < 2
  }
}

// 보병
class Fu extends Piece {
  canMoveTo(position: Position): boolean {
    const distance = this.position.distanceFrom(position)
    if (distance.dan === 100 && distance.suji === 100) {
      return false
    }
    const dir = this.position.compareDirectionFrom(this.player)
    // 앞으로 한 칸만 이동 가능하므로 가로는 무조건 0, 새로는 무조건 1

    return distance.suji === 0 && distance.dan === 1 * dir
  }
}

// 승격된 보병
class NariKin extends Fu {
  canMoveTo(position: Position): boolean {
    const distance = this.position.distanceFrom(position)
    if (distance.dan === 100 && distance.suji === 100) {
      return false
    }
    const dir = this.position.compareDirectionFrom(this.player)
    return (
      distance.suji < 2 && // 가로 1칸 이내
      distance.dan < 2 && // 세로 1칸 이내
      !(distance.suji === 1 && distance.dan === -1 * dir) // 후방 대각선은 금지
    )
  }
}

// 금장
class Kin extends Piece {
  canMoveTo(position: Position): boolean {
    const dir = this.position.compareDirectionFrom(this.player)
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    return d.suji < 2 && d.dan < 2 && !(d.suji === 1 && d.dan === -1 * dir) // 후방 대각선 금지
  }
}

// 은장
class Gin extends Piece {
  canMoveTo(position: Position): boolean {
    const dir = this.position.compareDirectionFrom(this.player)
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    return (d.suji <= 1 && d.dan === 1 * dir) || (d.suji === 1 && d.dan === -1 * dir)
  }
}

// 비차
class Hisha extends Piece {
  canMoveTo(position: Position): boolean {
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    return (d.dan !== 0 && d.suji === 0) || (d.dan === 0 && d.suji !== 0)
  }
}

// 각행
class Kaku extends Piece {
  canMoveTo(position: Position): boolean {
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    return Math.abs(d.dan) === d.suji && d.dan != 0
  }
}

// 계마
class Keima extends Piece {
  canMoveTo(position: Position): boolean {
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    const dir = this.position.compareDirectionFrom(this.player)
    return d.dan === 2 * dir && d.suji === 1
  }
}

// 향차
class Kyosha extends Piece {
  canMoveTo(position: Position): boolean {
    const d = this.position.distanceFrom(position)
    if (d.dan === 100 && d.suji === 100) {
      return false
    }
    const dir = this.position.compareDirectionFrom(this.player)
    return (dir > 0 ? d.dan > 0 : d.dan < 0) && d.suji === 0
  }
}

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [
      // 선공
      new Kyosha('first', 1, '1'),
      new Keima('first', 2, '1'),
      new Gin('first', 3, '1'),
      new Kin('first', 4, '1'),
      new Osho('first', 5, '1'),
      new Kin('first', 6, '1'),
      new Gin('first', 7, '1'),
      new Keima('first', 8, '1'),
      new Kyosha('first', 9, '1'),

      new Kaku('first', 2, '2'),
      new Hisha('first', 8, '2'),

      new Fu('first', 1, '3'),
      new Fu('first', 2, '3'),
      new Fu('first', 3, '3'),
      new Fu('first', 4, '3'),
      new Fu('first', 5, '3'),
      new Fu('first', 6, '3'),
      new Fu('first', 7, '3'),
      new Fu('first', 8, '3'),
      new Fu('first', 9, '3'),

      // 후공
      new Kyosha('second', 1, '9'),
      new Keima('second', 2, '9'),
      new Gin('second', 3, '9'),
      new Kin('second', 4, '9'),
      new Osho('second', 5, '9'),
      new Kin('second', 6, '9'),
      new Gin('second', 7, '9'),
      new Keima('second', 8, '9'),
      new Kyosha('second', 9, '9'),

      new Kaku('second', 8, '8'),
      new Hisha('second', 2, '8'),

      new Fu('second', 1, '7'),
      new Fu('second', 2, '7'),
      new Fu('second', 3, '7'),
      new Fu('second', 4, '7'),
      new Fu('second', 5, '7'),
      new Fu('second', 6, '7'),
      new Fu('second', 7, '7'),
      new Fu('second', 8, '7'),
      new Fu('second', 9, '7'),
    ]
  }
}

// 게임 객체 생성
new Game()
