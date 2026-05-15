import sptours0 from "../../../assets/images/projects/sptours/sptours-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "एसपी टूर्स एंड ट्रैवल्स",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "एसपी टूर्स एंड ट्रैवल्स के लिए एक बिज़नेस वेबसाइट — मुंबई की वाहन किराया सेवा, जो ग्रुप टूर, कॉर्पोरेट यात्राएं और पारिवारिक सफर के लिए टेम्पो ट्रैवलर और अर्टिगा किराए पर देती है।<br/><br/>रिएक्ट (React) और टाइपस्क्रिप्ट (TypeScript) के साथ बनाया गया, इस साइट में सेवा शोकेस, वाहन सूची, बुकिंग इनक्वायरी और मोबाइल-फर्स्ट रिस्पॉन्सिव डिज़ाइन शामिल है।",
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
