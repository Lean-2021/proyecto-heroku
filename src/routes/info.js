import { Router } from "express";
import isAuth from "../middleware/Auth.js";
import os from "os";
const router = Router();

router.get("/", isAuth, (req, res) => {
  const { nombre, email } = req.user;
  res.render("info", {
    title: "Infoweb - Info",
    arguments: process.argv,
    system: process.platform,
    version: process.version,
    memory: process.memoryUsage.rss(),
    path: process.execPath,
    id: process.pid,
    folder: process.cwd(),
    numProces: os.cpus().length,
    nombre: nombre,
    email: email,
  });
});

export default router;
