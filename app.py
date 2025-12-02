import os
from flask import Flask, jsonify, request
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

# Load OpenAI API key from environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

if not openai.api_key:
    raise ValueError("OPENAI_API_KEY environment variable not set")

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'Wadaphone API'})

@app.route('/api/product-description', methods=['POST'])
def get_product_description():
    """Generate product descriptions using OpenAI"""
    try:
        data = request.json
        product = data.get('product', 'samsung')
        color = data.get('color', 'natural')
        
        prompt = f"""Generate a compelling product description for a wooden smartphone called Wadaphone {product.capitalize()} in {color} finish. 
        Keep it to 2-3 sentences, emphasizing the natural beauty and craftsmanship. 
        Make it suitable for an e-commerce listing."""
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a product copywriter for luxury wooden smartphones."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=150
        )
        
        description = response.choices[0].message.content
        return jsonify({'success': True, 'description': description})
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/customer-support', methods=['POST'])
def customer_support():
    """OpenAI-powered customer support chat"""
    try:
        data = request.json
        customer_message = data.get('message', '')
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": """You are a helpful customer support agent for Wadaphone, a company that creates handcrafted wooden smartphones. 
                Be friendly, professional, and helpful. Provide information about products, shipping (free worldwide), and general inquiries."""},
                {"role": "user", "content": customer_message}
            ],
            temperature=0.7,
            max_tokens=200
        )
        
        reply = response.choices[0].message.content
        return jsonify({'success': True, 'reply': reply})
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/product-recommendations', methods=['POST'])
def get_recommendations():
    """Get personalized product recommendations using OpenAI"""
    try:
        data = request.json
        user_preference = data.get('preference', 'modern')
        
        prompt = f"""Based on user preference for '{user_preference}' style, recommend which Wadaphone product would be better:
        - Wadaphone Samsung (€49.99): Modern design inspired by Samsung
        - Wadaphone iPhone (€69.99): Elegant design inspired by iPhone 13
        
        Provide a brief recommendation (2-3 sentences) explaining which matches their preference better and why."""
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a product recommendation expert for wooden smartphones."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=150
        )
        
        recommendation = response.choices[0].message.content
        return jsonify({'success': True, 'recommendation': recommendation})
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
