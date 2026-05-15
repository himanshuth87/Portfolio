export const social = [
  { url: "mailto:himanshuth87@gmail.com", name: "mail" },
  { url: "https://github.com/himanshuth87", name: "github" },
  { url: "https://www.linkedin.com/in/himanshu--thakur", name: "linkedin" },
  //{ url: "https://x.com/", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
