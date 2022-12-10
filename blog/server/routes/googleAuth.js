const clinet_id="991054735648-cr4q1hk526qkpkif8bfgood8j327qe58.apps.googleusercontent.com";
const client_secret="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";



const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const express=require("express");

const app=express();
app.use(express.json());

passport.use(new GoogleStrategy({
    clientID:clinet_id,
    clientSecret:client_secret,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {

   console.log(profile.name);
   return cb(null,"somerandomstring")
  }
));


app.get("/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/google/callback",passport.authenticate("google",{failureRedirect:"http://localhost:3000/user/login",session:false}),

function (req,res){
    res.redirect("http://localhost:3000")
}

)
module.exports=app;