import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
export default function PostDetail() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/post")
      .then((res) => setPosts(res.data.data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <MainLayout>
      post Detai
    </MainLayout>
  );
}
