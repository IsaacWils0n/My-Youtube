import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoChannelUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utilities/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { md: "230px", xs: "100%" },
      boxShadow: 0,
      borderRadius: 1,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ width: 358, height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
