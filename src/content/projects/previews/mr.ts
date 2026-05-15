import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ई-कॉमर्स प्लॅटफॉर्म",
    slug: "priority",
    thumbnail: thumbnailPriority,
    description: "3 लाईव्ह स्टोअरफ्रंट — प्रायोरिटी, जुनियर आणि ट्रावर्ल्ड",
  },
  {
    title: "बी2बी वितरक पोर्टल",
    slug: "dms",
    thumbnail: thumbnailDms,
    description: "17+ वितरकांसाठी बहु-भूमिका डीएमएस",
  },
] as const satisfies ProjectPreview[];
