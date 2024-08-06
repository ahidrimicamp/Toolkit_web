import React from "react";
import { z } from "zod";
import { formSchema } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputForm } from "../InstantForm";

const ProfileBody = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      group: "",
    },
  });

  // const onSubmit = (data: z.infer<typeof formSchema>) => {
  //   console.log(data);
  // };
  return (
    <section>
      <div className="w-full space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how the Toolkit describe you.
          </p>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="h-px w-full shrink-0 bg-border"
        />

        <Form {...form}>
          <form className="space-y-5">
            <Card>
              <CardHeader>
                <CardTitle>Email</CardTitle>
                <CardDescription>Edit your email here.</CardDescription>
              </CardHeader>
              <CardContent>
                <InputForm
                  control={form.control}
                  formName="email"
                  label=""
                  placeholder="example@micamp.com"
                  type="email"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
              </CardHeader>
              <CardContent>
                <InputForm
                  control={form.control}
                  formName="password"
                  label="New Password"
                  placeholder="**********"
                  type="password"
                />
                <InputForm
                  control={form.control}
                  formName="password"
                  label="Confirm Password"
                  placeholder="**********"
                  type="password"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Name</CardTitle>
                <CardDescription>
                  Change your name and surname here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <InputForm
                  control={form.control}
                  formName="firstName"
                  label="Name"
                  placeholder="Your name"
                  type="text"
                />
                <InputForm
                  control={form.control}
                  formName="lastName"
                  label="Surname"
                  placeholder="Your surname"
                  type="text"
                />
              </CardContent>
            </Card>

            <div className="flex max-lg:justify-center">
              <Button type="submit">Update Profile</Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ProfileBody;
