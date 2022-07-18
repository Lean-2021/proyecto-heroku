import { Router } from "express";
import { fork } from "child_process";
import isAuth from "../middleware/Auth.js";

const router = Router();

router.get("/", isAuth, (req, res) => {
  const { quantity } = req.query;
  const forked = fork("./src/utils/numRandoms.js");
  forked.send(`${quantity || 100000000}`);
  forked.on("message", (result) => {
    res.status(200).json(result);
  });
});

export default router;
