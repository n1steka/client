import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import Card from "../components/Card";
import axios from "axios";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/post")
      .then((res) => setPosts(res.data.data))
      .catch((er) => console.log(er));
  }, []);
  return (
    <div>
      <MainLayout>
        <div className=" flex-col justify-between    my-12">
          <Card posts={posts} />
        </div>
      </MainLayout>
    </div>
  );
}
