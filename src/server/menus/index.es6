import {Menu} from 'electron'

import FileMenu from './file_menu.es6'
import DevMenu from './dev_menu.es6'

export default function () {
  let menus = [FileMenu]
  if (process.env.NODE_ENV === 'development') {
    menus.push(DevMenu)
  }

  Menu.setApplicationMenu(Menu.buildFromTemplate(menus))
}
