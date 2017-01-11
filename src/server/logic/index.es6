import register from 'utils/server.es6'

import FileHandler from './file-handler.es6'

module.exports = function () {
  register(FileHandler)
}
