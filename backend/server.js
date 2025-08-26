const express=require('express');
const cors=require('cors');
const cron=require('node-cron');
const app=express();
app.use(cors());
app.use(express.json());
const nodemailer = require('nodemailer');

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "21EBKCS117 Yash",   
    pass: "y8302601225Y@",     
  },
});


function sendEmail(subject, text) {
  const mailOptions = {
    from: "yashnehrabkbiet25@gmail.com",
    to: "yashdnehra@gmail.com", 
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Error sending email:", err);
    } else {
      console.log("✅ Email sent:", info.response);
    }
  });
}
// ⏰ 9 AM daily
cron.schedule("0 9 * * *", () => {
  console.log("Running daily email job at 9 AM");

  // Random quotes
  const quotes = [
    "Good Morning! 🌞 Have a productive day!",
    "Wake up with determination, go to bed with satisfaction.",
    "Every morning is a new beginning. 🌸",
    "Start your day with positivity ✨",
    "Good morning! Keep smiling 😊"
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  sendEmail("Good Morning 🌅", randomQuote);
});

// 🔘 API route for manual send
app.post("/send-email", (req, res) => {
  const { subject, message } = req.body;
  sendEmail(subject, message);
  res.json({ success: true, msg: "Email sent successfully!" });
});

// cron.schedule("* * * * *", () => {
//   console.log("⌛ Cron Job: Running every minute");
// });

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
