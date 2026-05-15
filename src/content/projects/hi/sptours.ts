import sptours0 from "../../../assets/images/projects/sptours/sptours and travel.jpeg";

import type { ProjectContent } from "../../types";

export default {
  title: "एसपी टूर्स एंड ट्रैवल्स",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "एसपी टूर्स एंड ट्रैवल्स के लिए एक पूर्ण-सुविधायुक्त ट्रैवल बिज़नेस वेबसाइट — मुंबई के कुर्ला ईस्ट में स्थित प्रीमियम वाहन किराया सेवा।<br/><br/>रिएक्ट और टाइपस्क्रिप्ट में बनाई गई इस साइट में प्रीमियम फ्लीट (टेम्पो ट्रैवलर 12–17 सीटर ₹25/km, मारुति अर्टिगा 6+1 सीटर ₹15/km), लाइव प्राइस एस्टीमेशन के साथ बुकिंग फॉर्म, व्हाट्सएप बुकिंग इंटीग्रेशन और गूगल मैप्स के साथ कॉन्टैक्ट सेक्शन शामिल है। GPS ट्रैक्ड वाहन, 24/7 उपलब्धता और 100% ग्राहक संतुष्टि गारंटी।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sptours0,
        alt: "एसपी टूर्स एंड ट्रैवल्स वेबसाइट",
        caption: "एसपी टूर्स एंड ट्रैवल्स — टेम्पो ट्रैवलर और अर्टिगा किराया, मुंबई",
      },
    },
  ],
} as const satisfies ProjectContent;
