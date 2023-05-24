import express, { Request, Response } from "express";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong")
})

router.get("/transactions", (req: Request, res: Response) => {
  res.send()
})


export default router;
