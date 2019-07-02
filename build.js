const fs = require('fs')
const path = require('path')

const HOST = 'https://dimasion2010.000webhostapp.com'

fs.readFile('./core.js', 'utf-8', function read(err, data) {
  if (err) { throw err; }
  const coreScript = data


  readFiles('answers')
    .then(files => {
      files.forEach(item => {
        const script = coreScript.replace('let answers = []', item.contents)
        createScript(item.filename, script)
        createTxt(item.filename, HOST)
      })
    })
    .catch( error => {
      console.log( error )
    })
})

function createScript (subject, content) {
  if (!fs.existsSync(subject)) {
    fs.mkdirSync(subject)
  }

  const name = `./${subject}/${subject}_script.js`

  fs.writeFile(name, content, (err) => {
    if (err) throw err;
    console.log(`${name} has been created!`)
  });
}


function createTxt (subject, host) {
  if (!fs.existsSync(subject)) {
    fs.mkdirSync(subject)
  }

  const text = `document.body.appendChild(document.createElement("script")).setAttribute('src', '${host}/${subject}_script.js')`
  const name = `./${subject}/${subject}_append.txt`

  fs.writeFile(name, text, 'utf-8', (err) => {
    if (err) throw err;
    console.log(`${name} has been created!`)
  });
}
/**
 * Promise all
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 */
function promiseAllP(items, block) {
  var promises = [];
  items.forEach(function(item, index) {
    promises.push(
      (function(item, i) {
        return new Promise(function(resolve, reject) {
          return block.apply(this, [item, index, resolve, reject]);
        });
      })(item, index)
    );
  });
  return Promise.all(promises);
} //promiseAll

/**
 * read files
 * @param dirname string
 * @return Promise
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @see http://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
 */
function readFiles(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, function(err, filenames) {
      if (err) return reject(err);
      promiseAllP(filenames, (filename, index, resolve, reject) => {
        fs.readFile(path.resolve(dirname, filename), "utf-8", function(
          err,
          content
        ) {
          if (err) return reject(err);
          return resolve({ filename: path.basename(filename, '.js'), contents: content });
        });
      })
        .then(results => {
          return resolve(results);
        })
        .catch(error => {
          return reject(error);
        });
    });
  });
}
