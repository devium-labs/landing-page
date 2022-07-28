import sg from '@sendgrid/mail';

sg.setApiKey(process.env.SENDGRID_APIKEY)

export default function sendEmail(req, res) {
  const data = req.body;

  const message =  {
    to: 'deviumlabs@gmail.com',
    from: 'deviumlabs@gmail.com',
    subject: 'Contato | Devium labs',
    html: data.body.replace(/[\r\n]/gm, ''),
  }

  sg.send(message).then((response) => {
    res.json({
      status: 200,
      message: 'Mensagem enviada com sucesso!',
    })

  }).catch((err) => {
    res.json({
      status: 404,
      message: 'Ocorreu algum erro',
    })
  })
}