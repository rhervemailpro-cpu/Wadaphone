# Wadaphone - Wooden Smartphone Shop

A modern e-commerce shop for handcrafted wooden smartphones with OpenAI integration for dynamic content generation.

## Features

- 🌍 Multi-language support (7 languages)
- 📱 Two wooden smartphone models with color selection
- 💳 Multiple payment methods
- 🤖 OpenAI integration for:
  - Dynamic product descriptions
  - Customer support chat
  - Personalized recommendations
- 🎨 Apple-inspired design with smooth animations
- 📦 Free worldwide shipping

## Project Structure

```
Wadaphone/
├── index.html              # Main HTML file
├── styles.css              # Apple-inspired styling
├── translations.js         # Multi-language support
├── script.js              # Frontend interactivity
├── app.py                 # Flask backend with OpenAI integration
├── requirements.txt       # Python dependencies
├── .env.example          # Environment variable template
├── setup.sh              # Setup script
└── README.md             # This file
```

## Setup Instructions

### Prerequisites

- Python 3.8+
- OpenAI API key (get one from https://platform.openai.com/api-keys)

### Installation

1. **Clone/Navigate to the project directory:**
   ```bash
   cd /Users/raphaelherve/Documents/2025/GitHub\ Projects/Wadaphone
   ```

2. **Run the setup script:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

   This will:
   - Create a `.env` file
   - Prompt for your OpenAI API key
   - Create a Python virtual environment
   - Install all dependencies

3. **Alternatively, manual setup:**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your OpenAI API key
   nano .env
   
   # Create virtual environment
   python3 -m venv venv
   source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   ```

## Running the Application

### Start the Backend Server

```bash
source venv/bin/activate  # Activate virtual environment
python app.py
```

The API will be available at `http://localhost:5000`

### Open the Frontend

Simply open `index.html` in your web browser or serve it with:

```bash
# Using Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## API Endpoints

### `/api/health` (GET)
Health check endpoint
```bash
curl http://localhost:5000/api/health
```

### `/api/product-description` (POST)
Generate product descriptions using OpenAI
```bash
curl -X POST http://localhost:5000/api/product-description \
  -H "Content-Type: application/json" \
  -d '{"product": "samsung", "color": "natural"}'
```

### `/api/customer-support` (POST)
Customer support chat powered by OpenAI
```bash
curl -X POST http://localhost:5000/api/customer-support \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the price of the iPhone model?"}'
```

### `/api/product-recommendations` (POST)
Get personalized product recommendations
```bash
curl -X POST http://localhost:5000/api/product-recommendations \
  -H "Content-Type: application/json" \
  -d '{"preference": "modern"}'
```

## Environment Variables

Create a `.env` file with:

```
OPENAI_API_KEY=your_api_key_here
FLASK_ENV=development
FLASK_DEBUG=True
```

**Never commit the `.env` file to version control!**

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Flask
- **AI:** OpenAI GPT-3.5-turbo
- **Languages:** 7 languages supported (English, French, Spanish, Italian, German, Portuguese, Lithuanian)

## Features

### Product Display
- Cedar wood texture with laser-engraved "wdf" logo
- Continuous 3D rotation animation
- Two models: Samsung-inspired (€49.99) and iPhone-inspired (€69.99)
- Two colors: Natural wood and black finish

### Payment Methods
- Klarna
- RevolutPay
- PayPal
- Visa
- Mastercard

### AI-Powered Features
- Dynamic product descriptions
- Intelligent customer support
- Personalized recommendations

## Troubleshooting

### "OPENAI_API_KEY environment variable not set"
Make sure your `.env` file has the correct API key:
```bash
echo "OPENAI_API_KEY=your_key_here" > .env
```

### CORS Issues
The backend is configured with CORS enabled. If you still see CORS errors, ensure the frontend is calling the correct API URL.

### Module not found errors
Make sure you've activated the virtual environment:
```bash
source venv/bin/activate
```

## License

© 2025 Wadaphone. All rights reserved.

## Support

For issues or questions, please contact support@wadaphone.com
