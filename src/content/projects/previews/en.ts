import thumbnailPriority from "../../../assets/images/projects/priority/ecommerce.jpeg";
import thumbnailDms from "../../../assets/images/projects/dms/dms1.jpeg";
import thumbnailSptours from "../../../assets/images/projects/sptours/sptours and travel.jpeg";
import thumbnailTasktracker from "../../../assets/images/projects/tasktracker/tasktracker-0.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "E-Commerce Platform",
    slug: "priority",
    thumbnail: thumbnailPriority,
    description: "3 live storefronts — Priority, Junior & Traworld",
  },
  {
    title: "B2B Distributor Portal",
    slug: "dms",
    thumbnail: thumbnailDms,
    description: "Multi-role DMS for 17+ distributors",
  },
  {
    title: "SP Tours & Travels",
    slug: "sptours",
    thumbnail: thumbnailSptours,
    description: "Tempo Traveller & Ertiga rental in Mumbai",
  },
  {
    title: "Task Tracker",
    slug: "tasktracker",
    thumbnail: thumbnailTasktracker,
    description: "Internal task management for HSCVPL",
  },
] as const satisfies ProjectPreview[];
