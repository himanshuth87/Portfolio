import tasktracker0 from "../../../assets/images/projects/tasktracker/tasktracker-0.png";
import tasktracker1 from "../../../assets/images/projects/tasktracker/tasktracker-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "टास्क ट्रैकर",
  theme: "dark",
  tags: ["react", "typescript", "supabase"],
  videoBorder: false,
  live: "https://tasktracker.hscvpl.in/",
  description:
    "एचएससीवीपीएल (HSCVPL) के लिए बनाया गया एक आंतरिक टास्क प्रबंधन प्लेटफॉर्म, जो टीमों में ऑपरेशनल टास्क, असाइनमेंट और प्रगति को ट्रैक करता है।<br/><br/>रिएक्ट (React), टाइपस्क्रिप्ट (TypeScript) और सुपाबेस (Supabase) के साथ बनाया गया — रियल-टाइम टास्क अपडेट, रोल-आधारित असाइनमेंट, स्टेटस ट्रैकिंग और टीम वर्कलोड मॉनिटरिंग के लिए क्लीन डैशबोर्ड सहित।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker0,
        alt: "टास्क ट्रैकर डैशबोर्ड",
        caption: "टास्क डैशबोर्ड — अवलोकन और स्टेटस ट्रैकिंग",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker1,
        alt: "टास्क असाइनमेंट व्यू",
        caption: "टास्क असाइनमेंट और टीम वर्कलोड",
      },
    },
  ],
} as const satisfies ProjectContent;
