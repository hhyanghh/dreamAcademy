import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li onClick={handleClick}>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="font-sm opacity-80">{channelTitle}</p>
        <p className="font-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
