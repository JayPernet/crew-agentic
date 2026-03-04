# Gotchas & Rationalizations

This file is to prevent common AI rationalizations when generating music lyrics and structures.

## Rationalization Table

| Excuse | Reality |
| ------ | ------- |
| "I'll just add one more Verse before the Chorus." | Breaking established hierarchical flow breaks the AI generation. Stick to Verse -> Pre-Chorus -> Chorus -> Verse. |
| "I ran out of space so I'll just write [chorus repeatedly]." | The AI generator needs explicit lyrics for every section. Reprise tags do not work well without lyrics unless specified. |
| "I'll use () to denote the tempo instead of [] tags." | Suno and music generators STRICTLY require `[]` for structure/meta-tags. `()` are sung. |
| "I'll mix alphabets for cool effects (e.g., Latin 'da' in 'льda')." | **FAILURE.** Mixing alphabets or languages in the middle of a word or section breaks the AI's pronunciation and flow. Use 100% pure target alphabet. |
| "Since the chorus is the same, I don't need to rewrite the lyrics." | Yes, you do! You MUST rewrite the exact lyrics inside `[chorus]` every time it occurs. |

## Red Flags - STOP and Start Over

- You used `(...)` inside `<music>`.
- You omitted the lyrics text in a repeating chorus.
- You used commas `,` inside `[]` tags. Use `|`.
- You used em-dashes (`—`) or en-dashes (`–`) in lyrics.
- You mixed Latin and Cyrillic characters.
- You exceeded 1000 characters for `<styles>` or 5000 for `<music>`.

## Common Mistakes 

**Mistake 1: Solo Structure**
- Wrong: `[guitar solo | distorted | fast]`
- Right: `[guitar solo]` followed by `[Instruments: distorted | fast | melodic]`.

**Mistake 2: Style Format**
- Wrong: A comma-separated list of genres without field names.
- Right: `Voice: ... Genre: ... Mood: ...` in a single line.

**Mistake 3: Language Contamination**
- Wrong: `льda` (mixing 'da' Latin with 'ль' Cyrillic).
- Right: `льда` (pure Cyrillic).

**Mistake 4: Punctuation Glitches**
- Wrong: `Смерть — это милость.` (Em-dash used for poetic pause).
- Right: `Смерть, это милость.` or `Смерть - это милость.` (Standard punctuation or simple hyphen).
