import priority0 from "../../../assets/images/projects/priority/priority-0.png";
import priority1 from "../../../assets/images/projects/priority/priority-1.png";
import junior0 from "../../../assets/images/projects/junior/junior-0.png";
import traworld0 from "../../../assets/images/projects/traworld/traworld-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ई-कॉमर्स प्लेटफॉर्म",
  theme: "dark",
  tags: ["react", "node", "postgresql", "razorpay", "supabase"],
  videoBorder: false,
  live: "https://www.prioritybags.in",
  description:
    "तीन लाइव स्टोरफ्रंट्स — प्रायोरिटी बैग्स, जूनियर और ट्रावर्ल्ड — को शक्ति प्रदान करने वाला एक एकीकृत ई-कॉमर्स प्लेटफॉर्म, जिनमें से प्रत्येक की अपनी ब्रांड पहचान, उत्पाद सूची और ग्राहक अनुभव है।<br/><br/>रेज़रपे (Razorpay) भुगतान एकीकरण, एआई-assisted उत्पाद खोज, ऑर्डर नोटिफिकेशन के लिए व्हाट्सएप बिजनेस एपीआई और कैटलॉग, इन्वेंट्री और ऑर्डर ऑपरेशंस के लिए एक साझा एडमिन बैकएंड के साथ बनाया गया है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: priority0,
        alt: "प्रायोरिटी बैग्स स्टोरफ्रंट",
        caption: "प्रायोरिटी बैग्स — बैकपैक्स और यात्रा",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: junior0,
        alt: "जूनियर स्टोरफ्रंट",
        caption: "जूनियर — बच्चों के स्कूल बैकपैक्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: traworld0,
        alt: "ट्रावर्ल्ड स्टोरफ्रंट",
        caption: "ट्रावर्ल्ड — लग्जरी सामान",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: priority1,
        alt: "एडमिन पोर्टल",
        caption: "साझा एडमिन और संचालन पोर्टल",
      },
    },
  ],
} as const satisfies ProjectContent;
