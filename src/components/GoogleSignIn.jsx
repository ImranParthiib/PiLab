import React from "react";
import { auth, googleProvider } from "../../Firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { Chrome, Sparkles, Lock } from "lucide-react";

const PiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18M12 6v12M7 12h10" className="text-blue-600" />
  </svg>
);

const GoogleSignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-80" />
        <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20">
          {/* Header section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-md transform group-hover:scale-110 transition-transform duration-500" />
                <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                  <PiIcon />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
              PiLab
            </h1>
            <p className="text-gray-600 text-lg">Where Innovation Begins</p>
          </div>

          {/* Sign-in section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Lock className="w-4 h-4 text-blue-600" />
                <p className="text-gray-600 font-medium">Secure Sign-in</p>
              </div>
              <p className="text-sm text-center text-gray-500">
                Join our community of innovators
              </p>
            </div>

            <button
              onClick={signInWithGoogle}
              className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Chrome className="w-6 h-6" />
              <span>Continue with Google</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
              <div className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-shine" />
            </button>
          </div>

          {/* Benefits section */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg text-center">
              <p className="text-blue-600 font-medium text-sm">
                Advanced Tools
              </p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg text-center">
              <p className="text-purple-600 font-medium text-sm">
                Real-time Data
              </p>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg text-center">
              <p className="text-pink-600 font-medium text-sm">
                Smart Analytics
              </p>
            </div>
            <div className="bg-indigo-50 p-3 rounded-lg text-center">
              <p className="text-indigo-600 font-medium text-sm">Game Tools</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Protected by enterprise-grade security
            </p>
            <div className="flex justify-center gap-3 text-sm">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Terms
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Privacy
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleSignIn;
