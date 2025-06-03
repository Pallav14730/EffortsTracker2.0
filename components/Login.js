"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCircleIcon } from "lucide-react";
import { UserContext } from "@/components/UserProvider";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { user,setUser } = useContext(UserContext);
  // const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    const allowedDomain = "@QuestDiagnostics.com";

    if (!username.endsWith(allowedDomain)) {
      toast.error(`Only ${allowedDomain} emails are allowed`, {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    setUser({ username, password });
    toast.success("successfully Logged in",{
      duration: 2000,
      position: 'top-right',
  });
    setusername("");
    setpassword("");
    localStorage.setItem('username', username);
    console.log(username);
  }
  return (
    <Dialog>
        {!user && (
    <DialogTrigger asChild>
      <UserCircleIcon className="cursor-pointer" />
    </DialogTrigger>
  )}
  {user && <h1>{user.username}</h1>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-green-800">
            Login
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="email"
              id="name"
              className="col-span-3 "
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
              className="col-span-3"
            />
          </div>
          <DialogFooter className="text-center">
          <Button type="submit" className="">
            Login
          </Button>
        </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>
  );
}
