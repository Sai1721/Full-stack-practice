//to fetch data from backend by axios module
const axios=require('axios');

const apiUrl='https://jsonplaceholder.typicode.com/posts/1';

axios.get(apiUrl)
    .then(Response=>{
        console.log('Response:',Response.data);
    })
    .catch(error=>{
        console.log('error:',error.message);
    })
