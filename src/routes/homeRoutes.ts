import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Express + TypeScript Server')
})

export default router
