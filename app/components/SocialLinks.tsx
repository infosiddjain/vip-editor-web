import type { IconType } from "react-icons";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { Globe, Mail } from "lucide-react";
import { DEVELOPER, type SocialName } from "./developer";

const ICONS: Record<SocialName, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  "X (Twitter)": FaXTwitter,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
};

type Props = { light?: boolean; withContact?: boolean };

// Round icon buttons for the developer's profiles; `light` for dark backgrounds.
export default function SocialLinks({ light, withContact }: Props) {
  const cls = `grid size-10 place-items-center rounded-full border transition ${
    light ? "border-white/15 text-blush/80 hover:border-accent hover:text-accent" : "border-line bg-white text-primary hover:border-primary hover:bg-primary hover:text-blush"
  }`;
  return (
    <div className="flex flex-wrap gap-3">
      {withContact && (
        <>
          <a href={DEVELOPER.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio" data-tip="Portfolio" className={cls}>
            <Globe size={18} />
          </a>
          <a href={`mailto:${DEVELOPER.email}`} aria-label="Email" data-tip="Email" className={cls}>
            <Mail size={18} />
          </a>
        </>
      )}
      {DEVELOPER.socials.map(s => {
        const Icon = ICONS[s.name];
        return (
          <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} data-tip={s.name} className={cls}>
            <Icon size={17} />
          </a>
        );
      })}
    </div>
  );
}
