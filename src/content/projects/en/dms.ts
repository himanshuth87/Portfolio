import dms0 from "../../../assets/images/projects/dms/dms-0.png";
import dms1 from "../../../assets/images/projects/dms/dms-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "B2B Distributor Portal (DMS)",
  theme: "dark",
  tags: ["react", "node", "postgresql", "supabase"],
  videoBorder: false,
  description:
    "A multi-role B2B distributor management system serving 17+ distributors across 8 Indian states for Priority Bags.<br/><br/>Features role-based access control, MOQ enforcement, real-time inventory deduction, order workflows, analytics dashboards, and automated WhatsApp + email notifications for operational efficiency.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dms0,
        alt: "DMS Admin Dashboard",
        caption: "Admin Overview Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dms1,
        alt: "Distributor Portal",
        caption: "Distributor Management Interface",
      },
    },
  ],
} as const satisfies ProjectContent;
