import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import DUMMY_MATERIALS from "./dummyMaterial";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { BookTextIcon } from "@/components/ui/book-text";

const BASE_URL = process.env.BASE_URL;

const Dashboard = () => {
  const materials = DUMMY_MATERIALS;
  return (
    <>
      <div className="h-full rounded-xl p-20 ">
        <div className="flex justify-between items-center ">
          <h1 className="font-semibold text-xl flex">
            Hello Username, let&apos;s read something today
          </h1>

          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Name</Label>
                    <Input
                      id="name-1"
                      name="name"
                      defaultValue="Pedro Duarte"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Username</Label>
                    <Input
                      id="username-1"
                      name="username"
                      defaultValue="@peduarte"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
        <div className="w-full bg-gray-700 h-0.25 my-6" />

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardAction>
                  <Link href={`${BASE_URL}/read/${item._id}`}>
                    <div className="border border-slate-500 p-0.5 rounded-md hover:bg-slate-400 transition-colors">
                      <BookTextIcon />
                    </div>
                  </Link>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  {item.content.length > 50
                    ? item.content.slice(
                        0,
                        Math.floor(Math.random() * (60 - 50 + 1)) + 50,
                      ) + "...."
                    : item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
