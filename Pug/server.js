const express = require("express");
const app = express();

app.set('view engine', 'pug')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//-------------------------------------------------------------------------------------------------------//
const PORT = 8080;
const productos = [
  {
    tittle: "Microndas",
    price: 5000,
    thumbnail:
      "https://cdn1.iconfinder.com/data/icons/home-tools-1/136/microwave-512.png",
    id: 1,
  },
  {
    tittle: "Horno",
    price: 6500,
    thumbnail:
      "https://cdn1.iconfinder.com/data/icons/home-tools-1/136/stove-512.png",
    id: 2,
  },
  {
    tittle: "Aspiradora",
    price: 3000,
    thumbnail:
      "https://cdn2.iconfinder.com/data/icons/appliance-electronic-vol-2/512/vacuum_cleaner_hoover_appliance-512.png",
    id: 3,
  },
  {
    tittle: "Licuadora",
    price: 2000,
    thumbnail:
      "https://cdn1.iconfinder.com/data/icons/kitchen-and-food-2/44/blender-512.png",
    id: 4,
  }
];

app.listen(PORT, () => {
  console.log("servidor escuchando en el " + PORT);
});


app.get('/Productos', (req, res) => {
  res.render('datos', {productos: productos })
})

app.get("/", (req, res) => {
  res.render("formulario");
});

app.post("/Productos", (req, res) => {
  let newProducto = { ...req.body, id: addWithNewId(productos) }
  productos.push(newProducto);
  res.redirect("/Productos")
  
});















//-------------------------------------------------------------------------------------------------------//
function addWithNewId(data) {
  let i = 0;
  let lastId = 0;
  while (data[i] !== undefined) {
    lastId = data[i].id;
    i++;
  }
  return lastId + 1;
}
//-------------------------------------------------------------------------------------------------------//

// app.get("/Productos", (req, res) => {
//   res.render("datos");
// });

// app.get("/", (req, res) => {
//   res.render("layout");
// });



// app.post("/Productos", (req, res) => {
//   let newProducto = { ...req.body, id: addWithNewId(productos) }
//   productos.push(newProducto);
//   res.redirect("/Productos")
  
// });
