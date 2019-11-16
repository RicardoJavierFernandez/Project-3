import axios from'axios';
export default {

    login: function(email,password)
    {
        return axios.post("/api/users/login",{
           
            email,
            password

             });
            },ter: function(name, email, password)
                     {
                         return axios.post("/api/users",{
                        name,
                        email,
                        password

                         });
                        },

    getForcast: function ()
    {
        return new Promise ((resolve,
            reject)=>{
                resolve ([
{
               _id:1,
               title: "Forcast Inventory",
               description: "Forcast invenetory needed",
               clients: 50,
               date: "11/18/2019"
}

                ])
            })
    }
}