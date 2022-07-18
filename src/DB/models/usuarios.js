import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = new mongoose.Schema({
  //modelo de datos usuario
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
});

usuarioSchema.methods.encrypta = (password) => {
  //encryptar contraseña
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

usuarioSchema.methods.compara = (newpassword, password) => {
  //comparar contraseñas
  return bcrypt.compareSync(newpassword, password);
};

export default mongoose.model("usuarios", usuarioSchema);
