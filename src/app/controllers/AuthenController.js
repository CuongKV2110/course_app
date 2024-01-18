const User = require('../models/User');
const UserInfo = require('../models/UserInfo');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class AythenController {
    //[Get] home
    index(req, res, next) {

        res.render('login/login');
    }

    login(req, res, next) {
        console.log("Login");
        console.log(req.body);
        const { username, password } = req.body; // Truy xuất thông tin xác thực từ request body
    
        User.findOne({ username, password })
            .then(user => {
                if (user) {
                    UserInfo.username = user.username,
                    UserInfo.id = user._id.toString(),
                    console.log(UserInfo);
                    // Authentication successful
                    // res.json({ success: true, message: 'Login successful' });
                    res.redirect('/course');
                } else {
                    res.status(401).json({ success: false, message: 'Incorrect account' });
                }
            })
            .catch(next);
    }
}

module.exports = new AythenController();
