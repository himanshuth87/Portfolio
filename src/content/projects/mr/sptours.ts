import sptours0 from "../../../assets/images/projects/sptours/sptours-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "एसपी टूर्स अँड ट्रॅव्हल्स",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "एसपी टूर्स अँड ट्रॅव्हल्ससाठी एक संपूर्ण-सुविधायुक्त ट्रॅव्हल बिझनेस वेबसाइट — मुंबईच्या कुर्ला ईस्टमध्ये स्थित प्रीमियम वाहन भाडे सेवा।<br/><br/>रिएक्ट आणि टाइपस्क्रिप्टमध्ये बनवलेल्या या साइटमध्ये प्रीमियम फ्लीट (टेम्पो ट्रॅव्हलर 12–17 सीटर ₹25/km, मारुती अर्टिगा 6+1 सीटर ₹15/km), लाइव्ह किंमत अंदाजासह बुकिंग फॉर्म, व्हाट्सएप बुकिंग इंटीग्रेशन आणि Google Maps सह संपर्क विभाग आहे। GPS ट्रॅक्ड वाहने, 24/7 उपलब्धता आणि 100% ग्राहक समाधान हमी।",
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
