import priority0 from "../../../assets/images/projects/priority/priority-0.png";
import priority1 from "../../../assets/images/projects/priority/priority-1.png";
import junior0 from "../../../assets/images/projects/junior/junior-0.png";
import traworld0 from "../../../assets/images/projects/traworld/traworld-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ई-कॉमर्स प्लॅटफॉर्म",
  theme: "dark",
  tags: ["react", "node", "postgresql", "razorpay", "supabase"],
  videoBorder: false,
  live: "https://www.prioritybags.in",
  description:
    "तीन लाईव्ह स्टोअरफ्रंट्स — प्रायोरिटी बॅग्स, जुनियर आणि ट्रावर्ल्ड — चालवणारे एक एकत्रित ई-कॉमर्स प्लॅटफॉर्म, ज्यापैकी प्रत्येकाची स्वतःची ब्रँड ओळख, उत्पादन सूची आणि ग्राहक अनुभव आहे।<br/><br/>रेझरपे (Razorpay) पेमेंट इंटिग्रेशन, एआय-assisted उत्पादन शोध, ऑर्डर नोटिफिकेशन्ससाठी व्हॉट्सॲप बिझनेस एपीआय आणि कॅटलॉग, इन्व्हेंटरी आणि ऑर्डर ऑपरेशन्ससाठी सामायिक ॲडमिन बॅकएंडसह तयार केले आहे।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: priority0,
        alt: "प्रायोरिटी बॅग्स स्टोअरफ्रंट",
        caption: "प्रायोरिटी बॅग्स — बॅकपॅक आणि प्रवास",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: junior0,
        alt: "जुनियर स्टोअरफ्रंट",
        caption: "जुनियर — मुलांचे शालेय बॅकपॅक",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: traworld0,
        alt: "ट्रावर्ल्ड स्टोअरफ्रंट",
        caption: "ट्रावर्ल्ड — लक्झरी सामान",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: priority1,
        alt: "ॲडमिन पोर्टल",
        caption: "सामायिक ॲडमिन आणि ऑपरेशन्स पोर्टल",
      },
    },
  ],
} as const satisfies ProjectContent;
