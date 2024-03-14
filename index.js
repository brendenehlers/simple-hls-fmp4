import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.static('video'))

app.get('/', (_, res) => {
  res.sendFile('index.html', { root: '.'})
})

app.get('/manifest', (_, res) => {
  res.sendFile('video/prog_index.m3u8', { root: '.' })
})

app.listen(80)