import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Prose, { type Block } from "../components/Prose";

export const metadata: Metadata = { title: "Privacy Policy" };

const BLOCKS: Block[] = [
  { heading: "Overview", body: <p>VIP Editor is built to respect your privacy. This policy explains what information the app and website handle and how it is used.</p> },
  {
    heading: "Your media stays on your device",
    body: <p>All photo, video and audio editing happens locally on your device. We do not upload, store or view the files you open or create in VIP Editor.</p>,
  },
  {
    heading: "Permissions we request",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li><strong>Photos & media:</strong> to open files you choose for editing.</li>
        <li><strong>Save to gallery / storage:</strong> to save your finished edits.</li>
        <li><strong>Camera (optional):</strong> only if you choose to capture new media.</li>
      </ul>
    ),
  },
  {
    heading: "Information you send us",
    body: <p>If you contact us through the website, we use your name, email and message only to reply to you. We do not sell or share this information.</p>,
  },
  { heading: "Children's privacy", body: <p>VIP Editor does not knowingly collect personal information from children under 13.</p> },
  { heading: "Changes to this policy", body: <p>We may update this policy from time to time. Changes will be posted on this page with a new “last updated” date.</p> },
  { heading: "Contact", body: <p>Questions about privacy? Reach us through the <a href="/contact" className="font-semibold text-primary underline">contact page</a>.</p> },
];

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" text="Your creativity is yours. Here is exactly how we protect it." />
      <Prose blocks={BLOCKS} updated="15 October 2026" />
    </>
  );
}
