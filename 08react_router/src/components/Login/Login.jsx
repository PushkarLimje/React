import React,{ useState } from 'react'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    console.log("Logging in with", { email, password });
    alert("Login submitted!");
  };

  const handleGetStarted = () => {
    alert("Let's Get Started!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={ email }
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">Don't have an account?</p>
          <button
            onClick={handleGetStarted}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    )
}


export default Login
