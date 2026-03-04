# Pop & Electronic Structure

When generating Pop, Electronic, Synth-pop, EDM, Trap, use these specific meta-tags inside the `<music>` block to trigger the synthetic beats, dynamic builds, and vocal modulations characteristic of the genres. 

**Ensure you follow the [Core Rules](../core_rules.md) regarding limits and base structure.**

## Typical Structural Tags

Electronic and modern Pop thrive on synthetic rhythms and tension/release structures.

- **`[build-up]`**: Often precedes a chorus or drop. Good for increasing tension.
- **`[drop]`**: The climax. Replace or suffix the chorus with `[drop]` when writing EDM/Trap to define the heavy beat.
- **`[dance break]`**: An instrumental breakdown meant for dancing. Best used after a chorus or bridge.
- **`[synth solo]`** or **`[beat drop]`**: Use for instrumental showcases.
- **`[autotune]`** or **`[vocoder]`**: Use within `[Vocals: ...]` to signify vocal texturing.

## Advanced Usage

Combine tags to shape the drop:

```
[Pre-Chorus | build-up | snare roll | rising pitch]
[Vocals: ascending melody]
{lyrics here}

[Chorus | drop | heavy bass | sidechain compression]
[Vocals: high energy]
{lyrics here}

[dance break | instrumental]
```

## `<styles>` Guidance

When writing the `<styles>` block (max 1000 chars), include descriptors like: 
`Synth-driven, Four-on-the-four, Sub Bass, Sidechain Compression, Bright Synths, Sweeping Pads, Autotune, Vocal Chops, High-energy Drop, Pluck arpeggios` as appropriate.
