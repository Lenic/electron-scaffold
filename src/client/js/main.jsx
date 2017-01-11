import a from './style.useable.less'
import './dd.less'
import exec from 'utils/client.es6'

var container = document.getElementById('container')

container.innerHTML = '点我打开文件'
container.addEventListener('click', function () {
  exec({
    $type: 'open_file'
  }).then(
    v => console.log('filePath', v)
  )
})
