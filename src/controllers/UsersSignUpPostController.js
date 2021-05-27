const { generateHash } = require('../modules/bcrypt');
const SignUpValidation = require('../validations/SignUpValidation')

module.exports  = async (req, res) => {
    try {
        let { name, password } =  await SignUpValidation.validateAsync(req.body)
        let users = await req.psql.users;
        console.log(response);
        let user = await req.psql.users.create({
            name: name,
            password: generateHash(password)
        })
        user = {
            id: user.id,
            name: user.name
        }
        // console.log(users);
        res.status(200).json({
            ok: true,
            message: "Successfully registered",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            message: error + ""
        })
    }
}