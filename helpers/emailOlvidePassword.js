import nodemailer from 'nodemailer'

const emailPassword = async datos => {
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
         subject: 'Restablece tu password',
         text: 'Restablece tu password',
         html: `
          <p> Hola ${nombre} has solicitado reestablecer tu contraseña. </p>

          <p> : Sigue el siguiente enlace para generar una nueva contraseña
          <a href='${process.env.FRONTEND_URL}/olvide-password/${token}'>Reestablecer password</a> </p>
          <p>Si no creaste esta cuenta, puedes ignorar este mensaje</p>
         `
      })

      console.log('Mensaje enviado')
};

export default emailPassword
