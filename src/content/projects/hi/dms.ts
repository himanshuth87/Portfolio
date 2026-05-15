import dms0 from "../../../assets/images/projects/dms/dms-0.png";
import dms1 from "../../../assets/images/projects/dms/dms-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "बी2बी वितरक पोर्टल (डीएमएस)",
  theme: "dark",
  tags: ["react", "node", "postgresql", "supabase"],
  videoBorder: false,
  description:
    "प्रायोरिटी बैग्स के लिए 8 भारतीय राज्यों में 17+ वितरकों की सेवा करने वाला एक बहु-भूमिका बी2बी वितरक प्रबंधन प्रणाली।<br/><br/>परिचालन दक्षता के लिए भूमिका-आधारित एक्सेस कंट्रोल, एमओक्यू प्रवर्तन, रीयल-टाइम इन्वेंट्री डिडक्शन, ऑर्डर वर्कफ़्लो, एनालिटिक्स डैशबोर्ड और स्वचालित व्हाट्सएप + ईमेल नोटिफिकेशन की सुविधा है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dms0,
        alt: "डीएमएस एडमिन डैशबोर्ड",
        caption: "एडमिन ओवरव्यू डैशबोर्ड",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dms1,
        alt: "वितरक पोर्टल",
        caption: "वितरक प्रबंधन इंटरफ़ेस",
      },
    },
  ],
} as const satisfies ProjectContent;
