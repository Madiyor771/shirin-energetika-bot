from flask import Flask, render_template, request, jsonify
import requests
import random
import os

app = Flask(__name__, static_folder='static', static_url_path='')

# GROQ API Key - Sizning keyingiz
GROQ_API_KEY = "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"

# Local AI responses for common questions
local_responses = {
    'salom': [
        "Assalomu alaykum! 🤗 Shirin Energetika Texnikumi virtual yordamchisiman. Sizga qanday yordam bera olaman?",
        "Salom! 👋 Shirin Energetika Texnikumi yordamchisiman. Qanday masalada yordam kerak?"
    ],
    'dars jadvali': [
        "📚 Dars jadvalini ko'rish uchun yuqoridagi 'Dars jadvali' bo'limiga o'ting. Guruhlarni tanlab ko'rishingiz mumkin!",
        "🎒 Dars jadvali bo'limida barcha guruhlar uchun jadvallarni ko'rishingiz mumkin. AVM-2-24 guruhi avtomatik ko'rsatiladi."
    ],
    'aloqa': [
        "📞 **Telefon:** +998 67 123 45 67\n📧 **Email:** info@shirinenergetika.uz\n📍 **Manzil:** Sirdaryo viloyati, Shirin shahri, Universitet ko'chasi, 12-uy",
        "🏫 **Aloqa ma'lumotlari:**\n• Telefon: +998 67 123 45 67\n• Email: info@shirinenergetika.uz\n• Manzil: Shirin shahri, Universitet ko'chasi, 12-uy"
    ],
    'yo\'nalish': [
        "🎓 **Yo'nalishlar:**\n• Elektr energetikasi ⚡\n• Issiqlik energetikasi 🔥\n• Axborot texnologiyalari 💻\n• Payvandlash 🔧\n• Avtomobil transporti 🚗",
        "📖 **Ta'lim yo'nalishlari:**\n- Elektr energetikasi\n- Issiqlik energetikasi\n- Axborot vositalari va mashinalari\n- Payvandchi\n- Avtomobil transporti"
    ],
    'o\'qituvchi': [
        "👨‍🏫 O'qituvchilar haqida ma'lumot olish uchun 'O'qituvchilar' bo'limiga o'ting. Bizning malakali pedagoglarimiz bilan tanishing!",
        "📝 O'qituvchilar ro'yxatini ko'rish uchun yuqoridagi navigatsiyadan 'O'qituvchilar' bo'limini tanlang."
    ],
    'o\'quvchi': [
        "👨‍🎓 O'quvchilar haqida ma'lumot olish uchun 'O'quvchilar' bo'limiga o'ting. Bizning istiqbolli talabalarimiz bilan tanishing!",
        "🎯 O'quvchilar bo'limida faol talabalarimiz haqida batafsil ma'lumot topasiz."
    ],
    'yangilik': [
        "📢 Yangiliklarni ko'rish uchun 'Yangiliklar' bo'limiga o'ting. Kollej hayotidagi eng so'nggi voqealar haqida ma'lumot oling!",
        "🎊 So'nggi yangiliklarni 'Yangiliklar' bo'limida ko'rishingiz mumkin."
    ],
    'kollej haqida': [
        "🏛️ **Shirin Energetika Texnikumi** 1995-yilda tashkil etilgan. Sirdaryo viloyatidagi eng yirik kasb-hunar ta'lim muassasalaridan biri!",
        "📊 Bizning kollej 1995-yildan beri malakali mutaxassislar tayyorlab kelmoqda. Zamonaviy ta'lim texnologiyalari asosida o'qitamiz."
    ]
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '').lower()
        
        # Check local responses first for common questions
        for key, responses in local_responses.items():
            if key in user_message:
                return jsonify({'reply': random.choice(responses)})
        
        # If not found in local, use Groq API for complex questions
        return call_groq_api(user_message)
        
    except Exception as e:
        print(f"Xatolik: {e}")
        return jsonify({'reply': 'Kechirasiz, texnik xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.'})

def call_groq_api(message):
    try:
        headers = {
            'Authorization': f'Bearer {GROQ_API_KEY}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            "model": "llama3-8b-8192",
            "messages": [
                {
                    "role": "system", 
                    "content": """Siz Shirin Energetika Texnikumi rasmiy virtual yordamchi botsiz. 
                    O'zbek tilida qisqa, aniq va foydali javob bering.
                    
                    KOLLEJ HAQIDA MA'LUMOT:
                    - Nomi: Shirin Energetika Texnikumi
                    - Manzil: Sirdaryo viloyati, Shirin shahri, Universitet ko'chasi, 12-uy
                    - Telefon: +998 67 123 45 67
                    - Email: info@shirinenergetika.uz
                    - Veb-sayt: www.shirinenergetika.uz
                    
                    YO'NALISHLAR:
                    • Elektr energetikasi
                    • Issiqlik energetikasi  
                    • Axborot texnologiyalari
                    • Payvandlash
                    • Avtomobil transporti
                    
                    ISH VAQTI:
                    • Dushanba-Juma: 8:00 - 17:00
                    • Shanba: 8:00 - 14:00
                    • Yakshanba: Dam olish
                    
                    Savolga mos, aniq va foydali javob bering. Emoji lardan foydalaning."""
                },
                {
                    "role": "user",
                    "content": message
                }
            ],
            "max_tokens": 500,
            "temperature": 0.7,
            "top_p": 0.9
        }
        
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions", 
            json=payload, 
            headers=headers, 
            timeout=15
        )
        
        if response.status_code == 200:
            response_data = response.json()
            bot_reply = response_data['choices'][0]['message']['content']
            return jsonify({'reply': bot_reply})
        else:
            print(f"Groq API error: {response.status_code}")
            return jsonify({'reply': "🤖 Hozircha javob bera olmayman. Iltimos, keyinroq urinib ko'ring yoki boshqa savol bering."})
            
    except Exception as e:
        print(f"Groq API xatosi: {e}")
        return jsonify({'reply': "⚠️ Internet bilan bog'liq muammo. Iltimos, keyinroq urinib ko'ring."})

if __name__ == '__main__':
    app.run(debug=True)
