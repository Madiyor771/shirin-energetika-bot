// ==================== DARS JADVALI MA'LUMOTLARI ====================
const scheduleData = {
    "avm1-25a": {
        monday: ["Ma'naviyat soati Abdulatipova S", "Rus tili Xayitboyeva M 102", "Ona tili O'rinboyev F 404", "Matematika Shukurova G 408"],
        tuesday: ["Tarbiya Djumaboyeva D 206", "Kompyuter arxitekturasi Ofis jihozlariga tex xiz Xusanov S 213", "Web dasturlash Xidirov A 215", "Ingliz tili Xayitboyeva R Abdulatipova S 414/411"],
        wednesday: ["MATEMATIKA Shukurova G 408", "TARIX Ne'majionov I 407", "INGLIZ TILI Xamidova R/ Abdulatipova S 414/411", "MATEMATIKA Shukurova G 408"],
        thursday: ["Matematika Shukurova G 408", "Informatika Abloqulovi Shukurov 203/213", "CH.Q.B.T Yoldoshov F 102", "Ingliz tili Yamidova/Abdulatipova S 414411"],
        friday: ["Ing tili Xamidova R/Abdulatipova M 414411", "Ing tili Xamidova R/Abdulatipova M 414411", "Fizika Shobutayeva D 201", ""]
    },
    "avm1-25b": {
        monday: ["Ma'naviyat soati Xusanov S", "Ingliz tili Abdulatipova SAbdullaeva M 410411", "Kompyuter arxitekturasi va ofis jihozlariga teknik xizmat korsatish Shonazarov J106", "Jismonly Tarbiya Azimjonov S"],
        tuesday: ["Ingliz tili Abdulatipova S Abdullaeva M 410/411", "Rus tili Xayitboyeva M 401", "Fizika Shobutayeva D 201", ""],
        wednesday: ["TARIX Ne'majionov I 407", "INGLIZ TILI Abdulatipova S/Abdullayeva 410/411", "INFORMATIKA Abloquilov A/Shukurov A 213/203", ""],
        thursday: ["Kompyuter arkitekturasi Ofis jihozlariga teknik xizmat ko'rsatish O'A Xusanov S", "Matematika Shukurova G 408", "Informatika Abloqulovi Shukurov 203/213", "CH.Q.B.T Yoldoshov F 102"],
        friday: ["Ona tili Sayfulaeva B 409", "Jismoniy tarbiya Azimjonov S", "Ingliz tili Abdulatipova Sabdullaeva M 410411", ""]
    },
    "avm1-25rus": {
        monday: ["Ma'naviyat soati Xamidova R", "Ingliz tili Xamidova R Mamatqulova M 414315", "Tarix Nemajonov I 407", "Elektr stansiya uskunalarini ta mirlash Xudoyqulov X 204"],
        tuesday: ["Matematika Shukurova G 408", "Arxitektura personal kompyuter Shonazarov J 106", "Ingliz tili Xamidova R Malpatsion o'q M 414/315", ""],
        wednesday: ["O'QUV AMALIYOT SHONAZAROV J 106", "O'QUV AMALIYOT SHONAZAROV J 106", "INGLIZ TILI Xayitova B /Tolibjonova M 403/413", ""],
        thursday: ["Inglis tili Yamidova Mamatqulova 414315", "Teknikaviy Chizmachilik Xudoyqulov X 204", "Ing tili Xayitova B/Tolibjonova M 403/413", "Matematika Shukurova G 408"],
        friday: ["CH.Q.B.T Yoldoshov F 102", "Fizika Shobutayeva D 201", "Inglis tili Xamidova Mamatqulova 414315", ""]
    },
    "esu1-25": {
        monday: ["Ma'naviyat soati Xidirov A", "Elektr stansiya uskunalarini ta mirlash Xudoyqulov X 204", "Mehnat Muhofazasi O'sarov Sh", "Ma'naviyat soati Mamatqulova M"],
        tuesday: ["Rus tili Xayitboyeva M 401", "Jismoniy tarbiya Azimjonov S", "Konstruksion materiallar Xudoyqulov X 204", ""],
        wednesday: ["CH.Q.B.T Yoldoshov F 102", "Konstruksion materialar Xudoyquilov X 204", "MATEMATIKA Shukurova G 408", ""],
        thursday: ["Elektr stansiya uskunalariini tamirlash Xudoyqulov X 204", "Ing tili Xayitova B/Tolibjonova M 403/413", "Elektr texnika Isrollov Z 206", ""],
        friday: ["Ing tili Xayitova B/Tolibjonova M 403413", "Tarix Nematjonov I 407", "", ""]
    },
    "qtem1-25": {
        monday: ["Qayta tiklanuvchi energiya manbalarini yig'ish o'matish va ishga tushirish ishlari O'A 206", "Qayta tiklanuvchi energiya manbalarini yig'ish o'matish va ishga tushirish ishlari O'A 206", "CH.Q.B.T Yo'ldoshov F", ""],
        tuesday: ["Qayta tiklanuvchi energiya manbalarini yig'ish o'rnatish va ishga tushirish ishlari O'A", "Yig'ish o'rnatish va ishga tushirish ishlari O'A", "Ingliz tili Xayitova B Tolibjonova M 403/413", ""],
        wednesday: ["", "", "", ""],
        thursday: ["Qayta tiklanuvchi energiya manbalari qurilmalariini yig'ish o'rnatish va ishga tushirish O'A", "Metrologiya va Standardlashtirish va Sertifikatlashtirish Egamberdiyev S 107", "Inglis tili Yamidova Mamatqulova 414315", ""],
        friday: ["Q.T.E.M.T.X.KO'R Toshtemirov A", "Bio va Geotermal energetika Xudoyqulov X 204", "Q.T.E.A.M.E.A.E.Q Isroilov Z 106", ""]
    },
    "em1-25": {
        monday: ["Ma'naviyat soati Nematjonov I", "Ingliz tili Xayitova B Tolibjonova M 403413", "Elektr texnika Isrollov Z 206", "Rus tili Xayitboyeva M 102"],
        tuesday: ["Amaliy chizma Xudoyqulov X 204", "Tarix Nematjonov I 407", "Informatika Ablogulov Shukurov 203/213", "Fizika Shobutayeva D 201"],
        wednesday: ["ONA TILI O'rinboyev F 404", "MEHNAT MUHOFAZASI O'sarov SH 102", "", ""],
        thursday: ["Elektr texnika materialar Isrollov Z 206", "Ing tili Abdulatipova S Mamatqulova M 411315", "Tarbiya Nematjonov I 407", ""],
        friday: ["Inormatika Ablogulov A Shukurov A 213214", "Rus tili Xayitboyeva M 102", "Elektr stansiya elektr tarmoqlari Isroilov Z 206", ""]
    },
    "p1-25": {
        monday: ["Ma'naviyat soati Isroilov J", "Elektr texnika Isrollov Z 206", "Texnikaviy Chizmachili Kudoyqulov X 204", "Ingliz tili Abdulatipova S Mamatqulova M 410315"],
        tuesday: ["Rus tili Xayitboyeva M 401", "Amaliy chizma Xudoyqulov X 204", "", ""],
        wednesday: ["O'quv Amaliyot Matqosimov A 107", "", "MEHNAT MUHOFAZASI O'sarov SH 102", ""],
        thursday: ["Ona tili O'rinboyev F 404", "", "", ""],
        friday: ["Avtomatik va yarim avtomatik payvandlash texnologiyasi Egamberdiyev S", "Matematika Shukurova G 408", "Tarix Nematjonov I 407", ""]
    },
    "at1-25": {
        monday: ["Ma'naviyat soati Yangilov T", "Ona tili O'rinboyev F 404", "", "Ingliz tili Abdulatipova S Mamatqulova M 410315"],
        tuesday: ["Tarix Nematjonov I 407", "Avtomobil tuzilishi Yangilov T 102", "Informatika Ablogulov Shukurov 203/213", "Ona tili O'rinboyev F 401"],
        wednesday: ["INGLIZ TILI Abdulatipova S Mamataudova M 410/315 FIZIKA Shobotayeva D 201", "", "", ""],
        thursday: ["Fizika Shobutaeva D 204", "", "", ""],
        friday: ["Avtomobil shassisi texnik xizmat ko'rsatish O'A Qochqor G' 103", "", "", ""]
    },
    "avm2-24": {
        monday: ["Ma'naviyat soati Xayitova B", "Web dasturlash Xidirov A 215", "Ingliz tili Xayitova B Tolibjonova M 403413", "Informatika Abloqulov A Shukurov A 203213"],
        tuesday: ["Fizika Shobutayeva D 201", "CH.Q.B.T Yoldoshov F 206", "Kompyuter tizimlarining dasturiy ta'minoti Xusanov S 213", "Matematika Shukurova G 408"],
        wednesday: ["D.X.A Djumaboyeva D 206", "ONA TILI O'rinboyev F 404", "Axborot xavfsizligi Xusanov S 215", ""],
        thursday: ["Dasturlash asoslari Xidirov A 215", "Tarix Nematjonov I 407", "Biznes Asoslari Ashurov Usrolov J 409", ""],
        friday: ["Web dasturlash Xidirov A", "Shaxsiy kompyuter arxitekturasi va ofis jihozlariga texnik xizmat ko'rsatish O'A Ablogulov A 214", "Ochoobi programma Shonazarov J 106", ""]
    },
    "avm2-24rus": {
        monday: ["Ma'naviyat soati Shonazarov J", "Informatika Abloqulov A Shonazarov J 214106", "Rus tili Xayitboyeva M 202 2 korpus", "Ona tili O'rinboyev F 404"],
        tuesday: ["Ingliz tili Xayitova B Tolibjonova M 403/413", "Biznes asoslari Isroilov J Ashurov S 409", "Dasturlash asoslari Shonazarov J 106", "Rus tili Xayitboyeva M 401"],
        wednesday: ["JISMONIY TARBIYA AZIMJONOV S", "MATEMATIKA Shukurova G 408", "TARIX Ne'majionov I 407", ""],
        thursday: ["D.H.A Djumaboyeva D 106", "Информатичоная Безопасност Shonazarov J 106", "Программа Обеспечение Shonazarov J 106", "Ona tili O'rinboyev F Sayfullaeva B 404/409"],
        friday: ["Web programma Shonazarov J 106", "Web programma Shonazarov J 106", "Elektr stansiya uskunalarini ta mirlash Xudoyqulov X 204", "Matematika Shukurova G/408"]
    },
    "esu2-24": {
        monday: ["Ma'naviyat soati Shukurova G", "Tarix Nemajonov I 407", "Informatika Abloqulov A Shukurov A 214213", "Tarix Nematjonov I 407"],
        tuesday: ["Jismoniy tarbiya Azimjonov S", "Ona tili O'rinboyev F 404", "Biznes asoslari Isroilov J Ashurov S 409", ""],
        wednesday: ["O'QUV AMALYOT I Promqulov M 214", "INFORMATIKA Abloquilov A/Shukurov A 213/203", "BIZNES ASOSLARI ASHUROV ISROILOV 409", ""],
        thursday: ["Ing tili Xayitova B/Tolibjonova M 403/413", "Fizika Shobutayeva D 201", "Elektr stansiya uskunalariini ta'mirlash Xudoyqulov X 204", ""],
        friday: ["Tarbiya Djumaboyeva D 204", "Elektr stansiya gozon jihozlarini tamirlash Xudoyqulov X 204", "Ch.Q.B.T Yoldoshov F 213", ""]
    },
    "em2-24": {
        monday: ["Ma'naviyat soati Abloqulov A", "Matematika Shukurova G 408", "Biznes asoslari Ashurov S Isroilov J 409", ""],
        tuesday: ["Biznes asoslari Isroilov J Ashurov S 409", "Matematika Shukurova G 408", "Ona tili O'rinboyev F 404", ""],
        wednesday: ["INGLIZ TILI Xayitova B /Tolibjonova M 403/413", "INGLIZ TILI Xayitova B /Tolibjonova M 403/413", "ONA TILI O'rinboyev F 404", ""],
        thursday: ["Elektr stansiya va elekr tarmoqlariga teknik xizmat ko'rsatish O'A Jamolov S", "", "", ""],
        friday: ["Elektr stansiya va elektr tarmoqlari Isroilov Z 206", "Bino inshotlarning elektr taminoti Isroilov Z 206", "Rus tili Xayitboyeva M 102", ""]
    },
    "p2-24": {
        monday: ["Ma'naviyat soati O'rinboyev F", "Plastik quvurlar pay vandlash texnologiyasi Egamberdiyev S 107", "Matematika Shukurova G 408", ""],
        tuesday: ["Plastik quvurlar payvandlash texnologiyasi O'A Egamberdiyev S 107", "Fizika Shobutayeva D 201", "Avtomobil uzatmalar qutisiga texnik xizmat ko'rsatish Yangilov T 102", ""],
        wednesday: ["BIZNES ASOSLARI ASHUROV ISROILOV 409", "", "JISMNONIY TARBIYA AZIMJONOV S", ""],
        thursday: ["Informatika Abloqulovi Shukurov 203/213", "Ona tili O'rinboyev F 404", "Payvand birikmalari defektopiyasi Egamberdiyev S 107", ""],
        friday: ["Tarix Nematjonov I 407", "Plastik quvurlar payvandlash texologiyasi Egamberdiyev S 107", "Jismoniy Tarbiya Azimjonov S", ""]
    },
    "at2-24": {
        monday: ["Ma'naviyat soati Shukurov Alish", "Biznes asoslarj Isroilov J Ashurov S 409", "CH.Q.B.T Yoldshov F 102", "Ingliz tili Xayitova B Tolibjonova"],
        tuesday: ["Informatika Ablogulov Shukurov 203/213", "Matematika Shukurova G 408", "Ona tili O'rinboyev F 401", ""],
        wednesday: ["AVTOMOIBILLARNI YOQILG'I BILAN TAMINLASH O'A Xolnazarov G' 103", "", "", ""],
        thursday: ["Informatika Abloqulovi Shukurov 203/213", "Ona tili O'rinboyev F 404", "Matematika Shukurova G 408", ""],
        friday: ["Ona tili O'rinboyev F 404", "Ona tili O'rinboyev F 404", "", ""]
    }
};

