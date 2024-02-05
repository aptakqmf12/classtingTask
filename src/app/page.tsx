"use client";

import { useEffect } from "react";
import Button from "./_component/button";
import Link from "next/link";
import { useCountStore } from "@/store/count";

export default function Home() {
  const { initCount } = useCountStore();

  useEffect(() => {
    initCount();
  }, [initCount]);

  return (
    <div className="w-dvw h-dvh flex justify-center items-center ">
      <Button size="xl">
        <Link href={"/quiz"}>퀴즈풀기</Link>
      </Button>
    </div>
  );
}
