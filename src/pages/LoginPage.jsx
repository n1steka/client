import React, { useState, useEffect } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import axios from "axios";
import ResgisterForm from "../components/RegisterForm";
export default function LoginPage() {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}
