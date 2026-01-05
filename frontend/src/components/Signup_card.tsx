import { useState } from "react";
import { ShineBorder } from "./ui/shine-border";

const SignUpcard: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log({ fullName, username, email, password, confirmPassword });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E0E15]">
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-[#7F60AD]/20 p-5 text-white shadow-lg">

        {/* Shine Border */}
        <ShineBorder shineColor={["#2F5BFF", "white"]} />

        {/* Tabs */}
        <div className="mb-4 flex p-1 bg-[#2A2D4A] rounded-md text-xs font-medium">
          <button className="flex-1 py-1.5 rounded-md text-gray-400 transition hover:-translate-y-px">
            Log In
          </button>
          <button className="flex-1 py-1.5 rounded-md bg-[#2F5BFF] transition hover:-translate-y-px">
            Sign Up
          </button>
        </div>

        {/* Header */}
        <h2 className="mb-1 text-center text-2xl font-bold">
          Create your account
        </h2>
        <p className="mb-3 text-center text-xs font-bold text-gray-400">
          Join the community and start sharing today.
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          {error && (
            <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-400">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="text-xs text-gray-300">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 w-full rounded-md bg-[#2A2D4A] border border-white/20 px-3 py-1.5 text-sm outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-xs text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="dummydoe"
              className="mt-1 w-full rounded-md bg-[#2A2D4A] border border-white/20 px-3 py-1.5 text-sm outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-300">Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@address.com"
              className="mt-1 w-full rounded-md bg-[#2A2D4A] border border-white/20 px-3 py-1.5 text-sm outline-none focus:border-[#2F5BFF]"
            />
          </div>

          {/* Passwords */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-300">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-md bg-[#2A2D4A] border border-white/20 px-3 py-1.5 text-sm outline-none focus:border-[#2F5BFF]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#2F5BFF]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex-1">
              <label className="text-xs text-gray-300">
                Confirm Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full rounded-md bg-[#2A2D4A] border border-white/20 px-3 py-1.5 text-sm outline-none focus:border-[#2F5BFF]"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center text-[11px] text-gray-400">
            <input type="checkbox" className="mr-2" />
            By signing up, you agree to our
            <span className="ml-1 cursor-pointer underline text-[#2F5BFF]">
              Terms & Privacy Policy
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#2F5BFF] py-1.5 text-sm rounded-md font-medium transition hover:-translate-y-px"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpcard;
