/*
* @Author: 张浩
* @Date:   2018-02-03 20:16:31
* @Last Modified by:   张浩
* @Last Modified time: 2018-02-05 18:54:14
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'));