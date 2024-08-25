const LoginForm = () => {
  return (
    <main className="bg-pageBg h-screen flex justify-center items-center">
      <aside className="bg-slate-600 w-full max-w-sm p-4 md:p-6 rounded-md shadow-sm bg-opacity-15">
        <h1 className="text-white font-bold text-center mb-4">Sign In</h1>
        <form action="">
          <input
            type="email"
            name=""
            placeholder="Email Address"
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            className="w-full p-2 pl-10 text-sm border border-gray-300 rounded-md mt-2"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-full mt-4"
          >
            Sign In
          </button>
          <div className="text-center mt-2">
            <a href="/(auth)/reset-password" className="text-xs text-white hover:text-gray-600">
              Forgot password?
            </a>
          </div>
          <div className="text-center mt-2">
            <a href="/(auth)/sign-up" className="text-xs text-white hover:text-gray-600">
              Not yet registered?
            </a>
          </div>
        </form>
      </aside>
    </main>
  );
};

export default LoginForm;