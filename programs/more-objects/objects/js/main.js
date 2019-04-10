// create an array of object literals...
// [ , , , ] vs. { , , , , }
// array vs. objects
// lets create an array of objects.

class Friend {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //   fullName = () => `${this.firstName} ${this.lastName}`;
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
var friends = [
  new Friend("Connor", "McDavid"),
  new Friend("Albert", "Einstein")
  //   {
  //     firstName: "Connor",
  //     lastName: "McDavid"
  //   },
  //   {
  //     firstName: "Oscar",
  //     lastName: "Wilde"
  //   }
];

// render friends...
for (var idx = 0; idx < friends.length; idx += 1) {
  renderFriend(friends[idx]);
}

// render the friends to the body.
function renderFriend(friend) {
  console.log(friend.fullName());
  var output = `<h2>${friend.fullName()}</h2>`;

  // super gross...
  document.body.innerHTML += output;
}
