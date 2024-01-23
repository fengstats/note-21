// 中间件: 解决 history 模式下解析文件 404
const history = require('connect-history-api-fallback')
const express = require('express')

const app = express()

app.use(
  history({
    index: './index.html'
  })
)

app.use(express.static('dist'))

app.listen(8080, () => {
  console.log('server is runing')
})
