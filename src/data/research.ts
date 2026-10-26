export type Research = {
  icon?: string;
  highlight?: string;
  title: string;
  meta: string[];
  /** `**text**` is rendered as a highlighted phrase */
  abstract: string;
  tags: string[];
  status?: "ongoing" | "under-review" | "accepted" | "published";
  note?: string;
  links?: { label: string; url: string }[];
};

export const RESEARCH_STATES: Record<NonNullable<Research["status"]>, string> = {
  ongoing: "Ongoing",
  "under-review": "Under Review",
  accepted: "Accepted",
  published: "Published",
};

export const research: Research[] = [
  {
    icon: "🌾",
    highlight: "Stage-Specific Climate Sensitivity",
    title: "Phenology-Aligned Multi-Stress Crop Yield Prediction with Stage-Specific Climate Sensitivity",
    meta: ["Research Project", "Explainable Machine Learning", "Agriculture & Climate"],
    abstract:
      "Designing **explainable machine learning** models for crop yield estimation that align localized **phenological stages** with environmental and climate stress indicators, then applying explainability techniques to quantify how climate stress at each growth stage affects the final yield.",
    tags: ["Explainable AI", "Machine Learning", "Crop Yield Prediction", "Phenology", "Climate Stress"],
    status: "ongoing",
    note: "Research in progress",
  },
  {
    icon: "🛡️",
    highlight: "Deep Packet Inspection",
    title: "Detection of APT Command-and-Control (C2) Communication Using Deep Packet Inspection",
    meta: ["Research Project", "Network Security"],
    abstract:
      "Investigating **Deep Packet Inspection (DPI)** frameworks and network traffic heuristics to detect stealthy **Advanced Persistent Threat (APT)** command-and-control communication.",
    tags: ["Cybersecurity", "Deep Packet Inspection", "APT Detection", "Network Traffic Analysis", "Threat Detection"],
    status: "ongoing",
    note: "Research in progress",
  },
];
