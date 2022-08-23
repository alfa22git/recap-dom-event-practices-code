document.getElementById("apply-bg").addEventListener('click',function(){

    //console.log('Apply Background');

    const friends = document.getElementsByClassName('friend');
    //console.log(friends);

    for(const friend of friends){
       // console.log(friend);
        friend.style.backgroundColor = 'lightgreen';
    }

})


document.getElementById('center-third-friend-name').addEventListener('click', function(){
    // console.log('Centring');
    const thirdFriends = document.getElementById('third-friend');
    // console.log('3rd---friend')
    thirdFriends.style.textAlign = 'center';
})


document.getElementById('add-friend').addEventListener('click',function(){
    // console.log('adding')
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class = "friend-name"> New Friend </h3>
    <p> Something new added </p>
    `
    friendContainer.appendChild(friend);
})