export type TagVariant =
  | "react"
  | "node"
  | "next"
  | "typescript"
  | "javascript"
  | "postgresql"
  | "python"
  | "fastapi"
  | "supabase"
  | "razorpay"
  | "gray";

export const tagLabels = {
  react: "React",
  node: "Node.js",
  next: "Next.js",
  typescript: "TypeScript",
  javascript: "JavaScript",
  postgresql: "PostgreSQL",
  python: "Python",
  fastapi: "FastAPI",
  supabase: "Supabase",
  razorpay: "Razorpay",
  gray: "Gray",
} as const satisfies Record<TagVariant, string>;
