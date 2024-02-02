"use client";

import { useRouter } from "next/navigation";
import Button from "./_component/button";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Button size="xl" onClick={() => router.push("/quiz")}>
        퀴즈풀기
      </Button>
    </div>
  );
}
