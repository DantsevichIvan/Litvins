const contacts = [
    {position:'Creator of the club and member of the team Council',phone:29565654654, mail:'gfgfdgfd@gmail.com',address:'fdsfsdfsdfsd',id:1},
    {position:'Member of the team council',phone:29543545, mail:'fsdffdsf@gmail.com',address:'fdfdsfdsfdsf',id:2},
    {position:'Admin',phone:298559228, mail:'iw.dantsevich@gmail.com',address:'fdsfdsfddfsd',id:3}
]

async function getInfoContact(req,res) {
    try {
        await res.status(201).json(contacts);
    } catch (e) {
        await res.status(500).json({message:'Error server, sorry'})
    }
}


module.exports = {getInfoContact}
