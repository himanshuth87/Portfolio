import priority0 from "../../../assets/images/projects/priority/priority-0.png";
import priority1 from "../../../assets/images/projects/priority/priority-1.png";
import junior0 from "../../../assets/images/projects/junior/junior-0.png";
import traworld0 from "../../../assets/images/projects/traworld/traworld-0.png";

import type { ProjectContent } from "../../types";

export default {
  title: "E-Commerce Platform",
  theme: "dark",
  tags: ["react", "node", "postgresql", "razorpay", "supabase"],
  videoBorder: false,
  live: "https://www.prioritybags.in",
  description:
    "A unified e-commerce platform powering three live storefronts — Priority Bags, Junior, and Traworld — each with its own brand identity, product catalogue, and customer experience.<br/><br/>Built with Razorpay payment integration, AI-assisted product discovery, WhatsApp Business API for order notifications, and a shared admin backend for catalog, inventory, and order operations.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: priority0,
        alt: "Priority Bags Storefront",
        caption: "Priority Bags — Backpacks & Travel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: junior0,
        alt: "Junior Storefront",
        caption: "Junior — Kids School Backpacks",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: traworld0,
        alt: "Traworld Storefront",
        caption: "Traworld — Luxury Luggage",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: priority1,
        alt: "Admin Portal",
        caption: "Shared Admin & Operations Portal",
      },
    },
  ],
} as const satisfies ProjectContent;

