import React from "react";
import { useForm } from "react-hook-form";
import "./signupForm.css";

function SignupForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert("Signup Successful!");
        console.log(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <table>
                <tbody>
                    <tr>
                        <td className="form-label">
                            <label htmlFor="name">Name:</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="name"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />
                        </td>
                        <td className="form-error-message">
                            {errors.name && (
                                <label className="error-message">
                                    {errors.name.message}
                                </label>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="form-label">
                            <label htmlFor="email">Email:</label>
                        </td>
                        <td>
                            <input
                                type="email"
                                id="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                        </td>
                        <td className="form-error-message">
                            {errors.email && (
                                <label className="error-message">
                                    {errors.email.message}
                                </label>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="form-label">
                            <label htmlFor="password">Password:</label>
                        </td>
                        <td>
                            <input
                                type="password"
                                id="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters",
                                    },
                                })}
                            />
                        </td>
                        <td className="form-error-message">
                            {errors.password && (
                                <label className="error-message">
                                    {errors.password.message}
                                </label>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="form-label">
                            <label htmlFor="confirmPassword">
                                Confirm Password:
                            </label>
                        </td>
                        <td>
                            <input
                                type="password"
                                id="confirmPassword"
                                {...register("confirmPassword", {
                                    required: "Please confirm your password",
                                    validate: (value) =>
                                        value ===
                                            document.getElementById("password")
                                                .value ||
                                        "Passwords do not match",
                                })}
                            />
                        </td>
                        <td className="form-error-message">
                            {errors.confirmPassword && (
                                <label className="error-message">
                                    {errors.confirmPassword.message}
                                </label>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="submit">Sign Up</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default SignupForm;
