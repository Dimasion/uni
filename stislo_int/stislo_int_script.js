(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
  { type: 'radio', search: 'заснована всесвітня організація', answer: 'липня' },
  { type: 'radio', search: 'права належать до всесвітньої', answer: 'фонограми й програми' },
  { type: 'radio', search: 'об\'єктами авторського', answer: 'твори науки' },
  { type: 'radio', search: 'основних принципів авторського', answer: 'невідчужуваність особистих немайнових' },
  { type: 'radio', search: 'принципів патентного права', answer: 'патенту виняткового права' },
  { type: 'radio', search: 'cпецифічні об\'єкти інтелектуальної', answer: '50' },
  { type: 'radio', search: 'специфічних об\'єктів інтелектуальної', answer: 'програми і компіляції' },
  { type: 'radio', search: 'надається правова охорона', answer: 'мікроорганізму' },
  { type: 'radio', search: 'поняття інтелектуальної власності', answer: 'суміжне' },
  { type: 'radio', search: 'без права власності', answer: 'ні' },
  { type: 'radio', search: 'про власність', answer: 'лютого' },
  { type: 'radio', search: 'році набрала чинності', answer: '1970' },
  { type: 'radio', search: 'що таке винахід', answer: 'сфері технології' },
  { type: 'radio', search: 'що таке пристрій', answer: 'штучно створена' },
  { type: 'radio', search: 'що таке штам', answer: 'однорідні культури' },
  { type: 'radio', search: 'що таке спосіб', answer: 'дій над матеріальним' },
  { type: 'radio', search: 'промисловий знак', answer: 'конструктивне вирішення' },
  { type: 'radio', search: 'видачу патенту', answer: 'реферат' },
  { type: 'radio', search: 'скільки часу', answer: '12' },
  { type: 'radio', search: 'патентний фонд', answer: 'матеріалів з питань' },
  { type: 'radio', search: 'патентна інформація', answer: 'відомств різних країн' },
  { type: 'radio', search: 'патентний бюлетень', answer: 'угод з питань' },
  { type: 'radio', search: 'міжнародна патентна класифікація', answer: 'відомств багатьох держав' },
  { type: 'radio', search: 'призначення міжнародна', answer: 'для уніфікованого' },
  { type: 'radio', search: 'зображальних елементів', answer: '1973' },
  { type: 'radio', search: 'чинності віденська', answer: 'серпня' },
  { type: 'radio', search: 'введена міжнародна', answer: '8 жовтня 1968' },
  { type: 'radio', search: 'інтелектуальна економіка', answer: 'галузь знань' },
  { type: 'radio', search: 'ринкова інтелектуальна', answer: 'змішана економіка' },
  { type: 'radio', search: 'бізнес - це', answer: 'комерціалізації' },
  { type: 'radio', search: 'формою власності', answer: 'приватним' },
  { type: 'radio', search: 'службові', answer: 'трудовому договорі' },
  { type: 'radio', search: 'службове', answer: 'роботодавця' },
  { type: 'radio', search: 'трудовий договір', answer: 'плату і забезпечувати' },
  { type: 'radio', search: 'програмний продукт', answer: 'тестувати' },
  { type: 'radio', search: 'таке програмне забезпечення', answer: 'всі програми' },
  { type: 'radio', search: 'таке продукт', answer: 'єдиному' },
  { type: 'radio', search: 'таке проектне завдання', answer: 'рамках' },
  { type: 'radio', search: 'таке проектне рішення', answer: 'достатнє' },
  { type: 'radio', search: 'проектний документ', answer: 'програмістам' },
  { type: 'radio', search: 'таке проектування', answer: 'неіснуючого' },
  { type: 'checkbox', search: 'винаходу може', answer: ['штам', 'спосіб', 'раніше'] },
  { type: 'checkbox', search: 'ринкового товару', answer: ['корисність', 'рідкість', 'універсальність'] },
  { type: 'checkbox', search: 'підходами', answer: ['дохідний', 'витратний', 'порівняльний'] },
  { type: 'checkbox', search: 'авторському', answer: ['сторони', 'територія', 'порядок'] },
  { type: 'checkbox', search: 'вирішити', answer: ['раптовому', 'ускладнень', 'попиту'] },
  { type: 'checkbox', search: 'придбання', answer: ['освоїти', 'знизити', 'зовнішньому'] },
  { type: 'checkbox', search: 'видами порушення', answer: ['плагіат', 'пірацтво', 'контрафакція'] },
  { type: 'checkbox', search: 'завданням ставить', answer: ['покращення', 'заохочення', 'модернізацію'] },
  { type: 'checkbox', search: 'дієві', answer: ['вихідний код', 'алгоритми', 'назву'] },
  { type: 'checkbox', search: 'комерційної', answer: ['50', 'від 2 до'] },
  { type: 'checkbox', search: 'характерні', answer: ['художня', 'технічна'] },
  { type: 'checkbox', search: 'нормативними', answer: ['цивільним', 'авторське'] },
  { type: 'checkbox', search: 'наведеного', answer: ['генеральна', 'конференція', 'комітет'] },
  { type: 'checkbox', search: 'немайнове', answer: ['авторство', 'недоторканість'] },

  { type: 'input', search: 'особи на результат', answer: 'Інтелектуальна власність' },
  { type: 'input', search: 'гуманітарній сфері', answer: 'Результат художньої творчості' },
  { type: 'input', search: 'представлених на ринку', answer: 'Об\'єкти промислової власності' },
  { type: 'input', search: 'меншою мірою', answer: 'Об\'єкти авторського права і суміжних прав' },
  { type: 'input', search: 'не стільки створені', answer: 'Комерційні позначення' },
  { type: 'input', search: 'принципово новий вид', answer: 'Винахід' },
  { type: 'input', search: 'у сфері продукції', answer: 'Корисна модель' },
  { type: 'input', search: 'невідомих раніше', answer: 'Наукове відкриття' },
  { type: 'input', search: 'секретною', answer: 'Комерційна пропозиція' },
  { type: 'input', search: 'комбінація', answer: 'Торговельна марка' },
  { type: 'input', search: 'їхнього створення', answer: 'Державна система інтелектуальної власності' },
  { type: 'input', search: 'експертних', answer: 'Установа' },
  { type: 'input', search: 'експертних', answer: 'Державна система правової охорони інтелектуальної власності' },
  { type: 'input', search: 'урядовий орган', answer: 'Державна служба інтелектуальної власності' },
  { type: 'input', search: 'охорона надається автоматично', answer: 'Принцип автоматичної охорони літературних та художніх творів' },
  { type: 'input', search: 'одержувати у всіх інших', answer: 'Принцип національного режиму охорони літературних та художніх творів' },
  { type: 'input', search: 'походження твору', answer: 'Принцип незалежності охорони' },
  { type: 'input', search: 'промисловий зразок', answer: 'Патент' },

  { type: 'select', answer: 'промисловий зразок', search: 'Патент' },
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