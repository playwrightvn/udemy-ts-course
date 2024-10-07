const sv1ID = 1;
const sv1Name = "Alex";
const sv1Age = 20;

const sv2ID = 2;
const sv2Name = "Nagi";
const sv2Age = 18;

const sv3ID = 3;
const sv3Name = "Lua";
const sv3Age = 19;


console.log(`- Thông tin SV1: ${sv1ID}, ${sv1Name}, ${sv1Age}`);
console.log(`- Thông tin SV1: ${sv2ID}, ${sv2Name}, ${sv2Age}`);
console.log(`- Thông tin SV1: ${sv3ID}, ${sv3Name}, ${sv3Age}`);

const sv1 = {
    "ID": 1,
    "name": "Alex",
    "age": 20
};

console.log(sv1.ID);
console.log(sv1["name"]);


let numberArr = [1, 20.5, -300, 4];
numberArr.forEach(number => {
    console.log(number)
})

const strArr = ["Playwright", "Việt", "Nam"];
var mixedArr = ["Playwright", 10, true, null, {id: 1, name: "Alex"}];


const student = {
    id: 1,
    name: "Alex",
    isGraduated: true
};

for (const property in student) {
    console.log(`Property: ${property}, value: ${student[property]}`);
}

// id
// name
// isGraduated

const arr = [1, 3, 5, 2];
for (const item of arr) {
    console.log (item);
}

// Kết quả:
// 1
// 3
// 5
// 2

let found = 0;
for(let i = 0; i < 100; i++) {
    if (sum < 20) {
        sum += i;
    }
}