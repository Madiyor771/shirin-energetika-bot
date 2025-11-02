from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import random
import os

app = Flask(__name__)
CORS(app)

# Shirin Energetika AI Bot
class ShirinEnergetikaBot:
    def __init__(self):
        self.knowledge_base = {
            "dars_jadvallari": {
                "avm2-24": {
                    "dushanba": ["Ma'naviyat soati Xayitova B", "Web dasturlash Xidirov A 215", "Ingliz tili Xayitova B Tolibjonova M 403413", "Informatika Abloqulov A Shukurov A 203213"],
                    "seshanba": ["Fizika Shobutayeva D 201", "CH.Q.B.T Yoldoshov F 206", "Kompyuter tizimlarining dasturiy ta'minoti Xusanov S 213", "Matematika Shukurova G 408"],
                    "chorshanba": ["D.X.A Djumaboyeva D 206", "ONA TILI O'rinboyev F 404", "Axborot xavfsizligi Xusanov S 215", ""],
                    "payshanba": ["Dasturlash asoslari Xidirov A 215", "Tarix Nematjonov I 407", "Biznes Asoslari Ashurov Usrolov J 409", ""],
                    "juma": ["Web dasturlash Xidirov A", "Shaxsiy kompyuter arxitekturasi va ofis jihozlariga texnik xizmat ko'rsatish O'A Ablogulov A 214", "Ochoobi programma Shonazarov J 106", ""]
                },
                "avm1-25a": {
                    "dushanba": ["Ma'naviyat soati Abdulatipova S", "Rus tili Xayitboyeva M 102", "Ona tili O'rinboyev F 404", "Matematika Shukurova G 408"],
                    "seshanba": ["Tarbiya Djumaboyeva D 206", "Kompyuter arxitekturasi Ofis jihozlariga tex xiz Xusanov S 213", "Web dasturlash Xidirov A 215", "Ingliz tili Xayitboyeva R Abdulatipova S 414/411"],
                    "chorshanba": ["MATEMATIKA Shukurova G 408", "TARIX Ne'majionov I 407", "INGLIZ TILI Xamidova R/ Abdulatipova S 414/411", "MATEMATIKA Shukurova G 408"],
                    "payshanba": ["Matematika Shukurova G 408", "Informatika Abloqulovi Shukurov 203/213", "CH.Q.B.T Yoldoshov F 102", "Ingliz tili Yamidova/Abdulatipova S 414411"],
                    "juma": ["Ing tili Xamidova R/Abdulatipova M 414411", "Ing tili Xamidova R/Abdulatipova M 414411", "Fizika Shobutayeva D 201", ""]
                },
                "avm1-25b": {
                    "dushanba": ["Ma'naviyat soati Xusanov S", "Ingliz tili Abdulatipova SAbdullaeva M 410411", "Kompyuter arxitekturasi va ofis jihozlariga teknik xizmat korsatish Shonazarov J106", "Jismonly Tarbiya Azimjonov S"],
                    "seshanba": ["Ingliz tili Abdulatipova S Abdullaeva M 410/411", "Rus tili Xayitboyeva M 401", "Fizika Shobutayeva D 201", ""]
                },
                "avm1-25rus": {
                    "dushanba": ["Ma'naviyat soati Xamidova R", "Ingliz tili Xamidova R Mamatqulova M 414315", "Tarix Nemajonov I 407", "Elektr stansiya uskunalarini ta mirlash Xudoyqulov X 204"]
                },
                "esu1-25": {
                    "dushanba": ["Ma'naviyat soati Xidirov A", "Elektr stansiya uskunalarini ta mirlash Xudoyqulov X 204", "Mehnat Muhofazasi O'sarov Sh", "Ma'naviyat soati Mamatqulova M"]
                }
            },
            "umumiy": {
                "haqida": "Shirin Energetika Texnikumi 1995-yilda tashkil etilgan bo'lib, Sirdaryo viloyatidagi eng yirik va nufuzli kasb-hunar ta'lim muassasalaridan biri. Texnikumda zamonaviy ta'lim texnologiyalari asosida malakali mutaxassislar tayyorlanadi.",
                "manzil": "Sirdaryo viloyati, Shirin shahri, Universitet ko'chasi, 12-uy",
                "telefon": "+998 67 123 45 67",
                "email": "info@shirinenergetika.uz",
                "vebsayt": "www.shirinenergetika.uz",
                "ish_vaqti": "Dushanba-Juma: 8:00-17:00, Shanba: 8:00-14:00, Yakshanba: dam olish kuni"
            },
            "mutaxassisliklar": [
                "Elektr energetikasi",
                "Issiqlik energetikasi", 
                "Energetika tarmoqlari va tizimlari",
                "Qayta tiklanuvchi energiya manbalari",
                "Axborot vositalari va mashinalariga texnik xizmat ko'rsatish operatori",
                "Elektr montyori",
                "Payvandchi", 
                "Avtomobil transporti"
            ],
            "oqituvchilar": {
                "Rashidov Anvar": "Direktor, Energetika mutaxassisi, 25 yillik tajriba",
                "Ismailova Gulnora": "Elektr texnikasi o'qituvchisi, 15 yillik tajriba",
                "Yusupov Bahodir": "Axborot texnologiyalari o'qituvchisi, 20 yillik tajriba",
                "Tursunova Zulfiya": "Payvandlash texnologiyasi o'qituvchisi, 18 yillik tajriba"
            },
            "yangiliklar": [
                "Yangi o'quv yili 1-sentyabrda boshlanadi",
                "Respublika energetika olimpiadasida birinchi o'rin",
                "Yangi laboratoriya ochildi"
            ]
        }
    
    def get_response(self, message):
        message_lower = message.lower()
        
        # Salomlashish
        if any(word in message_lower for word in ['salom', 'hello', 'hi', 'assalom']):
            return random.choice([
                "Assalomu alaykum! Shirin Energetika Texnikumi AI yordamchisiman. Sizga qanday yordam bera olaman?",
                "Salom! Men Shirin Energetika Texnikumi haqida ma'lumot berishga tayyorman.",
                "Xush kelibsiz! Texnikum haqida qanday ma'lumot kerak?"
            ])
        
        # Dars jadvali so'rovlari
        elif any(word in message_lower for word in ['dars', 'jadval', 'schedule']):
            return self.handle_timetable(message_lower)
        
        # Manzil
        elif any(word in message_lower for word in ['manzil', 'qayerda', 'address', 'joylashuv']):
            return f"📍 Manzil: {self.knowledge_base['umumiy']['manzil']}"
        
        # Telefon
        elif any(word in message_lower for word in ['telefon', 'raqam', 'phone', 'aloqa']):
            return f"📞 Telefon: {self.knowledge_base['umumiy']['telefon']}\n✉️ Email: {self.knowledge_base['umumiy']['email']}"
        
        # Mutaxassisliklar
        elif any(word in message_lower for word in ['mutaxassis', 'yo\'nalish', 'kurs', 'specialty']):
            return "🎓 Mutaxassisliklar:\n" + "\n".join([f"• {spec}" for spec in self.knowledge_base['mutaxassisliklar']])
        
        # O'qituvchilar
        elif any(word in message_lower for word in ['oqituvchi', 'ustoz', 'teacher']):
            response = "👨‍🏫 O'qituvchilar:\n"
            for teacher, info in self.knowledge_base['oqituvchilar'].items():
                response += f"• {teacher}: {info}\n"
            return response
        
        # Yangiliklar
        elif any(word in message_lower for word in ['yangilik', 'news']):
            return "📢 Yangiliklar:\n" + "\n".join([f"• {news}" for news in self.knowledge_base['yangiliklar']])
        
        # Umumiy ma'lumot
        elif any(word in message_lower for word in ['haqida', 'about', 'tarix', 'maqsad']):
            return self.knowledge_base['umumiy']['haqida']
        
        # Ish vaqti
        elif any(word in message_lower for word in ['ish vaqti', 'qachon ochiq', 'working hours']):
            return f"🕒 Ish vaqti: {self.knowledge_base['umumiy']['ish_vaqti']}"
        
        # Rahmat
        elif any(word in message_lower for word in ['rahmat', 'thanks', 'thank you']):
            return random.choice([
                "Arzimaydi! Yana savollaringiz bo'lsa murojaat qiling.",
                "Xursandman! Yana kerak bo'lsa, ayting.",
                "Barcha savollaringizga javob bera olishdan xursandman!"
            ])
        
        # Xayr
        elif any(word in message_lower for word in ['xayr', 'bye', 'goodbye']):
            return "Xayr! Yana kelishingizni kutamiz. Shirin Energetika sizni kutadi!"
        
        # Default javob
        else:
            return "Kechirasiz, men faqat Shirin Energetika Texnikumi haqida ma'lumot bera olaman. Quyidagi savollarga javob bera olaman:\n• Dars jadvali\n• Manzil va telefon\n• Mutaxassisliklar\n• O'qituvchilar\n• Yangiliklar\n• Ish vaqti"
    
    def handle_timetable(self, message):
        # Guruqni aniqlash
        group = None
        for g in self.knowledge_base['dars_jadvallari'].keys():
            if g in message.lower():
                group = g
                break
        
        # Kuni aniqlash
        day = None
        day_mapping = {
            'dushanba': 'dushanba',
            'seshanba': 'seshanba', 
            'chorshanba': 'chorshanba',
            'payshanba': 'payshanba', 
            'juma': 'juma'
        }
        
        for day_uz, day_key in day_mapping.items():
            if day_uz in message.lower():
                day = day_key
                break
        
        if group:
            if day:
                lessons = self.knowledge_base['dars_jadvallari'][group].get(day, [])
                if any(lessons):
                    response = f"📅 {group.upper()} guruhining {day.title()} kunidagi darslar:\n\n"
                    for i, lesson in enumerate(lessons):
                        if lesson.strip():
                            response += f"{i+1}. {lesson}\n"
                    return response
                else:
                    return f"ℹ️ {group.upper()} guruhining {day.title()} kuni darsi yo'q."
            else:
                # Butun hafta jadvali
                response = f"📅 {group.upper()} guruhining dars jadvali:\n\n"
                for day_name, lessons in self.knowledge_base['dars_jadvallari'][group].items():
                    if any(lesson.strip() for lesson in lessons):
                        response += f"🗓️ {day_name.title()}:\n"
                        for i, lesson in enumerate(lessons):
                            if lesson.strip():
                                response += f"   {i+1}. {lesson}\n"
                        response += "\n"
                return response
        else:
            return "❓ Qaysi guruh haqida ma'lumot kerak? Misollar:\n• 'AVM-2-24 dars jadvali'\n• 'Seshanba kuni AVM-1-25A darslari'\n• 'AVM-1-25b dushanba darslari'"

# Botni yaratish
bot = ShirinEnergetikaBot()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/health')
def health():
    return jsonify({"status": "active", "message": "Shirin Energetika AI Server ishlayapti"})

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({
                'response': 'Iltimos, xabar yuboring.',
                'status': 'error'
            })
        
        user_message = data.get('message', '')
        
        print(f"📨 Kelgan xabar: {user_message}")
        
        # Botdan javob olish
        response = bot.get_response(user_message)
        
        print(f"📤 Javob: {response}")
        
        return jsonify({
            'response': response,
            'status': 'success'
        })
        
    except Exception as e:
        print(f"❌ Xatolik: {e}")
        return jsonify({
            'response': 'Kechirasiz, xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
            'status': 'error'
        })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)