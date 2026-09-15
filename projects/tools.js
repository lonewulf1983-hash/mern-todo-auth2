const nums = [1, 2, 3, 4];
const doubled = []

for (let i = 0; i < nums.length; i++) {
     doubled.push(nums[i] * 2)
}

console.log(doubled)

const nums2 = [1, 2, 3, 4];
const doubled2 = nums2.map(num => num * 2)

console.log(doubled2)

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];

for (let i = 0; i < nums3.length; i++) {
    if (nums3[i] % 2 === 0) {
        evens.push(nums3[i])
    }
}

console.log(evens)

const nums4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens2 = nums4.filter(num => num % 2 === 0);

console.log(evens2)

const nums5 = [5, 10, 15];
let total = 0;

for (let i = 0; i < nums5.length; i++) {
    total += nums5[i]
}

console.log(total)

const nums6 = [5, 10, 20]
const total2 = nums6.reduce((acc, num) => acc + num, 0)

console.log(total2)

const nums7 = [2, 54, 5]
for (let i = 0; i < nums7.length; i++) {
    console.log(nums7[i])
}

const nums8 = [3, 5, 99, 77, 299];
nums8.forEach(num => {
console.log(num)
})

const user = {
    name: "Daniel",
    address: {
        city: "Los Angeles",
        zip: 90001
    }
}

const { city } = user.address

// const city = user.address.city
console.log(city)

const users = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];

// const activeNames = []

// for (let i = 0; i < users.length; i++) {
//     if (users[i].active)
//         activeNames.push(users[i].name)
// }

const activeNames = users.filter(u => u.active).map(u => u.name)

console.log(activeNames)