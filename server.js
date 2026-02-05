import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  
  console.log('Contact form submission:', { firstName, lastName, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  
  console.log('Newsletter subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to newsletter!' 
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
