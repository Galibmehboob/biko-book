"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUpload, BiUser } from "react-icons/bi";

export function UpdateUser({ user, setSession }) {

    const onSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.elements["name"]?.value;
        const image = form.elements["image"]?.value;

        await authClient.updateUser({
            name,
            image,
        });


        const res = await authClient.getSession();

        setSession(res.data);
    };
    return (
        <Modal>

            <Button className="bg-[#b90050] font-semibold">
                <BiEdit /> Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">

                        <Modal.CloseTrigger />


                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>Edit Profile</Modal.Heading>

                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update your profile by entering your name and uploading a profile picture. The form adapts smoothly on mobile devices when the keyboard appears.
                            </p>
                        </Modal.Header>


                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={onSubmit} className="flex flex-col gap-4">


                                    <TextField className="w-full">
                                        <Label>Name</Label>
                                        <Input
                                            name="name"
                                            placeholder="Enter your name"
                                        />
                                    </TextField>

                                    <TextField className="w-full">
                                        <Label>Image URL</Label>
                                        <Input
                                            name="image"
                                            placeholder="http://image.url"
                                        />
                                    </TextField>


                                    <div className="flex justify-end gap-3 mt-4">

                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button
                                            slot="close"
                                            type="submit"
                                            className="bg-[#b90050] text-white"
                                        >
                                            <BiUpload /> Update
                                        </Button>

                                    </div>

                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}