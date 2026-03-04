---
name: cover-generator
description: Use this skill to generate prompts for album covers (EP, LP) or singles artwork. Trigger whenever the user mentions creating a cover, artwork, or image for a song, single, EP, or album — even if they don't use the word "cover" explicitly. This skill produces a ready-to-use prompt for Nano Banana Pro (or any AI image generator). Always use this skill when music + visual art are involved together.
---

# Cover Generator

This skill produces a complete, ready-to-paste image generation prompt for album or single cover art. The output is optimized for **Nano Banana Pro** but works with any diffusion-based image generator (Midjourney, DALL-E, Stable Diffusion, etc.).

---

## Workflow

### Step 1 — Gather Information

Before generating anything, collect the following from the user. Ask only for what's missing — if the user already provided details, use them directly.

**Required:**
- Artist name
- Project title (album, EP, or single name)
- Type: `album (LP)` / `EP` / `single`
- Musical style(s) or genre(s)
- Core themes or mood of the project (e.g., heartbreak, rebellion, euphoria, nostalgia)

**Optional but valuable:**
- Track list with brief descriptions of each track's vibe
- Reference artists, albums, or films for visual direction
- Specific visual elements the artist wants (or wants to avoid)
- Whether a record label logo should appear (if yes, note placement)
- Color preferences

If the user is in a hurry or says something like "just generate it", make reasonable creative assumptions and state them clearly before the output.

---

### Step 2 — Build the Creative Brief

Internally synthesize the gathered information into:

1. **Core Visual Concept** — One sentence describing the central image or scene.
2. **Aesthetic Style** — Art direction keywords (e.g., "photorealistic", "brutalist graphic design", "surrealist oil painting", "lo-fi film photography").
3. **Color Palette** — 3–5 color descriptors.
4. **Mood Keywords** — Drawn from the track styles and themes (e.g., "melancholic", "industrial", "euphoric", "ethereal").
5. **Negative Prompts** — What to explicitly avoid.

---

### Step 3 — Assemble the Final Prompt

Output the prompt in this exact structure, clearly labeled and ready to copy-paste:

---

**COVER GENERATOR OUTPUT**

**Project:** `[Artist] — [Title] ([Type])`

---

**(Positive Prompt)**

```
photorealistic, cinematic lighting, ultra-detailed, 8k, square album cover art for [Artist]'s [type] '[Title]', [Core Visual Concept keywords], [Aesthetic Style keywords], [Color Palette keywords], [Mood keywords from track analysis], [label logo note if applicable]
```

---

**(Negative Prompt)**

```
ugly, deformed, blurry, pixelated, low resolution, bad anatomy, extra limbs, extra fingers, poorly drawn hands, poorly drawn face, signature, watermark, text, grainy, out of frame, body out of frame, jpeg artifacts, [custom negatives based on user input]
```

---

**Technical Parameters (set in tool UI or CLI):**
- Aspect Ratio: `1:1`
- Resolution: `3000x3000`
- Style: `raw` (or equivalent highest-detail setting)

---

**Creative Notes:**
> [2–3 sentences explaining the concept and why these choices serve the project. Mention any assumptions made.]

---

## Important Rules

- **Never include actual text or album title as part of the visual prompt** — AI image generators render text poorly. Typography is added in post-production.
- **Always output a square (1:1) format** — this is the industry standard for streaming platforms.
- **If track list is provided**, analyze each track's style and distill recurring visual themes rather than trying to represent every track literally.
- **If the user wants multiple concept variations**, generate 2–3 distinct positive prompts with different visual directions, keeping the negative prompt and parameters shared.
- **Logo integration**: if a label logo is requested, add `subtle record label logo watermark in lower corner` to the positive prompt and note to the user that they should composite it in post if precise branding is critical.

---

## Example Output (for reference)

**Project:** LXST — *Hollow City* (EP)

**(Positive Prompt)**
```
photorealistic, cinematic lighting, ultra-detailed, 8k, square album cover art for LXST's EP 'Hollow City', abandoned brutalist tower block at dusk, cracked concrete and overgrown vines, lone figure silhouetted against a bruised orange sky, industrial decay, dystopian atmosphere, muted earth tones with deep rust and ash grey, electric amber accent light, nu-metal aggression meets post-rock melancholy, melancholic, desolate, cinematic wide shot
```

**(Negative Prompt)**
```
ugly, deformed, blurry, pixelated, low resolution, bad anatomy, extra limbs, extra fingers, poorly drawn hands, poorly drawn face, signature, watermark, text, grainy, out of frame, body out of frame, jpeg artifacts, bright colors, cheerful, cartoon, fantasy creatures, daytime
```

**Parameters:** 1:1 | 3000x3000 | style raw