import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-32 grow">

        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <p className="py-2 text-center text-gray-500">
            {"Don't an account yet? "} 
            <Link 
              to="/register" 
              className="underline hover:text-accent-primary"
            >
              Register here
            </Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}

export default LoginPage;