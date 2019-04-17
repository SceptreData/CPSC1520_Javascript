// Your code here...
const friendsPath = "friends/";
const friendsFile = "friends.json";

const menu = document.querySelector(".pure-menu");
const content = document.querySelector(".content");

let currentPage = "Home";

menu.addEventListener("click", event => {
  event.preventDefault();
  const { parentNode: target } = event.target;

  if (isHomePage(target)) {
    loadPage("Home");
  } else if (target.classList.contains("friends")) {
    loadPage("Friends");
  }
});

function loadPage(dest) {
  if (currentPage !== dest) {
    clearContent();

    if (dest === "Friends") {
      let list = buildFriendList();
      populateFriendList(list);
    }

    setCurrentPage(dest);
  }
}

function clearActiveLink() {
  for (const item of menu.children) {
    item.classList.remove("pure-menu-selected");
  }
}

function buildFriendList() {
  const friendList = document.createElement("ul");
  content.appendChild(friendList);
  return friendList;
}

function populateFriendList(list) {
  fetch(friendsPath + friendsFile)
    .then(response => response.json())
    .then(friends => buildFriendLinks(list, friends)); //buildFriendList(friends));
}

function loadFriend(event) {
  event.preventDefault();
  clearContent();

  let id = event.target.getAttribute("data-friend-id");

  fetch(friendsPath + `${id}.json`)
    .then(response => response.json())
    .then(friend => buildProfilePage(friend));
}

function buildFriendLinks(list, friends) {
  console.log(friends);
  for (const friend of friends) {
    let elt = document.createElement("li");

    let anchor = document.createElement("a");
    anchor.href = "#";
    anchor.setAttribute("data-friend-id", friend.id);
    anchor.innerText = `${friend.firstName} ${friend.lastName}`;

    anchor.addEventListener("click", loadFriend);

    elt.appendChild(anchor);
    list.appendChild(elt);
  }
}
function buildProfilePage(friend) {
  const { firstName, lastName, avatar, email, bio, hometown } = friend;
  setCurrentPage(`${firstName} ${lastName}'s Profile`);

  content.innerHTML = `
            <div class="friend">
                <div class="identity">
                    <img src="img/${avatar}" class="photo" />
                    <h2 class="name">${firstName} ${lastName}</h2>
                    <ul>
                        <li><span class="label">email:</span> ${email}</li>
                        <li><span class="label">hometown:</span> ${hometown}</li>
                    </ul>
                </div>
                <p class="bio">
                 ${bio}
                </p>
            </div>
        `;
}

function setCurrentPage(dest) {
  let title = document.querySelector("title");
  title.innerHTML = dest;
  currentPage = dest;
}

function isHomePage(target) {
  return (
    target.classList.contains("home") ||
    target.children[0].classList.contains("pure-menu-heading")
  );
}
function clearContent() {
  content.innerHTML = "";
}
