import express from 'express';
const app = express()

app.get('/',(req,res) => {
  return res.json({ msg: 'Hello u.u'})
})

app.listen(3333,() => {
  console.log('Server is running')
})