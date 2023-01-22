import mongoose from "mongoose";

const pacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    propietario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true,
    },
    sintomas: {
        type: String,
        required: true
    },
    veterinario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Veterinario'
    }
}, {
    timestamps: true
});

const Paciente = mongoose.model('Paciente', pacientesSchema);

export default Paciente

