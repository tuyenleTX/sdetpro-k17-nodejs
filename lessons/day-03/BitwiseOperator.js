
if(call1stNumber() != 0 & call2ndNumber() != 0) {
    console.log('All numbers are not 0');
}

function call1stNumber() {
    console.log('Number 1');
    return 1;
}
function call2ndNumber() {
    console.log('Number 2');
    return 2;
}
   
// | , & : bitwise operator
// 1. Resolve all values
// 2. Combine: true | true: true

// || , && : combine operator
// 1. Resolve values from left to right, one by one
// 2. if see the first true, will ignore the rest right ones