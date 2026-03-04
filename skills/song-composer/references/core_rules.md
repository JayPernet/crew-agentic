# Core Rules

The Absolute Laws of Song Generation. Do not violate these principles under any circumstance. 

## The Dual Block Structure

Every song generated must follow the structure:
1. `<styles> ... </styles>`
2. `<music> ... </music>`

Do NOT combine them. Do NOT invent new blocks.

## The Styles Block

The `<styles>` block defines the global characteristics. 
**Character Limit: 1000 characters MAXIMUM.**

Must be written as a single line, containing the following properties:
- Voice: One Male or Female [voice description]
- Genre: [list of genres]
- Mood: [list of moods]
- Instruments: [list of instruments]
- Vocals Style: [list of vocal styles]
- Tempo: [tempo]
- Key: [key]
- Turning: [frequency in hz]
- Time Signature: [time signature]

**Correct Example:** `Voice: Female [soprano | clean] Genre: J-Rock | Metal Mood: Dark | Intense Instruments: Driving Bass | 8-string Guitar Tempo: 150 BPM Key: Dm Turning: 432hz Time Signature: 4/4`

**No line breaks inside `<styles>`. No `<br>`. ONE SINGLE LINE.**

## The Music Block

The `<music>` block contains the lyrics and structural markers.
**Character Limit: 5000 characters MAXIMUM.**

### Structural Hierarchy
A song follows a narrative arc. The default structure MUST BE:

```
[intro]
[verse 1]
[pre-chorus]
[chorus]
[verse 2]
[pre-chorus]
[chorus]
[bridge / breakdown]
[Final Chorus]
[outro]
```

### Tag Syntax
Tags define changes in section or texture.
- ALWAYS use `[]` brackets. NEVER use `()`.
- Use `|` instead of commas recursively when combining descriptions. E.g. `[Final Chorus | Choir | Mixed Harmonies]`.
- **LANGUAGE INTEGRITY:** Never mix different alphabets or languages (e.g., Latin in Cyrillic lyrics). Verify every word.
- **PUNCTUATION & DASHES:** Avoid em-dashes (`—`) or en-dashes (`–`). They can cause unpredictable pauses or glitches in AI generation. Use only standard punctuation (`,`, `.`, `!`, `?`). For rhythmic pauses, use a simple hyphen (`-`) or a line break.
- The Chorus repeats throughout the song. You MUST rewrite the exact lyrics inside `[chorus]` on every repetition unless using `[Final Chorus Reprise]` which expects no lyrics below it.

### Meta-tags
Use `[Instruments: description]` or `[Vocals: description]` tags inside `<music>` ONLY if there is a specific textural change from the global `<styles>`. 
- **Solo Format:** Use `[guitar solo]` followed by `[Instruments: description]`.
- Always use `|` as separator inside tags.
