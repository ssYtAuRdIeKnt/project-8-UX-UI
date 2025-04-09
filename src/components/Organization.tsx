export default function Organization() {
    return (
      <div className="flex-1 bg-[#eeeeee] border-t-12 border-[#D0D0D0]">
        <div className="relative rounded-xl mt-8 mx-4 md:mx-8 bg-white p-6 md:p-8 text-gray-800 text-[17px] leading-[1.8] sm:leading-relaxed break-words">
          <h1 className="text-3xl font-bold mb-8">Організація тренувань</h1>
  
          <p className="mb-4">
            Щоб досягти високих результатів у паверліфтингу, тренувальний процес повинен бути побудований системно. Основною структурною одиницею програми є <strong className="text-[#6a4133]">макроцикл</strong> — повний період підготовки спортсмена, що зазвичай триває від 3 до 6 місяців. Макроцикл поділяється на <strong className="text-[#6a4133]">мезоцикли</strong>, а ті, своєю чергою — на <strong className="text-[#6a4133]">мікроцикли</strong>.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6 mb-3">Макроцикл</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#6a4133]">
            <li><strong className="text-[#6a4133]">Гіпертрофія (6–12 тижнів):</strong> збільшення м’язового об'єму, розвиток техніки.</li>
            <li><strong className="text-[#6a4133]">Сила (8–12 тижнів):</strong> зростання максимальної сили, менше повторень, більше ваги.</li>
            <li><strong className="text-[#6a4133]">Пікова фаза (2–3 тижні):</strong> підготовка до проходки або змагань, важкі сингли і двійки.</li>
            <li><strong className="text-[#6a4133]">Відновлення (1–2 тижні):</strong> зменшення навантаження, регенерація ЦНС.</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-6 mb-3">Мезоцикл</h2>
          <p className="mb-4">
            Це блок із 3–12 тижнів, який має одну головну ціль: гіпертрофія, сила, витривалість або відновлення. Він задає характер мікроциклів.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6 mb-3">Мікроцикл</h2>
          <p className="mb-4">
            Найменша структурна одиниця, зазвичай один тиждень. Включає 2–5 тренувальних сесій, адаптованих до задач мезоциклу.
          </p>
  
          <h2 className="text-2xl font-semibold mt-6 mb-3">Альтернативні моделі періодизації</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#6a4133]">
            <li><strong className="text-[#6a4133]">DUP (дуплікатна):</strong> чергування типів навантаження протягом тижня.</li>
            <li><strong className="text-[#6a4133]">Блокова:</strong> кожен блок фокусується на одній якості, решта — підтримуються.</li>
            <li><strong className="text-[#6a4133]">Реверсивна:</strong> спершу пікова сила, потім гіпертрофія. Актуальна, якщо треба швидко вийти на результат.</li>
            <li><strong className="text-[#6a4133]">Авторегуляційна:</strong> навантаження формується за самопочуттям або швидкістю штанги (RPE, velocity-based).</li>
          </ul>
  
          <h2 className="text-2xl font-semibold mt-6 mb-3">Функціональний цикл: Проходка → Гіпертрофія → Сила → Проходка</h2>
          <p className="mb-4">
            Ця модель відображає живий, робочий підхід до циклу між проходками. Вона дозволяє підтримувати форму, адаптувати програму до реальних умов і постійно зростати.
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-4 marker:text-[#6a4133]">
            <li><strong className="text-[#6a4133]">Проходка:</strong> тестування 1RM, аналіз технічних і силових слабкостей.</li>
            <li><strong className="text-[#6a4133]">Гіпертрофія:</strong> нарощування м’язової маси, покращення техніки.</li>
            <li><strong className="text-[#6a4133]">Сила:</strong> розвиток максимальної сили на основі нової бази.</li>
            <li><strong className="text-[#6a4133]">Проходка:</strong> нове тестування і початок наступного кола.</li>
          </ol>
        </div>
      </div>
    );
  }