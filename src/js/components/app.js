let user = {
  name: 'Maki',
  age: 18,
  gender: 'male',
  hobby: 'coding',
};


let content = [];

for (let key of Object.keys(user)) {
  content.push(user[key]);
}

console.log(content);
