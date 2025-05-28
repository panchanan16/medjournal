"use client"

import { useState } from 'react';
import { Eye, EyeOff, Upload, User, Mail, Lock, Building, Award, BookOpen } from 'lucide-react';
import { _POST } from '@/request/post_request';

export default function SignupForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        first_name: '',
        last_name: '',
        designation: '',
        institution: '',
        achievements: '',
        publications: '',
        profile_img: '',
        profile_img_link: '',
        user_role: 'user',
        created_at: new Date(),
        isActive: 1,
        isEmailVerified: 0
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Validate file type and size
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (!validTypes.includes(file.type)) {
                setErrors(prev => ({
                    ...prev,
                    profile_img: 'Please select a valid image file (JPG, PNG)'
                }));
                return;
            }

            if (file.size > maxSize) {
                setErrors(prev => ({
                    ...prev,
                    profile_img: 'File size must be less than 5MB'
                }));
                return;
            }

            setFormData(prev => ({
                ...prev,
                profile_img: file
            }));

            if (errors.profile_img) {
                setErrors(prev => ({
                    ...prev,
                    profile_img: ''
                }));
            }
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Required field validation
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 3) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
        else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
        if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        try {

            const submitData = new FormData()
            for (const key in formData) {
                if (formData.hasOwnProperty(key)) {
                    submitData.append(key, formData[key]);
                }
            }
            // for (let [key, value] of submitData.entries()) {
            //     console.log(`${key}:`, value);
            // }

            const signupResponse = await _POST(`auth/create`, submitData, 'POST', true, 'core')
            console.log(signupResponse)


            // Here you would typically make an API call to your backend
            console.log('Form submitted:', formData);



            // Reset form
            setFormData({
                email: '',
                password: '',
                confirmPassword: '',
                first_name: '',
                last_name: '',
                designation: '',
                institution: '',
                achievements: '',
                publications: '',
                profile_img: ''
            });
        } catch (error) {
            console.error('Signup error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 px-5 py-3">
                        <h1 className="text-xl font-bold text-white text-center">
                            Join Our Journal
                        </h1>
                        <p className="text-red-100 text-center mt-2">
                            Create your account to start publishing and collaborating
                        </p>
                    </div>

                    {/* Form */}
                    <div className="p-6 space-y-6">
                        {/* Profile Image Upload */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-24 h-24 bg-red-100 rounded-full border-4 border-red-200 flex items-center justify-center overflow-hidden">
                                    {formData.profile_img ? (
                                        <img
                                            src={URL.createObjectURL(formData.profile_img)}
                                            alt="Profile"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="w-10 h-10 text-red-400" />
                                    )}
                                </div>
                                <label className="absolute -bottom-2 -right-2 bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-red-700 transition-colors">
                                    <Upload className="w-4 h-4" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                </label>
                                {errors.profile_img && (
                                    <p className="text-red-500 text-xs mt-2 text-center">{errors.profile_img}</p>
                                )}
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <User className="inline w-4 h-4 mr-1" />
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${errors.first_name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-red-400'
                                        }`}
                                    placeholder="John"
                                />
                                {errors.first_name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <User className="inline w-4 h-4 mr-1" />
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${errors.last_name ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-red-400'
                                        }`}
                                    placeholder="Doe"
                                />
                                {errors.last_name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                <Mail className="inline w-4 h-4 mr-1" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-red-400'
                                    }`}
                                placeholder="john.doe@university.edu"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                            )}
                        </div>

                        {/* Password Fields */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Lock className="inline w-4 h-4 mr-1" />
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-red-400'
                                            }`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Lock className="inline w-4 h-4 mr-1" />
                                    Confirm Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${errors.confirmPassword ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-red-400'
                                            }`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-600"
                                    >
                                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Award className="inline w-4 h-4 mr-1" />
                                    Designation
                                </label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-colors"
                                    placeholder="Professor, Researcher, PhD Student..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Building className="inline w-4 h-4 mr-1" />
                                    Institution
                                </label>
                                <input
                                    type="text"
                                    name="institution"
                                    value={formData.institution}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-400 transition-colors"
                                    placeholder="University, Research Institute..."
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={(e) => handleSubmit(e)}
                            disabled={isSubmitting}
                            className={`w-full py-3 px-5 rounded-lg font-semibold text-white transition-all duration-200 ${isSubmitting
                                ? 'bg-red-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Creating Account...
                                </div>
                            ) : (
                                'Create Account'
                            )}
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-gray-600"></p>
                        Already have an account?{' '}
                        <a href="/login" className="text-red-600 hover:text-red-700 font-semibold hover:underline">
                            Sign in here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}