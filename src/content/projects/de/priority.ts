import priority0 from "../../../assets/images/projects/priority/priority-0.png";
import priority1 from "../../../assets/images/projects/priority/priority-1.png";
import junior0 from "../../../assets/images/projects/junior/junior-0.png";
import traworld0 from "../../../assets/images/projects/traworld/traworld-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "E-Commerce Plattform",
  theme: "dark",
  tags: ["react", "node", "postgresql", "razorpay", "supabase"],
  videoBorder: false,
  live: "https://www.prioritybags.in",
  description:
    "Eine einheitliche E-Commerce-Plattform, die drei Live-Storefronts betreibt — Priority Bags, Junior und Traworld — jede mit eigener Markenidentität und Kundenerfahrung.<br/><br/>Gebaut mit Razorpay-Zahlungsintegration, KI-gestützter Produktentdeckung, WhatsApp Business API und einem gemeinsamen Admin-Backend für Katalog, Lager und Bestellabläufe.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: priority0,
        alt: "Priority Bags Storefront",
        caption: "Priority Bags — Rucksäcke & Reise",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: junior0,
        alt: "Junior Storefront",
        caption: "Junior — Kinder-Schulrucksäcke",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: traworld0,
        alt: "Traworld Storefront",
        caption: "Traworld — Luxus-Gepäck",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: priority1,
        alt: "Admin-Portal",
        caption: "Gemeinsames Admin- & Betriebsportal",
      },
    },
  ],
} as const satisfies ProjectContent;

