import sptours0 from "../../../assets/images/projects/sptours/sptours-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "एसपी टूर्स अँड ट्रॅव्हल्स",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "एसपी टूर्स अँड ट्रॅव्हल्ससाठी एक बिझनेस वेबसाइट — मुंबईची वाहन भाडे सेवा, जी ग्रुप टूर, कॉर्पोरेट सहली आणि कौटुंबिक प्रवासासाठी टेम्पो ट्रॅव्हलर आणि अर्टिगा भाड्याने देते।<br/><br/>रिएक्ट (React) आणि टाइपस्क्रिप्ट (TypeScript) वापरून बनवलेली, या साइटमध्ये सेवा शोकेस, वाहन यादी, बुकिंग इन्क्वायरी आणि मोबाइल-फर्स्ट रिस्पॉन्सिव्ह डिझाइन आहे।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sptours0,
        alt: "एसपी टूर्स अँड ट्रॅव्हल्स वेबसाइट",
        caption: "एसपी टूर्स अँड ट्रॅव्हल्स — टेम्पो ट्रॅव्हलर आणि अर्टिगा भाडे, मुंबई",
      },
    },
  ],
} as const satisfies ProjectContent;
