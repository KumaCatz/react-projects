const fs = require('fs')

class DB {
  constructor(name) {
    this.name = name
    this.path = `src/server/db/${name}.json`
  }

  getData = () => {
    const json = fs.readFileSync(this.path, 'utf-8')
    const parsed = JSON.parse(json)
    return parsed
  }

  saveData = (data) => {
    fs.writeFileSync(this.path, JSON.stringify(data, null, 2))
  }

  getDataById = (id) => {
    const arr = this.getData()
    const data = arr.find(ele => ele.id === JSON.parse(id))
    return data
  }

  addData = (body) => {
    const arr = this.getData()
    arr.push(body)
    this.saveData(arr)
    return body
  }

  updateDataById = (id, body) => {
    const arr = this.getData()
    const index = arr.findIndex(ele => ele.id === +id)
    arr[index] = {
      id,
      ...body
    }
    this.saveData(arr)
    return index
  }

  deleteDataById = (id) => {
    const arr = this.getData()
    const index = arr.findIndex(ele => ele.id === id)
    arr.splice(index, 1)
    this.saveData(arr)
  }
}

module.exports = DB