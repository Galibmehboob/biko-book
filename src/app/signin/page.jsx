"use client"
import { authClient } from "@/lib/auth-client";
import { ArrowRightToSquare } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { GrGoogle } from "react-icons/gr";

const SignInPage = () => {



    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        const { data, error } = await authClient.signIn.email({

            email: userData.email,

            password: userData.password,

            callbackURL: '/'
        })

        console.log("sign Up Response", data, error);


    };


    const handleGoogleSignIn = async () => {
        try {
            const res = await authClient.signIn.social({
                provider: "google",
            });

            console.log("SUCCESS:", res);
        } catch (err) {
            console.error("AUTH ERROR:", err);
        }
    };



    return (
        <div className="min-h-screen flex items-center justify-center  px-4 py-10">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border">

                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Sign In
                </h2>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>





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
                        minLength={8}
                        name="password"
                        type="password"

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

                        {/* {loginError && (
                                <p className="text-sm text-red-500 mt-1">
                                    {loginError}
                                </p>
                            )} */}

                    </TextField>


                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            type="submit"
                            className="w-full rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
                        >
                            <ArrowRightToSquare className="mr-2 h-4 w-4" />
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full rounded-xl py-3"
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
                <p className="text-center">Or</p>

                <Button onClick={handleGoogleSignIn} variant="outline" className='w-full'> <GrGoogle></GrGoogle> Sign In With Google</Button>
            </div>
        </div>
    );
};

export default SignInPage;