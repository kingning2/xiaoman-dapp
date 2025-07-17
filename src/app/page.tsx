"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const { address } = useAccount();

  console.log(address);

  return (
    <div className="">
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
      <Input placeholder="Enter your message" />
      <Textarea autoSave="off" />
      <Button variant={"destructive"}>Send</Button>
    </div>
  );
}
