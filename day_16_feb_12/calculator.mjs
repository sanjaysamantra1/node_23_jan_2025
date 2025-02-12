export default function add(a, b) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`)
}
export function sub(a, b) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`)
}
export function mul(a, b) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`)
}
export function div(a, b) {
    console.log(`Division of ${a} & ${b} is ${a / b}`)
}

export let myName = 'Sachin';
// Default export -  add()
// Named export - sub(), mul(), div()

