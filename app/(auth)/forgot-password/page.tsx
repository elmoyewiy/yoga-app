"use client";

import React, { useState } from "react";
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Lock } from "lucide-react";
import { forgetPassword, resetPassword } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Check if we have a reset token in URL

  const [step, setStep] = useState(token ? "reset" : "email"); // Start at 'reset' if token exists
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle email submission (Forget Password)
  const handleEmailSubmit = async () => {
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const result = await forgetPassword({
        email,
        redirectTo: "/forgot-password",
        // This will be /forgot-password?token=xxx
      });

      if (result.error) {
        setError(result.error.message || "Failed to send reset email");
      } else {
        setSuccess("Password reset link sent! Check your email.");
        setTimeout(() => {
          setStep("sent");
        }, 2000);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Forgot password error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    setLoading(true);

    try {
      const result = await resetPassword({
        newPassword,
      });

      if (result.error) {
        setError(result.error.message || "Failed to reset password");
      } else {
        setSuccess("Password reset successful!");
        setTimeout(() => {
          setStep("success");
        }, 1500);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Reset password error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          {/* Step 1: Email Input */}
          {step === "email" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2
                  className="text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Forgot Password?
                </h2>
                <p className="text-gray-600">
                  No worries! Enter your email and we&apos;ll send you a link to
                  reset your password.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === "Enter" && handleEmailSubmit()}
                  />
                </div>
              </div>

              <Button
                onClick={handleEmailSubmit}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>

              <div className="text-center">
                <a
                  href="/sign-in"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </a>
              </div>
            </div>
          )}

          {/* Step 2: Email Sent Confirmation */}
          {step === "sent" && (
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <Mail className="h-10 w-10 text-green-500" />
              </div>

              <div>
                <h2
                  className="text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Check Your Email
                </h2>
                <p className="text-gray-600">
                  We&apos;ve sent a password reset link to
                </p>
                <p className="text-purple-600 font-medium mt-2">{email}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Click the link in the email to reset your password. The link
                  will expire in 1 hour.
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleEmailSubmit}
                  disabled={loading}
                  className="w-full py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all"
                >
                  {loading ? "Resending..." : "Resend Email"}
                </Button>

                <a
                  href="/sign-in"
                  className="block w-full py-3 text-gray-600 hover:text-gray-800 font-medium text-sm"
                >
                  Back to Sign In
                </a>
              </div>
            </div>
          )}

          {/* Step 3: Reset Password (when token is in URL) */}
          {step === "reset" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2
                  className="text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Reset Password
                </h2>
                <p className="text-gray-600">Enter your new password below</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Must be at least 8 characters long
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handlePasswordReset()
                      }
                    />
                  </div>
                </div>
              </div>

              <Button
                onClick={handlePasswordReset}
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Resetting Password..." : "Reset Password"}
              </Button>
            </div>
          )}

          {/* Step 4: Success */}
          {step === "success" && (
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>

              <div>
                <h2
                  className="text-3xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Password Reset!
                </h2>
                <p className="text-gray-600">
                  Your password has been successfully reset. You can now sign in
                  with your new password.
                </p>
              </div>

              <Button
                onClick={() => (window.location.href = "/sign-in")}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Go to Sign In
              </Button>
            </div>
          )}
        </div>

        {/* Bottom Links */}
        {step === "email" && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a
                href="/sign-up"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Sign Up
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
