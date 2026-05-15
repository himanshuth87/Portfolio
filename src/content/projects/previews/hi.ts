import thumbnailPriority from "../../../assets/images/projects/priority/ecommerce.jpeg";
import thumbnailDms from "../../../assets/images/projects/dms/dms1.jpeg";
import thumbnailSptours from "../../../assets/images/projects/sptours/sptours and travel.jpeg";
import thumbnailTasktracker from "../../../assets/images/projects/tasktracker/tasktracker-0.png";

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
