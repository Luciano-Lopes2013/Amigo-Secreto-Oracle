let friends = [];
function addFriend() {
    let friendName = document.querySelector('#friendName').value;
    // impedir maluco de colocar número e bugar o trem
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(friendName)) {
        alert('Please enter only letters.');
        return;
    }
    // se tá vazio, alerta. Se não, adiciona e atualiza a lista
    if (friendName) {
        friends.push(friendName);
        document.querySelector('#friendList').innerHTML += `<li>${friendName}</li>`;
        document.querySelector('#friendName').value = '';
        console.log('Friend added: ' + friendName);
    } else {
        alert('Please enter a name.');
    }
}
function updateFriendList() {
    let friendList = document.querySelector('#friendList');
    friendList.innerHTML = '';
    friends.forEach(friend => {
        friendList.innerHTML += `<li>${friend}</li>`;
    });
}
function drawFriend() {
    //forçar criatividade do usuário
    if (friends.length < 2) {
        alert('Please add at least two friends to draw.');
        return;
    }
    // bagunça o trem e solta a lista
    let shuffledFriends = [...friends].sort(() => Math.random() - 0.5);
    let results = [];
    //impedir troca, ou marmelada em circular e usando index de loop i 
    for (let i = 0; i < shuffledFriends.length; i++) {
        let friend = shuffledFriends[i];
        let secretFriend = shuffledFriends[(i + 1) % shuffledFriends.length];
        results.push(`${friend} -> ${secretFriend}`);
    }
    document.querySelector('#result').innerHTML = results.map(result => `<li>${result}</li>`).join('');
}
//queria que enviasse email pra geral em vez de mostrar a lista, mas sei lá como faz.
//  Acaba que um outsider teria que digitar os nomes e sortear. Mas enfim.

//Tudo utilizado vindo do curso, exceto função circular, pesquisei pra evitar as marmeladas ou tirar ela mesma
// já que até no vídeo explicativo, a moça tira ela mesma.
