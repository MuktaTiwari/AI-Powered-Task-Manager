"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type User = {
  email: string;
  password: string;
  role: string;
};

export default function LoginPage() {

  const [users, setUsers] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(()=>{

    const fetchUsers = async ()=>{

      try{
        const res = await axios.get("/data/users.json");
        setUsers(res.data);
      }
      catch(error){
        console.log("Error fetching users", error);
      }

    }
    fetchUsers();
  },[])
  

  const handleLogin = () => {
    const user = (users as User[]).find(
      (u: User) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("role", user.role); 
      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/user");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-black">Login</h1>
      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-3 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-3 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-800">
          Login
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </p>
    </div>
  );
}