// ==================== MA'LUMOTLAR ====================
const studentsData = [
    {
        name: "Aliyev Aziz", 
        group: "AVM-1-25A", 
        specialty: "Axborot vositalari va mashinalari", 
        birthDate: "2008-03-15", 
        address: "Shirin shahri, Yangiobod tumani", 
        phone: "+998 90 123 45 67", 
        email: "aziz.aliyev@example.uz", 
        achievements: ["2024-yil 'Eng yaxshi dasturchi' tanlovi g'olibi", "Matematika olimpiadasi 2-o'rin"],
        image: "/static/images/students/student1.jpg"
    },
    {
        name: "Hasanova Malika", 
        group: "EM-1-25", 
        specialty: "Elektr montyori", 
        birthDate: "2007-11-22", 
        address: "Shirin shahri, Markaziy tuman", 
        phone: "+998 91 234 56 78", 
        email: "malika.hasanova@example.uz", 
        achievements: ["Elektr texnikasi bo'yicha respublika tanlovi ishtirokchisi", "Yilning eng faol o'quvchisi"],
        image: "/static/images/students/student2.jpg"
    },
    {
        name: "Karimov Jasur", 
        group: "P-1-25", 
        specialty: "Payvandchi", 
        birthDate: "2008-07-08", 
        address: "Shirin shahri, Sanoat tumani", 
        phone: "+998 93 345 67 89", 
        email: "jasur.karimov@example.uz", 
        achievements: ["Payvandlash bo'yicha mahorat tanlovi g'olibi", "Sport musobaqalari ishtirokchisi"],
        image: "/static/images/students/student3.jpg"
    },
    {
        name: "Rahimova Dilnoza", 
        group: "AT-1-25", 
        specialty: "Avtomobil transporti", 
        birthDate: "2007-12-30", 
        address: "Shirin shahri, Yangi hayot tumani", 
        phone: "+998 94 456 78 90", 
        email: "dilnoza.rahimova@example.uz", 
        achievements: ["Avtomobil texnikasi bo'yicha ilmiy ish muallifi", "Ijtimoiy loyihalar faoli"],
        image: "/static/images/students/student4.jpg"
    }
];

