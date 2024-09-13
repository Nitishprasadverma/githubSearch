
var btn = document.querySelector(".submit-btn");
console.log(btn);



btn.addEventListener("click",function(){
    console.log("btn-clcked");
    const input =document.getElementById('Inputname')
   
   const  name = input.value

    fetchGitHubDetails(name);
// Fetch GitHub details of a specific user (replace 'octocat' with any username)

input.value = ""
})



function fetchGitHubDetails(name) {
    const url = `https://api.github.com/users/${name}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Update DOM with the fetched data
        document.getElementById('avatar').src = data.avatar_url;
        document.getElementById('name').textContent = data.name;
        document.getElementById('repos').textContent = data.public_repos;
        document.getElementById('followers').textContent = data.followers;
        document.getElementById('following').textContent = data.following;
    })
    .catch(error => {
        console.error('Error fetching the GitHub data:', error);
    });
}

