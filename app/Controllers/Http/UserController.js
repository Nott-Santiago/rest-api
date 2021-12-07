'use strict'

const User = use('App/models/User');
class UserController {
    store({request}){
        const{email,password} = request.all();
        console.log(email, password)
        const user = User.create({
            email,
            password,
            username: email
        });
        return user;
    }
}

module.exports = UserController
