(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
    { type: 'radio', search: 'Достовірність це', answer: 'відповідність отриманої інформації' },
    { type: 'checkbox', search: 'Є два види інформації', answer: ['відкрита', 'з обмеж'] },
    { type: 'input', search: 'відомість про щось незалежно від форми', answer: 'Галя' },
    { type: 'select', search: 'Цілісність інформації', answer: 'визначається можливістю забез' },
    { type: 'select', search: 'Достовірність', answer: 'відповідність отриманої інфо' },
    { type: 'select', search: 'конфіденційність', answer: 'властивість інформації бути' }
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
      var questionNode = findParentNodeByText(search)
      var answerNode = findParentNodeByText(answer, questionNode.parentNode)

      if (!answerNode) return
      var isRadio = true

      if (answerNode.htmlFor && !/^\d/.test(answerNode.htmlFor)) {
        isRadio = document.querySelector('#' + answerNode.htmlFor).type === 'radio'
      }

      if (answerNode.nodeName !== 'INPUT' && !isRadio) {
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
      var questionNode = findParentNodeByText(search)
      var firstAnswerNode = findParentNodeByText(answer[0], questionNode.parentNode)

      if (!firstAnswerNode) return
      var isCheckbox = true

      if (firstAnswerNode.htmlFor && !/^\d/.test(firstAnswerNode.htmlFor)) {
        isCheckbox = document.querySelector('#' + firstAnswerNode.htmlFor).type === 'checkbox'
      }


      if (firstAnswerNode.nodeName !== 'INPUT' && !isCheckbox) {
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
      var questionNode = findParentNodeByText(search)
      var answerNode = questionNode.parentNode.querySelector('input')

      if (!answerNode) return
      if (answerNode.nodeName !== 'INPUT') {
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