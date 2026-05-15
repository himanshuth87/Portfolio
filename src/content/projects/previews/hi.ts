import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ई-कॉमर्स प्लेटफॉर्म",
    slug: "priority",
    thumbnail: thumbnailPriority,
    description: "3 लाइव स्टोरफ्रंट — प्रायोरिटी, जूनियर और ट्रावर्ल्ड",
  },
  {
    title: "बी2बी वितरक पोर्टल",
    slug: "dms",
    thumbnail: thumbnailDms,
    description: "17+ वितरकों के लिए बहु-भूमिका डीएमएस",
  },
] as const satisfies ProjectPreview[];
