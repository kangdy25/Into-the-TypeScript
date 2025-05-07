// Interface & Class
class Character {
    name;
    moveSpeed;
    constructor(name, moveSpeed) {
        this.name = name;
        this.moveSpeed = moveSpeed;
    }
    move() {
        console.log(`${this.name}은 ${this.moveSpeed} 속도로 이동합니다.`);
    }
}
export {};
