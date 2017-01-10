import a from './style.useable.less'
import './dd.less'
import client from 'utils/client.es6'

var container = document.getElementById('container')

container.innerHTML = 'Hello world!'
container.addEventListener('click', function() {
  client.send('open-file')
})

client.on('opened-file', (event, filePath) => console.log('filePath', filePath))
