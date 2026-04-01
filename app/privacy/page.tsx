import type { Metadata } from "next";
import LegalDocumentPage from "@/components/LegalDocumentPage";
import { legalDocuments } from "@/data/legalPages";

const doc = legalDocuments.privacy;

export const metadata: Metadata = {
  title: `${doc.title} — VibeCircles Help Center`,
  description: doc.description,
};

export default function PrivacyPage() {
  return <LegalDocumentPage pageId="privacy" />;
}
