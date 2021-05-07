var form = document.getElementById("form");
form.addEventListener('submit',function(e)
{
    e.preventDefault()
    var search = document.getElementById("search").value  

    var original_name=search.split(' ').join('')
    document.getElementById('result').innerHTML=""
    fetch("https://api.github.com/users/"+original_name).then((result) => result.json())
    .then((data) => {
        document.getElementById('result').innerHTML = `
        <h3>The user details found by us : </h3>
        <br>
        <ul>
        <li><img src="${data.avatar_url}" width=300/></li>
        <li><b>Full Name</b>          : ${data.name}</li>
        <li><b>Location</b>           : ${data.location}</li>
        <li><b>User Bio</b>        : ${data.bio}</li>
        <li><b>Hireability</b>      : ${data.hireable}</li>
        <li><b>Username</b>           : ${data.login}</li>
        <li><b>No. of followers</b>   : ${data.followers}</li>
        <li><b>No. of followings</b>   : ${data.following}</li>
        <li><b>No. of repositories</b>: ${data.public_repos}</li>
        <li><b>Link to the Repo</b> : </li>
        <li><a target="blank" href="https://www.github.com/${original_name}">${data.html_url}</a></li>
        <li><b>Personal Website</b> : </li>
        <li><a target="blank" href="${data.blog}">${data.blog}</a></li>
        </ul>
       `
    })
})