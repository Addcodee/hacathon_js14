import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./blogCard.css";
import { IconButton } from "@mui/material";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdDataSaverOn } from "react-icons/md";
import { useBlog } from "../../context/BlogContextProvider";
import { blue } from "@mui/material/colors";

export default function BlogCard({ blog }) {
  const {
    addPostToFavs,
    checkPostInFavs,
    addPostToSaves,
    checkPostInSaves,
  } = useBlog();
  return (
    <Card className="card__body">
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
        <CardActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <IconButton onClick={() => addPostToFavs(blog)}>
            <IoIosHeartEmpty
              color={checkPostInFavs(blog.id) ? "red" : ""}
            />
          </IconButton>
          <IconButton onClick={() => addPostToSaves(blog)}>
            <MdDataSaverOn
              color={checkPostInSaves(blog.id) ? blue[800] : ""}
            />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
}
