## 单页应用下样式卸载

### use / unuse

首先在 webpack 配置文件的 loaders 选项中加入以下配置：

```js
{
  test: /\.less$/,
  loader: "style/useable!css!less" // 这里需要注意，如果不是 style/useable 的话，样式会自动挂载
},
{
  test: /\.useable\.css$/,
  loader: "style!css"
}
```

使用：
```js
let stylesheets = require('./styles.less');

export default class MainView extends React.Component {
  componentWillMount() {
    stylesheets.use() // 手动挂载样式
  }

  componentWillUnmount() {
    stylesheets.unuse() // 利用生命周期，当组件卸载的时候将样式也卸载掉
  }

  // ...
}
```

### insertAt

`style-loader` 还提供了另一种方式，即 `insertAt` 参数，使用方法如下：

```js
require('./styles.less?insertAt=<selector>')
```
