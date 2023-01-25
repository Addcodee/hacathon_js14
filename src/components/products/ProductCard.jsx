import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  return (
    <Card
      className="product__card"
    >
      <CardMedia
        sx={{ height: 140 }}
        image={product.img}
        title="green iguana"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/edit/${product.id}`)}
          size="small"
        >
          EDIT
        </Button>
        <Button
          onClick={() => deleteProduct(product.id)}
          size="small"
        >
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
