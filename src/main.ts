export function sayHello() {
    return "Hello";
}

export function sayBye() {
    return "Bye";
}

(() => {
    console.log(sayHello())
})();