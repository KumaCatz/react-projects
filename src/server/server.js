const express = require('express')
const app = express()
const fs = require('fs')
const DB = require('./db')
const foods = new DB('foods')

app.use(express.json())

app.post('/foods', (req, res) => {
  const foodAdd = foods.addData(req.body)
  return res.send({
    status: "success",
    value: foodAdd
  })
})

app.get('/foods', (req, res) => {
  const arr = foods.getData()
  res.send({
    status: "success",
    value: arr
  })
})

app.get('/foods/:id', (req, res) => {
  const {id} = req.params
  const food = foods.getDataById(id)
  res.send({
    status: "success",
    value: food
  })
})

app.put('/foods/:id', (req, res) => {
  const {id} = req.params
  const updatedFood = foods.updateDataById(id, req.body)
  res.send({
    status: "success",
    value: updatedFood
  })
})

app.delete("/foods/:id", (req, res) => {
  const {foodId} = req.params
  foods.deleteDataById(foodId)
  res.send("success")
})

app.listen(2500, () => {
  console.log("Listening on port 2500")
})