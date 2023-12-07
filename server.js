const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Налаштування Twilio
const accountSid = 'AC380e4038aa320d770f4724516b36d0d4';
const authToken = 'e9845dde9d56fde686a98c7dd61f5a8c';
const twilioPhoneNumber = 'your_twilio_phone_number';
const ownerPhoneNumber = '+380976945455'; // Номер власника для отримання повідомлень

const client = twilio(accountSid, authToken);

app.post('/submit-order', (req, res) => {
  const formData = req.body;

  // Підготовка тексту повідомлення для SMS
  const smsMessage = `
   Нове замовлення:

   Ім'я: ${formData.name}
   Адреса: ${formData.address}`;


   // Відправлення SMS власнику
  client.messages
    .create({
      body: smsMessage,
      from: twilioPhoneNumber,
      to: ownerPhoneNumber,
    })
    .then(message => {
      console.log('SMS відправлено власнику. SID повідомлення:', message.sid);
      res.json({ message: 'Замовлення успішно відправлено' });
    })
    .catch(error => {
      console.error('Помилка відправлення SMS власнику:', error);
      res.status(500).json({ message: 'Виникла помилка при відправленні замовлення' });
    });
});

app.listen(port, () => {
  console.log(`Сервер слухає на порті ${port}`);
});

