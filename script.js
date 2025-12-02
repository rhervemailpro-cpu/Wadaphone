let cart = [];
let selectedColors = {
    samsung: 'natural',
    iphone: 'natural'
};
let selectedPayment = null;

const API_URL = 'http://localhost:5000/api';

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    document.getElementById('languageSelect').value = savedLang;
    updatePageTranslations();
    
    // Check API health on load
    checkAPIHealth();
});

function changeLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageTranslations();
}

function selectColor(product, color) {
    selectedColors[product] = color;
    
    // Update toggle buttons
    const buttons = document.querySelectorAll(`[data-product="${product}"]`);
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.color === color) {
            btn.classList.add('active');
        }
    });
    
    // Update product image
    const productTile = document.querySelector(`.product-tile:has([data-product="${product}"])`);
    if (productTile) {
        const imageElement = productTile.querySelector('.product-image');
        imageElement.classList.remove('black');
        if (color === 'black') {
            imageElement.classList.add('black');
        }
    }
}

function addToCart(product) {
    const price = product === 'samsung' ? 49.99 : 69.99;
    const color = selectedColors[product];
    
    const item = {
        id: `${product}-${color}-${Date.now()}`,
        product,
        color,
        price
    };
    
    cart.push(item);
    const productName = product.charAt(0).toUpperCase() + product.slice(1);
    showNotification(`${productName} added to cart!`);
    
    // Optionally call OpenAI to get a dynamic product description
    getProductDescription(product, color);
}

function selectPayment(method) {
    selectedPayment = method;
    
    // Update payment tiles
    const tiles = document.querySelectorAll('.payment-tile');
    tiles.forEach(tile => {
        tile.classList.remove('active');
        if (tile.dataset.method === method) {
            tile.classList.add('active');
        }
    });
    
    const methodName = method.charAt(0).toUpperCase() + method.slice(1);
    showNotification(`Payment method set to ${methodName}`);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1d1d1f;
        color: white;
        padding: 14px 24px;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// OpenAI Integration Functions

async function checkAPIHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const data = await response.json();
        console.log('✓ API Health:', data);
    } catch (error) {
        console.warn('⚠️ API server is not running. Some features may be unavailable.');
        console.warn('Start the server with: python app.py');
    }
}

async function getProductDescription(product, color) {
    try {
        const response = await fetch(`${API_URL}/product-description`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product, color })
        });
        
        const data = await response.json();
        if (data.success) {
            console.log('📝 AI Description:', data.description);
            // You could display this in a tooltip or modal if desired
        }
    } catch (error) {
        console.warn('Could not fetch AI description:', error.message);
    }
}

async function getCustomerSupport(message) {
    try {
        const response = await fetch(`${API_URL}/customer-support`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        const data = await response.json();
        if (data.success) {
            console.log('🤖 Support Response:', data.reply);
            return data.reply;
        }
    } catch (error) {
        console.error('Support chat error:', error);
    }
}

async function getRecommendation(preference) {
    try {
        const response = await fetch(`${API_URL}/product-recommendations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ preference })
        });
        
        const data = await response.json();
        if (data.success) {
            console.log('💡 Recommendation:', data.recommendation);
            return data.recommendation;
        }
    } catch (error) {
        console.error('Recommendation error:', error);
    }
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

