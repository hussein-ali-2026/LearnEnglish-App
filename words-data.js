// =========================================================
// قاعدة بيانات الكلمات والمستويات والتخصصات (Words Database)
// =========================================================
const WardsData = [
    // مستوى A1 - أساسيات مهمة
    { word: "Hello", translation: "مرحبًا", example: "Hello, how are you?", exampleTranslation: "مرحبًا، كيف حالك؟", level: "المبتدئ (A1)" },
    { word: "Thank you", translation: "شكرًا لك", example: "Thank you for your help.", exampleTranslation: "شكرًا لك على مساعدتك.", level: "المبتدئ (A1)" },
    { word: "Water", translation: "ماء", example: "I need to drink water.", exampleTranslation: "أنا بحاجة لشرب الماء.", level: "المبتدئ (A1)" },
    { word: "Book", translation: "كتاب", example: "I am reading a good book.", exampleTranslation: "أنا أقرأ كتابًا جيدًا.", level: "المبتدئ (A1)" },
    { word: "Friend", translation: "صديق", example: "He is my best friend.", exampleTranslation: "هو صديقي المفضّل.", level: "المبتدئ (A1)" },
    { word: "Family", translation: "عائلة / أسرة", example: "I love my family.", exampleTranslation: "أنا أحب عائلتي.", level: "المبتدئ (A1)" },
    { word: "School", translation: "مدرسة", example: "Children go to school every day.", exampleTranslation: "الأطفال يذهبون إلى المدرسة كل يوم.", level: "المبتدئ (A1)" },
    { word: "Time", translation: "وقت / زمن", example: "What time is it now?", exampleTranslation: "كم الساعة الآن؟", level: "المبتدئ (A1)" },
    { word: "Food", translation: "طعام", example: "Delicious food makes me happy.", exampleTranslation: "الطعام اللذيذ يسعدني.", level: "المبتدئ (A1)" },

  // ==========================================
  // الدفعة 1: التحيات والتعريف بالنفس والوقت والأرقام (A1)
  // ==========================================
  { word: "Name", translation: "اسم", example: "My name is Ali.", exampleTranslation: "اسمي علي.", level: "المبتدئ (A1)" },
  { word: "Age", translation: "عُمر", example: "What is your age?", exampleTranslation: "كم عمرك؟", level: "المبتدئ (A1)" },
  { word: "Country", translation: "بلد / دولة", example: "Which country are you from?", exampleTranslation: "من أي بلد أنت؟", level: "المبتدئ (A1)" },
  { word: "City", translation: "مدينة", example: "I live in a big city.", exampleTranslation: "أنا أعيش في مدينة كبيرة.", level: "المبتدئ (A1)" },
  { word: "Student", translation: "طالب", example: "I am an IT student.", exampleTranslation: "أنا طالب تقنية معلومات.", level: "المبتدئ (A1)" },
  { word: "Teacher", translation: "معلم / مدرس", example: "The teacher explained the lesson well.", exampleTranslation: "شرح المعلم الدرس جيداً.", level: "المبتدئ (A1)" },
  { word: "Today", translation: "اليوم", example: "Today is a great day to learn.", exampleTranslation: "اليوم يوم ممتاز للتعلم.", level: "المبتدئ (A1)" },
  { word: "Yesterday", translation: "أمس", example: "I created the code yesterday.", exampleTranslation: "أنا كتبت الكود يوم أمس.", level: "المبتدئ (A1)" },
  { word: "Tomorrow", translation: "غداً", example: "We have an exam tomorrow.", exampleTranslation: "لدينا اختبار غداً.", level: "المبتدئ (A1)" },  
  { word: "Morning", translation: "الصباح", example: "Good morning, everyone!", exampleTranslation: "صباح الخير جميعاً!", level: "المبتدئ (A1)" },
  { word: "Night", translation: "الليل", example: "Good night, see you tomorrow.", exampleTranslation: "تصبح على خير، أراك غداً.", level: "المبتدئ (A1)" },
  { word: "Hour", translation: "ساعة (60 دقيقة)", example: "I study for one hour every day.", exampleTranslation: "أنا أدرس لمدة ساعة كل يوم.", level: "المبتدئ (A1)" },
  { word: "Minute", translation: "دقيقة", example: "Wait a minute, please.", exampleTranslation: "انتظر دقيقة من فضلك.", level: "المبتدئ (A1)" },
  { word: "Week", translation: "أسبوع", example: "There are seven days in a week.", exampleTranslation: "توجد سبعة أيام في الأسبوع.", level: "المبتدئ (A1)" },
  { word: "Month", translation: "شهر", example: "I will finish this level in one month.", exampleTranslation: "سأنهي هذا المستوى في شهر واحد.", level: "المبتدئ (A1)" },
  { word: "Year", translation: "سنة / عام", example: "I started studying IT this year.", exampleTranslation: "بدأت دراسة تقنية المعلومات هذا العام.", level: "المبتدئ (A1)" },
  { word: "Sunday", translation: "الأحد", example: "Our week starts on Sunday.", exampleTranslation: "أسبوعنا يبدأ يوم الأحد.", level: "المبتدئ (A1)" },
  { word: "Monday", translation: "الإثنين", example: "Monday is the second day.", exampleTranslation: "الإثنين هو اليوم الثاني.", level: "المبتدئ (A1)" },
  { word: "Number", translation: "رقم / عدد", example: "Enter your phone number.", exampleTranslation: "أدخل رقم هاتفك.", level: "المبتدئ (A1)" },
  { word: "One", translation: "واحد", example: "I have one brother.", exampleTranslation: "لدي أخ واحد.", level: "المبتدئ (A1)" },
  { word: "First", translation: "الأول", example: "This is my first mobile app.", exampleTranslation: "هذا هو تطبيقي الأول للجوال.", level: "المبتدئ (A1)" },
  { word: "Last", translation: "الأخير / الماضي", example: "This is the last question in the quiz.", exampleTranslation: "هذا هو السؤال الأخير في الاختبار.", level: "المبتدئ (A1)" },
  { word: "House", translation: "منزل", example: "I study English at house.", exampleTranslation: "أدرس الإنجليزية في المنزل.", level: "المبتدئ (A1)" },
  { word: "Work", translation: "عمل / يعمل", example: "Hard work brings good results.", exampleTranslation: "العمل الجاد يجلب نتائج جيدة.", level: "المبتدئ (A1)" },
  { word: "Place", translation: "مكان", example: "This place is very quiet.", exampleTranslation: "هذا المكان هادئ جداً.", level: "المبتدئ (A1)" },
  { word: "Question", translation: "سؤال", example: "I have a question about this word.", exampleTranslation: "لدي سؤال حول هذه الكلمة.", level: "المبتدئ (A1)" },
  { word: "Answer", translation: "إجابة / يجيب", example: "Write the correct answer below.", exampleTranslation: "اكتب الإجابة الصحيحة أدناه.", level: "المبتدئ (A1)" },
  { word: "Problem", translation: "مشكلة", example: "We solved the coding problem.", exampleTranslation: "لقد حللنا المشكلة البرمجية.", level: "المبتدئ (A1)" },
  { word: "Solution", translation: "حل", example: "Every problem has a solution.", exampleTranslation: "كل مشكلة لها حل.", level: "المبتدئ (A1)" },
  { word: "Important", translation: "مهم", example: "Vocabulary is important for learning.", exampleTranslation: "المفردات مهمة للتعلم.", level: "المبتدئ (A1)" },
  { word: "Easy", translation: "سهل", example: "This HTML code is easy to write.", exampleTranslation: "كود HTML هذا سهل الكتابة.", level: "المبتدئ (A1)" },
  { word: "Difficult", translation: "صعب", example: "English is not difficult with practice.", exampleTranslation: "الإنجليزية ليست صعبة مع الممارسة.", level: "المبتدئ (A1)" },
  { word: "Good", translation: "جيد / ممتاز", example: "You are doing a good job.", exampleTranslation: "أنت تقوم بعمل جيد.", level: "المبتدئ (A1)" },
  { word: "New", translation: "جديد", example: "I installed a new operating system.", exampleTranslation: "ثبّت نظام تشغيل جديد.", level: "المبتدئ (A1)" },
  { word: "Old", translation: "قديم", example: "My old laptop was very slow.", exampleTranslation: "كان لابتوبي القديم بطيئاً جداً.", level: "المبتدئ (A1)" },
  { word: "Big", translation: "كبير", example: "This company has a big database.", exampleTranslation: "تلك الشركة لديها قاعدة بيانات كبيرة.", level: "المبتدئ (A1)" },
  { word: "Small", translation: "صغير", example: "Keep your function small and simple.", exampleTranslation: "اجعل الدالة الخاصة بك صغيرة وبسيطة.", level: "المبتدئ (A1)" },
  { word: "Always", translation: "دائماً", example: "Always test your application.", exampleTranslation: "اختبر تطبيقك دائماً.", level: "المبتدئ (A1)" },
  { word: "Never", translation: "أبداً", example: "Never share your password with anyone.", exampleTranslation: "لا تشارك كلمة مرورك مع أي شخص أبداً.", level: "المبتدئ (A1)" },
  { word: "Sometimes", translation: "أحياناً", example: "Sometimes the server needs a restart.", exampleTranslation: "أحياناً يحتاج السيرفر لإعادة التشغيل.", level: "المبتدئ (A1)" },
  // ==========================================
  // الدفعة 2: الأفعال الأساسية وأفعال العمل (A1)
  // ==========================================
  { word: "Be", translation: "يكون", example: "Be careful when writing code.", exampleTranslation: "كن حذراً عند كتابة الكود.", level: "المبتدئ (A1)" },
  { word: "Have", translation: "يملك / لديه", example: "I have a laptop and a mouse.", exampleTranslation: "أملك لابتوب وفأرة.", level: "المبتدئ (A1)" },
  { word: "Do", translation: "يفعل / يقوم بـ", example: "Do your daily coding exercise.", exampleTranslation: "قم بتمرين البرمجة اليومي الخاص بك.", level: "المبتدئ (A1)" },
  { word: "Make", translation: "يصنع / ينشئ", example: "Let's make a new web page.", exampleTranslation: "دعنا نصنع صفحة ويب جديدة.", level: "المبتدئ (A1)" },
  { word: "Get", translation: "يحصل على", example: "I want to get a good job in IT.", exampleTranslation: "أريد الحصول على وظيفة جيدة في تقنية المعلومات.", level: "المبتدئ (A1)" },
  { word: "Go", translation: "يذهب", example: "Go to the settings menu.", exampleTranslation: "اذهب إلى قائمة الإعدادات.", level: "المبتدئ (A1)" },
  { word: "Come", translation: "يأتي", example: "Come here and check this error.", exampleTranslation: "تعال إلى هنا وتحقق من هذا الخطأ.", level: "المبتدئ (A1)" },
  { word: "Take", translation: "يأخذ", example: "Take a screenshot of the bug.", exampleTranslation: "خذ لقطة شاشة للخطأ البرمجي.", level: "المبتدئ (A1)" },
  { word: "Give", translation: "يعطي", example: "The teacher will give us a test.", exampleTranslation: "سيعطينا المعلم اختباراً.", level: "المبتدئ (A1)" },
  { word: "Know", translation: "يعرف / يعلم", example: "Do you know how to write HTML?", exampleTranslation: "هل تعرف كيف تكتب HTML؟", level: "المبتدئ (A1)" },
  { word: "Think", translation: "يفكر / يعتقد", example: "Think before you write the algorithm.", exampleTranslation: "فكر قبل أن تكتب الخوارزمية.", level: "المبتدئ (A1)" },
  { word: "See", translation: "يرى", example: "I can see the text on the screen.", exampleTranslation: "أستطيع رؤية النص على الشاشة.", level: "المبتدئ (A1)" },
  { word: "Look", translation: "ينظر", example: "Look at this line of code.", exampleTranslation: "انظر إلى سطر الكود هذا.", level: "المبتدئ (A1)" },
  { word: "Want", translation: "يريد", example: "I want to learn JavaScript.", exampleTranslation: "أريد تعلم جافاسكريبت.", level: "المبتدئ (A1)" },
  { word: "Use", translation: "يستخدم", example: "Use Chrome browser to test the app.", exampleTranslation: "استخدم متصفح كروم لاختبار التطبيق.", level: "المبتدئ (A1)" },
  { word: "Find", translation: "يجد / يكتشف", example: "Find the missing bracket in your code.", exampleTranslation: "جد القوس المفقود في كودك.", level: "المبتدئ (A1)" },
  { word: "Tell", translation: "يخبر", example: "Tell me your username.", exampleTranslation: "أخبرني باسم المستخدم الخاص بك.", level: "المبتدئ (A1)" },
  { word: "Ask", translation: "يسأل", example: "Ask a question if you don't understand.", exampleTranslation: "اطرح سؤالاً إذا لم تفهم.", level: "المبتدئ (A1)" },
  { word: "Work", translation: "يعمل", example: "My friends work on a mobile project.", exampleTranslation: "أصدقائي يعملون على مشروع جوال.", level: "المبتدئ (A1)" },
  { word: "Call", translation: "يتصل / يسمي", example: "We call this a function.", exampleTranslation: "نحن نسمي هذا دالة.", level: "المبتدئ (A1)" },
  { word: "Try", translation: "يحاول", example: "Try to run the script again.", exampleTranslation: "حاول تشغيل السكريبت مرة أخرى.", level: "المبتدئ (A1)" },
  { word: "Start", translation: "يبدأ", example: "Start coding your project today.", exampleTranslation: "ابدأ برمجة مشروعك اليوم.", level: "المبتدئ (A1)" },
  { word: "Open", translation: "يفتح", example: "Open Visual Studio Code.", exampleTranslation: "افتح برنامج فيجوال ستوديو كود.", level: "المبتدئ (A1)" },
  { word: "Close", translation: "يغلق", example: "Close the terminal window.", exampleTranslation: "أغلق نافذة الطرفية.", level: "المبتدئ (A1)" },
  { word: "Read", translation: "يقرأ", example: "Read the error message carefully.", exampleTranslation: "اقرأ رسالة الخطأ بعناية.", level: "المبتدئ (A1)" },
  { word: "Write", translation: "يكتب", example: "Write clean and neat code.", exampleTranslation: "اكتب كوداً نظيفاً ومرتباً.", level: "المبتدئ (A1)" },
  { word: "Learn", translation: "يتعلم", example: "We learn programming step by step.", exampleTranslation: "نحن نتعلم البرمجة خطوة بخطوة.", level: "المبتدئ (A1)" },
  { word: "Understand", translation: "يفهم", example: "I understand how variables work.", exampleTranslation: "أنا أفهم كيف تعمل المتغيرات.", level: "المبتدئ (A1)" },
  { word: "Remember", translation: "يتذكر", example: "Remember to save your progress.", exampleTranslation: "تذكر أن تحفض تقدمك.", level: "المبتدئ (A1)" },
  { word: "Help", translation: "يساعد", example: "This application will help students.", exampleTranslation: "هذا التطبيق سيساعد الطلاب.", level: "المبتدئ (A1)" },
  { word: "Create", translation: "ينشئ / يخلق", example: "Create an account to access the app.", exampleTranslation: "أنشئ حساباً للوصول إلى التطبيق.", level: "المبتدئ (A1)" },
  { word: "Change", translation: "يغير / يتبدل", example: "Change the text color to blue.", exampleTranslation: "غير لون النص إلى الأزرق.", level: "المبتدئ (A1)" },
  { word: "Add", translation: "يضيف", example: "Add new words to the database.", exampleTranslation: "أضف كلمات جديدة إلى قاعدة البيانات.", level: "المبتدئ (A1)" },
  { word: "Remove", translation: "يزيل / يحذف", example: "Remove the old files from the folder.", exampleTranslation: "أزل الملفات القديمة من المجلد.", level: "المبتدئ (A1)" },
  { word: "Check", translation: "يفحص / يتحقق", example: "Check your internet connection.", exampleTranslation: "تحقق من اتصال الإنترنت لديك.", level: "المبتدئ (A1)" },
  { word: "Fix", translation: "يصلح", example: "Fix the bug in the JavaScript file.", exampleTranslation: "أصلح الخلل البرمجي في ملف الجافاسكريبت.", level: "المبتدئ (A1)" },
  { word: "Test", translation: "يختبر", example: "Test your code before submission.", exampleTranslation: "اختبر الكود الخاص بك قبل التسليم.", level: "المبتدئ (A1)" },
  { word: "Send", translation: "يرسل", example: "Send data to the server.", exampleTranslation: "أرسل البيانات إلى السيرفر.", level: "المبتدئ (A1)" },
  { word: "Receive", translation: "يستقبل", example: "Receive messages from the API.", exampleTranslation: "استقبل الرسائل من واجهة برمجة التطبيقات.", level: "المبتدئ (A1)" },
  { word: "Run", translation: "يشغل / يدير", example: "Run the application locally.", exampleTranslation: "شغل التطبيق محلياً.", level: "المبتدئ (A1)" },
  // ==========================================
  // الدفعة 3: صفات الكود والأجهزة وأدوات الربط (A1 )
  // ==========================================
  { word: "Fast", translation: "سريع", example: "This code is very fast.", exampleTranslation: "هذا الكود سريع جداً.", level: "المبتدئ (A1)" },
  { word: "Slow", translation: "بطيء", example: "The server response is slow.", exampleTranslation: "استجابة السيرفر بطيئة.", level: "المبتدئ (A1)" },
  { word: "Correct", translation: "صحيح / دقيق", example: "Enter the correct password.", exampleTranslation: "أدخل كلمة المرور الصحيحة.", level: "المبتدئ (A1)" },
  { word: "Wrong", translation: "خاطئ / غير صحيح", example: "You wrote the wrong username.", exampleTranslation: "كتبت اسم المستخدم الخاطئ.", level: "المبتدئ (A1)" },
  { word: "Empty", translation: "فارغ", example: "The input field is empty.", exampleTranslation: "حقل الإدخال فارغ.", level: "المبتدئ (A1)" },
  { word: "Full", translation: "ممتلئ", example: "The database table is full.", exampleTranslation: "جدول قاعدة البيانات ممتلئ.", level: "المبتدئ (A1)" },
  { word: "Active", translation: "نشط / مفعل", example: "Your account is active now.", exampleTranslation: "حسابك نشط الآن.", level: "المبتدئ (A1)" },
  { word: "Main", translation: "رئيسي", example: "Open the main index.html file.", exampleTranslation: "افتح ملف index.html الرئيسي.", level: "المبتدئ (A1)" },
  { word: "Local", translation: "محلي", example: "Store the data in local storage.", exampleTranslation: "خزّن البيانات في التخزين المحلي.", level: "المبتدئ (A1)" },
  { word: "Public", translation: "عامل / علني", example: "This API is public for everyone.", exampleTranslation: "هذه الـ API عامة للجميع.", level: "المبتدئ (A1)" },
  { word: "Private", translation: "خاص / سري", example: "Keep your password private.", exampleTranslation: "اجعل كلمة مرورك خاصة.", level: "المبتدئ (A1)" },
  { word: "Simple", translation: "بسيط", example: "Keep your CSS design simple.", exampleTranslation: "اجعل تصميم CSS خاصتك بسيطاً.", level: "المبتدئ (A1)" },
  { word: "Complex", translation: "معقد", example: "This algorithm is too complex.", exampleTranslation: "هذه الخوارزمية معقدة للغاية.", level: "المبتدئ (A1)" },
  { word: "Default", translation: "افتراضي", example: "Use the default settings.", exampleTranslation: "استخدم الإعدادات الافتراضية.", level: "المبتدئ (A1)" },
  { word: "Valid", translation: "صالح / مقبول", example: "Please enter a valid email.", exampleTranslation: "يرجى إدخال بريد إلكتروني صالح.", level: "المبتدئ (A1)" },
  { word: "Invalid", translation: "غير صالح / غير مقبول", example: "Invalid code structure.", exampleTranslation: "بنية الكود غير صالحة.", level: "المبتدئ (A1)" },
  { word: "And", translation: "و (حرف عطف)", example: "HTML and CSS build websites.", exampleTranslation: "HTML و CSS يبنيان المواقع.", level: "المبتدئ (A1)" },
  { word: "Or", translation: "أو", example: "Use Chrome or Firefox.", exampleTranslation: "استخدم كروم أو فايرفوكس.", level: "المبتدئ (A1)" },
  { word: "But", translation: "ولكن", example: "The app is good, but it needs styling.", exampleTranslation: "التطبيق جيد، ولكن يحتاج تنسيقاً.", level: "المبتدئ (A1)" },
  { word: "If", translation: "إذا / لو", example: "If condition is true, execute code.", exampleTranslation: "إذا كان الشرط صحيحاً، نفذ الكود.", level: "المبتدئ (A1)" },
  { word: "Else", translation: "وإلا / غير ذلك", example: "Else, show an error message.", exampleTranslation: "وإلا، اعرض رسالة خطأ.", level: "المبتدئ (A1)" },
  { word: "Because", translation: "لأن", example: "I learn coding because I love IT.", exampleTranslation: "أتعلم البرمجة لأني أحب تقنية المعلومات.", level: "المبتدئ (A1)" },
  { word: "Before", translation: "قبل", example: "Save files before closing.", exampleTranslation: "احفظ الملفات قبل الإغلاق.", level: "المبتدئ (A1)" },
  { word: "After", translation: "بعد", example: "Check output after running code.", exampleTranslation: "تحقق من المخرجات بعد تشغيل الكود.", level: "المبتدئ (A1)" },
  { word: "While", translation: "بينما / خلال", example: "Wait while the file downloads.", exampleTranslation: "انتظر بينما يتم تنزيل الملف.", level: "المبتدئ (A1)" },
  { word: "With", translation: "مع / باستخدام", example: "Build mobile apps with JavaScript.", exampleTranslation: "ابنِ تطبيقات الجوال باستخدام الجافاسكريبت.", level: "المبتدئ (A1)" },
  { word: "Without", translation: "بدون", example: "The app works without internet.", exampleTranslation: "التطبيق يعمل بدون إنترنت.", level: "المبتدئ (A1)" },
  { word: "Inside", translation: "في الداخل / داخل", example: "Put the script inside the HTML file.", exampleTranslation: "ضع السكريبت داخل ملف HTML.", level: "المبتدئ (A1)" },
  { word: "Outside", translation: "في الخارج / خارج", example: "Declare variables outside the loop.", exampleTranslation: "عرّف المتغيرات خارج الحلقة التكرارية.", level: "المبتدئ (A1)" },
  { word: "Above", translation: "أعلى / فوق", example: "Look at the line above.", exampleTranslation: "انظر إلى السطر بالأعلى.", level: "المبتدئ (A1)" },
  { word: "Below", translation: "أسفل / تحت", example: "Click the link below.", exampleTranslation: "انقر على الرابط في الأسفل.", level: "المبتدئ (A1)" },
  { word: "Key", translation: "مفتاح / زِر", example: "Press the enter key.", exampleTranslation: "اضغط على زر الإدخال.", level: "المبتدئ (A1)" },
  { word: "Value", translation: "قيمة", example: "Set the variable value to zero.", exampleTranslation: "اجعل قيمة المتغير صفراً.", level: "المبتدئ (A1)" },
  { word: "Text", translation: "نص", example: "Change the text alignment.", exampleTranslation: "غير محاذاة النص.", level: "المبتدئ (A1)" },
  { word: "Image", translation: "صورة", example: "Load the image from assets.", exampleTranslation: "حمّل الصورة من الأصول (Assets).", level: "المبتدئ (A1)" },
  { word: "Button", translation: "زِر", example: "Click the submit button.", exampleTranslation: "انقر على زر الإرسال.", level: "المبتدئ (A1)" },
  { word: "Form", translation: "نموذج إدخال", example: "Fill in the user form.", exampleTranslation: "املأ نموذج المستخدم.", level: "المبتدئ (A1)" },
  { word: "Link", translation: "رابط", example: "Follow the link to read more.", exampleTranslation: "اتبع الرابط لقراءة المزيد.", level: "المبتدئ (A1)" },
  { word: "Page", translation: "صفحة", example: "Refresh the current web page.", exampleTranslation: "قم بتحديث صفحة الويب الحالية.", level: "المبتدئ (A1)" },
  { word: "Window", translation: "نافذة", example: "Close the browser window.", exampleTranslation: "أغلق نافذة المتصفح.", level: "المبتدئ (A1)" },
  // المستوى الثاني (A2 - البرمجة وقواعد البيانات)
  { word: "Variable", translation: "متغير", example: "A variable stores values in memory.", exampleTranslation: "المتغير يخزن القيم في الذاكرة.", level: "المبتدئ المتقدم (A2)" }, 
  { word: "Function", translation: "دالة / وظيفة", example: "This function calculates the total price.", exampleTranslation: "تحسب هذه الدالة السعر الإجمالي.", level: "المبتدئ المتقدم (A2)" },
  { word: "Database", translation: "قاعدة بيانات", example: "We query the database for user details.", exampleTranslation: "نستعلم من قاعدة البيانات عن تفاصيل المستخدم.", level: "المبتدئ المتقدم (A2)" },
  { word: "Server", translation: "خادم / سيرفر", example: "The web server response was very fast.", exampleTranslation: "كان استجابة سيرفر الويب سريعة جداً.", level: "المبتدئ المتقدم (A2)" },
  { word: "Loop", translation: "حلقة تكرارية", example: "Use a loop to repeat the code three times.", exampleTranslation: "استخدم حلقة تكرارية لتكرار الكود ثلاث مرات.", level: "المبتدئ المتقدم (A2)" },

    
  // ==========================================
  // المستوى الثاني: المبتدئ المتقدم (A2) - تكنولوجيا المعلومات والبرمجة
  // ==========================================
  { word: "Debug", translation: "تنقيح / تصحيح الأخطاء البرمجية", example: "I need to debug my JavaScript code.", exampleTranslation: "أحتاج إلى تصحيح أخطاء كود الجافاسكريبت الخاص بي.", level: "المبتدئ المتقدم (A2)" },
  { word: "Deploy", translation: "نشر التطبيق", example: "We will deploy the web app to the server.", exampleTranslation: "سنقوم بنشر تطبيق الويب على السيرفر.", level: "المبتدئ المتقدم (A2)" },
  { word: "Interface", translation: "واجهة المستخدم", example: "The app has a clean and simple interface.", exampleTranslation: "التطبيق يمتلك واجهة نظيفة وبسيطة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Platform", translation: "منصة", example: "Android is a popular mobile platform.", exampleTranslation: "أندرويد منصة جوال شهيرة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Browser", translation: "متصفح الويب", example: "Test your website in Google Chrome browser.", exampleTranslation: "اختبر موقعك الإلكتروني في متصفح جوجل كروم.", level: "المبتدئ المتقدم (A2)" },
  { word: "Version", translation: "إصدار / نسخة", example: "Update your software to the latest version.", exampleTranslation: "حدّث برمجياتك إلى أحدث إصدار.", level: "المبتدئ المتقدم (A2)" },
  { word: "Secure", translation: "آمن", example: "Always use secure protocols for your data.", exampleTranslation: "استخدم دائماً بروتوكولات آمنة لبياناتك.", level: "المبتدئ المتقدم (A2)" },
  { word: "Permission", translation: "إذن / صلاحية", example: "The app requires storage permission.", exampleTranslation: "يتطلب التطبيق إذن التخزين.", level: "المبتدئ المتقدم (A2)" },
  { word: "Configuration", translation: "إعدادات / تهيئة", example: "Check the configuration file for errors.", exampleTranslation: "تحقق من ملف الإعدادات بحثاً عن أخطاء.", level: "المبتدئ المتقدم (A2)" },
  { word: "Command", translation: "أمر (برمجي)", example: "Type the command in the terminal.", exampleTranslation: "اكتب الأمر في نافذة الطرفية.", level: "المبتدئ المتقدم (A2)" },
  { word: "Terminal", translation: "الطرفية / موجه الأوامر", example: "Open the terminal to run scripts.", exampleTranslation: "افتح الطرفية لتشغيل السكريبتات.", level: "المبتدئ المتقدم (A2)" },
  { word: "Source", translation: "مصدر / شيفرة مصدرية", example: "Check the source code for bugs.", exampleTranslation: "تحقق من الشيفرة المصدرية بحثاً عن أخطاء.", level: "المبتدئ المتقدم (A2)" },
  { word: "Compile", translation: "ترجمة الكود (للغة الآلة)", example: "The compiler will compile the program.", exampleTranslation: "سيقوم المترجم بترجمة البرنامج.", level: "المبتدئ المتقدم (A2)" },
  { word: "Syntax", translation: "قواعد بناء الكود / النحو", example: "Fix the syntax error on line five.", exampleTranslation: "أصلح خطأ قواعد الكتابة في السطر الخامس.", level: "المبتدئ المتقدم (A2)" },
  { word: "Project", translation: "مشروع", example: "We are working on a graduation project.", exampleTranslation: "نحن نعمل على مشروع تخرج.", level: "المبتدئ المتقدم (A2)" },
  { word: "Library", translation: "مكتبة برمجية", example: "Import the jQuery library into your project.", exampleTranslation: "استورد مكتبة جكويري إلى مشروعك.", level: "المبتدئ المتقدم (A2)" },
  { word: "Process", translation: "عملية (معالجة)", example: "The background process is running.", exampleTranslation: "العملية في الخلفية قيد التشغيل.", level: "المبتدئ المتقدم (A2)" },
  { word: "Performance", translation: "أداء", example: "Optimize your code to improve performance.", exampleTranslation: "حسن الكود الخاص بك لتحسين الأداء.", level: "المبتدئ المتقدم (A2)" },
  { word: "Memory", translation: "ذاكرة الحاسوب", example: "The variable is saved in memory.", exampleTranslation: "المتغير محفوظ في الذاكرة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Hardware", translation: "عتاد / مكونات مادية", example: "Hardware components include CPU and RAM.", exampleTranslation: "تشمل المكونات المادية المعالج والذاكرة العشوائية.", level: "المبتدئ المتقدم (A2)" },
  { word: "Software", translation: "برمجيات", example: "Install the software on your laptop.", exampleTranslation: "ثبّت البرمجيات على حاسوبك المحمول.", level: "المبتدئ المتقدم (A2)" },
  { word: "Network", translation: "شبكة", example: "Connect to the local network.", exampleTranslation: "اتصل بالشبكة المحلية.", level: "المبتدئ المتقدم (A2)" },
  { word: "Router", translation: "راوتر / موجه شبكة", example: "Restart the router to fix internet connection.", exampleTranslation: "أعد تشغيل الراوتر لإصلاح اتصال الإنترنت.", level: "المبتدئ المتقدم (A2)" },
  { word: "Connection", translation: "اتصال", example: "Check your internet connection speed.", exampleTranslation: "تحقق من سرعة اتصال الإنترنت لديك.", level: "المبتدئ المتقدم (A2)" },
  { word: "Download", translation: "تنزيل", example: "Download the file from the cloud.", exampleTranslation: "نزل الملف من السحابة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Upload", translation: "رفع (بيانات)", example: "Upload your project files to GitHub.", exampleTranslation: "ارفع ملفات مشروعك إلى جيتهاب.", level: "المبتدئ المتقدم (A2)" },
  { word: "Cloud", translation: "السحابة الإلكترونية", example: "Cloud storage keeps data safe online.", exampleTranslation: "التخزين السحابي يحافظ على أمان البيانات عبر الإنترنت.", level: "المبتدئ المتقدم (A2)" },
  { word: "Backup", translation: "نسخة احتياطية", example: "Always create a backup of your database.", exampleTranslation: "أنشئ دائماً نسخة احتياطية لقاعدة بياناتك.", level: "المبتدئ المتقدم (A2)" },
  { word: "Restore", translation: "استعادة", example: "Restore files from the backup.", exampleTranslation: "استعد الملفات من النسخة الاحتياطية.", level: "المبتدئ المتقدم (A2)" },
  { word: "Configure", translation: "يهيئ / يضبط الإعدادات", example: "Configure the server settings before launch.", exampleTranslation: "اضبط إعدادات السيرفر قبل الإطلاق.", level: "المبتدئ المتقدم (A2)" },
  // ==========================================
  // المستوى الثاني (خاتمة A2): مفاهيم وهياكل البرمجة وتطوير الويب
  // ==========================================
  { word: "Object", translation: "كائن (برمجة كائنية)", example: "An object contains properties and methods.", exampleTranslation: "الكائن يحتوي على خصائص ودوال.", level: "المبتدئ المتقدم (A2)" },
  { word: "Class", translation: "صنف / قالب (Class)", example: "Define a class for user accounts.", exampleTranslation: "عرّف صنفا لحسابات المستخدمين.", level: "المبتدئ المتقدم (A2)" },
  { word: "Method", translation: "دالة داخلية (طريقة)", example: "Call the start method on the object.", exampleTranslation: "استدعِ دالة البدء على الكائن.", level: "المبتدئ المتقدم (A2)" },
  { word: "Property", translation: "خاصية", example: "Check the property value of the object.", exampleTranslation: "تحقق من قيمة الخاصية الخاصة بالكائن.", level: "المبتدئ المتقدم (A2)" },
  { word: "Index", translation: "مؤشر (في المصفوفات)", example: "The array index starts at zero.", exampleTranslation: "مؤشر المصفوفة يبدأ من الصفر.", level: "المبتدئ المتقدم (A2)" },
  { word: "Return", translation: "إرجاع قيمة", example: "The function must return a boolean value.", exampleTranslation: "يجب على الدالة إرجاع قيمة منطقية.", level: "المبتدئ المتقدم (A2)" },
  { word: "Switch", translation: "هيكل التبديل الشرطى", example: "Use a switch statement for multiple choices.", exampleTranslation: "استخدم جملة التبديل للخيارات المتعددة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Case", translation: "حالة (في شرط Switch)", example: "Handle each case separately.", exampleTranslation: "تعامل مع كل حالة على حدة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Break", translation: "إيقاف / كسر الحلقة", example: "Use break to exit the loop early.", exampleTranslation: "استخدم أمر الإيقاف للخروج من الحلقة مبكراً.", level: "المبتدئ المتقدم (A2)" },
  { word: "Import", translation: "استيراد (ملفات أو مكتبات)", example: "Import the stylesheet into your HTML.", exampleTranslation: "استورد ملف التنسيق إلى ملف HTML الخاص بك.", level: "المبتدئ المتقدم (A2)" },
  { word: "Export", translation: "تصدير (وحدات برمجية)", example: "Export the function to use it elsewhere.", exampleTranslation: "صدّر الدالة لاستخدامها في مكان آخر.", level: "المبتدئ المتقدم (A2)" },
  { word: "Module", translation: "وحدة برمجية", example: "Break your code into smaller modules.", exampleTranslation: "قسّم كودك إلى وحدات أصغر.", level: "المبتدئ المتقدم (A2)" },
  { word: "Package", translation: "حزمة برمجيات", example: "Install the required npm package.", exampleTranslation: "ثبّت حزمة npm المطلوبة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Session", translation: "جلسة (مستخدم)", example: "User session expires after one hour.", exampleTranslation: "تنتهي جلسة المستخدم بعد ساعة واحدة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Cookie", translation: "ملف تعريف الارتباط (Cookie)", example: "The browser saves user preferences in cookies.", exampleTranslation: "يحفظ المتصفح تفضيلات المستخدم في ملفات تعريف الارتباط.", level: "المبتدئ المتقدم (A2)" },
  { word: "Endpoint", translation: "نقطة نهاية (API)", example: "Send a POST request to the API endpoint.", exampleTranslation: "أرسل طلب POST إلى نقطة نهاية الـ API.", level: "المبتدئ المتقدم (A2)" },
  { word: "Token", translation: "رمز المصادقة (Token)", example: "Include the security token in the request header.", exampleTranslation: "أضمن رمز الأمان في ترويسة الطلب.", level: "المبتدئ المتقدم (A2)" },
  { word: "Bug", translation: "خلل / خطأ برمجي", example: "We found a critical bug in the login form.", exampleTranslation: "وجدنا خللاً حرجاً في نموذج تسجيل الدخول.", level: "المبتدئ المتقدم (A2)" },
  { word: "Feature", translation: "ميزة إضافية", example: "Dark mode is a new feature in the app.", exampleTranslation: "الوضع الليلي ميزة جديدة في التطبيق.", level: "المبتدئ المتقدم (A2)" },
  { word: "Commit", translation: "تثبيت التعديلات (Git)", example: "Commit your code changes with a clear message.", exampleTranslation: "ثبّت تعديلات الكود الخاصة بك برسال واضحة.", level: "المبتدئ المتقدم (A2)" },
  { word: "Push", translation: "رفع التعديلات للمستودع", example: "Push your local commits to GitHub.", exampleTranslation: "ارفع تعديلاتك المحلية إلى جيتهاب.", level: "المبتدئ المتقدم (A2)" },
  { word: "Pull", translation: "سحب التحديثات", example: "Pull the latest updates from the main branch.", exampleTranslation: "اسحب أحدث التحديثات من الفرع الرئيسي.", level: "المبتدئ المتقدم (A2)" },  


 // مفاهيم قواعد البيانات (IT-Database)
   






  // برمجة الكائنات الموجهة (IT-OOP)
  // ==========================================
  // المحاضرة الأولى بالكامل: مقدمة لغة جافا (IT-OOP)
  // ==========================================
  { word: "Programming Language", translation: "لغة برمجة", example: "Java is a programming language and platform", exampleTranslation: "جافا هي لغة برمجة ومنصة", level: "IT-OOP" },
  { word: "Platform", translation: "منصة (بيئة تشغيل)", example: "Platform is the environment for developing and managing java application", exampleTranslation: "المنصة هي البيئة لتطوير وإدارة تطبيق جافا", level: "IT-OOP" },
  { word: "High level", translation: "مستوى عالي", example: "Java is a high level OOP language", exampleTranslation: "جافا هي لغة برمجة كائنية عالية المستوى", level: "IT-OOP" },
  { word: "Developer", translation: "مطور / مطورون", example: "James Gosling and his team developed Java", exampleTranslation: "قام جيم جوسلين وفريقه بتطوير جافا", level: "IT-OOP" },
  { word: "Independent", translation: "مستقل", example: "His goal was to build a platform independent language", exampleTranslation: "كان هدفه بناء لغة مستقلة عن المنصة", level: "IT-OOP" },
  { word: "Environment", translation: "بيئة تشغيل", example: "Any hardware or software environment in which program runs", exampleTranslation: "أي بيئة عتاد أو برمجيات يعمل فيها البرنامج", level: "IT-OOP" },
  { word: "Hardware", translation: "عتاد / مكونات مادية", example: "Hardware and software environments are types of platforms", exampleTranslation: "بيئات العتاد والبرمجيات هي أنواع من المنصات", level: "IT-OOP" },
  { word: "Software", translation: "برمجيات", example: "Software runs on the computer platform", exampleTranslation: "تعمل البرمجيات على منصة الحاسوب", level: "IT-OOP" },
  { word: "Syntax", translation: "قواعد البناء والنحو", example: "The syntax and structure are similar to C++", exampleTranslation: "قواعد البناء والهيكل مشابهة للغة C++", level: "IT-OOP" },
  { word: "Structure", translation: "هيكل / بنية", example: "Java structure is similar to C base language", exampleTranslation: "هيكل جافا مشابه للغات أساسها C", level: "IT-OOP" },
  { word: "Framework", translation: "إطار عمل", example: "Java has popular frameworks for development", exampleTranslation: "تحتوي جافا على أطر عمل شهيرة للتطوير", level: "IT-OOP" },
  { word: "Interpreted", translation: "مفسر", example: "Java characteristics include being interpreted", exampleTranslation: "تشمل خصائص جافا كونها مفسرة", level: "IT-OOP" },
  { word: "Dynamic", translation: "ديناميكي", example: "Java is a dynamic programming language", exampleTranslation: "جافا لغة برمجة ديناميكية", level: "IT-OOP" },
  { word: "Performance", translation: "الأداء", example: "Java provides high performance", exampleTranslation: "توفر جافا أداءً عالياً", level: "IT-OOP" },
  { word: "Simple", translation: "بسيط", example: "The language is designed to be simple", exampleTranslation: "تم تصميم اللغة لتكون بسيطة", level: "IT-OOP" },
  { word: "Distributed", translation: "موزع", example: "Java supports distributed systems", exampleTranslation: "تدعم جافا الأنظمة الموزعة", level: "IT-OOP" },
  { word: "JDK (Java Development Kit)", translation: "عدة تطوير جافا", example: "JDK is used to program or develop programs in Java", exampleTranslation: "تستخدم عدة تطوير جافا لبرمجة وتطوير البرامج", level: "IT-OOP" },
  { word: "JRE (Java Runtime Environment)", translation: "بيئة تشغيل جافا", example: "JRE is used to run the program only", exampleTranslation: "بيئة تشغيل جافا تستخدم لتشغيل البرنامج فقط", level: "IT-OOP" },
  { word: "JVM (Java Virtual Machine)", translation: "آلة جافا الافتراضية", example: "JVM executes the program", exampleTranslation: "آلة جافا الافتراضية تنفذ البرنامج", level: "IT-OOP" },
  { word: "Running", translation: "تشغيل (إعداد)", example: "Running prepares the program", exampleTranslation: "التشغيل يجهز البرنامج", level: "IT-OOP" },
  { word: "Executing", translation: "تنفيذ", example: "Executing performs the code", exampleTranslation: "التنفيذ ينفذ الكود الفعلي", level: "IT-OOP" },
  { word: "Extension", translation: "امتداد الملف", example: "Java files are written with extension .java", exampleTranslation: "ملفات جافا تكتب بالامتداد java", level: "IT-OOP" },
  { word: "Compilation", translation: "الترجمة البرمجية", example: "The compiler converts the file into bytecode", exampleTranslation: "يقوم المترجم بتحويل الملف إلى بايت كود", level: "IT-OOP" },
  { word: "Compiler", translation: "المترجم البرمجي", example: "The compiler converts code into bytecode", exampleTranslation: "يحول المترجم الكود إلى بايت كود.", level: "IT-OOP" },
  { word: "Bytecode", translation: "بايت كود (الرمز الوسيط)", example: "JVM loads and verifies the bytecode", exampleTranslation: "تحمل آلة جافا الافتراضية البايت كود وتتحقق منه", level: "IT-OOP" },
  { word: "Library", translation: "مكتبة برمجية", example: "JRE starts the program by loading required libraries", exampleTranslation: "تبدأ بيئة التشغيل البرنامج بتحميل المكتبات المطلوبة", level: "IT-OOP" },
  { word: "Verify", translation: "يتحقق من", example: "JVM verifies the bytecode.", exampleTranslation: "تتحقق آلة جافا الافتراضية من البايت كود[span_60](start_span)[span_60](end_span).", level: "IT-OOP" },
  { word: "Machine Code", translation: "لغة الآلة", example: "JVM converts bytecode to machine code", exampleTranslation: "تحول آلة جافا البايت كود إلى لغة الآلة", level: "IT-OOP" },
  { word: "Smart Card", translation: "بطاقة ذكية", example: "Smart card is an application of Java", exampleTranslation: "البطاقة الذكية هي أحد تطبيقات جافا", level: "IT-OOP" },
  { word: "Robotics", translation: "الروبوتات", example: "Java is used in robotics applications", exampleTranslation: "تستخدم جافا في تطبيقات الروبوتات", level: "IT-OOP" },
  { word: "Enterprise Application", translation: "تطبيقات المؤسسات", example: "Java powers large enterprise applications", exampleTranslation: "تشغل جافا تطبيقات المؤسسات الضخمة", level: "IT-OOP" },
  { word: "Embedded System", translation: "النظام المدمج", example: "Java runs on embedded systems", exampleTranslation: "تعمل جافا على الأنظمة المدمجة", level: "IT-OOP" },
  { word: "Package", translation: "حزمة برمجية", example: "package first; is used to define the package", exampleTranslation: "تستخدم لتحديد الحزمة البرمجية", level: "IT-OOP" },
  { word: "Import", translation: "استيراد", example: "Import packages or libraries into your code", exampleTranslation: "استيراد الحزم أو المكتبات إلى كودك", level: "IT-OOP" },
  { word: "Class", translation: "صنف / كلاس", example: "public class First defines a class", exampleTranslation: "تعرف الصنف البرمجي", level: "IT-OOP" },
  { word: "Main Method", translation: "الدالة الرئيسية", example: "public static void main is the main method", exampleTranslation: "الدالة الرئيسية لبدء تشغيل البرنامج", level: "IT-OOP" },
  { word: "Statement", translation: "تعبير / جملة برمجية", example: "System.out.println is a print statement", exampleTranslation: "جملة طباعة النصوص على الشاشة", level: "IT-OOP" },
  { word: "Source", translation: "الشيفرة المصدرية", example: "View the source code in NetBeanz", exampleTranslation: "عرض الشيفرة المصدرية في بيئة نت بينز", level: "IT-OOP" },
  { word: "History", translation: "السجل / التاريخ", example: "Check history tab in the IDE", exampleTranslation: "تحقق من تبويب السجل في بيئة التطوير", level: "IT-OOP" },
  { word: "String", translation: "سلسلة نصية", example: "String[] args handles command line arguments", exampleTranslation: "تتعامل مع وسائط سطر الأوامر", level: "IT-OOP" },
  { word: "Arguments", translation: "وسائط / معاملات", example: "Parameters and arguments passed to methods", exampleTranslation: "الوسائط والمعاملات الم تمررة للدوال", level: "IT-OOP" },
  { word: "Project", translation: "مشروع", example: "Create a new Java application project", exampleTranslation: "إنشاء مشروع تطبيق جافا جديد", level: "IT-OOP" },
  { word: "Category", translation: "فئة / تصنيف", example: "Choose categories in NetBeans project setup", exampleTranslation: "اختر الفئات في إعداد مشروع نت بينز", level: "IT-OOP" },
  { word: "Location", translation: "موقع التخزين", example: "Specify project location on your computer.", exampleTranslation: "حدد موقع المشروع على حاسوب", level: "IT-OOP" },
  { word: "Author", translation: "مؤلف / منشئ الكود", example: "The author tag specifies who wrote the code", exampleTranslation: "وسم المؤلف يحدد من كتب الكود", level: "IT-OOP" },
  { word: "Output", translation: "المخرجات", example: "View results in the output window", exampleTranslation: "عرض النتائج في نافذة المخرجات", level: "IT-OOP" },
  // ==========================================
  // المحاضرة الثانية: أنواع البيانات والمعاملات والمدخلات (IT-OOP)
  // ==========================================
  { word: "Data Type", translation: "نوع البيانات", example: "Data type tells the computer what kind of data he will stor", exampleTranslation: "نوع البيانات يخبر الحاسوب ما نوع البيانات التي سيخزنها", level: "IT-OOP" },
  { word: "Primitive Data Types", translation: "أنواع البيانات البدائية", example: "Primitive data types include numbers and characters", exampleTranslation: "أنواع البيانات البدائية تشمل الأرقام والرموز", level: "IT-OOP" },
  { word: "Non-Primitive Data Types", translation: "أنواع البيانات غير البدائية", example: "Non-primitive data types include classes, arrays, and lists", exampleTranslation: "أنواع البيانات غير البدائية تشمل الأصناف والمصفوفات والقوائم", level: "IT-OOP" },
  { word: "Byte", translation: "بايت (نوع بيانات)", example: "Byte data type takes 1 byte of memory", exampleTranslation: "نوع بيانات البايت يأخذ بايت واحد من الذاكرة", level: "IT-OOP" },
  { word: "Short", translation: "قصير (نوع بيانات)", example: "Short data type takes 2 bytes", exampleTranslation: "نوع بيانات القصير يأخذ بايتين", level: "IT-OOP" },
  { word: "Int", translation: "صحيح (نوع بيانات)", example: "Int data type takes 4 bytes", exampleTranslation: "نوع بيانات الصحيح يأخذ 4 بايتات", level: "IT-OOP" },
  { word: "Long", translation: "طويل (نوع بيانات)", example: "Long data type takes 8 bytes for large numbers", exampleTranslation: "نوع بيانات الطويل يأخذ 8 بايتات للأرقام الكبيرة", level: "IT-OOP" },
  { word: "Float", translation: "عشري أحادي", example: "Float data type takes 4 bytes with decimals", exampleTranslation: "نوع بيانات العشري يأخذ 4 بايتات مع الكسور العشرية", level: "IT-OOP" },
  { word: "Double", translation: "عشري مضاعف", example: "Double data type takes 8 bytes for high precision decimals", exampleTranslation: "نوع بيانات العشري المضاعف يأخذ 8 بايتات لكسور عالية الدقة", level: "IT-OOP" },
  { word: "Char", translation: "حرف واحد", example: "Char takes 2 bytes for a single Unicode character", exampleTranslation: "نوع الحرف يأخذ بايتين لحرف يونيكود واحد", level: "IT-OOP" },
  { word: "Boolean", translation: "منطقي (صح أو خطأ)", example: "Boolean takes 1 byte and stores true or false", exampleTranslation: "المنطقي يأخذ بايت واحد ويخزن صح أو خطأ", level: "IT-OOP" },
  { word: "Operators", translation: "العوامل البرمجية", example: "Operators are special symbols that perform operations on values", exampleTranslation: "العوامل هي رموز خاصة تقم بعمليات على القيم", level: "IT-OOP" },
  { word: "Arithmetic Operators", translation: "العوامل الحسابية", example: "Arithmetic operators include multiplication and division", exampleTranslation: "العوامل الحسابية تشمل الضرب والقسمة", level: "IT-OOP" },
  { word: "Relational Operators", translation: "عوامل العلاقة / المقارنة", example: "Relational operators compare values like greater than or equal", exampleTranslation: "عوامل المقارنة تقارن القيم مثل أكبر من أو يساوي", level: "IT-OOP" },
  { word: "Logical Operators", translation: "العوامل المنطقية", example: "Logical operators include AND and OR symbols", exampleTranslation: "العوامل المنطقية تشمل رموز و أو", level: "IT-OOP" },
  { word: "Assignment Operators", translation: "عوامل الإسناد", example: "Assignment operators update variable values like plus-equal", exampleTranslation: "عوامل الإسناد تحدث قيم المتغيرات مثل الزيادة والإسناد", level: "IT-OOP" },
  { word: "Unary Operators", translation: "العوامل الأحادية", example: "Unary operators include increment operator like plus-plus", exampleTranslation: "العوامل الأحادية تشمل معامل الزيادة مثل زائد زائد", level: "IT-OOP" },
  { word: "Expression", translation: "تعبير برمجى", example: "Expression is a combination of variables, values and operators", exampleTranslation: "التعبير هو مزيج من المتغيرات والقيم والعوامل", level: "IT-OOP" },
  { word: "Output", translation: "المخرجات", example: "Output means displaying data from the program to user", exampleTranslation: "المخرجات تعني عرض البيانات من البرنامج للمستخدم", level: "IT-OOP" },
  { word: "Input", translation: "المدخلات", example: "Input means taking data from the user into the program", exampleTranslation: "المدخلات تعني أخذ البيانات من المستخدم إلى داخل البرنامج", level: "IT-OOP" },
  { word: "Scanner", translation: "ماسح المدخلات", example: "Java use Scanner library to take data from user", exampleTranslation: "تستخدم جافا مكتبة الاسكانر لأخذ البيانات من المستخدم", level: "IT-OOP" },
  { word: "Import", translation: "استيراد حزمة", example: "Import java.util.Scanner at the beginning of code", exampleTranslation: "استيراد مكتبة السكانر في بداية الكود", level: "IT-OOP" },
  // ==========================================
  // المحاضرة الثالثة: الجمل الشرطية والحلقات التكرارية (IT-OOP)
  // ==========================================
  { word: "Decision Making", translation: "اتخاذ القرار", example: "Conditional statements are used for decision-making", exampleTranslation: "الجمل الشرطية تستخدم لاتخاذ القرار", level: "IT-OOP" },
  { word: "Repeating Actions", translation: "تكرار الإجراءات", example: "Loops are used for repeating actions in programs", exampleTranslation: "الحلقات التكرارية تستخدم لتكرار الإجراءات في البرامج", level: "IT-OOP" },
  { word: "Conditional Statement", translation: "جملة شرطية", example: "Conditional statements allow a program to execute code if conditions are true", exampleTranslation: "الجمل الشرطية تسمح للبرنامج بتنفيذ الكود إذا كانت الشروط صحيحة", level: "IT-OOP" },
  { word: "If Statement", translation: "جملة الشرط (If)", example: "if (age >= 18) System.out.println(\"You are an adult.\");", exampleTranslation: "إذا كان العمر أكبر من أو يساوي 18 اطبع أنت بالغ", level: "IT-OOP" },
  { word: "If-Else Statement", translation: "جملة الشرط الثنائية (If-Else)", example: "if (number > 0) System.out.println(\"Positive number\"); else System.out.println(\"Negative number\");", exampleTranslation: "إذا كان الرقم موجباً اطبع رقم موجب وإلا اطبع رقم سالب", level: "IT-OOP" },
  { word: "Nested If", translation: "الشرط المتداخل", example: "Nested If is used when there are multiple conditions to test", exampleTranslation: "الشرط المتداخل يستخدم عندما تكون هناك شروط متعددة للاختبار", level: "IT-OOP" },
  { word: "Switch Statement", translation: "جملة التبديل (Switch)", example: "switch(day) { case 1: System.out.println(\"Monday\"); break; }", exampleTranslation: "تستخدم جملة التبديل لمقارنة متغير واحد مع قيم عديدة", level: "IT-OOP" },
  { word: "Case", translation: "حالة (في سويتش)", example: "Handle each case separately in switch statement", exampleTranslation: "تعامل مع كل حالة على حدة في جملة التبديل", level: "IT-OOP" },
  { word: "Default", translation: "الافتراضي (في سويتش)", example: "default: System.out.println(\"Invalid day\");", exampleTranslation: "الافتراضي يطبع يوم غير صالحة إذا لم تتطابق أي حالة", level: "IT-OOP" },
  { word: "Break", translation: "إيقاف / كسر التنفيذ", example: "Use break to exit the switch case or loop", exampleTranslation: "استخدم أمر الإيقاف للخروج من حالة التبديل أو الحلقة", level: "IT-OOP" },
  { word: "Loops", translation: "الحلقات التكرارية", example: "Loops allow you to execute a block of code multiple times", exampleTranslation: "الحلقات التكرارية تسمح لك بتنفيذ كتلة برمجية عدة مرات", level: "IT-OOP" },
  { word: "While Loop", translation: "حلقة تكرار (While)", example: "while (i <= 3) { System.out.println(i); i++; }", exampleTranslation: "تستخدم عندما لا تعرف عدد مرات التكرار بينما الشرط صحيح", level: "IT-OOP" },
  { word: "Do-While Loop", translation: "حلقة تكرار (Do-While)", example: "Do-while runs the code at least once even if condition is false", exampleTranslation: "حلقة دو-وايل تشغل الكود مرة واحدة على الأقل حتى لو كان الشرط خاطئاً", level: "IT-OOP" },
  { word: "For Loop", translation: "حلقة تكرار محددة (For)", example: "for (int i = 1; i <= 5; i++) System.out.println(i);", exampleTranslation: "تستخدم عندما تعرف مسبقاً عدد مرات تكرار الكود", level: "IT-OOP" },
  { word: "Even Number", translation: "عدد زوجي", example: "System.out.println(i + \" is even\");", exampleTranslation: "طباعة أن الرقم زوجي", level: "IT-OOP" },
  { word: "Odd Number", translation: "عدد فردي", example: "System.out.println(i + \" is odd\");", exampleTranslation: "طباعة أن الرقم فردي", level: "IT-OOP" },
  { word: "Execute", translation: "تنفيذ", example: "Conditional statements execute code if conditions are true", exampleTranslation: "الجمل الشرطية تنفذ الكود إذا كانت الشروط صحيحة", level: "IT-OOP" },


  // كلمات ومفاهيم عامة(IT-Architecture)
  // --- الأساسيات ---
  { word: "Program", translation: "برنامج", example: "Every program starts with a main function.", exampleTranslation: "يبدأ كل برنامج بدالة رئيسية.", level: "IT-Architecture" }, // أساسيات
  { word: "Code", translation: "كود / شيفرة", example: "The developer wrote clean code.", exampleTranslation: "كتب المطور كوداً نظيفاً.", level: "IT-Architecture" }, // أساسيات
  { word: "Programming", translation: "برمجة", example: "Programming requires logical thinking.", exampleTranslation: "تتطلب البرمجة التفكير المنطقي.", level: "IT-Architecture" }, // أساسيات
  { word: "Programmer", translation: "مبرمج", example: "The programmer solved the bug quickly.", exampleTranslation: "حل المبرمج الخطأ البرمجي بسرعة.", level: "IT-Architecture" }, // أساسيات
  { word: "Language", translation: "لغة", example: "Python is a popular programming language.", exampleTranslation: "بايثون لغة برمجة شائعة.", level: "IT-Architecture" }, // أساسيات
  { word: "Syntax", translation: "قواعد كتابة الكود", example: "Check your syntax for missing semicolons.", exampleTranslation: "تحقق من قواعد كتابة الكود بحثاً عن الفواصل المنقوطة المفقودة.", level: "IT-Architecture" }, // أساسيات
  { word: "Statement", translation: "تعليمة", example: "This statement executes a print command.", exampleTranslation: "تنفذ هذه التعليمة أمر طباعة.", level: "IT-Architecture" }, // أساسيات
  { word: "Expression", translation: "تعبير", example: "An expression evaluates to a single value.", exampleTranslation: "يُقيّم التعبير إلى قيمة واحدة.", level: "IT-Architecture" }, // أساسيات
  { word: "Keyword", translation: "كلمة محجوزة", example: "You cannot use 'class' as a variable name because it is a keyword.", exampleTranslation: "لا يمكنك استخدام 'class' كاسم متغير لأنه كلمة محجوزة.", level: "IT-Architecture" }, // أساسيات
  { word: "Comment", translation: "تعليق", example: "Always write comments to explain your code.", exampleTranslation: "اكتب دائماً تعليقات لشرح الكود الخاص بك.", level: "IT-Architecture" }, // أساسيات

  // --- المتغيرات والبيانات ---
  { word: "Variable", translation: "متغير", example: "Declare a variable to store the user age.", exampleTranslation: "قم بتعريف متغير لتخزين عمر المستخدم.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Constant", translation: "ثابت", example: "A constant value cannot be changed during execution.", exampleTranslation: "لا يمكن تغيير قيمة الثابت أثناء التنفيذ.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Data", translation: "بيانات", example: "The database stores user data securely.", exampleTranslation: "تخزن قاعدة البيانات بيانات المستخدم بأمان.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Data Type", translation: "نوع البيانات", example: "Choosing the correct data type optimizes memory.", exampleTranslation: "اختيار نوع البيانات الصحيح يحسن استخدام الذاكرة.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Integer", translation: "عدد صحيح", example: "The count variable is an integer.", exampleTranslation: "متغير العداد هو عدد صحيح.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Float", translation: "عدد عشري", example: "Use a float to represent prices with decimals.", exampleTranslation: "استخدم عدداً عشرياً لتمثيل الأسعار التي تحتوي على كسور.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Double", translation: "عدد عشري بدقة أعلى", example: "Scientific calculations require double precision.", exampleTranslation: "تتطلب الحسابات العلمية دقة عالية.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Character", translation: "حرف", example: "A character represents a single letter.", exampleTranslation: "يمثل الحرف حرفاً واحداً.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "String", translation: "نص", example: "The name variable holds a string value.", exampleTranslation: "يحمل متغير الاسم قيمة نصية.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Boolean", translation: "منطقي (True/False)", example: "The isComplete flag is a boolean.", exampleTranslation: "علامة isComplete هي قيمة منطقية.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Value", translation: "قيمة", example: "Assign a value to the variable.", exampleTranslation: "قم بتعيين قيمة للمتغير.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Number", translation: "رقم", example: "Enter a valid number.", exampleTranslation: "أدخل رقماً صحيحاً.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Array", translation: "مصفوفة", example: "An array stores multiple items in a single variable.", exampleTranslation: "تخزن المصفوفة عدة عناصر في متغير واحد.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "List", translation: "قائمة", example: "We can add items dynamically to a list.", exampleTranslation: "يمكننا إضافة عناصر ديناميكياً إلى القائمة.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Index", translation: "فهرس", example: "The first element of an array has an index of zero.", exampleTranslation: "العنصر الأول في المصفوفة له فهرس يساوي صفراً.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Element", translation: "عنصر", example: "Each element in the list is processed in order.", exampleTranslation: "يتم معالجة كل عنصر في القائمة بالترتيب.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Object", translation: "كائن", example: "An object is an instance of a class.", exampleTranslation: "الكائن هو نسخة من الفئة.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Class", translation: "فئة", example: "Define a class to create user profiles.", exampleTranslation: "عرف فئة لإنشاء ملفات تعريف المستخدمين.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Struct", translation: "هيكل", example: "A struct groups related variables together.", exampleTranslation: "يجمع الهيكل المتغيرات ذات الصلة معاً.", level: "IT-Architecture" }, // المتغيرات والبيانات
  { word: "Property", translation: "خاصية", example: "The car object has a color property.", exampleTranslation: "كائن السيارة لديه خاصية اللون.", level: "IT-Architecture" }, // المتغيرات والبيانات

  // --- الإدخال والإخراج ---
  { word: "Input", translation: "إدخال", example: "The system waits for user input.", exampleTranslation: "ينتظر النظام إدخال المستخدم.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Output", translation: "إخراج", example: "The console displays the final output.", exampleTranslation: "تُعرض وحدة التحكم الإخراج النهائي.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "User", translation: "المستخدم", example: "The user enters their credentials.", exampleTranslation: "يدخل المستخدم بيانات الاعتماد الخاصة به.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Read", translation: "قراءة", example: "The application can read data from a file.", exampleTranslation: "يمكن للتطبيق قراءة البيانات من ملف.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Write", translation: "كتابة", example: "Write the logs to a text file.", exampleTranslation: "اكتب سجلات الأخطاء في ملف نصي.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Print", translation: "طباعة", example: "Print the result to the screen.", exampleTranslation: "اطبع النتيجة على الشاشة.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Display", translation: "عرض", example: "Display a welcome message to the user.", exampleTranslation: "اعرض رسالة ترحيب للمستخدم.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Enter", translation: "إدخال", example: "Please enter your password.", exampleTranslation: "الرجاء إدخال كلمة المرور الخاصة بك.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "Console", translation: "وحدة التحكم", example: "Check the console for error messages.", exampleTranslation: "تحقق من وحدة التحكم بحثاً عن رسائل الخطأ.", level: "IT-Architecture" }, // الإدخال والإخراج
  { word: "File", translation: "ملف", example: "Save your work to a new file.", exampleTranslation: "احفظ عملك في ملف جديد.", level: "IT-Architecture" }, // الإدخال والإخراج

  // --- التحكم والتكرار ---
  { word: "Condition", translation: "شرط", example: "The if statement evaluates a condition.", exampleTranslation: "تُقيّم تعليمة if شرطاً معيناً.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "If", translation: "إذا", example: "If the score is high, you win.", exampleTranslation: "إذا كانت النتيجة عالية، فأنت تفوز.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Else", translation: "وإلا", example: "Use else to handle alternative outcomes.", exampleTranslation: "استخدم else للتعامل مع النتائج البديلة.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Switch", translation: "اختيار", example: "A switch statement manages multiple choices.", exampleTranslation: "تتعامل تعليمة switch مع خيارات متعددة.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Case", translation: "حالة", example: "Each case represents a possible value.", exampleTranslation: "تمثل كل حالة قيمة محتملة.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Loop", translation: "حلقة تكرار", example: "Use a loop to repeat a block of code.", exampleTranslation: "استخدم حلقة تكرار لتكرار كتلة من الكود.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "For", translation: "للتكرار", example: "A for loop iterates a specific number of times.", exampleTranslation: "تتكرر حلقة for لعدد محدد من المرات.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "While", translation: "طالما", example: "The while loop runs as long as the condition is true.", exampleTranslation: "تعمل حلقة while طالما أن الشرط صحيح.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Do While", translation: "افعل طالما", example: "A do while loop executes at least once.", exampleTranslation: "تنفذ حلقة do while مرة واحدة على الأقل.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Break", translation: "إيقاف الحلقة", example: "Use break to exit the loop early.", exampleTranslation: "استخدم break للخروج من الحلقة مبكراً.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Continue", translation: "الانتقال للتكرار التالي", example: "Continue skips to the next iteration.", exampleTranslation: "ينتقل continue إلى التكرار التالي.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "True", translation: "صحيح", example: "The condition evaluated to true.", exampleTranslation: "تم تقييم الشرط على أنه صحيح.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "False", translation: "خطأ", example: "The authentication failed returning false.", exampleTranslation: "فشلت المصادقة مع إرجاع خطأ.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Compare", translation: "مقارنة", example: "Compare two numbers using operators.", exampleTranslation: "قارن بين رقمين باستخدام العوامل.", level: "IT-Architecture" }, // التحكم والتكرار
  { word: "Operator", translation: "عامل/معامل", example: "The plus sign is an arithmetic operator.", exampleTranslation: "علامة الجمع هي عامل حسابي.", level: "IT-Architecture" }, // التحكم والتكرار

  // --- الدوال ---
  { word: "Function", translation: "دالة", example: "Define a function to calculate the total.", exampleTranslation: "عرف دالة لحساب المجموع.", level: "IT-Architecture" }, // الدوال
  { word: "Parameter", translation: "معامل الدالة", example: "The function accepts two parameters.", exampleTranslation: "تقبل الدالة معلمين اثنين.", level: "IT-Architecture" }, // الدوال
  { word: "Argument", translation: "قيمة تُمرر للدالة", example: "Pass the user ID as an argument.", exampleTranslation: "مرر معرف المستخدم كقيمة للدالة.", level: "IT-Architecture" }, // الدوال
  { word: "Return", translation: "إرجاع", example: "The function returns the computed result.", exampleTranslation: "ترجع الدالة النتيجة المحسوبة.", level: "IT-Architecture" }, // الدوال
  { word: "Call", translation: "استدعاء", example: "Call the function to start the process.", exampleTranslation: "استدعِ الدالة لبدء العملية.", level: "IT-Architecture" }, // الدوال
  { word: "Declaration", translation: "تصريح", example: "Function declaration precedes its usage.", exampleTranslation: "يسبق تصريح الدالة استخدامها.", level: "IT-Architecture" }, // الدوال
  { word: "Definition", translation: "تعريف", example: "Provide the function definition with a body.", exampleTranslation: "قدم تعريف الدالة مع الجسم الخاص بها.", level: "IT-Architecture" }, // الدوال
  { word: "Scope", translation: "نطاق", example: "Local variables have restricted scope.", exampleTranslation: "للمتغيرات المحلية نطاق مقيّد.", level: "IT-Architecture" }, // الدوال
  { word: "Local", translation: "محلي", example: "Local variables exist only inside the function.", exampleTranslation: "تتواجد المتغيرات المحلية داخل الدالة فقط.", level: "IT-Architecture" }, // الدوال
  { word: "Global", translation: "عام", example: "Global variables can be accessed anywhere.", exampleTranslation: "يمكن الوصول إلى المتغيرات العامة من أي مكان.", level: "IT-Architecture" }, // الدوال

  // --- البرمجة الكائنية OOP ---
  { word: "OOP", translation: "البرمجة كائنية التوجه", example: "OOP helps organize complex software systems.", exampleTranslation: "تساعد البرمجة كائنية التوجه في تنظيم الأنظمة البرمجية المعقدة.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Object", translation: "كائن", example: "Create an object from the blueprint class.", exampleTranslation: "أنشئ كائناً من فئة التصميم.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Class", translation: "فئة", example: "A class acts as a template for objects.", exampleTranslation: "تعمل الفئة كقالب للكائنات.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Method", translation: "دالة داخل الكلاس", example: "Call the start method on the car object.", exampleTranslation: "استدعِ دالة البدء على كائن السيارة.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Constructor", translation: "المُنشئ", example: "The constructor initializes object properties.", exampleTranslation: "يقوم المُنشئ تهيئة خصائص الكائن.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Destructor", translation: "المُدمّر", example: "The destructor frees allocated resources.", exampleTranslation: "يقوم المُدمّر بتحرير الموارد المخصصة.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Inheritance", translation: "الوراثة", example: "Inheritance allows a class to acquire properties of another.", exampleTranslation: "تسمح الوراثة لفئة باكتساب خصائص فئة أخرى.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Encapsulation", translation: "التغليف", example: "Encapsulation protects data by keeping it private.", exampleTranslation: "يحمي التغليف البيانات من خلال الحفاظ عليها خاصة.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Polymorphism", translation: "تعدد الأشكال", example: "Polymorphism allows methods to behave differently.", exampleTranslation: "يسمح تعدد الأشكال للطرق بالتصرف بشكل مختلف.", level: "IT-Architecture" }, // البرمجة الكائنية OOP
  { word: "Abstraction", translation: "التجريد", example: "Abstraction hides complex implementation details.", exampleTranslation: "يخفي التجريد تفاصيل التنفيذ المعقدة.", level: "IT-Architecture" }, // البرمجة الكائنية OOP

  // --- الذاكرة والأخطاء ---
  { word: "Memory", translation: "ذاكرة", example: "Efficient programs use minimal memory.", exampleTranslation: "تستخدم البرامج الفعالة الحد الأدنى من الذاكرة.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Address", translation: "عنوان ذاكرة", example: "Pointers store the memory address of variables.", exampleTranslation: "تخزن المؤشرات عنوان الذاكرة للمتغيرات.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Pointer", translation: "مؤشر", example: "A pointer references a specific memory location.", exampleTranslation: "يشير المؤشر إلى موقع معين في الذاكرة.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Reference", translation: "مرجع", example: "Pass large objects by reference to save time.", exampleTranslation: "مرر الكائنات الكبيرة بالمرجع لتوفير الوقت.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Stack", translation: "مكدس", example: "Local variables are stored on the stack.", exampleTranslation: "تُخزن المتغيرات المحلية على المكدس.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Heap", translation: "ذاكرة ديناميكية", example: "Dynamic memory allocation happens on the heap.", exampleTranslation: "يحدث تخصيص الذاكرة الديناميكية على الذاكرة الديناميكية (Heap).", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Error", translation: "خطأ", example: "Fix the syntax error to compile successfully.", exampleTranslation: "أصلح خطأ قواعد البيانات لتتم عملية الترجمة بنجاح.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Bug", translation: "خطأ برمجي", example: "The QA team found a critical bug in the app.", exampleTranslation: "وجد فريق ضمان الجودة خطأ برمجياً حرجاً في التطبيق.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Debug", translation: "تصحيح الأخطاء", example: "Use breakpoints to debug your code effectively.", exampleTranslation: "استخدم نقاط التوقف لتصحيح أخطاء الكود بفعالية.", level: "IT-Architecture" }, // الذاكرة والأخطاء
  { word: "Warning", translation: "تحذير", example: "The compiler issued a warning about unused variables.", exampleTranslation: "أصدر المترجم تحذيراً بشأن المتغيرات غير المستخدمة.", level: "IT-Architecture" }, // الذاكرة والأخطاء

  // --- أدوات ومفاهيم مهمة ---
  { word: "Compiler", translation: "مترجم الكود", example: "The compiler translates source code into machine code.", exampleTranslation: "يترجم مترجم الكود الكود المصدر إلى كود آلة.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Interpreter", translation: "مفسر", example: "Python uses an interpreter to run scripts line by line.", exampleTranslation: "تستخدم لغة بايثون مفسراً لتشغيل السكريبتات سطراً بسطر.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "IDE", translation: "بيئة تطوير متكاملة", example: "VS Code is a popular IDE for web development.", exampleTranslation: "يعتبر VS Code بيئة تطوير متكاملة شائعة لتطوير الويب.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Library", translation: "مكتبة", example: "Import the math library to perform calculations.", exampleTranslation: "استورد مكتبة الرياضيات لإجراء العمليات الحسابية.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Framework", translation: "إطار عمل", example: "React is a powerful framework for building user interfaces.", exampleTranslation: "رياكت إطار عمل قوي لبناء واجهات المستخدم.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Package", translation: "حزمة", example: "Install the required package using npm.", exampleTranslation: "قم بتثبيت الحزمة المطلوبة باستخدام npm.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Module", translation: "وحدة", example: "Break your code into smaller reusable modules.", exampleTranslation: "قسّم الكود الخاص بك إلى وحدات أصغر قابلة لإعادة الاستخدام.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "API", translation: "واجهة برمجية", example: "The app fetches weather data through an API.", exampleTranslation: "يجلب التطبيق بيانات الطقس من خلال واجهة برمجية (API).", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Database", translation: "قاعدة بيانات", example: "The database stores user profiles and posts.", exampleTranslation: "تخزن قاعدة البيانات ملفات تعريف المستخدمين والمنشورات.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Server", translation: "خادم", example: "The web server handles incoming client requests.", exampleTranslation: "يتعامل خادم الويب مع طلبات العملاء الواردة.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Client", translation: "عميل", example: "The client sends a request to the server.", exampleTranslation: "يرسل العميل طلباً إلى الخادم.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Algorithm", translation: "خوارزمية", example: "An algorithm is a step-by-step procedure to solve a problem.", exampleTranslation: "الخوارزمية هي إجراء خطوة بخطوة لحل مشكلة ما.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Debugging", translation: "تصحيح الأخطاء", example: "Debugging takes up a significant portion of development time.", exampleTranslation: "يستغرق تصحيح الأخطاء جزءاً كبيراً من وقت التطوير.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Execute", translation: "تنفيذ", example: "Press run to execute the code.", exampleTranslation: "اضغط على تشغيل لتنفيذ الكود.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة
  { word: "Run", translation: "تشغيل", example: "Run the application in development mode.", exampleTranslation: "شغل التطبيق في وضع التطوير.", level: "IT-Architecture" }, // أدوات ومفاهيم مهمة


  ];