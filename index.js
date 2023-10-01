const express = require('express')
const app = express()  //gọi express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Super-rich!')
  })

app.get('/rich', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
  res.send('Centimillionaire!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})