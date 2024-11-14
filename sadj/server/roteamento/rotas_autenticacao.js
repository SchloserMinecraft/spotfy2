import express from 'express'
import { login, registro } from '../controlador/controlador_autenticacao.js'

const rotas = express.Router()

rotas.post ('/registro', registro)
rotas.post('/login', login)
export {rotas}