export function ScrollingText() {
  // Tekst powtórzony wielokrotnie dla ciągłego efektu
  const text = "Tworzymy Przyszłość";
  const repeatedText = Array(10).fill(text).join(" • ");

  return (
    <section className="relative py-12 overflow-hidden border-y border-white/10">
      {/* Gradient overlay na krawędziach */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
      
      {/* Scrollujący tekst */}
      <div className="flex whitespace-nowrap animate-scroll">
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent px-4">
          {repeatedText}
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent px-4">
          {repeatedText}
        </span>
      </div>
    </section>
  );
}
