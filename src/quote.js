let quotes = [
  {
    message: 'Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.',
    author: 'Dylan Thomas'
  }
];

export function randomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
