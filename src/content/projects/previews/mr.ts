import thumbnailPriority from "../../../assets/images/projects/priority/ecommerce.jpeg";
import thumbnailDms from "../../../assets/images/projects/dms/dms1.jpeg";
import thumbnailSptours from "../../../assets/images/projects/sptours/sptours and travel.jpeg";
import thumbnailTasktracker from "../../../assets/images/projects/tasktracker/tasktracker-0.png";

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
  {
    title: "एसपी टूर्स अँड ट्रॅव्हल्स",
    slug: "sptours",
    thumbnail: thumbnailSptours,
    description: "मुंबईत टेम्पो ट्रॅव्हलर आणि अर्टिगा भाडे",
  },
  {
    title: "टास्क ट्रॅकर",
    slug: "tasktracker",
    thumbnail: thumbnailTasktracker,
    description: "एचएससीव्हीपीएलसाठी अंतर्गत टास्क व्यवस्थापन",
  },
] as const satisfies ProjectPreview[];
