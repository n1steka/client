import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import axios from "axios";
import Card from "../components/Card";
export default function MyPost() {
  const token = localStorage.getItem("token");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/user/getUser/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setPosts(res.data.data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <MainLayout>
      <Card posts={posts} update="update" />
    </MainLayout>
  );
}
