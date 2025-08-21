/*setTimeout(callbackFn, 3*1000);

function callbackFn() {
    console.log(`Hello`);
}*/
task01();
task02();
task03();

//function declaration
function task01() {
    console.log(`1. Chay toi nha thang Teo`);
}

function task02() {
    setTimeout(askTeo, 3 * 1000);
}

function task03() {
    console.log(`3. Chay toi quan ca phe`);
}

function askTeo() {
    console.log('2. Teo o uong ca phe ko?');
}