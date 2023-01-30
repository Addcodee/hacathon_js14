import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./blogCard.css";

export default function BlogCard({ blog }) {
  return (
    <Card sx={{ width: 345 }} className="card__body">
      <CardMedia
        sx={{ height: 140 }}
        image={blog.img}
        title="green iguana"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "60%",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "70%",
          }}
        >
          <Typography
            className="card__title"
            gutterBottom
            variant="h5"
            component="div"
          >
            {blog.name}
          </Typography>
          <Typography
            className="card__desc"
            variant="body2"
            color="text.secondary"
          >
            {blog.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">Избранное</Button>
        </CardActions>
      </div>
    </Card>
  );
}
