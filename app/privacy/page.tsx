import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Prose, { type Block } from "../components/Prose";
import { DEVELOPER } from "../components/developer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the VIP Editor app and website handle your photos, videos, audio and personal information.",
};

const UPDATED = "24 November 2026";
const EMAIL = DEVELOPER.email;

const list = "list-disc space-y-2 pl-5";
const link = "font-semibold text-primary underline";
const mail = <a href={`mailto:${EMAIL}`} className={link}>{EMAIL}</a>;

const BLOCKS: Block[] = [
  {
    heading: "Summary",
    body: (
      <>
        <p>
          This policy explains how the <strong>VIP Editor</strong> mobile app (the &ldquo;app&rdquo;) and this website handle your
          information. VIP Editor is developed by {DEVELOPER.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
        </p>
        <ul className={list}>
          <li>All photo, video and audio editing happens <strong>on your device</strong>. Your files are never uploaded to us.</li>
          <li>The app has <strong>no accounts, no ads, no analytics and no tracking</strong>.</li>
          <li>The app does <strong>not collect, store, sell or share</strong> any personal data.</li>
          <li>If you message us through the website contact form, we use your details only to reply to you.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "What the app accesses and why",
    body: (
      <>
        <p>The app only accesses files that you choose. It uses them only to edit them on your device.</p>
        <ul className={list}>
          <li>
            <strong>Photos and videos you select:</strong> opened through your phone&rsquo;s system photo picker, so the app only
            sees the item you pick. It cannot browse the rest of your gallery.
          </li>
          <li><strong>Audio files you select:</strong> opened through the system file picker so you can edit them or add them to a video.</li>
          <li>
            <strong>Saving your edits:</strong> finished photos and videos are saved to your gallery in a &ldquo;VIP Editor&rdquo;
            album. Audio is saved to your Downloads folder. On Android 9 and older the app asks for storage permission only to do this.
          </li>
          <li>
            <strong>Temporary files:</strong> while you edit, working copies are kept in the app&rsquo;s private cache on your device.
            Android or iOS may clear them at any time, and they are removed when you uninstall the app.
          </li>
        </ul>
        <p>None of these files, and nothing about them, is sent to us or to anyone else.</p>
      </>
    ),
  },
  {
    heading: "What the app does not collect",
    body: (
      <ul className={list}>
        <li>No name, email address, phone number or account details</li>
        <li>No location, contacts, camera or microphone access</li>
        <li>No advertising ID or other device identifiers</li>
        <li>No usage analytics, crash reports or tracking</li>
        <li>No third-party SDKs that collect data. Editing uses open-source libraries that run entirely on your device.</li>
      </ul>
    ),
  },
  {
    heading: "Internet use",
    body: (
      <p>
        The app does not send your media or personal data over the internet. When you tap &ldquo;Contact us&rdquo; or
        &ldquo;Privacy policy&rdquo; in the app, the page opens in your phone&rsquo;s web browser. Anything you then do on this
        website is covered by the next section.
      </p>
    ),
  },
  {
    heading: "Information you send us through the website",
    body: (
      <>
        <p>
          If you use the <Link href="/contact" className={link}>contact form</Link>, we receive the name, email address, subject and
          message you enter. We use this <strong>only to read and reply to your message</strong>. We never use it for marketing.
        </p>
        <p>We use these service providers to run the website. Each one handles data only to provide its service:</p>
        <ul className={list}>
          <li><strong>HubForm:</strong> delivers contact form messages to our inbox.</li>
          <li>
            <strong>Vercel:</strong> hosts this website. Like most web hosts, it may briefly keep standard server logs (such as IP
            address and browser type) for security and reliability.
          </li>
        </ul>
        <p>We do not sell your information or share it with anyone else.</p>
      </>
    ),
  },
  {
    heading: "Data retention and deletion",
    body: (
      <ul className={list}>
        <li>
          <strong>App:</strong> we hold no app data, so there is nothing for us to delete. To remove everything the app stores on
          your phone, uninstall it. Edits you saved to your gallery or Downloads stay there until you delete them.
        </li>
        <li>
          <strong>Contact messages:</strong> kept only as long as needed to answer you, and at most 12 months. You can ask us to
          delete your message at any time by emailing {mail}. We will confirm within 30 days.
        </li>
      </ul>
    ),
  },
  {
    heading: "Security",
    body: (
      <p>
        Because your media never leaves your device, it is protected by your phone&rsquo;s own security. The website uses HTTPS,
        so contact form messages are encrypted in transit.
      </p>
    ),
  },
  {
    heading: "Your rights",
    body: (
      <p>
        Depending on where you live, you may have the right to access, correct or delete personal information we hold about you,
        or to object to how it is used. To make a request, email {mail}. We do not charge for this.
      </p>
    ),
  },
  {
    heading: "Children's privacy",
    body: (
      <p>
        VIP Editor is a general-audience app and is not directed at children under 13. The app collects no personal information
        from anyone, including children. If you believe a child has sent us personal information through the website, email us
        and we will delete it.
      </p>
    ),
  },
  {
    heading: "Changes to this policy",
    body: (
      <p>
        If we change this policy, we will post the new version on this page and update the &ldquo;Last updated&rdquo; date. If a
        change affects how your information is handled, we will also mention it in the app&rsquo;s release notes.
      </p>
    ),
  },
  {
    heading: "Contact us",
    body: (
      <p>
        Questions about this policy or your data? Email {mail} or use the <Link href="/contact" className={link}>contact page</Link>.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy" text="Your creativity is yours. Here is exactly how we protect it." />
      <Prose blocks={BLOCKS} updated={UPDATED} />
    </>
  );
}
