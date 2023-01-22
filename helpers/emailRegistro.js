import nodemailer from 'nodemailer'

const emailRegistro = async datos => {
    let transporte = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      //Enviar email
      const {nombre, email, token} = datos

      const info = await transporte.sendMail({
         from: 'APV - Administrador de Pacientes de Veterinaria',
         to: email,
         subject: 'Comprueba tu cuenta en APV',
         text: 'Comprueba tu cuenta en APV',
         html: `
          <p> Hola ${nombre} comprueba tu cuenta en APV. </p>
          <p> Tu cuenta ya está lista solo confirmala en el siguente enlace:
          <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Comprobar Cuenta</a> </p>
          <p>Si no creaste esta cuenta, puedes ignorar este mensaje</p>
         `
      })

      console.log('Mensaje enviado')
};

export default emailRegistro

