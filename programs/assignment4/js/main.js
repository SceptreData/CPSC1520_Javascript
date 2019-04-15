// Your code here...
const friendsPath = "friends/";
const friendsFile = "friends.json";

const menu = document.querySelector('.pure-menu-list');
const content = document.querySelector('.content');

buildFriendsList();
loadFriend(2);

menu.addEventListener('click', event => {
    event.preventDefault();
    const activeLink = event.target;
    if (!activeLink.classList.contains('pure-menu-selected')){
        activeLink.classList.add('pure-menu-selected');
    }
});

function clearActiveLink() {
    for (const item of menu.children){
        item.classList.remove('pure-menu-selected');
    }
}

function buildFriendsList() {
    const friendList = document.createElement('ul');
    content.appendChild(friendList);
    populateFriendList(friendList);
}


function populateFriendList(list){
    fetch(friendsPath + friendsFile)
    .then(response => response.json())
    .then(friends => {
        for (const friend of friends) {
            let elt = document.createElement('li');
            let anchor = document.createElement('a');
            anchor.href = "#";
            anchor.setAttribute("data-friend-id", friend.id);
            anchor.innerText = `${friend.firstName} ${friend.lastName}`;
            elt.appendChild(anchor);
            list.appendChild(elt);
            console.log(friend);
        }
    })
}
function loadFriend(id){
    clearContent();
    fetch(friendsPath + `${id}.json`)
    .then(response => response.json())
    .then(friend => {
        const {firstName, lastName, avatar, email, bio, hometown} = friend;
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
    })
}

function clearContent(){
    content.innerHTML = "";
}
