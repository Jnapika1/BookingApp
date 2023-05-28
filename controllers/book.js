const User = require('../models/userdetails');
const path = require('path');
const userPath = require('../util/path');
const exp = require('constants');

exports.getBook = async (req, res, next)=>{
    try{
       let users = await User.findAll()
    res.status(200).json({allUsers: users});
    }
    
    catch(err){
        console.log(err);
    }
    // res.sendFile(path.join(__dirname, '../views/user.html'));
};

exports.postBook = async (req, res, next) => {
    // console.log(req);
    let name =  req.body.name;
    let email = req.body.email;
    // console.log(name);

    try{
        let user =await User.create({
            name: name,
            email: email
          })
          res.status(201).json({newUser: user});
    }
    

    catch(err){
        console.log(err);
    }
  };

  exports.getDeleteID = async (req, res, next)=>{
      const id = req.params.id;
      console.log(id);
    try{
        let user = await User.findByPk(id)
        user.destroy();
        res.redirect('/');
     }
     
     catch(err){
         console.log(err);
     }
  }