"use client";

import { useToday } from "@/lib/use-today";

export default function CurrentYear() {
  return <>{useToday().getFullYear()}</>;
}
