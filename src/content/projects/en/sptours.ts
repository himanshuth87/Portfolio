import sptours0 from "../../../assets/images/projects/sptours/sptours-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "SP Tours & Travels",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "A full-featured travel business website for SP Tours & Travels — Mumbai's premium vehicle rental service based in Kurla East.<br/><br/>Built with React and TypeScript, the site showcases a premium fleet (Tempo Traveller 12–17 seater at ₹25/km, Maruti Ertiga 6+1 seater at ₹15/km), an interactive booking form with live price estimation, WhatsApp booking integration, and a contact section with Google Maps embed. Key highlights: GPS-tracked vehicles, 24/7 availability, and 100% customer satisfaction guarantee.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: sptours0,
        alt: "SP Tours & Travels Website",
        caption: "SP Tours & Travels — Tempo Traveller & Ertiga Rental, Mumbai",
      },
    },
  ],
} as const satisfies ProjectContent;
