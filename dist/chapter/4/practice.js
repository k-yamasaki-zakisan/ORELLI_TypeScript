"use strict";
is('string', 'otherstring');
console.log(is(true, false));
console.log(is(42, 42));
function is(a, ...b) {
    return b.every(_ => _ === a);
}
//# sourceMappingURL=practice.js.map