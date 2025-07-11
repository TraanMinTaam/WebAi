import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="rounded-lg border bg-card text-card-foreground w-full max-w-md shadow-lg">
        {/* Header */}
        <div className="flex flex-col space-y-1.5 p-6 text-center">
          <h3 className="tracking-tight text-3xl font-bold">Welcome Back</h3>
          <p className="text-sm text-muted-foreground">
            Sign in to access exclusive campaign features
          </p>
        </div>

        {/* Form */}
        <form>
          <div className="p-6 pt-0 space-y-4">
            {/* Email Field */}
            <div className="space-y-2">
              <label 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                id="email"
                placeholder="Enter your email"
                required
                defaultValue="jane@example.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <a 
                  href="#" 
                  className="text-sm text-brandhub-navy hover:text-brandhub-gold transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                id="password"
                placeholder="Enter your password"
                required
                defaultValue="password"
              />
            </div>

            {/* Demo Instructions */}
            <div className="text-sm text-gray-500">
              <p>For demo purposes, use:</p>
              <p>Email: jane@example.com</p>
              <p>Password: password</p>
            </div>
          </div>

          {/* Form Actions */}
          <div className="items-center p-6 pt-0 flex flex-col">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-brandhub-navy hover:bg-brandhub-navy/90"
              type="submit"
            >
              Sign In
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <a 
                href="#" 
                className="text-brandhub-navy hover:text-brandhub-gold transition-colors font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login; 