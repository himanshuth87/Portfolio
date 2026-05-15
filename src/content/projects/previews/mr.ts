import thumbnailPriority from "../../../assets/thumbnails/priority.png";
import thumbnailDms from "../../../assets/thumbnails/dms.png";
import thumbnailSptours from "../../../assets/thumbnails/sptours.png";
import thumbnailTasktracker from "../../../assets/thumbnails/tasktracker.png";

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
