const {userLists, movieList} = require("../Fake-data")

const resolvers ={
    Query:{
        users(){
            return userLists
        },
        user: (parent , args)=>{
            return userLists.find(user =>user.id === args.id)
        },
        movies(){
            return movieList
        }
        ,
        movie: (parent , args)=>{
            return movieList.find(movie => movie.name === args.name)
        }
    }
    ,
    Mutation :{
        createUser:(parent , args)=>{
            
            const user = args.user
           const lastId = userLists[userLists.length -1].id
           user.id = lastId + 1
           userLists.push(user)
           return user

        }
    }
}

module.exports ={resolvers}