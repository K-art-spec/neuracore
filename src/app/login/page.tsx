"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import LoginForm from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";

export default function Signin() {
  const [loading, setLoading] = useState(false);

  const handleMicrosoftLogin = () => {
    setLoading(true);
    // Simulate redirect delay
    setTimeout(() => {
      window.location.href = "/dashboard"; // Placeholder page
    }, 1500);
  };

  return (
    <Suspense>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col items-center w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
          {/* Logo */}
          <Image
            src="/neuracore-black-logo.png"
            alt="Neuracore Logo"
            width={180}
            height={50}
            className="object-contain"
          />

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800">
            Sign in to NeuraCore
          </h1>

          {/* Login Form */}
          <LoginForm />

          {/* Divider */}
          <div className="flex items-center w-full mt-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Microsoft Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
            size="lg"
            onClick={handleMicrosoftLogin}
            disabled={loading}
          >
            {loading ? "Redirecting..." : (
              <>
                <svg className="w-5 h-5 mr-2" viewBox="0 0 21 21">
                  <rect x="0" y="0" width="10" height="10" fill="#f25022" />
                  <rect x="11" y="0" width="10" height="10" fill="#7fba00" />
                  <rect x="0" y="11" width="10" height="10" fill="#00a4ef" />
                  <rect x="11" y="11" width="10" height="10" fill="#ffb900" />
                </svg>
                Microsoft Account
              </>
            )}
          </Button>
        </div>
      </div>
    </Suspense>
  );
}

