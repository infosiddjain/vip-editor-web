// Details shown in the "Meet the developer" section and the footer credit.
export const DEVELOPER = {
  name: "Siddharth Jain",
  initials: "SJ",
  role: "Software Engineer · Full-stack · Mobile",
  location: "Hapur, near Delhi, India",
  bio: "Full-stack developer with 5+ years of experience building scalable web and mobile apps with React.js, React Native, Node.js and MongoDB. I design and build products end to end — from UI/UX in Figma to production apps on the web and Play Store.",
  skills: ["React", "React Native", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Figma"],
  portfolio: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/",
  email: "infosiddjain@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/infosiddjain" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/infosiddjain/" },
    { name: "X (Twitter)", url: "https://x.com/infosiddjain" },
    { name: "Instagram", url: "https://www.instagram.com/infosiddjain/" },
    { name: "Facebook", url: "https://www.facebook.com/infosiddjain" },
  ],
} as const;

export type SocialName = (typeof DEVELOPER.socials)[number]["name"];
