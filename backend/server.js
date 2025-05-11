import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://via.placeholder.com/300x200.png?text=Headphones",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 12999,
      image: "https://via.placeholder.com/300x200.png?text=Smartphone",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 2999,
      image: "https://via.placeholder.com/300x200.png?text=Speaker",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 4999,
      image: "https://via.placeholder.com/300x200.png?text=Smartwatch",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 1499,
      image: "https://via.placeholder.com/300x200.png?text=Gaming+Mouse",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 3499,
      image: "https://via.placeholder.com/300x200.png?text=Keyboard",
    },
    {
      id: 7,
      name: "External Hard Drive",
      price: 5599,
      image: "https://via.placeholder.com/300x200.png?text=Hard+Drive",
    },
    {
      id: 8,
      name: "Webcam",
      price: 1899,
      image: "https://via.placeholder.com/300x200.png?text=Webcam",
    },
    {
      id: 9,
      name: "Portable Charger",
      price: 1299,
      image: "https://via.placeholder.com/300x200.png?text=Power+Bank",
    },
    {
      id: 10,
      name: "LED Desk Lamp",
      price: 999,
      image: "https://via.placeholder.com/300x200.png?text=Desk+Lamp",
    },
  ];

  try {
    if (req.query.search) {
      const filteredProducts = products.filter((product) =>
        product.name.includes(req.query.search)
      );
      return res.send(filteredProducts);
    }

    setTimeout(() => {
      res.send(products);
    }, 3000);
  } catch (error) {
    res.status(400).send({ message: "Internal server error", error });
  }
});

app.listen(4000, () => {
  console.log(`server is running on port 4000`);
});
