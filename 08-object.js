const student = {
    'id': 1,
    'name': "Alex",
    'age': 18
};

// Loi ich
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
console.log(`- Thông tin SV1: ${sv2ID}, ${sv1Name}, ${sv2Age}`);
console.log(`- Thông tin SV1: ${sv3ID}, ${sv3Name}, ${sv3Age}`);

const sv1 = {
    'id': 1,
    'name': "Alex",
    "age": 20
}

const sv2 = {
    'id': 2,
    'name': "Nagi",
    "age": 18
}

const sv3 = {
    'id': 3,
    'name': "Alex",
    "age": 19
}

console.log(`- Thông tin SV1: ${sv1.id}, ${sv1.name}, ${sv1.age}`);
console.log(`- Thông tin SV1: ${sv2["id"]}, ${sv2.name}, ${sv2.age}`);
console.log(`- Thông tin SV1: ${sv3.id}, ${sv1.name}, ${sv3.age}`);


const student2 = {
    id: 1,
    name: "Alex",
    address: {
        province: "Ha Noi",
        isCapital: true,
        country: "Viet Nam"
    }
}

console.log(student2.address.province);
console.log(student2["address"].isCapital);
console.log(student2["address"]["country"]);
