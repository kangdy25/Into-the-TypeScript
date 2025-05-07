// Interface & Class

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) { }

  move() {
    console.log(`${this.name}은 ${this.moveSpeed} 속도로 이동합니다.`)
  }
}