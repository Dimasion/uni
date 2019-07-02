(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
    { type: 'radio', search: 'Які файлові системи забезпечують зберігання файлів шляхом їх розподілу між', answer: 'клас' },
    { type: 'radio', search: 'Що таке інформація', answer: 'усі відповіді правильні' },
    { type: 'radio', search: 'Достовірність - це', answer: 'реальності' },
    { type: 'radio', search: 'Актуальність - це', answer: 'достовірності' },
    { type: 'radio', search: 'Конфіденційність - це', answer: 'ознайомлення' },
    { type: 'radio', search: 'Цілісність - це', answer: 'знищення' },
    { type: 'radio', search: 'Доступність - це', answer: 'блокування' },
    { type: 'radio', search: 'Спостережність - це', answer: 'захисту' },
    { type: 'radio', search: 'Інформаційно-телекомунікаційна система', answer: 'організаційно-технічна' },
    { type: 'radio', search: 'Що таке стенографія?', answer: 'спосіб шифрування' },
    { type: 'radio', search: 'Комп\'ютерна система - це', answer: 'оцінювання' },
    { type: 'radio', search: 'Обчислювальна система - цe', answer: 'обробки' },
    { type: 'radio', search: 'Автоматизована система - цe', answer: 'інформаційну' },
    { type: 'radio', search: 'Скільки існує класифікацій автоматизованих систем', answer: '3' },
    { type: 'radio', search: 'АС-1', answer: 'одномашинний' },
    { type: 'radio', search: 'АС-2', answer: 'локалізований' },
    { type: 'radio', search: 'АС-3', answer: 'розподілений' },
    { type: 'radio', search: 'інформації в Україні', answer: 'правильні' },
    { type: 'radio', search: '"інші держави"', answer: 'зовнішньополітичній' },
    { type: 'radio', search: '"політичні партії"', answer: 'владу' },
    { type: 'radio', search: '"злочинні угрупування"', answer: 'шкоди' },
    { type: 'radio', search: '"суб\'єкти підприємницької діяльності"', answer: 'конкурентній' },
    { type: 'radio', search: '"окремі фізичні особи"', answer: 'винагород' },
    { type: 'radio', search: '"навмисні та ненавмисні', answer: 'примушення' },
    { type: 'radio', search: '"стихійні лиха', answer: 'мотивації' },
    { type: 'radio', search: 'основні завдання захисту інформації', answer: 'правильні' },
    { type: 'radio', search: 'Основні засоби протидії загрозам безпеки', answer: 'правильні' },
    { type: 'radio', search: 'Правові засоби захисту інформації - це', answer: 'законодавчо-права' },
    { type: 'radio', search: 'Морально-етичні засоби', answer: 'засоби протидії' },
    { type: 'radio', search: 'Організаційні (адміністративні) засоби', answer: 'організаційного' },
    { type: 'radio', search: 'Фізичні засоби захисту', answer: 'ґрунтуються' },
    { type: 'radio', search: 'Технічні засоби захисту інформації', answer: 'засоби захисту' },
    { type: 'radio', search: 'Відкрита інформація', answer: 'радіомовлення' },
    { type: 'radio', search: 'Інформація з обмеженим доступом', answer: 'обмежено' },
    { type: 'radio', search: 'На скільки категорій поділяється інформація з обмеженим доступом', answer: '2' },
    { type: 'radio', search: 'Конфіденційна інформація - це', answer: 'держава' },
    { type: 'radio', search: 'Таємна інформація - це', answer: 'державну' },
    { type: 'radio', search: 'Скільки існує ступеней секретності', answer: '4' },
    { type: 'radio', search: 'Які існують ступені секретності', answer: 'правильні' },
    { type: 'radio', search: 'Політика безпеки організації - це', answer: 'принципів' },
    { type: 'radio', search: 'Від яких чинників залежить політика безпеки', answer: 'правильні' },
    { type: 'radio', search: 'Зі скількох розділів складається політика', answer: '2' },
    { type: 'radio', search: 'У якому році була закінчена розробка міжнародного стандарту', answer: '1999' },
    { type: 'radio', search: 'Скільки компонентів містять у собі вимоги-ІТ', answer: '3' },
    { type: 'radio', search: 'Які компоненти містять у собі вимоги-ІТ', answer: 'правильні' },
    { type: 'radio', search: '"Кільця захисту"', answer: '4' },
    { type: 'radio', search: 'У "Кільцях захисту" який рівень є найбільш', answer: 'рівень-0' },
    { type: 'radio', search: 'У "Кільцях захисту" який рівень є найменш', answer: 'рівень-3' },
    { type: 'radio', search: '"Оранжева книга"', answer: 'стандарт' },
    { type: 'radio', search: '"Оранжевої книги"', answer: '6' },
    { type: 'radio', search: 'Що таке стенографія', answer: 'шифрування' },
    { type: 'radio', search: 'Що таке криптографія', answer: 'математичні' },
    { type: 'radio', search: 'биті пікселі', answer: 'PNG' },
    { type: 'radio', search: 'Що таке шифрування даних', answer: 'приховування' },
    { type: 'radio', search: 'Що таке розшифрування даних', answer: 'читання' },
    { type: 'radio', search: 'Що таке дешифрування', answer: 'отримання' },
    { type: 'radio', search: 'Що є недоліком симетричного шифрування', answer: 'тримати' },
    { type: 'radio', search: 'Що є недоліком асиметричного шифрування', answer: 'довгі' },
    { type: 'radio', search: 'Що є перевагою симетричного шифрування', answer: 'короткі' },
    { type: 'radio', search: 'Який з приведених нижче не є видом захисту інформації', answer: 'Гуманітарний' },
    { type: 'radio', search: 'Якого числа "Міжнародний', answer: 'листопада' },
    { type: 'radio', search: 'Яка з властивостей не є властивісю інформації', answer: 'Недоторканість' },
    { type: 'radio', search: 'Виберіть якої з файлових систем не існує', answer: 'Каскадна' },
    { type: 'radio', search: 'Які файлові системи найбільш використовувані на даний час', answer: 'Ієрархічні' },
    { type: 'radio', search: 'Які файлові системи не використовують каталоги', answer: 'Плоскі' },
    { type: 'radio', search: 'Які файлові системи забезпечують механізми доступу', answer: 'мережеві' },
    { type: 'radio', search: 'Чи є назви файлів в Microsoft Windows', answer: 'Ні' },
    { type: 'radio', search: 'Які файлові системи забезпечують зберігання файлів шляхом їх розподілу між кількома', answer: 'Розподілені' },
    { type: 'radio', search: 'Які файлові мережі дозволять розподіляти файли між кількома однотипними', answer: 'Кластерні' },
    { type: 'radio', search: 'Що таке шифрування', answer: 'неавторизованих' },
    { type: 'radio', search: 'Чи є різниця між дешифруванням та розшифруванням', answer: 'Так' },
    { type: 'radio', search: 'Які існують методи шифрування', answer: 'Симетричні' },
    { type: 'radio', search: 'В чому полягає суть LSB методу', answer: 'останніх значущих' },
    { type: 'radio', search: 'Що не є об’єктом захисту IC', answer: 'Персонал' },
    { type: 'radio', search: 'Мережева плата це', answer: 'Периферійний' },
    { type: 'radio', search: 'В чому визначається частота процесора', answer: 'МГц' },
    { type: 'radio', search: 'Апаратне забезпечення ПК', answer: 'Комплекс' },
    { type: 'radio', search: 'Напрямки у стеганографії:', answer: 'Класична' },
    { type: 'checkbox', search: 'Інформація з обмеженим доступом поділяється на 2 категорії', answer: ['конфіденційна', 'таємна'] },
    { type: 'checkbox', search: 'Є два види інформації', answer: ['відкрита', 'обмеженим'] },
    { type: 'checkbox', search: 'Який з нижче перелічених не є методом шифрування', answer: ['Паралельний', 'послідовний'] },
    { type: 'checkbox', search: 'З яких розділів складається політика безпеки', answer: ['Загальні', 'захисту'] },
    { type: 'checkbox', search: 'Вкажіть властивості інофрмації', answer: ['достовірність', 'доступність', 'конфіденційність'] },
    { type: 'checkbox', search: 'Класифікація автоматизованих систем', answer: ['АС-1', 'АС-2', 'АС-3'] },
    { type: 'checkbox', search: 'джерела "Інші держави"', answer: ['зовнішньополітичних', 'зовнішньоекономічних', 'військових'] },
    { type: 'checkbox', search: 'джерела "Політичні партії"', answer: ['політичній', 'владу', 'військовій'] },
    { type: 'checkbox', search: 'джерела "Злочинні угруповування"', answer: ['політичних', 'економічних', 'шкоди'] },
    { type: 'checkbox', search: 'джерела "Суб\'єкти підприємницької діяльності"', answer: ['конкурентній', 'економічні', 'економічних'] },
    { type: 'checkbox', search: 'джерела "Фізичні особи"', answer: ['самоствердження', 'економічних', 'нагород'] },
    { type: 'checkbox', search: 'джерела "Помилки персоналу"', answer: ['зрада', 'пришумлення', 'образа'] },
    { type: 'checkbox', search: 'джерела "Стихійні лиха', answer: ['Ефект', 'Масштаб', 'Зміщення'] },
    { type: 'checkbox', search: 'Point мають розширення', answer: ['ppt', 'pptx'] },
    { type: 'checkbox', search: 'вікна Microsoft Excel', answer: ['адрес', 'формул', 'область'] },
    { type: 'input', search: 'форми їх подання', answer: 'Інформація' },
    { type: 'input', search: 'відомості за допомогою яких', answer: 'Інформація' },
    { type: 'input', search: 'міра недоторканості розподілу', answer: 'Інформація' },
    { type: 'input', search: 'універсальна субстанція', answer: 'Інформація' },
    { type: 'input', search: 'документовані або публічно', answer: 'Інформація' },
    { type: 'input', search: 'тайнопис при якому повідомлення', answer: 'Стеганографія' },
    { type: 'input', search: 'швидкісне письмо', answer: 'Стеганографія' },
    { type: 'input', search: 'про математичні методи', answer: 'Криптографія' },
    { type: 'input', search: 'набір слайдів', answer: 'Презентація' },
    { type: 'input', search: 'алгоритмічне перетоврення', answer: 'Шифрування' },
    { type: 'input', search: 'процес несанкціонованого отримування', answer: 'Дешифрування' },
    { type: 'input', search: 'процес санкціонованого перетворення', answer: 'Розшифрування' },
    { type: 'input', search: 'вид підпису', answer: 'Електронний цифровий підпис' },
    { type: 'input', search: 'апаратний засіб,', answer: 'Електронний ключ' },
    { type: 'input', search: 'стандартна файлова система', answer: 'NTFS' },
    { type: 'input', search: 'пояснюють інші дані', answer: 'Метадані' },
    { type: 'checkbox', search: 'Вкажіть формати даних', answer: ['агальний', 'Числовий', 'Дата'] },
    { type: 'select', search: 'визначається можливістю забезпечення досягнення', answer: 'Цінність інформації' },
    { type: 'select', search: 'відповідність отриманої інформації реальності навколишнього', answer: 'Достовірність' },
    { type: 'select', search: 'цінності та достовірності отриманої інформації', answer: 'Актуальність' },
    { type: 'select', search: 'інформації бути захищеною від несанкціоновваного', answer: 'Конфіденційність' },
    { type: 'select', search: 'Властивість інформації бути захищеною від несанкціонованої зміни', answer: 'Цілісність' },
    { type: 'select', search: 'інформації бути захищеною від несанкціонованого', answer: 'Доступність' },
    { type: 'select', search: 'весь час знаходитись під контролем системи захисту', answer: 'Спостережність' },
    { type: 'select', search: 'Організаційно-технічна система, що реалізує', answer: 'Інформаційно-телекомунікаційна система' },
    { type: 'select', search: 'сукупність програмно-апаратних засобів, які подають', answer: 'Комп\'ютерна система' },
    { type: 'select', search: 'Сукупність програмно-апаратних засобів, призначених', answer: 'Обчислювальна система' },
    { type: 'select', search: 'Організаційно-технічна система, що реалізує інформаційну', answer: 'Автоматизована система' },
    { type: 'select', search: 'локалізований багатомашинний', answer: 'Локальна обчислювальна система' },
    { type: 'select', search: 'розподілений багатомашинний багатокористувацький', answer: 'АС-1' },
    { type: 'select', search: 'Це така інформація, права доступу до якої', answer: 'Інформація з обмеженим доступом' },
    { type: 'select', search: 'З обмеженим доступом, якою володіють,користуються', answer: 'Конфіденційна інформація' },
    { type: 'select', search: 'З обмеженим доступом, яка містить відомості', answer: 'Таємна інформація' },
    { type: 'select', search: 'Така,яка грунтується на порівнянні внутрішніми засобами', answer: 'Мандатна політика' },
    { type: 'select', search: 'Така, коли прийняття рішення про допуск до інформації', answer: 'Дискреційна політика' },
    { type: 'select', search: 'APE', answer: 'профілю захисту' },
    { type: 'select', search: 'ASE', answer: 'завдання безпеки' },
    { type: 'select', search: 'ADV', answer: 'проектування' },
    { type: 'select', search: 'ALC', answer: 'підтримки життєвого циклу' },
    { type: 'select', search: 'ACM', answer: 'керування конфігурацією' },
    { type: 'select', search: 'AGD', answer: 'посібника користувача та адміністратора' },
    { type: 'select', search: 'ATE', answer: 'до тестування' },
    { type: 'select', search: 'AVA', answer: 'до оцінки вразливостей' },
    { type: 'select', search: 'ADO', answer: 'до постачання та експлуатації' },
    { type: 'select', search: 'AMA', answer: 'до підтримки довіри після' },
    { type: 'select', search: 'FAU', answer: 'до сервісу аудиту' },
    { type: 'select', search: 'FIA', answer: 'до ідентифікації та автентифікації' },
    { type: 'select', search: 'ARU', answer: 'до використання ресурсів' },
    { type: 'select', search: 'FAU_SEL', answer: 'Вимоги до засобів відбору подій для аудиту' },
    { type: 'select', search: 'FAU_STG', answer: 'Визначаэ вимоги до зберігання даних аудиту' },
    { type: 'select', search: 'FAU_SAR', answer: 'Права на повне або часткове читання журналів реєстраційної' }
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

      if (!answerNode) return
      if (answerNode.nodeName !== 'OPTION') {
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