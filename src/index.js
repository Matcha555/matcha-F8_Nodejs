const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();  //gọi express()
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine   //app này sử dụng engine có tên là 'hbs'
({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');   //đang đặt cho app này một cái 'view engine' là 'hbs'
app.set('views', path.join(__dirname, 'resources\\views'));  

app.get('/', (req, res) => {
  res.render('home');     //default thì nó vẫn lấy cái layout có tên là 'main.hbs'. 
                          //Sau đó nó vào file mà bạn muốn render để lấy nội dung trong đó.
})

app.get('/news', (req, res) => {
  res.render('news');     //default thì nó vẫn lấy cái layout có tên là 'main.hbs'. 
                          //Sau đó nó vào file mà bạn muốn render để lấy nội dung trong đó.
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})