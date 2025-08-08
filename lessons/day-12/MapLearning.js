//CREATE
const emergencyList = new Map([
    ['113', 'Police Dept'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital Dept'],
    ['116', 'Others'],
]);

//READ
console.log(emergencyList.get('113'));
console.log(emergencyList.keys());
console.log(emergencyList.values());

for(const key of emergencyList.keys()) {
    console.log(emergencyList.get(key));
}

for (const value of emergencyList.values()) {
    console.log(value);
}

const is117Existing = emergencyList.has('117');
console.log(is117Existing);

//UPDATE
emergencyList.set('116','Something else'); //update or add if not existing
console.log(emergencyList);

//DELETE
console.log(emergencyList.size);
emergencyList.delete('116');
console.log(emergencyList.size);

for (const [teo, ti] of emergencyList) {
    console.log(`${teo}, ${ti}`);
}