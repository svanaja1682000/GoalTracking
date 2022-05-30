
import axios from 'axios';

async function getUserList() {
    return axios({
        method: "get",
        url: "/public/v2/users",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec",
        },
        });
  }

  async function getUserDetails(id) {
      console.log(`inside the get api:${id}`);

    return axios({
        method: "get",
        url: `/public/v2/users/${id}`,
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec",
        },
        });
  }

  async function postUSers(name,email,gender,status) {
      console.log(`name:${name}email:${email}gender:${gender}`);

  return axios({
      method: "post",
      url: "/public/v2/users",
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
      "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec",
      },
      data:{
        name,
        email,
        gender,
        status
        
      }
     
      });
}

async function deleteUser(user_id) {
    console.log(`userID inside deleting the user:${user_id}`);

return axios({
    method: "delete",
    url: `/public/v2/users/${user_id}`,
    headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization:
    "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec",
    },
    
   
    });
}


async function getAllPosts(id) {
    

  return axios({
      method: "get",
      url: `/public/v2/users/${id}/posts`,
      headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
      "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec",
      },
      });
}

async function createPost(userId,title,body){
    return axios({
        method:"post",
        url:`/public/v2/users/${userId}/posts`,
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:
            "Bearer 8154de851cf60ecb95bf9d234741b50123426a751a33c18e61e3a2ea5dfc80ec"
        },
        data:{
            title,
            body,
        }
    })
}
  export { getUserList,getUserDetails ,postUSers,deleteUser,getAllPosts,createPost};