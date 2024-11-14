
import jsonwebtoken from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import{User} from '../db.js'

const registro = async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento } = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('voce deve preenher todos os campos')
        return
    }



    const userExiste = await User.findOne({ where: { email: email } })
    if (!userExiste) {
        res.send('usuario ja existe')
        return
    };
    

    const token = jsonwebtoken.sing(
        {
            "nome_completo": `${userExiste.nome} ${userExiste.sobrenome}`,
            "email": userExiste.status

        },
        'chavecriptografiajwt',
        { expiresIn: 1000 * 60 * 5 }
    )

    const teste = await User.create({ nome, email, senha: senhaCriptografada })

    res.send({
        msg: "ok usuario criado",
        tokenJWT: token
    })


};
const login = async (req,res)=>{
    const{email,senha} = req.body
if(!email || !senha){
    res.send('voce deve preenher todos os campos')
     return
}
const senhaValida = bcryptjs.compareSync(senha, userExiste.senha)
    const senhaCriptografada = bcryptjs.hashSync(senha, 10)
    if (!senhaValida) {
        res.send('senha invalida')
        return
    };
}
export { registro, login }