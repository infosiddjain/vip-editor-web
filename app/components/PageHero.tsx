type Props = { kicker: string; title: string; text: string };

export default function PageHero({ kicker, title, text }: Props) {
  return (
    <section className="bg-primary py-20 text-center text-blush">
      <div className="mx-auto max-w-3xl px-4">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-accent uppercase">{kicker}</p>
        <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="mt-4 text-blush/80">{text}</p>
      </div>
    </section>
  );
}