const teachersData = [
    {
        name: "Rashidov Anvar", 
        position: "Direktor", 
        specialty: "Energetika", 
        experience: "25 yil", 
        education: "Toshkent Energetika Universiteti", 
        subjects: ["Energetika asoslari", "Elektr stansiyalari"],
        image: "/static/images/teachers/teacher1.jpg"
    },
    {
        name: "Ismailova Gulnora", 
        position: "O'qituvchi", 
        specialty: "Elektr texnikasi", 
        experience: "15 yil", 
        education: "Toshkent Texnika Universiteti", 
        subjects: ["Elektr texnikasi", "Elektr mashinalari"],
        image: "/static/images/teachers/teacher2.jpg"
    },
    {
        name: "Yusupov Bahodir", 
        position: "O'qituvchi", 
        specialty: "Axborot texnologiyalari", 
        experience: "20 yil", 
        education: "Toshkent Axborot Texnologiyalari Universiteti", 
        subjects: ["Web dasturlash", "Kompyuter tarmoqlari"],
        image: "/static/images/teachers/teacher3.jpg"
    },
    {
        name: "Tursunova Zulfiya", 
        position: "O'qituvchi", 
        specialty: "Payvandlash texnologiyasi", 
        experience: "18 yil", 
        education: "Toshkent Kimyo-Texnologiya Instituti", 
        subjects: ["Payvandlash texnologiyasi", "Materialshunoslik"],
        image: "/static/images/teachers/teacher4.jpg"
    }
];

