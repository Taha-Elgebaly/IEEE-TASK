let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length && counter < 2) {
  let currentFriend = friends[index];

  if (typeof currentFriend !== "number" && !currentFriend.startsWith("A")) {
    console.log(`${counter + 1} => ${currentFriend}`);
    counter++;
  }

  index++;
}

