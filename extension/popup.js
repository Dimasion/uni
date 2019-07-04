const subjects = [{"src":"https://dimasion2010.000webhostapp.com/ditko_script.js","name":"ditko"},{"src":"https://dimasion2010.000webhostapp.com/pashkevich_script.js","name":"pashkevich"},{"src":"https://dimasion2010.000webhostapp.com/stislo_script.js","name":"stislo"},{"src":"https://dimasion2010.000webhostapp.com/stislo_int_script.js","name":"stislo_int"}]

subjects.forEach(subject => {
  document.querySelector('body').insertAdjacentHTML('afterend', `
    <button class='button js-button' data-script='${subject.src}'>${subject.name}</button>
  `)
})

const buttons = document.querySelectorAll('.js-button')
buttons.forEach(button => {
  button.onclick = function(element) {
    let script = button.dataset.script;

    buttons.forEach(btn => btn.disabled = true)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {
            code: `
              var script = document.querySelector('[src="${script}"]')

              if (script) script.remove();

              document.body
                .appendChild(document.createElement("script"))
                .setAttribute('src', '${script}')
            `
          }, function () {
            buttons.forEach(btn => btn.disabled = false)
          });
    });
  };
})