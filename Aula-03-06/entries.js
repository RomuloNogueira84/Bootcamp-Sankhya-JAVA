const person = {
  name: "João",
  age: 30,
  city: "Rio de Janeiro"
};

const entries = person.entries();

for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
