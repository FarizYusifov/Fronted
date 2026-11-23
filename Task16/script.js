let user = {
    name: "Fariz",
    gender: "Male",
    birthday: "2006-12-30"
};
console.log(user.birthday);

user.age = 21;
delete user.birthday
console.log(user);


let user = {
    name: "Fariz",
    gender: "Male",
    age: 20,

   
    setAge: function(newAge) {
        this.age = newAge;
    },

    getYearsBeforeRetirement: function() {
        return 65 - this.age;
    }
};

user.setAge(25);

console.log(user.age);

console.log(user.getYearsBeforeRetirement());