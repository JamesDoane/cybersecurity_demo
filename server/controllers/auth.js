const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      // console.log(req.body)
      console.log(users)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].password)
        if (users[i].username === username && existing) {
          let info = {...users[i]}
          delete info.passHash
          console.log("success")
          res.status(200).send(info)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        let {username, email, firstName, lastName, password} = req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password,salt)

        let newUser = {
          username,
          email,
          firstName,
          lastName,
          password: passHash
        }
        users.push(newUser)
        let info = {...newUser}
        delete info.password
        // console.log(users)
        res.status(200).send(info)
    }
}