const newsData = [
    {
        title: "Yangi o'quv yili boshlanishi", 
        date: "2025-09-01", 
        content: "2025-2026 o'quv yili tantanali marosim bilan boshlanadi. Barcha o'quvchilar va o'qituvchilarni 1-sentabr kuni soat 9:00 da kollej binosida kutamiz. Marosimda yangi o'quv yilining dasturi va rejalari haqida ma'lumot beriladi.",
        image: "/static/images/news/news1.jpg"
    },
    {
        title: "Energetika olimpiadasi", 
        date: "2025-10-15", 
        content: "Respublika energetika olimpiadasida bizning kollej talabalari birinchi o'rinni qo'lga kiritdi. G'oliblarni qalbimizdan tabriklaymiz! Olimpiada natijalari bo'yicha kollejimiz respublika miqyosida yetakchi o'rinni egalladi.",
        image: "/static/images/news/news2.jpg"
    },
    {
        title: "Yangi laboratoriya ochildi", 
        date: "2025-11-05", 
        content: "Kollejda zamonaviy uskunalar bilan jihozlangan yangi energetika laboratoriyasi ochildi. Bu o'quv jarayonini yanada samarali tashkil etishga yordam beradi. Laboratoriyada elektr va issiqlik energetikasi bo'yicha amaliy mashg'ulotlar o'tkaziladi.",
        image: "/static/images/news/news3.jpg"
    }
];

