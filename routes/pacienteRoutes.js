import express from 'express';
import { 
    agregarPaciente, 
    obtenerPaciente, 
    obtenerPacienteById,
     actualizarPaciente, 
     eliminarPaciente} from '../controllers/pacienteController.js';

import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router()

router.route('/').post(checkAuth, agregarPaciente).get(checkAuth, obtenerPaciente)

router.route('/:id').get(checkAuth, obtenerPacienteById)
                  .put(checkAuth, actualizarPaciente) 
                  .delete(checkAuth, eliminarPaciente)

export default router

