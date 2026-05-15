import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";

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
] as const satisfies ProjectPreview[];


