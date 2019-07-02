(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = []

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