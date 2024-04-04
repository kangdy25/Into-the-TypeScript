// Rest Parameter, Destructuring 

// (숙제1) 숫자 여러 개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
function Maximum(...a : number[]) : number {
    let minimum : number = 0;
    for (let i = 0; i < a.length; i++) {
        if (minimum < a[i]) {
            minimum = a[i];
        }
    }
    return minimum;
}
console.log(Maximum(1, 6, 3, 4, 5));

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 

type UserType = {
    users : string,
    comment : number[],
    admin : boolean,
}

function inputObject({users, comment, admin} : UserType) : void {
    console.log(users, comment, admin)
}

inputObject({ users : 'kim', comment : [3,5,4], admin : false })

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
type Drink = (number | string | boolean)[];

function drinkInput([price, kind, alcohol] : Drink) : void {
    console.log(price, kind, alcohol)
}

drinkInput([40, 'wine', true])

// Public, Private, Protected, Static

// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
class Users {
    private static x = 10;
    public static y = 20;
    protected z = 30;

    addOne(a : number) {
        Users.x += a;
    }
    printX() {
        console.log(Users.x);
    }
}
// x는 Users 클래스가 직접 사용하는 것만 가능하고 자식 클래스에 상속되지 않으며, 
// 클래스 외부에서 변경을 금지한다.

// y는 Users 클래스가 직접 사용하는 것만 가능하고 자식 클래스에 상속되지 않으며, 
// 클래스 외부에서 변경을 허용한다.

// z는 클래스 외부에서 변경을 금지하지만, extends로 확장한 클래스에서 사용할 수 있다.

// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
let ImUser = new Users;
ImUser.addOne(3) //이렇게 하면 x가 3 더해져야함
ImUser.addOne(4) //이렇게 하면 x가 4 더해져야함
ImUser.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

// (숙제3) 이런거 어떻게 만들게요 
class Square {
    a;
    b;
    c;
    constructor(width : number, height : number, color : string) {
        this.a = width;
        this.b = height;
        this.c = color;
    }
    draw() {
        let square = `<div style="
            position: relative;
            width:${this.a}px;
            height:${this.b}px;
            background:${this.c};
            
            top: ${Math.random() * 400}px;
            left: ${Math.random() * 400}px;"></div>`; 
        
        document.body.insertAdjacentHTML('beforeend', square)
    }
}

let 네모 = new Square(30, 30, 'red');
console.log(네모)
네모.draw()
네모.draw()
네모.draw()
네모.draw()

// export/import type, namespace

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
import {CarType, BikeType} from './module'
let a : CarType = {wheel : 4, model: 'grandeur'}

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
import { myFunction } from './module';
let func : myFunction = function(a) {
    console.log(a)
}

// (숙제3) 타입 중복이 너무 많이 발생합니다.
namespace DogSpace {
    export type Dog = string;
}
namespace DogFace {
    export interface Dog { name : string };
}

let dog1 : DogSpace.Dog = 'bark';
let dog2 : DogFace.Dog = { name : 'paw' }