// ==================== AI CHAT FUNCTIONS ====================
async function sendToAIBot(message) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message
            })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        return data.reply;
        
    } catch (error) {
        console.error('API xatosi:', error);
        return "Kechirasiz, hozir javob bera olmayman. Iltimos, keyinroq urinib ko'ring.";
    }
}

// ==================== CHAT UI FUNCTIONS ====================
function addMessage(message, isUser = false) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

async function handleUserMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Loading indicator
        const loadingMsg = document.createElement('div');
        loadingMsg.className = 'chat-message bot-message loading';
        loadingMsg.innerHTML = '<p>⏳ Javob yozilmoqda...</p>';
        document.getElementById('chatBody').appendChild(loadingMsg);
        
        try {
            const reply = await sendToAIBot(message);
            loadingMsg.remove();
            addMessage(reply);
        } catch (error) {
            loadingMsg.remove();
            addMessage("Kechirasiz, texnik xatolik yuz berdi. Iltimos, keyinroq urinib ko'ring.");
        }
    }
}

// ==================== DARS JADVALI FUNCTIONS ====================
function displaySchedule(group, day = 'all') {
    const tableBody = document.querySelector('#schedule-table tbody');
    tableBody.innerHTML = '';
    
    if (!group || !scheduleData[group]) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Iltimos, guruhni tanlang</td></tr>';
        return;
    }
    
    const schedule = scheduleData[group];
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    
    for (let i = 0; i < 4; i++) {
        const tr = document.createElement('tr');
        const timeTd = document.createElement('td');
        timeTd.className = 'time-column';
        timeTd.textContent = `${i + 1}-dars`;
        tr.appendChild(timeTd);
        
        days.forEach(dayKey => {
            const dayTd = document.createElement('td');
            if (day === 'all' || day === dayKey) {
                dayTd.textContent = schedule[dayKey] && schedule[dayKey][i] ? schedule[dayKey][i] : '';
            }
            tr.appendChild(dayTd);
        });
        tableBody.appendChild(tr);
    }
}

