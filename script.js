const errorDiv=document.querySelector('.errorMessage');
const pfp = document.querySelector('.pfp')
const username = document.querySelector('.username')
const fullname = document.querySelector('.fullname')
const bio = document.querySelector('.bio')
const publicRepos = document.querySelector('.publicRepos')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const userLocation = document.querySelector('.location')
const company = document.querySelector('.company')
const email = document.querySelector('.email')
const accountCreation = document.querySelector('.accountCreation')
const profileLink = document.querySelector('.htmlURL')
let data;

document.querySelector('form').addEventListener('submit',async (event)=>{
    event.preventDefault();
    const username=event.target.querySelector('input').value
    document.querySelector('input').value=''
    try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if(!response.ok){
            throw "Something went wrong"
        }
        data=await response.json()
        console.log('Data Fetched')
    } catch (error) {
        const errorMessage = document.createElement('p');
        errorDiv.appendChild(errorMessage);
        errorMessage.innerHTML = `${error}`;
        errorMessage.style.color = 'red';
        setTimeout(() => {
            errorMessage.remove();
        }, 2000);
    }

    //Using data in DOM
    pfp.src=`${data.avatar_url}`
    username.innerHTML=`Username: ${data.login}`
    fullname.innerHTML=`Full name: ${data.name}`
    if(data.bio==null){
        data.bio="No Information"
    }
    bio.innerHTML=`${data.bio}`
    publicRepos.innerHTML=`${data.public_repos}`
    followers.innerHTML=`${data.followers}`
    following.innerHTML=`${data.following}`
    if(data.location==null){
        data.location = "No Information"
    }
    userLocation.innerHTML=`Location: ${data.location}`
    if (data.company == null) {
        data.company = "No Information"
    }
    company.innerHTML=`Company: ${data.company}`
    if (data.email == null) {
        data.email = "No Information"
    }
    email.innerHTML=`Email:${data.email}`
    accountCreation.innerHTML=`Account Created: ${data.created_at}`
    profileLink.innerHTML=`${data.html_url}`
    profileLink.textContent=`${data.login}`
})