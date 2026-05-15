import dms0 from "../../../assets/images/projects/dms/dms-0.png";
import dms1 from "../../../assets/images/projects/dms/dms-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "बी2बी वितरक पोर्टल (डीएमएस)",
  theme: "dark",
  tags: ["react", "node", "postgresql", "supabase"],
  videoBorder: false,
  description:
    "प्रायोरिटी बॅग्ससाठी 8 भारतीय राज्यांमधील 17+ वितरकांना सेवा देणारी एक बहु-भूमिका बी2बी वितरक व्यवस्थापन प्रणाली।<br/><br/>ऑपरेशनल कार्यक्षमतेसाठी भूमिका-आधारित ॲक्सेस कंट्रोल, एमओक्यू अंमलबजावणी, रिअल-टाइम इन्व्हेंटरी कपात, ऑर्डर वर्कफ्लो, ॲनालिटिक्स डॅशबोर्ड आणि स्वयंचलित व्हॉट्सॲप + ईमेल नोटिफिकेशन्सची वैशिष्ट्ये आहेत।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dms0,
        alt: "डीएमएस ॲडमिन डॅशबोर्ड",
        caption: "ॲडमिन ओव्हरव्ह्यू डॅशबोर्ड",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dms1,
        alt: "वितरक पोर्टल",
        caption: "वितरक व्यवस्थापन इंटरफेस",
      },
    },
  ],
} as const satisfies ProjectContent;
