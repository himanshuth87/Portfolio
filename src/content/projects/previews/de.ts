import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "E-Commerce Plattform",
    slug: "priority",
    thumbnail: thumbnailPriority,
    description: "3 Live-Storefronts — Priority, Junior & Traworld",
  },
  {
    title: "B2B Händlerportal",
    slug: "dms",
    thumbnail: thumbnailDms,
    description: "Multi-Rollen-DMS für 17+ Händler",
  },
] as const satisfies ProjectPreview[];