// ==================== DISPLAY FUNCTIONS ====================
function displayStudents() {
    const container = document.getElementById('students-container');
    container.innerHTML = '';
    
    studentsData.forEach((student) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${student.image}" alt="${student.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWU1Nzk5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+8J+QlyDwn5GgIPCfkY88L3RleHQ+PC9zdmc+'">
            </div>
            <div class="card-content">
                <h3>${student.name}</h3>
                <p><strong>Guruh:</strong> ${student.group}</p>
                <p><strong>Mutaxassislik:</strong> ${student.specialty}</p>
                <p><strong>Tug'ilgan sana:</strong> ${formatDate(student.birthDate)}</p>
                <p><strong>Telefon:</strong> ${student.phone}</p>
                <p><strong>Yutuqlar:</strong> ${student.achievements.join(', ')}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function displayTeachers() {
    const container = document.getElementById('teachers-container');
    container.innerHTML = '';
    
    teachersData.forEach((teacher) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${teacher.image}" alt="${teacher.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWU1Nzk5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+8J+SlSDwn5GqIPCfkY88L3RleHQ+PC9zdmc+'">
            </div>
            <div class="card-content">
                <h3>${teacher.name}</h3>
                <p><strong>Lavozim:</strong> ${teacher.position}</p>
                <p><strong>Mutaxassislik:</strong> ${teacher.specialty}</p>
                <p><strong>Tajriba:</strong> ${teacher.experience}</p>
                <p><strong>Ma'lumoti:</strong> ${teacher.education}</p>
                <p><strong>O'qitadigan fanlar:</strong> ${teacher.subjects.join(', ')}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function displayNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    
    newsData.forEach((news) => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-img">
                <img src="${news.image}" alt="${news.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWU1Nzk5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+8J+QlyDwn5GgIPCfkY88L3RleHQ+PC9zdmc+'">
            </div>
            <div class="news-content">
                <div class="news-date">${formatDate(news.date)}</div>
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            </div>
        `;
        container.appendChild(newsItem);
    });
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('uz-UZ', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Avtomatik AVM-2-24 guruhini ko'rsatish
    displaySchedule("avm2-24", "all");
    
    // Event listeners for schedule
    document.getElementById('group-select').addEventListener('change', function() {
        displaySchedule(this.value, document.getElementById('day-select').value);
    });
    
    document.getElementById('day-select').addEventListener('change', function() {
        displaySchedule(document.getElementById('group-select').value, this.value);
    });
    
    // Ma'lumotlarni ko'rsatish
    displayStudents();
    displayTeachers();
    displayNews();
    
    // Chat handlers
    document.querySelector('.ai-chat-btn').addEventListener('click', function() {
        document.getElementById('chatModal').style.display = 'flex';
        document.getElementById('chatInput').focus();
    });
    
    document.querySelector('.close-chat').addEventListener('click', function() {
        document.getElementById('chatModal').style.display = 'none';
    });
    
    document.getElementById('sendBtn').addEventListener('click', handleUserMessage);
    document.getElementById('chatInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleUserMessage();
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    console.log('Shirin Energetika Texnikumi veb-sayti yuklandi! 🎓');
});
