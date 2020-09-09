const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/route/:name', function(req, res){
	const name = req.params.name
	res.send(name)
})


const port = 3000
app.listen(port, function(){
	console.log(`server run on port ${port}`)
})

