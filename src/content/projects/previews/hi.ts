import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";
import thumbnailSptours from "../../../assets/thumbnails/sptours.png";
import thumbnailTasktracker from "../../../assets/thumbnails/tasktracker.png";

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
  {
    title: "एसपी टूर्स एंड ट्रैवल्स",
    slug: "sptours",
    thumbnail: thumbnailSptours,
    description: "मुंबई में टेम्पो ट्रैवलर और अर्टिगा किराया",
  },
  {
    title: "टास्क ट्रैकर",
    slug: "tasktracker",
    thumbnail: thumbnailTasktracker,
    description: "एचएससीवीपीएल के लिए आंतरिक टास्क प्रबंधन",
  },
] as const satisfies ProjectPreview[];
