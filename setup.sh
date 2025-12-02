#!/bin/bash

echo "🤖 Wadaphone Setup - OpenAI Integration"
echo "========================================"
echo ""

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "✓ .env file created"
else
    echo "✓ .env file already exists"
fi

echo ""
echo "Please enter your OpenAI API key (get it from https://platform.openai.com/api-keys):"
read -p "API Key: " api_key

if [ -z "$api_key" ]; then
    echo "❌ API key cannot be empty"
    exit 1
fi

# Update .env file with API key
sed -i '' "s/OPENAI_API_KEY=.*/OPENAI_API_KEY=$api_key/" .env

echo "✓ API key saved to .env"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 is not installed. Please install Python3 first."
    exit 1
fi

echo "✓ Python3 found"
echo ""

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo "✓ Virtual environment created"
echo ""

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

echo "✓ Dependencies installed"
echo ""

echo "🎉 Setup complete!"
echo ""
echo "To run the server:"
echo "  1. source venv/bin/activate"
echo "  2. python app.py"
echo ""
echo "The API will be available at http://localhost:5000"
