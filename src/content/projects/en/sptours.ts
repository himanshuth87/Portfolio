import sptours0 from "../../../assets/images/projects/sptours/sptours-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "SP Tours & Travels",
  theme: "light",
  tags: ["react", "typescript"],
  videoBorder: false,
  live: "https://sptoursntravels.com/",
  description:
    "A business website for SP Tours & Travels — Mumbai's vehicle rental service specialising in Tempo Traveller and Ertiga hire for group tours, corporate trips, and family travel.<br/><br/>Built with React and TypeScript, the site features a clean service showcase, vehicle listings, booking inquiry flow, and mobile-first responsive design optimised for local search traffic.",
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
