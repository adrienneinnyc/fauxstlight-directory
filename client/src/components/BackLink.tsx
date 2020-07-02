import React from "react";
import { Link } from "react-router-dom";

interface Props {
  url: string;
  text: string;
}

const BackLink = ({ url, text }: Props) => (
  <div className="lead mb-3">
    <Link to={url} className="text-info">
      {text}
    </Link>
  </div>
);

export default BackLink;
