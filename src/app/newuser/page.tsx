import { db } from "@/db";
import { users } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import React from "react";

type NewUser = typeof users.$inferInsert;

const NewUser = async () => {
  const user = await currentUser();
  if (!user) return;
  const id = user.id as string;
  const matchUser = await db.select().from(users).where(eq(users.clerkId, id));
  if (!matchUser.length) {
    const newUser: NewUser = {
      clerkId: id,
      user_name: user.firstName!,
    };
    await db.insert(users).values(newUser).execute();
    redirect("/dashboard");
  }

  return <div>...NewUser</div>;
};

export default NewUser;
