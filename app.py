from flask import Flask, render_template, request, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    print("✅ Home page requested")  # Log for debugging
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        print("✅ Chat API called")  # Log for debugging
        data = request.json
        message = data.get('message', '').lower()
        print(f"✅ Message received: {message}")
        
        # Simple responses
        responses = {
            'salom': 'Assalomu alaykum! 🤗 Shirin Energetika Texnikumi yordamchisiman.',
            'dars': '📚 Dars jadvalini "Dars jadvali" boʻlimida koʻrishingiz mumkin!',
            'aloqa': '📞 Telefon: +998 67 123 45 67\n📧 Email: info@shirinenergetika.uz',
            'yo\'nalish': '🎓 Yoʻnalishlar: Elektr energetikasi, Issiqlik energetikasi, Axborot texnologiyalari'
        }
        
        for key, response in responses.items():
            if key in message:
                return jsonify({'reply': response})
        
        return jsonify({'reply': 'Kechirasiz, savolingizni tushunmadim.'})
        
    except Exception as e:
        print(f"❌ Error in chat: {e}")
        return jsonify({'reply': 'Texnik xatolik yuz berdi.'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    print(f"✅ Starting server on port {port}")
    app.run(host='0.0.0.0', port=port, debug=False)
