import tasktracker0 from "../../../assets/images/projects/tasktracker/tasktracker-0.png";
import tasktracker1 from "../../../assets/images/projects/tasktracker/tasktracker-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Task Tracker",
  theme: "dark",
  tags: ["react", "typescript", "supabase"],
  videoBorder: false,
  live: "https://tasktracker.hscvpl.in/",
  description:
    "An internal task management platform built for HSCVPL to track operational tasks, assignments, and progress across teams.<br/><br/>Built with React, TypeScript, and Supabase — featuring real-time task updates, role-based assignment, status tracking, and a clean dashboard for monitoring team workload and deadlines.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker0,
        alt: "Task Tracker Dashboard",
        caption: "Task Dashboard — Overview & Status Tracking",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker1,
        alt: "Task Tracker Assignment View",
        caption: "Task Assignment & Team Workload",
      },
    },
  ],
} as const satisfies ProjectContent;
