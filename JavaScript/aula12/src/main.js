import axios from 'axios';

axios.get('https://api.github.com/users/cavicf')
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('Erro:', error);
});

axios.post('https://api.github.com/login', {
    email: 'teste@email.com',
    password: 'adsadsa'
}, {
    headers:{
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('Erro:', error);
});

const getuser = async () => {
    try{
        const response = await axios.get('https://api.github.com/users/cavicf', {
            headers:{
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            }
        });
        console.log(response);
    }
    catch(error){
        console.log(error); 
    }
}
getuser()