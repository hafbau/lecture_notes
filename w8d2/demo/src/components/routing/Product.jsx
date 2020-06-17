import React from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const params = useParams();
  console.log("params :>> ", params);
  return <h3>Product #{params.id}</h3>;
}
