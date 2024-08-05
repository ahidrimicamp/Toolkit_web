import React from "react";
// import { signOut } from "@/auth";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MoveHorizontalIcon,
  CircleCheckIcon,
  ListOrderedIcon,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewTask from "@/components/user/NewTask";

const Protected = async () => {
  return (
    <div className="flex w-full flex-wrap space-x-10">
      <div className="w-full p-4">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Tasks</h1>
          <div className="flex gap-5">
            <Input placeholder="Search for tasks..." />
            <Button variant="outline">
              <ListOrderedIcon className="mr-2 size-4" />
              Sort
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center">
                <CircleCheckIcon className="mr-4 size-6 text-blue-500" />
                <div>
                  <h2 className="text-lg font-semibold">
                    Design the new Toolkit Web
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Due Date: 07/08/2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reminder Date: Tomorrow
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Category: General Notes
                  </p>
                  <p className="text-sm text-muted-foreground">Type: To Do</p>
                </div>
              </div>
              <div className="flex items-center text-right">
                <Badge className="bg-blue-500 text-white">Active</Badge>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-red-500">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center">
                <XCircle className="mr-4 size-6 text-red-500" />
                <div>
                  <h2 className="text-lg font-semibold">
                    Design the new Toolkit Web
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Due Date: 07/08/2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reminder Date: Yesterday
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Category: App Underwriting
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Type: Agent needs to call merchant
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="destructive">Pending/Hold</Badge>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-500">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center">
                <CircleCheckIcon className="mr-4 size-6 text-green-500" />
                <div>
                  <h2 className="text-lg font-semibold">
                    Design the new Toolkit Web
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Due Date: 07/08/2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Reminder Date: 12/25/2024
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Category: Supplies Order
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Type: Order Supplies
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="success">Completed</Badge>
                <Button variant="ghost" size="icon">
                  <MoveHorizontalIcon className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="w-fit">
                Add Task
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a new task</DialogTitle>
              </DialogHeader>
              <NewTask />
            </DialogContent>
          </Dialog>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      {/* <form
        action={async () => {
          "use server";

          await signOut({
            redirectTo: "/sign-in",
          });
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form> */}
    </div>
  );
};

export default Protected;
