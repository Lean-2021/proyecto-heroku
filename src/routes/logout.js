import { Router } from "express";
import { args } from "../index.js";

const router = Router();

router.get("/", (req, res) => {
  //mostrar vista logout  - mensaje "hasta luego"
  if (req.user) {
    res.render("logout", {
      title: "Infoweb - Logout",
      nombre: req.session.nombre,
      data: args.PORT,
    });
  } else {
    res.redirect("/login");
  }
});

router.post("/", (req, res) => {
  // redireccionar a login luego de mostrar el mensaje
  req.session.destroy((err) => {
    if (!err) {
      console.log("logout ok ");
      res.redirect("/login");
    } else {
      res.send({ status: "Error al borrar session" });
    }
  });
});

export default router;
