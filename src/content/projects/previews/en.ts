import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";
import thumbnailSptours from "../../../assets/thumbnails/sptours.png";
import thumbnailTasktracker from "../../../assets/thumbnails/tasktracker.png";

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
