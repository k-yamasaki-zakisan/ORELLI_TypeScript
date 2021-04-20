is('string', 'otherstring')
console.log(is(true, false))
console.log(is(42, 42))

function is<T>(a: T, ...b: [T, ...T[]]): boolean {
    return b.every(_ => _ === a)
}