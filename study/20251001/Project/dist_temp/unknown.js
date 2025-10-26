// unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
console.log("unknown.ts 파일이 실행되었습니다!");
// 함수 작성
function printValue(value) {
    if (typeof value === 'number') {
        console.log(value * value);
    }
    else if (typeof value === 'string') {
        console.log(value.length);
    }
}
// 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
// 외부 API로부터 unknown 타입의 값을 받아,
function externalApi(data) {
    // 객체인지 확인한 뒤,
    if (typeof data === 'object' && data !== null && 'name' in data) {
        console.log(data.name);
    }
}
function isProduct(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'name' in obj &&
        'price' in obj &&
        typeof obj.id === 'number' &&
        typeof obj.name === 'string' &&
        typeof obj.price === 'number');
}
console.log("=== printValue 함수 테스트 ===");
printValue(5); // 25
printValue("hello"); // 5
console.log("\n=== externalApi 함수 테스트 ===");
externalApi({ name: "John", age: 30 }); // John
externalApi("not an object"); // 아무것도 출력되지 않음
console.log("\n=== isProduct 타입 가드 테스트 ===");
var validProduct = { id: 1, name: "Laptop", price: 999 };
var invalidProduct = { id: 1, name: "Phone" }; // price 속성 누락
console.log("Valid product:", isProduct(validProduct)); // true
console.log("Invalid product:", isProduct(invalidProduct)); // false
if (isProduct(validProduct)) {
    console.log("Product: ".concat(validProduct.name, ", Price: $").concat(validProduct.price));
}
