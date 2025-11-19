import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [rememberMe, setrememberMe] = useState(false);
  
  const navigate = useNavigate();  // FIXED

  const LoginHandler = async (email, password, rememberMe) => {
    if (!email || !password) {
      return alert("Provide Input Fields");
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        { email, password, rememberMe },
        { withCredentials: true }
      );
      return response;
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const Handlesubmit = async (e) => {
    e.preventDefault();
    const res = await LoginHandler(email, password, rememberMe);
    if (res && res.status === 200) {
      localStorage.setItem("token", res.data.token);
      navigate('/');
    }
  };

  const handleNewUser = () => {
    navigate('/');
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={Handlesubmit} method="POST" className="space-y-6">
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-600">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 
                  text-base text-gray-500 outline-1 -outline-offset-1 
                  outline-white/10 placeholder:text-gray-500 
                  focus:outline-2 focus:-outline-offset-2 
                  focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-600">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 
                  text-base text-gray-400 outline-1 -outline-offset-1 
                  outline-white/10 placeholder:text-gray-500 
                  focus:outline-2 focus:-outline-offset-2 
                  focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>

            {/* Remember Me */}
            <div className="mt-2 flex items-center">
              <input
                type="checkbox"
                className="h-3 w-4 ml-2"
                checked={rememberMe}
                onChange={(e) => setrememberMe(e.target.checked)}
              />
              <span className="ml-2">Remember Me?</span>
            </div>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 
                px-3 py-1.5 text-sm/6 font-semibold text-white 
                hover:bg-indigo-400 focus-visible:outline-2 
                focus-visible:outline-offset-2 
                focus-visible:outline-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* New User */}
        <div className="mt-4">
          <button
            onClick={handleNewUser}
            className="flex w-full justify-center rounded-md bg-indigo-500 
              px-3 py-1.5 text-sm/6 font-semibold text-white 
              hover:bg-indigo-400 focus-visible:outline-2 
              focus-visible:outline-offset-2 
              focus-visible:outline-indigo-500"
          >
            Create New
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
