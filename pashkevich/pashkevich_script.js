(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
  { type: 'radio', search: 'Згідно Agile-маніфесту люди та співпраця важливіші за', answer: 'процеси і інструменти' },
  { type: 'radio', search: 'Згідно Agile-маніфесту працюючий продукт важливіший за', answer: 'повну документацію' },
  { type: 'radio', search: 'Згідно Agile-маніфесту позитивна співпраця із замовником важливіший за', answer: "контрактні" },
  { type: 'radio', search: 'Згідно Agile-маніфесту готовність до змін важливіша за:', answer: 'дотримання плану' },
  { type: 'checkbox', search: 'Ключові принципи і пріоритети Agile', answer: ['Міцний', 'Схвальне ставлення'] },
  { type: 'radio', search: 'Що з перерахованого нижче не є частиною Agile', answer: 'Дотримання плану' },
  { type: 'radio', search: 'Яка з наведених методологій чітко визначає роль', answer: 'Crystal Methods' },
  { type: 'radio', search: 'Що є основою успішної Agile команди', answer: 'Довіра' },
  { type: 'radio', search: 'Конус невизначеності', answer: 'Судження і оцінки' },
  { type: 'radio', search: 'є скоріше наслідком поганого планування, ніж недосконалого виконання', answer: 'Затримки' },
  { type: 'radio', search: 'team velocity', answer: 'Міра продуктивності' },
  { type: 'radio', search: 'ідеальний день', answer: 'Відсутність затримок' },
  { type: 'radio', search: 'Agile Манифеста спираються на вимірювані показники проекта', answer: 'Working Software' },
  { type: 'radio', search: 'Який показник проекта має бути виміряний з точки зору Agile', answer: 'Outcomes' },
  { type: 'radio', search: 'Burn down chart', answer: 'до кінця ітерації' },
  { type: 'radio', search: 'Основним питанням, яке треба обговорити під час ретроспективи', answer: 'Створення' },
  { type: 'radio', search: 'Оптимальний час для щоденного stand up meeting', answer: '15 хвилин' },
  { type: 'radio', search: 'Що з наведеного нижче НЕ є Agile-підходом із забезпечення якості', answer: 'Відокремлена фаза тестування' },
  { type: 'checkbox', search: 'І управління якістю, і управління проектом стосуються', answer: ['Задоволеності', 'Запобіганню', 'Безперервного'] },
  { type: 'radio', search: 'Організація процесу програмування, коли програміст створює тести до написання нового коду називається', answer: 'TDD' },
  { type: 'radio', search: 'Укажіть основний елемент забезпечення якості згідно Lean Manufacturing', answer: 'Вбудовування якості в процес' },
  { type: 'radio', search: 'З точки зору безперервного вдосконалення (continuous improvement)', answer: 'Так' },
  { type: 'radio', search: 'Ситуативні теорії лідерства стверджують, що лідером треба народитися', answer: 'Ні' },
  { type: 'radio', search: 'Само-організація (Self-organization) вимагає', answer: 'Лідерства' },
  { type: 'radio', search: 'Лідер проекту з точки зору Agile має декларувати такі цінності', answer: 'дотримання плану' },
  { type: 'checkbox', search: 'Для успішного впровадження Agile необхідно', answer: ['Залучення', 'Навчання', 'Вибір'] },
  { type: 'radio', search: 'Найбільшою вадою розподіленої Agile команди', answer: 'розуміння' },
  { type: 'radio', search: 'За яким критерієм має бути відсортований Product Backlog', answer: 'бізнесу' },
  { type: 'checkbox', search: 'За яким критерієм має бути відсортований Product Backlog', answer: 'бізнесу' },
  { type: 'radio', search: 'За що відповідає тестер в Scrum команді', answer: 'Scrum' },
  { type: 'checkbox', search: 'За що відповідає тестер в Scrum команді', answer: 'Scrum' },
  { type: 'radio', search: 'В який момент відбувається Sprint Retrospective', answer: 'Спрінта' },
  { type: 'checkbox', search: 'В який момент відбувається Sprint Retrospective', answer: 'Спрінта' },
  { type: 'radio', search: 'За яких умов може бути скасований Sprint', answer: 'На вимогу' },
  { type: 'checkbox', search: 'За яких умов може бути скасований Sprint', answer: 'На вимогу' },
  { type: 'radio', search: 'Хто відповідає за визначення продуктивності проекту (Project’s performance)', answer: 'The Product Owner' },
  { type: 'checkbox', search: 'Хто відповідає за визначення продуктивності проекту (Project’s performance)', answer: 'The Product Owner' },
  { type: 'radio', search: 'What does a BurnDown Chart display', answer: 'Кількість роботи' },
  { type: 'checkbox', search: 'What does a BurnDown Chart display', answer: 'Кількість роботи' },
  { type: 'radio', search: 'Коли закінчується Sprint в Scrum', answer: 'По завершенні відведеного' },
  { type: 'checkbox', search: 'Коли закінчується Sprint в Scrum', answer: 'По завершенні відведеного' },
  { type: 'radio', search: 'Що відбувається, коли по закінченню ітерації виконані не всі елементи', answer: 'Спрінт закінчується' },
  { type: 'checkbox', search: 'Що відбувається, коли по закінченню ітерації виконані не всі елементи', answer: 'Спрінт закінчується' },
  { type: 'radio', search: 'Який рекомендований розмір Development команди', answer: '6+-3' },
  { type: 'checkbox', search: 'Який рекомендований розмір Development команди', answer: '6+-3' },
  { type: 'radio', search: 'Яка діяльність не обмежена в часі', answer: 'Product Backlog Refinement' },
  { type: 'checkbox', search: 'Яка діяльність не обмежена в часі', answer: 'Product Backlog Refinement' },
  { type: 'checkbox', search: 'Назвіть три речі на яких зосереджена увага гнучких методологій управління', answer: ['Впорядкований хаос', 'Довіра', 'Люди'] },
  { type: 'checkbox', search: 'Що відноситься до принципів Agile Project Management', answer: ['Deliver', 'Building', 'Simplify'] },
  { type: 'checkbox', search: 'Що є ключовими характеристиками структури команди з точки зору Agile', answer: ['Самоорганізація', 'Невеликий розмір', 'Ротація ролей'] },
  { type: 'checkbox', search: 'Основними пунктами відповідальності замовника', answer: ['Бачення', 'Створення', 'Пріоритизація'] },
  { type: 'checkbox', search: 'Добре організований процес планування', answer: ['Зменшує', 'Сприяє', 'Закладає'] },
  { type: 'checkbox', search: 'З точки зору теорії лідерства в Agile важливими характеристиками', answer: ['Співпраця', 'Фасилітація', 'Коучинг'] },
  { type: 'checkbox', search: 'Що необхідно для успішного впровадження Agile', answer: ['Дисципліна', 'Розміщення', 'Організаційна'] },
  { type: 'checkbox', search: 'На що необхідно звернути увагу при виборі пілотного проекту при', answer: ['Розмір', 'Тривалість', 'Зацікавленість'] },
  { type: 'checkbox', search: 'Як має вчинити команда розробників', answer: ['Поінформувати', 'Обговорити'] },
  { type: 'checkbox', search: 'What are the main responsibilities of', answer: ['Робота над елементами', 'Оцінювання елементів', 'Керувати задачами'] },
  { type: 'checkbox', search: 'За що відповідає Scrum Master', answer: ['Усунення перешкод', 'Організація та', 'Консультує команду'] },
  { type: 'checkbox', search: 'Що відбувається під час Sprint Review Meeting', answer: ['Демонстрація тог', 'Стейкхолдерам подається'] },
  { type: 'checkbox', search: 'Які дії є частиною процесу Product Backlog Refinement', answer: ['Оцінювання', 'Впорядкування', 'Обговорення'] },
  { type: 'checkbox', search: 'Хто з перелічених є головними дійовими особами', answer: ['50%Scrum', '50%Produc'] },
  { type: 'radio', search: 'Як називається класичний життєвий цикл розробки програмного', answer: 'Каскадна модель' },
  { type: 'checkbox', search: 'Як називається класичний життєвий цикл розробки програмного', answer: 'Каскадна модель' },
  { type: 'radio', search: 'перший етап роботи в Каскадній моделі розробки ПЗ', answer: 'Визначення завдання' },
  { type: 'checkbox', search: 'перший етап роботи в Каскадній моделі розробки ПЗ', answer: 'Визначення завдання' },
  { type: 'radio', search: 'програми у коротких циклах розробки', answer: 'Екстремальне' },
  { type: 'checkbox', search: 'програми у коротких циклах розробки', answer: 'Екстремальне' },
  { type: 'radio', search: 'Extreme Programming Explained', answer: 'Кент Бек' },
  { type: 'checkbox', search: 'Extreme Programming Explained', answer: 'Кент Бек' },
  { type: 'radio', search: 'одним робочим', answer: 'Парне' },
  { type: 'checkbox', search: 'одним робочим', answer: 'Парне' },
  { type: 'radio', search: 'розпочинається процес розробки ПЗ', answer: 'Аналіз вимог' },
  { type: 'checkbox', search: 'розпочинається процес розробки ПЗ', answer: 'Аналіз вимог' },
  { type: 'radio', search: 'порівнянні з попереднім релізом', answer: 'Екстремальне' },
  { type: 'checkbox', search: 'порівнянні з попереднім релізом', answer: 'Екстремальне' },
  { type: 'radio', search: 'роботою в штучно створених ситуаціях', answer: 'Тестування' },
  { type: 'checkbox', search: 'роботою в штучно створених ситуаціях', answer: 'Тестування' },
  { type: 'radio', search: 'після його вводу до експлуатації', answer: 'Супровід' },
  { type: 'checkbox', search: 'після його вводу до експлуатації', answer: 'Супровід' },
  { type: 'radio', search: 'сторони та є голосом клієнта', answer: 'Product Owner' },
  { type: 'checkbox', search: 'сторони та є голосом клієнта', answer: 'Product Owner' },
  { type: 'radio', search: 'Що з переліченого є системою управління проектами', answer: 'Trello' },
  { type: 'checkbox', search: 'Що з переліченого є системою управління проектами', answer: 'Trello' },
  { type: 'radio', search: 'інформації про якість продукту відносно контексту', answer: 'Тестування' },
  { type: 'checkbox', search: 'інформації про якість продукту відносно контексту', answer: 'Тестування' },
  { type: 'radio', search: 'визначити чи задовольняють результати поточного етапу розробки', answer: 'Верифікація' },
  { type: 'checkbox', search: 'визначити чи задовольняють результати поточного етапу розробки', answer: 'Верифікація' },
  { type: 'radio', search: 'Основною метрикою Аgile методів є', answer: 'Робочий продукт' },
  { type: 'radio', search: 'який має список вимог до функціональності', answer: 'Product backlog' },
  { type: 'radio', search: 'НЕ є методологією гнучкої розробки програмного', answer: 'Водоспадна модель' },
  { type: 'radio', search: 'НЕМАЄ при каскадній моделі розробки', answer: 'Аналіз' },
  { type: 'radio', search: 'НЕМАЄ в scrum-команді', answer: 'Consulting Experts' },
  { type: 'radio', search: 'Часовий відрізок тривалістю місяць або менше', answer: 'Спринт' },
  { type: 'radio', search: 'Упорядкований список відомих вимог до продукту при управлінні', answer: 'Product backlog' },
  { type: 'radio', search: 'Прогноз Команди Розробників про те, яка функціональність', answer: 'Sprint backlog' },
  { type: 'radio', search: 'Сума завершених під час спринту елементів Беклога Продукту', answer: 'Інкремент' },
  { type: 'radio', search: 'Що є результатом роботи на початковому етапі при розробці ПЗ по', answer: 'Технічне' },
  { type: 'radio', search: 'Крайній термін виконання поставленої задачі при розробці', answer: 'Дедлайн' },
  { type: 'radio', search: 'Щоденна зустріч команди при управлінні проектом методикою Scrum', answer: 'Daily Scrum' },
  { type: 'radio', search: 'Багатофункціональна команда з фахівців, яка працює над продуктом', answer: 'Scrum Team' },
  { type: 'radio', search: 'Візуальне відображення робочого процесу при управлінні', answer: 'Скрам-доска' },
  { type: 'radio', search: 'Життєвий цикл ПЗ', answer: 'сукупність окремих етапів робіт' },
  { type: 'select', search: 'Життєвий цикл ПЗ', answer: 'сукупність окремих етапів робіт' },

  { type: 'select', search: 'Проектування ПЗ', answer: 'процес визначення архітектури' },
  { type: 'select', search: 'Конструювання ПЗ', answer: 'детальне створення робочого' },
  { type: 'select', search: 'Тестування ПЗ', answer: 'процес технічного дослідження' },
  { type: 'select', search: 'Тестування ПЗ', answer: 'модифікація програмного' },
  { type: 'input', search: 'відповідає за кінцевий продукт, знає', answer: 'Product' },
  { type: 'input', search: 'ця людина слідкує за тим, щоб принципи скрама', answer: 'Scrum' },
  { type: 'input', search: 'багатофункціональна команда спеціалістів, яка працює над', answer: 'Team' },
  { type: 'input', search: 'опис вимог до продукту з точки зору запиту користувачів', answer: 'User' },
  { type: 'input', search: 'це пріоритезований набір користувацьких історій', answer: 'Backlog' },
  { type: 'input', search: 'це цикл виконання задач (ітерація)', answer: 'Спринт' },
  { type: 'input', search: 'візуальне відображення робочого процесу', answer: 'дошка' },
  { type: 'input', search: 'Методологія розробки програмного забезпечення', answer: 'Agile' },

  { type: 'select', search: 'Forming', answer: '1' },
  { type: 'select', search: 'Storming', answer: '2' },
  { type: 'select', search: 'Norming', answer: '3' },
  { type: 'select', search: 'Performing', answer: '4' },

  { type: 'select', search: 'Валідація', answer: 'Забезпечення відповідності' },
  { type: 'select', search: 'Верифікація', answer: 'Перевірка правильності трансформації' },
  { type: 'select', search: 'Агрегація', answer: 'кількох понять у нове поняття' },

  { type: 'select', search: 'Каскадна модель', answer: 'в якій кожен етап роботи виконується лише раз' },
  { type: 'select', search: 'Спіральна модель', answer: 'яка дозволяє повертатися до будь-якого попереднього етапу' },
  { type: 'select', search: 'Еволюційна модел', answer: 'в якій система послідовно розробляється з блоків' },

  { type: 'select', search: 'Rational Unified Process', answer: 'Методологія, що пропонує ітеративну модель розроблення' },
  { type: 'select', search: 'Agile', answer: 'Клас методологій розроблення програмного забезпечення на основі ітеративної' },
  { type: 'select', search: 'eXtreme Programming', answer: 'що приділяє основну увагу ефективній комунікації між замовником' },

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

  { type: 'select', search: 'Представляє зацікавлені сторони та є голосом клієнта', answer: 'Власник Продукту' },
  { type: 'select', search: 'Відповідальний за спроможність команди виконати поставлені цілі', answer: 'Керівник' },
  { type: 'select', search: 'Відповідальні за розробку потенційно готових частин продукту в кінці кожного', answer: 'Команда розробників' },
  { type: 'select', search: 'Особи, які ініціюють проект і, для кого проект буде приносити вигоду', answer: 'Stakeholders' },

  { type: 'select', search: 'Метод тестування програмного забезпечення, який полягає в окремому', answer: 'Модульне тестування' },
  { type: 'select', search: 'Тестування програмного забезпечення, спрямоване на виявлення помилок', answer: 'Регресивне тестування' },
  { type: 'select', search: 'Інтенсивне використання майже готової версії продукту з метою виявлення', answer: 'Бета-тестування' },
  { type: 'select', search: 'Дослідження, що виконується з метою визначення зручності деякого штучного', answer: 'Юзабіліті-тестування' }
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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)

      if (!answerNode) return
      if (answerNode.nodeName !== 'LABEL') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      // Result
      answerNode.click()
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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      // AnswerNode
      var firstAnswerNode = findParentNodeByText(answer[0], questionNode.parentNode, exeptions)
      if (!firstAnswerNode) return
      if (firstAnswerNode.nodeName !== 'LABEL') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      // Result
      answer.forEach(item => {
        var answerNode = findParentNodeByText(item, questionNode.parentNode, exeptions)

        if (!answerNode) return
        answerNode.click()
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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = questionNode.parentNode.querySelector('input[type="text"]')
      if (!answerNode) return

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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      // AnswerNode
      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)

      if (!answerNode || answerNode.nodeName !== 'OPTION') {
        exeptions.push(questionNode)
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