(function () {
  // ============================================================
  // Answers array
  // ============================================================
  let answers = [
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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)
      console.log(answerNode)
      if (!answerNode) return
      if (answerNode.nodeName !== 'LABEL') {
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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      var firstAnswerNode = findParentNodeByText(answer[0], questionNode.parentNode, exeptions)

      if (!firstAnswerNode) return

      if (firstAnswerNode.nodeName !== 'LABEL') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      answer.forEach(item => {
        var answerNode = findParentNodeByText(item, questionNode.parentNode, exeptions)

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
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

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

      if (!questionNode) return
      if (questionNode.nodeName === 'SCRIPT') {
        exeptions.push(questionNode)
        fill(search, answer)
        return
      }

      exeptions.push(questionNode)

      var answerNode = findParentNodeByText(answer, questionNode.parentNode, exeptions)

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
  return 'Yeap!'
})()