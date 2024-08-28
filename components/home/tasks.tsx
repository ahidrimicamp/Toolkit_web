import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tasks as ProfileTasks } from "@/app/(protected)/tasks/page";

const Tasks = () => {
  return (
    <section>
      <Card className="my-5">
        <CardContent>
          <ProfileTasks />
        </CardContent>
      </Card>
    </section>
  );
};

export default Tasks;
