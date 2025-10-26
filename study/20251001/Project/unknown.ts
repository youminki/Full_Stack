// unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
console.log("unknown.ts 파일이 실행되었습니다!");

// 함수 작성
function printValue(value: unknown): void {
    if (typeof value === 'number') {
        console.log(value * value);
    } else if ( typeof value === 'string') {
        console.log(value.length);
    }
}



// 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
// 외부 API로부터 unknown 타입의 값을 받아,
function externalApi(data: unknown): void{
// 객체인지 확인한 뒤,
    if (typeof data === 'object' && data !== null && 'name' in data) {
        console.log(data.name);
    }
}


// 사용자 정의 타입 가드 (isProduct)를 만들어 
// unknown 값이 특정 인터페이스를 만족하는지 검사해보세요.
interface Product {
    id: number;
    name: string;
    price: number;
}


function isProduct(obj: unknown): obj is Product {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'name' in obj &&
        'price' in obj &&
        typeof (obj as any).id === 'number' &&
        typeof (obj as any).name === 'string' &&
        typeof (obj as any).price === 'number'
    );
}

console.log("=== printValue 함수 테스트 ===");
printValue(5); // 25
printValue("hello"); // 5

console.log("\n=== externalApi 함수 테스트 ===");
externalApi({ name: "John", age: 30 }); // John
externalApi("not an object"); // 아무것도 출력되지 않음

console.log("\n=== isProduct 타입 가드 테스트 ===");
const validProduct = { id: 1, name: "Laptop", price: 999 };
const invalidProduct = { id: 1, name: "Phone" }; // price 속성 누락

console.log("Valid product:", isProduct(validProduct)); // true
console.log("Invalid product:", isProduct(invalidProduct)); // false

if (isProduct(validProduct)) {
    console.log(`Product: ${validProduct.name}, Price: $${validProduct.price}`);
}