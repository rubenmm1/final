import express from 'express';
const { Router } = express;
import equiposController from "../controllers/equiposController.js";

const route = Router();

// READ
route.get("/", equiposController.listarEquipos);   
   // ?q=&activo=&minPrecio=&maxPrecio=&page=&limit=&sort=
      
route.get("/:leagueId", equiposController.obtenerEquipos);         // por id

// // CREATE
// route.post("/", productosController.crearProducto);

// // UPDATE
// route.put("/:id", productosController.reemplazarProducto);      // reemplazo total (PUT)
// route.patch("/:id", productosController.actualizarProducto);    // actualización parcial (PATCH)

// // DELETE
// route.delete("/:id", productosController.eliminarProducto);

export default route;