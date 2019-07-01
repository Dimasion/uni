(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
    { type: 'radio', search: 'Достовірність це', answer: 'відповідність отриманої інформації' },
    { type: 'radio', search: 'яка мотивація джерела', answer: 'одержання переваг у зовніш' },
    { type: 'radio', search: 'Заявка на видачу патенту включає у себе', answer: 'Заяву, опис винаходу, формулу' },
    { type: 'radio', search: 'Коли була заснована Всесвітня', answer: '14 липня' },
    { type: 'radio', search: 'Коли була заснована Всесвітня', answer: '14 липня' },
    { type: 'radio', search: 'Коли була заснована Всесвітня', answer: '14 липня' },
    { type: 'radio', search: 'Коли була заснована Всесвітня', answer: '14 липня' },
    { type: 'radio', search: 'Які права належать до Всесвітньої організації інтелектуальної', answer: 'літературні, художні й наукові твори' },
    { type: 'checkbox', search: 'Є два види інформації', answer: ['відкрита', 'з обмеж'] },
    { type: 'checkbox', search: 'Об’єктом винаходу може', answer: ['продукт (пристрій, речовина', 'спосіб', 'застосування раніше відомого продукту'] },
    { type: 'input', search: 'відомість про щось незалежно від форми', answer: 'Інформація' },
    { type: 'input', search: 'це набір слайдів', answer: 'Презентація' },
    { type: 'input', search: 'процес несанкціонованого інформації', answer: 'Дешифрування' },
    { type: 'input', search: 'процес несанкціонованого інформації', answer: 'Дешифрування' },
    { type: 'input', search: 'право особи на результат інтелектуальної творчої діяльності або на', answer: 'Інтелектуальна власність' },
    { type: 'select', search: 'Цілісність інформації', answer: 'визначається можливістю забез' },
    { type: 'select', search: 'Достовірність', answer: 'відповідність отриманої інфо' },
    { type: 'select', search: 'конфіденційність', answer: 'властивість інформації бути' },
    { type: 'select', search: 'ліцензія', answer: 'не виключає можливості використання ліцензіаром' }
  ]


  // ============================================================
  // Main function
  // ============================================================
  function testIt () {
    answers.forEach(item => {
      var answer = item.answer
      var search = item.search

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

      var text = textNode.textContent
      if (!text) return
      if (text.toLowerCase().includes(search.toLowerCase())) {
        parentNode = parent
      }
    });

    return parentNode
  }

  // ============================================================
  // Radio
  // ============================================================
  function fillRadio (search, answer) {
    if (!answer) return
    let exeptions = []

    return (function fill() {
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      var answerNode = findParentNodeByText(answer, questionNode.parentNode)

      if (!answerNode) return
      var isRadio = true

      if (answerNode.htmlFor && !/^\d/.test(answerNode.htmlFor)) {
        isRadio = document.querySelector('#' + answerNode.htmlFor).type === 'radio'
      }

      console.log(answerNode, isRadio)

      if (answerNode.nodeName !== 'LABEL' && !isRadio) {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      answerNode && answerNode.click()
    })()
  }

  // ============================================================
  // Checkboxes
  // ============================================================
  function fillCheckbox (search, answer) {
    if (!answer) return
    let exeptions = []

    return (function fill() {
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      var firstAnswerNode = findParentNodeByText(answer[0], questionNode.parentNode)

      if (!firstAnswerNode) return
      var isCheckbox = true

      if (firstAnswerNode.htmlFor && !/^\d/.test(firstAnswerNode.htmlFor)) {
        isCheckbox = document.querySelector('#' + firstAnswerNode.htmlFor).type === 'checkbox'
      }

      if (firstAnswerNode.nodeName !== 'LABEL' && !isCheckbox) {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      answer.forEach(item => {
        var answerNode = findParentNodeByText(item, questionNode.parentNode)

        answerNode && answerNode.click()
      })
    })()
  }

  // ============================================================
  // Inputs
  // ============================================================
  function fillInput (search, answer) {
    if (!answer) return
    let exeptions = []

    return (function fill() {
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      var answerNode = questionNode.parentNode.querySelector('input')

      if (!answerNode) return
      var isText = true

      if (answerNode.htmlFor && !/^\d/.test(answerNode.htmlFor)) {
        isText = document.querySelector('#' + answerNode.htmlFor).type === 'text'
      }

      if (answerNode.nodeName !== 'INPUT' && !isText) {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      answerNode.value = answer
    })()
  }

  // ============================================================
  // Selects
  // ============================================================
  function fillSelect (search, answer) {
    if (!answer) return
    let exeptions = []

    return (function fill() {
      var questionNode = findParentNodeByText(search, null, exeptions)
      if (!questionNode) return
      var answerNode = findParentNodeByText(answer, questionNode.parentNode)

      if (!answerNode) return
      if (answerNode.nodeName !== 'OPTION') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      answerNode.setAttribute('selected', true)
    })()
  }

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
  // Run
  // ============================================================
  testIt()
})()