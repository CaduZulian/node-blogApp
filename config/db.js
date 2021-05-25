if(process.env.NODE_ENV == "production"){
  module.exports = {mongoURI: "mongodb+srv://dbUser:19bili09@blogapp-prod.yt0hh.mongodb.net/BlogApp-prod?retryWrites=true&w=majority"}
} else {
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}