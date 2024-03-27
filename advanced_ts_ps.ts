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