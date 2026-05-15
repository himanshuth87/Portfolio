import tasktracker0 from "../../../assets/images/projects/tasktracker/tasktracker-0.png";
import tasktracker1 from "../../../assets/images/projects/tasktracker/tasktracker-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "टास्क ट्रॅकर",
  theme: "dark",
  tags: ["react", "typescript", "supabase"],
  videoBorder: false,
  live: "https://tasktracker.hscvpl.in/",
  description:
    "एचएससीव्हीपीएल (HSCVPL) साठी बनवलेला एक अंतर्गत टास्क व्यवस्थापन प्लॅटफॉर्म, जो टीम्समधील ऑपरेशनल टास्क, असाइनमेंट आणि प्रगती ट्रॅक करतो।<br/><br/>रिएक्ट (React), टाइपस्क्रिप्ट (TypeScript) आणि सुपाबेस (Supabase) वापरून बनवलेला — रिअल-टाइम टास्क अपडेट, रोल-आधारित असाइनमेंट, स्टेटस ट्रॅकिंग आणि टीम वर्कलोड मॉनिटरिंगसाठी स्वच्छ डॅशबोर्ड सह।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker0,
        alt: "टास्क ट्रॅकर डॅशबोर्ड",
        caption: "टास्क डॅशबोर्ड — आढावा आणि स्टेटस ट्रॅकिंग",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: tasktracker1,
        alt: "टास्क असाइनमेंट व्ह्यू",
        caption: "टास्क असाइनमेंट आणि टीम वर्कलोड",
      },
    },
  ],
} as const satisfies ProjectContent;
