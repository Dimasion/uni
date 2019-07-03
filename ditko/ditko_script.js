(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
  { type: 'radio', search: 'Дайте найбільш повне визначення, що таке є шаблон бізнес-моделі', answer: 'клас' },
  { type: 'radio', search: 'Скільки є структурних блоків', answer: '9' },
  { type: 'radio', search: 'що має бути спрямована логіка, закладена в бізнес-моделі?', answer: 'На отримання прибутку' },
  { type: 'radio', search: 'масовий ринок', answer: 'Мають різні канали збуту, та по різному вибирають сегменти' },
  { type: 'radio', search: 'Який блок найбільше підходить до опису дій компанії (стартапу), які необхідні для реалізації її бізнес-моделі', answer: 'ключові види діяльності' },
  { type: 'radio', search: 'Яку з перечислених функцій виконують канали збуту', answer: 'допомагають донести ціннісні пропозиції компанії' },
  { type: 'radio', search: 'В якому блоці описуються найбільш важливі активи необхідні для функціонування бізнес моделі?', answer: 'ключові ресурси' },
  { type: 'radio', search: 'Назвіть усі методи дизайну бізнес-моделей', answer: 'підказки споживача, генерація ідей, візуалізація, прототипіювання, сторітеллінг, сценарії' },
  { type: 'radio', search: 'Довгий Хвіст', answer: 'Продаж великої кількості найменувань товарів' },
  { type: 'radio', search: 'Ефект , коли користувач товару чи послуги впливає на цінність цього продукту чи послуги має назву', answer: 'мережевий' },
  { type: 'radio', search: 'Модель , яка передбачає велику базу клієнтів , які вносять невеликі регулярні внески , щоб захистити себе від малоймовірних фінансово катастрофічний подій це', answer: 'страхівка' },
  { type: 'radio', search: 'Дайте визначення поняттю багатосторонньої платформи', answer: 'дві або більше різні та незалежні групи клієнтів' },
  { type: 'radio', search: 'Новація', answer: 'продукт інтелектуальної діяльності людей, оформлений результат фундаментальних, прикладних чи експериментальних досліджень у будь-якій сфері людської діяльності, спрямований на підвищення її ефективності' },
  { type: 'radio', search: 'Інновація', answer: 'кінцевий метод, принцип, новий порядок, винахід, новий продукт, процес, якісно відмінний від попереднього аналога, що є результатом інтелектуальної діяльності, закінчених наукових досліджень і розробок' },
  { type: 'radio', search: 'Винахід', answer: 'результат НДДКР, що відображає принципово новий механізм, який може зумовити появу нових інновацій та інноваційних процесів і суттєво вплинути на розвиток НТП' },
  { type: 'radio', search: 'До інновації не належить', answer: 'реорганізація структури управління організації' },
  { type: 'radio', search: 'Зазначте відмінність між винаходом, відкриттям і нововведенням', answer: 'відкриття або винахід можуть бути випадковими, нововведення випадково не відбуваються' },
  { type: 'radio', search: 'Інноваційний менеджмент', answer: 'сукупність методів і форм управління інноваційним процесом, а також управління зайнятими цією діяльністю організаційними структурами та їх персоналом' },
  { type: 'radio', search: 'Функція прогнозування в інноваційному менеджменті спрямована на', answer: 'розробку перспектив науково-технічного розвитку підприємства' },
  { type: 'radio', search: 'Функція планування в інноваційному менеджменті спрямована', answer: 'виконання планових завдань та об’єднання людей, які разом виконують інноваційні плани, програми і проекти' },
  { type: 'radio', search: 'Функція координування в інноваційному менеджменті спрямована на', answer: 'погодження діяльності усіх ланцюгів системи управління, апарату науково-дослідних підрозділів та окремих фахівців' },
  { type: 'radio', search: 'До допоміжних служб (систем) інноваційної діяльності не належить', answer: 'технополіси і технопарки' },
  { type: 'radio', search: 'Базисні інновації створюються на основі', answer: 'результатів фундаментальних досліджень' },
  { type: 'radio', search: 'Поліпшуючі інновації створюються на основі', answer: 'існуючих знань, відомих законів і принципів' },
  { type: 'radio', search: 'До принципів інноваційного процесу не належить', answer: 'зменшення рентабельності підприємств-послідовників' },
  { type: 'radio', search: 'До фактора успішності інновацій належить', answer: 'перевага нового товару над товарами конкурентів' },
  { type: 'radio', search: 'До фактора невдачі інновацій належить', answer: 'скорочення життєвого циклу товарів' },
  { type: 'radio', search: 'відображає найбільш загальні й істотні властивості, ознаки, зв’язки й відносини виробництва й реалізації нововведень', answer: 'економічна категорія' },
  { type: 'radio', search: 'Експериментальні або теоретичні дослідження, спрямовані на одержання нових знань, результатом яких можуть бути теорії, гіпотези, методи', answer: 'фундаментальні дослідження' },
  { type: 'radio', search: 'Відокремлення процесу інтегрування ідей від процесу їх оцінювання відбувається при застосуванні методу', answer: 'розумової атаки' },
  { type: 'radio', search: 'Технопарк', answer: 'науково-виробничий територіальний комплекс, до якого входять науково-дослідні інститути, лабораторії, підприємства та вищі навчальні заклади' },
  { type: 'radio', search: 'Технополіс', answer: 'цілісний науково-виробничий комплекс, до якого входять науково-дослідні інститути, лабораторії, підприємства та вищі навчальні заклади на базі конкретного міста' },
  { type: 'radio', search: 'Фінансово-промислова група', answer: 'організаційна структура, яка об’єднує банк, підприємства, торгові організації, науково-дослідні центри, вищі навчальні заклади і пов’язує їх єдиним' },
  { type: 'radio', search: 'Інкубатор', answer: 'складний багатофункціональний комплекс, який забезпечує сприятливі умови' },
  { type: 'radio', search: 'Інкубатор', answer: 'джерело кредитів для малих інноваційних фірм' },
  { type: 'radio', search: 'Силіконова долина', answer: 'технополісом' },
  { type: 'radio', search: 'Основною метою створення технопарків і технополісів', answer: 'досягнення тісного територіального зближення наукового потенціалу країни та промислового виробництва' },
  { type: 'radio', search: 'З метою розвитку технопарків і технополісів у перші роки їх існування на цих територіях державою створюється', answer: 'пільговий податковий режим' },
  { type: 'radio', search: 'Центральним ланцюгом технопарків і технополісів', answer: 'науково-дослідний інститут' },
  { type: 'radio', search: 'До методів активізації творчого пошуку відносяться методи', answer: 'контрольних запитань' },
  { type: 'radio', search: 'Життєвий цикл нововведення ', answer: 'появи першого зразка продукту на ринку' },
  { type: 'radio', search: 'Інноваційний лаг', answer: 'впровадженням ії в інновацію' },
  { type: 'radio', search: 'Для першої фази життєвого циклу інновації характерні', answer: 'початок маркетингових досліджень' },
  { type: 'radio', search: 'Для другої фази життєвого циклу інновації характерні', answer: 'освоєння виробництва та збільшення обсягів продажу' },
  { type: 'radio', search: 'Яке з наведених визначень найчіткіше відображає сутність поняття', answer: 'це набір конкретних дій організації, фінансування, вироблення політики підтримки' },
  { type: 'radio', search: 'Наступальна стратегія', answer: 'спрямована на впровадження тільки перспективних і перевірених' },
  { type: 'radio', search: 'Захисна стратегія', answer: 'з прагненням компанії досягти технічного і ринкового лідерства шляхом створення і впровадження нових продуктів' },
  { type: 'radio', search: 'Імітаційна стратегія', answer: 'припускає копіювання продукції за ліцензією, яка придбана у компанії-піонера' },
  { type: 'radio', search: 'Залежна стратегія', answer: 'визначається політикою' },
  { type: 'radio', search: 'Традиційна стратегія', answer: 'не передбачає значних технологічних змін, тому така стратегія тільки умовно належить до інноваційної' },
  { type: 'radio', search: 'Ситуаційна стратегія', answer: 'є реакцією керівництва на зовнішні сигнали ринку або інституційного середовища' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'checkbox', search: 'Які технології дозволяють створити безоплатну бізнес-модель', answer: ['Вартість зберігання інформації', 'Вартість інтернету', 'Вартість створення цифрового контенту'] },
  { type: 'checkbox', search: '', answer: ['', ''] },
  { type: 'checkbox', search: '', answer: ['', ''] },
  { type: 'checkbox', search: '', answer: ['', ''] },
  { type: 'input', search: 'Коли якийсь факт, предмет чи явище підказує нове конструктивне, технологічне чи дизайнерське вирішення нового товару використовується метод', answer: 'аналогії' },
  { type: 'input', search: 'Нові за виглядом, формою, розміщенням частин або побудовою технічні конструкції', answer: 'промислові' },
  { type: 'input', search: 'Показник ефективності інноваційного проекту під назвою', answer: 'період' },
  { type: 'input', search: 'Дозвіл окремим особам або організаціям на використання винаходу, захищеного патентом, технічного знання', answer: 'ліцензія' },
  { type: 'input', search: 'Технічні знання, практичний досвід інноваційного характеру, які являють собою комерційну цінність, використовуються у виробництві і професійній практиці, але не забезпечуються патентним захистом', answer: 'ноу-хау' },
  { type: 'input', search: 'Право автора на винахід, наукову ідею, розробку, новий виріб чи нову технологію', answer: 'інтелектуальна' },
  { type: 'input', search: 'Сукупність правових норм, які регулюють правовідносини, пов’язані зі створенням і використанням певного інтелектуального продукту', answer: 'авторське' },
  { type: 'input', search: 'Сфера інноваційної діяльності включає ринок чистої конкуренції, ринок капіталів', answer: 'ринок' },
  { type: 'input', search: 'Сфера обігу капіталу, де суб’єктом виступають, з одного боку, організації та особи, які зайняті в науковій сфері, а з іншого', answer: 'капіталу' },
  { type: 'input', search: 'інвестування фінансових ресурсів у більше ніж один вид інновацій, тобто процес розподілу інвестицій між різними', answer: 'Диверсифікація' },
  { type: 'input', search: 'організаційна структура, метою якої є створення сприятливих умов для стартового розвитку малих підприємств через надання їм певного комплексу', answer: 'Бізнес-інкубатор' },
  { type: 'input', search: 'розгорнутий документ, що містить', answer: 'Бізнес-план' },
  { type: 'input', search: 'співвідношення різних мотивів, що обумовлюють поведінку людини', answer: 'Мотивація' },
  { type: 'input', search: 'прагненням фірми досягти лідерствана ринку шляхом створення та впровадження нових продуктів', answer: 'наступальна' },
  { type: 'input', search: 'Стратегія, заснована на придбанні ліцензій чи інших', answer: 'імітаційна' },
  { type: 'input', search: 'підприємство, що створюється для реалізації інноваційного проекту', answer: 'Венчурне' },
  { type: 'input', search: 'на позитивному іміджі фірми, уособленому в його торговій марці', answer: 'Брендування' },
  { type: 'input', search: 'загальновизнані наукові досягнення, які протягом певного часу дають науковому співтовариству модель постановки проблем', answer: 'Гіпотеза' },
  
  { type: 'select', search: 'інвестування фінансових ресурсів у більше ніж один вид інновацій, тобто процес розподілу інвестицій між різними', answer: 'Диверсифікація' },
  { type: 'select', search: 'організаційна структура, метою якої є створення сприятливих умов для стартового розвитку малих підприємств через надання їм певного комплексу', answer: 'Бізнес-інкубатор' },
  { type: 'select', search: 'розгорнутий документ, що містить', answer: 'Бізнес-план' },
  { type: 'select', search: 'співвідношення різних мотивів, що обумовлюють поведінку людини', answer: 'Мотивація' },
  { type: 'select', search: 'прагненням фірми досягти лідерствана ринку шляхом створення та впровадження нових продуктів', answer: 'наступальна' },
  { type: 'select', search: 'Стратегія, заснована на придбанні ліцензій чи інших', answer: 'імітаційна' },
  { type: 'select', search: 'підприємство, що створюється для реалізації інноваційного проекту', answer: 'Венчурне' },
  { type: 'select', search: 'на позитивному іміджі фірми, уособленому в його торговій марці', answer: 'Брендування' },
  { type: 'select', search: 'загальновизнані наукові досягнення, які протягом певного часу дають науковому співтовариству модель постановки проблем', answer: 'Гіпотеза' },
  
  { type: 'select', search: 'Forming', answer: '1' },
  { type: 'select', search: 'Storming', answer: '2' },
  { type: 'select', search: 'Norming', answer: '3' },
  { type: 'select', search: 'Performing', answer: '4' },

  { type: 'select', search: 'Валідація', answer: 'Забезпечення відповідності' },
  { type: 'select', search: 'Верифікація', answer: 'Перевірка правильності трансформації' },
  { type: 'select', search: 'Агрегація', answer: 'кількох понять у нове поняття' },

  { type: 'select', search: 'Люди та співпраця важливіші за', answer: 'процеси та інструменти' },
  { type: 'select', search: 'Працюючий продукт важливіший за', answer: 'вичерпну документацію' },
  { type: 'select', search: 'Позитивна співпраця із замовником важливіша за ', answer: 'обговорення умов контракту' },
  { type: 'select', search: 'Готовність до змін важливіша за', answer: 'дотримання плану' },

  { type: 'select', search: 'генерування ідей', answer: '1' },
  { type: 'select', search: 'оцінювання та відбір перспективних ідей', answer: '2' },
  { type: 'select', search: 'розроблення концепції товару', answer: '3' },
  { type: 'select', search: 'розроблення і створення дослідного зразка', answer: '4' },
  { type: 'select', search: 'пробний маркетинг', answer: '5' },

  { type: 'select', search: 'Initiation Project', answer: '1' },
  { type: 'select', search: 'Planning', answer: '2' },
  { type: 'select', search: 'Executive', answer: '3' },
  { type: 'select', search: 'Monitoring', answer: '4' },
  { type: 'select', search: 'Closing', answer: '5' },

  { type: 'select', search: 'Planning', answer: '1' },
  { type: 'select', search: 'Analysis', answer: '2' },
  { type: 'select', search: 'Design', answer: '3' },
  { type: 'select', search: 'Implementation', answer: '4' },
  { type: 'select', search: 'Testing', answer: '5' },
  { type: 'select', search: 'Maintenance', answer: '6' },
 
  { type: 'select', search: 'Емпатія', answer: '1' },
  { type: 'select', search: 'Фокусування', answer: '2' },
  { type: 'select', search: 'Генерація ідей', answer: '3' },
  { type: 'select', search: 'Прототип', answer: '4' },
  { type: 'select', search: 'Тестування', answer: '5' },

  { type: 'select', search: 'Задум', answer: '1' },
  { type: 'select', search: 'Дослідження', answer: '2' },
  { type: 'select', search: 'Концепт', answer: '3' },
  { type: 'select', search: 'Валідація концепту', answer: '4' },
  { type: 'select', search: 'Роадмап  продукту', answer: '5' },
  { type: 'select', search: 'Дизайн продукту', answer: '6' },
  { type: 'select', search: 'Розробка', answer: '7' },

  { type: 'select', search: 'Каскадна модель', answer: 'в якій кожен етап роботи виконується лише раз' },
  { type: 'select', search: 'Спіральна модель', answer: 'яка дозволяє повертатися до будь-якого попереднього етапу' },
  { type: 'select', search: 'Еволюційна модел', answer: 'в якій система послідовно розробляється з блоків' },

  { type: 'select', search: '', answer: '' }
]

  var passedCount = 0

  // ============================================================
  // Main function
  // ============================================================
  function testIt (answers) {
    answers.forEach(item => {
      var answer = item.answer
      var search = item.search

      // ============================================================
      // Search/Answer fields checking
      // ============================================================
      if (!search || !answer) return

      if (typeof search !== 'string') return
      if (item.type === 'checkbox') {
        if (!(item.answer instanceof Array)) return
      } else {
        if (typeof search !== 'string') return
      }

      // ============================================================
      // Fill base on item type
      // ============================================================
      switch (item.type) {
        case 'radio':
          fillRadio(search, answer)
          break;
        case 'checkbox':
          fillCheckbox(search, answer)
          break;
        case 'input':
          fillInput(search, answer)
          break;
        case 'select':
          fillSelect(search, answer)
          break;
      }
    })

    console.log('Success. You passed', passedCount, 'tests.')
  }

  // ============================================================
  // Radio
  // ============================================================
  function fillRadio (search, answer) {
    let exeptions = []

    return (function fill() {
      // QuestionNode
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)
      var radioNode = null

      if (answerNode) {
        radioNode = answerNode.parentNode.querySelector('input[type="radio"]')
      }

      if (!radioNode || answerNode.nodeName !== 'LABEL') {
        fill(search, answer)
        return
      }

      // Result
      radioNode.checked = true
      passedCount = passedCount + 1
    })()
  }

  // ============================================================
  // Checkboxes
  // ============================================================
  function fillCheckbox (search, answer) {
    let exeptions = []

    return (function fill() {
      // QuestionNode
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      exeptions.push(questionNode)

      // AnswerNode
      var firstAnswerNode = findParentNodeByText(answer[0], questionNode.parentNode, exeptions)
      var firstCheckboxNode = null

      if (firstAnswerNode) {
        firstCheckboxNode = firstAnswerNode.parentNode.querySelector('input[type="checkbox"]')
      }

      if (!firstCheckboxNode || firstAnswerNode.nodeName !== 'LABEL') {
        fill(search, answer)
        return
      }

      // Result
      answer.forEach(item => {
        var answerNode = findParentNodeByText(item, questionNode.parentNode, exeptions)
        if (!answerNode) return

        var checkboxNode = answerNode.parentNode.querySelector('input[type="checkbox"]')
        checkboxNode.checked = true
      })

      passedCount = passedCount + 1
    })()
  }

  // ============================================================
  // Inputs
  // ============================================================
  function fillInput (search, answer) {
    let exeptions = []

    return (function fill() {
      // QuestionNode
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = questionNode.parentNode.querySelector('input[type="text"]')

      if (!answerNode) {
        fill(search, answer)
        return
      }

      // Result
      answerNode.value = answer
      passedCount = passedCount + 1
    })()
  }

  // ============================================================
  // Selects
  // ============================================================
  function fillSelect (search, answer) {
    let exeptions = []

    return (function fill() {
      // QuestionNode
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)

      if (!answerNode || answerNode.nodeName !== 'OPTION') {
        fill(search, answer)
        return
      }

      // Result
      answerNode.setAttribute('selected', true)
      passedCount = passedCount + 1
    })()
  }

  // ============================================================
  // Get text node
  // ============================================================
  function getTextNodesIn(elem, opt_fnFilter) {
    var textNodes = [];

    if (elem) {
      for (var nodes = elem.childNodes, i = nodes.length; i--;) {
        var node = nodes[i], nodeType = node.nodeType;

        if (nodeType == 3) {
          if (!opt_fnFilter || opt_fnFilter(node, elem)) {
            textNodes.push(node);
          }
        }
        else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
          textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
        }
      }
    }

    return textNodes;
  }

  // ============================================================
  // Format text
  // ============================================================
  function formatText (text) {
    return text.replace(/\n|\r|\s/g, '').toLowerCase()
  }

  // ============================================================
  // Find parent node by text
  // ============================================================
  function findParentNodeByText (search, node, exeptNodes) {
    if (!node) node = document.querySelector('body')
    if (!exeptNodes) exeptNodes = []

    let parentNode = null

    getTextNodesIn(node, function(textNode, parent) {
      if (exeptNodes.includes(parent)) return

      var text = formatText(textNode.textContent)
      var searchText = formatText(search)

      if (!text) return
      if (text.includes(searchText)) {
        parentNode = parent
      }
    });

    return parentNode
  }

  // ============================================================
  // Initialization
  // ============================================================
  testIt(answers)
})()