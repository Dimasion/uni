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
  { type: 'radio', search: 'Новація — це', answer: 'продукт інтелектуальної діяльності людей, оформлений результат фундаментальних, прикладних чи експериментальних досліджень у будь-якій сфері людської діяльності, спрямований на підвищення її ефективності' },
  { type: 'radio', search: 'Інновація — це', answer: 'кінцевий метод, принцип, новий порядок, винахід, новий продукт, процес, якісно відмінний від попереднього аналога, що є результатом інтелектуальної діяльності, закінчених наукових досліджень і розробок' },
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
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'radio', search: '', answer: '' },
  { type: 'checkbox', search: 'Який з нижче перелічених не є методом шифрування', answer: ['Паралельний', 'послідовний'] },
  { type: 'input', search: 'міра недоторканості розподілу', answer: 'Інформація' },
  { type: 'select', search: 'цінності та достовірності отриманої інформації', answer: 'Актуальність' },
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