var axios = require('axios')

axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
.then(function(response){
    var data = response.data;

    console.log(data);
})
.catch(function(err){
    console.error(err);
})