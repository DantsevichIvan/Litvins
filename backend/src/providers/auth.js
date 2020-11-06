const Player = require('../models/Player')
const bcrypt = require('bcrypt');


const logInSession = (req, playerId) =>{
    req.session.playerId = playerId
}

async function logIn(req, res){
    try {
        // extract data from req
        const {email, password} = req.body.data
        //find user
         const player = await Player.findOne({email})
        //check find user
        if(!player){
            return res.status(400).json({message: 'Пользователь не найден',success:false})
        }
        // password
        const isMatch = await bcrypt.compare(password, player.password);
        //check correct password
        if (!isMatch){
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' ,success:false })
        }
        //Token
        //
        res.status(201).json({message:'Logged in',success:true})//token, userId: user.id
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова',success:false})
    }
}

async function logOut(req, res){
    try {
        debugger
        req.session.destroy((err)=>{
            if (err){
                console.log(err)
            }
        })
        res.status(200).json({message: 'out in the system'})
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
}

async function registration (req, res){
    try {
        const {name, birthday, email, password} = req.body.data
        //checking whether there is a user
        const found = await Player.exists({ email });
        if (found) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' ,success:false})
        }
        //create hashedPassword
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log(hashedPassword)
        //create new player
        const player = await Player.create({ email, password:hashedPassword,name,birthday});

        // logInSession(req, player.id)

        res.status(201).json({message:'Пользователь созда',success:true})
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

module.exports = {registration,logIn,logOut,logInSession}
