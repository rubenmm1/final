import express from 'express';
const { Router } = express;
import partidosController from "../controllers/partidosController.js";

const route = Router();

// READ
route.get("/", partidosController.listarPartidos);   
   // ?q=&activo=&minPrecio=&maxPrecio=&page=&limit=&sort=
      
// route.get("/:leagueId", equiposController.obtenerEquipos);         // por id


route.get('/slug/:leagueSlug', partidosController.obtenerPartidosPorSlug);


// // CREATE
// route.post("/", productosController.crearProducto);

// // UPDATE
// route.put("/:id", productosController.reemplazarProducto);      // reemplazo total (PUT)
// route.patch("/:id", productosController.actualizarProducto);    // actualización parcial (PATCH)

// // DELETE
// route.delete("/:id", productosController.eliminarProducto);

export default route;