import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";

export default function ProductCard({ obj }) {
  const navigate = useNavigate();
  const { deleteModel } = useProducts();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={obj.img} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {obj.price}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {obj.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/edit/${obj.id}`)} size="small">
          EDIT
        </Button>
        <Button onClick={() => deleteModel(obj.id)} size="small">
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
