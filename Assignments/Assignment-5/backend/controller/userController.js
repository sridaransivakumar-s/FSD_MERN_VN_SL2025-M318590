const userDetails = require('../model/userModel')

const getData = async(req,res) =>{ 
  try {
    const user = await userDetails.find();
    res.status(200).json({user});
  } catch (error) {
    console.log(error);
  }

}

const insertData = async(req,res) =>{
   try {
    const {name,email,city} = req.body;
    const insertUser = await userDetails.create({
       name,email,city
    })
    res.status(200).json({insertUser});
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getData,insertData}