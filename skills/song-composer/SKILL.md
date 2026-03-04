---
name: song-composer
description: Use when writing, structuring, or generating lyrics/songs for AI generation (like Suno), ensuring adherence to character limits, meta-tags, and proper song architecture.
metadata:
  category: content_creation
  triggers: write a song, generate lyrics, write lyrics, create music, suno music, compose a song, music structure
---

# Song Composer

Dispatcher for song generation and architecture. This skill ensures generated lyrics and songs adhere strictly to character limits, visual structure, and proper use of meta-tags for Suno music generator.

## ⚡ Quick Decision Tree

### What genre the user want you to compose?

1. Go to `references/genres/`, find the file that matches the genre the user want you to compose and follow the instructions.
2. If the file doesn't exist, use the `references/gerador-compositor.md` as a template for this new genre.
3. If you find the file, read it carefully and follow the instructions.
4. Use the `template-estrutura-musica.md` as knowledge base for writing the song.

### 

## 📚 Component Index

| Component | Purpose |
|-----------|---------|
| **[Template Estrutura Musica](references/template-estrutura-musica.md)** | **SOURCE OF TRUTH.** The primary reference for structure, tags, and limits. |
| **[Core Rules](references/core_rules.md)** | The absolute laws of song structure. REQUIRED READING. |
| **[Gotchas](gotchas.md)** | Common mistakes (e.g. language contamination, wrong separators) and how to avoid them. |

## ❗ Mandatory Anti-Rationalization

- **NEVER** exceed the character limits: `<styles>` = max 1000 chars, `<music>` = max 5000 chars. No exceptions.
- **NEVER** use parentheses `()`. Always use brackets `[]` for structure tags.
- **NEVER** mix languages or alphabets (e.g., Latin characters in Cyrillic lyrics). Verify character-by-character.
- **NEVER** use commas `,` inside structure tags. Use `|` for all separators.
- **SOURCE OF TRUTH:** If `Core Rules` and `Template` conflict, follow the `Template Estrutura Musica`.
- **Breaking these rules breaks the music generator.** Adhere strictly to the letter of the rules; "close enough" will fail.

See [Gotchas](gotchas.md) to bulletproof your generation output before show the result to the user.
