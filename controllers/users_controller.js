module.exports.profile = function(req,res) {
    return res.render('user_profile',{title: "User Profile"});
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{title:"Konnect Sign Up"})
}

module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{title:"Konnect Sign In"})
}

module.exports.create = function(req,res){

}

module.exports.createSession = function(req,res){
    
}