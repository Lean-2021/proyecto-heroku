import { Router } from "express";
import isAuth from "../middleware/Auth.js";
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
    nombre: nombre,
    email: email,
  });
});

export default router;
