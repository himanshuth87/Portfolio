import dms0 from "../../../assets/images/projects/dms/dms-0.png";
import dms1 from "../../../assets/images/projects/dms/dms-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "B2B Händlerportal (DMS)",
  theme: "dark",
  tags: ["react", "node", "postgresql", "supabase"],
  videoBorder: false,
  description:
    "Ein B2B-Händlermanagementsystem für 17+ Händler in 8 indischen Bundesstaaten für Priority Bags.<br/><br/>Verfügt über rollenbasierte Zugriffskontrolle, MOQ-Durchsetzung, Echtzeit-Bestandsabzug, Bestellabläufe, Analyse-Dashboards und automatisierte WhatsApp- und E-Mail-Benachrichtigungen.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: dms0,
        alt: "DMS Admin-Dashboard",
        caption: "Admin-Übersichts-Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: dms1,
        alt: "Händlerportal",
        caption: "Händlerverwaltungsoberfläche",
      },
    },
  ],
} as const satisfies ProjectContent;
