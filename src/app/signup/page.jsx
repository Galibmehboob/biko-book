"use client"
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";



const SignUpPage = () => {
    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            image: userData.image,
            password: userData.password,
        })

        console.log("sign Up Response", data, error);

        if (!error) {
            router.push("/signin")
        }

    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google"
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center  px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border">

                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Sign Up
                </h2>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>


                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label className="mb-1 block text-sm font-medium text-gray-700">
                            Name
                        </Label>

                        <Input
                            name="name"
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </Label>

                        <Input
                            name="email"
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label className="mb-1 block text-sm font-medium text-gray-700">
                            Image URL
                        </Label>

                        <Input
                            name="image"
                            placeholder="https://LoveU.com/photo.jpg/png"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            if (!/[^A-Za-z0-9]/.test(value)) {
                                return "Password must contain at least one symbol";
                            }
                            return null;
                        }}
                    >
                        <Label className="mb-1 block text-sm font-medium text-gray-700">
                            Password
                        </Label>

                        <Input
                            name="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <Description className="mt-1 text-sm text-gray-500">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />
                    </TextField>


                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
                        >
                            <Check className="mr-2 h-4 w-4" />
                            Submit
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full rounded-xl py-3"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>
                <p className="text-center">Or</p>

                <Button onClick={handleGoogleSignIn} variant="outline" className='w-full'> <GrGoogle></GrGoogle> Sign In With Google</Button>
            </div>
        </div>
    );
};

export default SignUpPage;