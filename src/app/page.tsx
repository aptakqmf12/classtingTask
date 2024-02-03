"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "./_component/button";
import { useCountStore } from "@/store/count";

export default function Home() {
  const router = useRouter();
  const { initCount } = useCountStore();

  useEffect(() => {
    initCount();
  }, []);
  return (
    <div>
      <Button size="xl" onClick={() => router.push("/quiz")}>
        퀴즈풀기
      </Button>
    </div>
  );
}
