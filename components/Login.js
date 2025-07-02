import { useState, useContext } from "react";
import { userContext } from "./UserProvder"
import { Eye, EyeOff } from "lucide-react";

// pallav.x.verma@QuestDiagnostics.com
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);
 const domain = "@QuestDiagnostics.com";
 const allowedDomain = domain.toLowerCase();

 

  function handleSubmit(e) {
    e.preventDefault();

   if (!username.endsWith(allowedDomain)) {
      alert(`Only ${allowedDomain} emails are allowed`)
      return;
    }

    setUser({ username });

    localStorage.setItem("username", username);

    setUsername("");
    setPassword("");
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-500 text-sm">Please sign in to your account</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="bob.x.bob@QuestDiagnostics.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative mt-1">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}
