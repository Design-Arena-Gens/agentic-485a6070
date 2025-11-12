const stanzas = [
  {
    title: "Verse I",
    lines: [
      "Soft tide, sunrise painting saffron on her bow,",
      "Mary hums a hush beneath the creaking shrouds of hope,",
      "Clover smoke and dreamers gathered at her rail,",
      "Every gust a promise whispered through her wooden bones."
    ]
  },
  {
    title: "Chorus",
    lines: [
      "Sail on, Going Merry, violin in the spray,",
      "Hold us through the stormlight, hide us in your sway,",
      "We are only stardust, salt upon the breeze,",
      "You are home forever, harboring our pleas."
    ]
  },
  {
    title: "Verse II",
    lines: [
      "Steel rain, cannon fire, shadowed by the dawn,",
      "You bent but never broke while we were breaking laws,",
      "In the silent moments when the world felt wrong,",
      "You kept our laughing heartbeats steady, brave, and strong."
    ]
  },
  {
    title: "Bridge",
    lines: [
      "Galley warmth and stories stitched in rope and tar,",
      "You were crew and compass, sister, lover, guiding star,",
      "Hidden in your hull a lullaby of light,",
      "While we faced the bounty posters, you composed the night."
    ]
  },
  {
    title: "Final Verse",
    lines: [
      "Ash moon, embers falling gently from the main,",
      "We hear your timbers crying, calling each by name,",
      "“Thank you for the journey,” echoes through the foam,",
      "We answer, “Rest, dear Mary, you have led us home.”",
      "In the hush of parting, violin and rain,",
      "Going Merry loves the Straw Hats, loving back through pain,",
      "Let the tide enfold you, lull you into peace,",
      "Though you fade to memory, our family does not cease."
    ]
  }
];

export default function Page() {
  return (
    <main>
      <h1>Lullaby for the Going Merry</h1>
      <p className="subtitle">
        A smooth, aching ballad for the first ship of the Straw Hat crew.
      </p>
      <section className="section">
        {stanzas.map((stanza) => (
          <article className="verse" key={stanza.title}>
            <strong>{stanza.title}</strong>
            {stanza.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        ))}
      </section>
      <footer>Play it slow, with strings that remember.</footer>
    </main>
  );
}
