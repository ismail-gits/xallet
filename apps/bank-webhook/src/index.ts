
import express, { Request, Response } from "express"

const app = express() 
const PORT = 3003

app.use(express.json())

app.get('/hdfcWebhook', (req: Request, res: Response) => {
  // do zod validation here
})

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
  
})