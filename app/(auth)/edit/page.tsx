/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Instagram,
  Facebook,
  Twitter,
  Globe,
  Save,
} from "lucide-react";

const EditProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    gender: "male",
    address: "123 Wellness Lane",
    city: "San Francisco",
    state: "California",
    zipCode: "94102",
    country: "United States",
    bio: "Yoga enthusiast and wellness advocate. Love early morning flows and restorative practices.",
    website: "www.johndoe.com",
    instagram: "@johndoe",
    facebook: "john.doe",
    twitter: "@johndoe",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (type: string) => {
    // Simulate image upload
    alert(
      `${type} upload clicked! In production, this would open file picker.`
    );
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    console.log("Updated profile data:", profileData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
              <span
                className="text-2xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Serenity
              </span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-4xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Edit Profile
          </h1>
          <p className="text-gray-600">
            Update your personal information and preferences
          </p>
        </div>

        {/* Cover & Profile Photo Section */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
          {/* Cover Photo */}
          <div className="relative h-48 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            {coverImage && (
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            )}
            <button
              onClick={() => handleImageUpload("Cover photo")}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-lg shadow-lg transition-colors"
            >
              <Camera className="h-5 w-5 text-gray-700" />
            </button>
          </div>

          {/* Profile Photo */}
          <div className="relative px-8 pb-8">
            <div className="relative -mt-16 inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg flex items-center justify-center text-white text-4xl font-bold">
                {profileData.firstName.charAt(0)}
                {profileData.lastName.charAt(0)}
              </div>
              <button
                onClick={() => handleImageUpload("Profile photo")}
                className="absolute bottom-0 right-0 p-2 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg transition-colors"
              >
                <Camera className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-8">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profileData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={profileData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
              <p className="text-sm text-gray-500 mt-2">
                {profileData.bio.length}/500 characters
              </p>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Address
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={profileData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  value={profileData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP / Postal Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={profileData.zipCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <select
                  name="country"
                  value={profileData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Social Links
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="url"
                    name="website"
                    value={profileData.website}
                    onChange={handleChange}
                    placeholder="www.yourwebsite.com"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <div className="relative">
                  <Instagram className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="instagram"
                    value={profileData.instagram}
                    onChange={handleChange}
                    placeholder="@username"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Facebook
                </label>
                <div className="relative">
                  <Facebook className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="facebook"
                    value={profileData.facebook}
                    onChange={handleChange}
                    placeholder="username"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Twitter
                </label>
                <div className="relative">
                  <Twitter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="twitter"
                    value={profileData.twitter}
                    onChange={handleChange}
                    placeholder="@username"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Yoga Preferences */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2
              className="text-2xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Yoga Preferences
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label key={level} className="relative">
                      <input
                        type="radio"
                        name="experienceLevel"
                        value={level.toLowerCase()}
                        className="peer sr-only"
                      />
                      <div className="p-4 text-center border-2 border-gray-300 rounded-lg cursor-pointer transition-all peer-checked:border-purple-500 peer-checked:bg-purple-50 hover:border-purple-300">
                        <span className="font-medium text-gray-700 peer-checked:text-purple-700">
                          {level}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Favorite Yoga Styles
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Hatha",
                    "Vinyasa",
                    "Restorative",
                    "Power Yoga",
                    "Yin",
                    "Ashtanga",
                  ].map((style) => (
                    <label
                      key={style}
                      className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:border-purple-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-gray-700">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Goals
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Flexibility",
                    "Strength",
                    "Stress Relief",
                    "Mindfulness",
                  ].map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:border-purple-300 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-gray-700">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between bg-white rounded-2xl shadow-sm p-6">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-semibold rounded-lg transition-all"
            >
              Cancel
            </button>
            <div className="flex space-x-4">
              <button className="px-6 py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold rounded-lg transition-all">
                Preview Profile
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all flex items-center"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
