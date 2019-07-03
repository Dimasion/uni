(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
  { type: 'radio', search: 'Довгий Хвіст', answer: 'Продаж великої кількості найменувань товарів' },
  { type: 'select', search: 'Довгий Хвіст', answer: 'Продаж великої кількості найменувань товарів' },
  { type: 'checkbox', search: 'Довгий Хвіст', answer: ['Продаж великої кількості найменувань товарів', 'озаземні цивілізації'] },
  { type: 'input', search: 'Продаж великої кількості найменувань товарів', answer: 'Довгий Хвіст' },
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
      exeptions.push(questionNode)

      if (!questionNode) return
      if (questionNode.nodeName === 'SCRIPT') {
        fill(search, answer)
        return
      }

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
      exeptions.push(questionNode)

      if (!questionNode) return
      if (questionNode.nodeName === 'SCRIPT') {
        fill(search, answer)
        return
      }

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
      exeptions.push(questionNode)

      if (!questionNode) return
      if (questionNode.nodeName === 'SCRIPT') {
        fill(search, answer)
        return
      }

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
      exeptions.push(questionNode)

      if (!questionNode) return
      if (questionNode.nodeName === 'SCRIPT') {
        fill(search, answer)
        return
      }

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