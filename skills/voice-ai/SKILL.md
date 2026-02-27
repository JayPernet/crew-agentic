---
name: voice-ai
description: "Expert in building voice AI applications and real-time conversational engines. Covers voice agents, real-time transcription (Deepgram, AssemblyAI), LLM integration with streaming, TTS synthesis (ElevenLabs, Azure), interrupt handling, and async worker pipelines. Use when: voice agent, voice AI, real-time speech, conversational AI, TTS, transcription."
---

# Voice AI

Complete guide for building voice AI applications, from simple voice-enabled features to full real-time conversational engines.

---

## Architecture Overview

Voice AI systems follow a **producer-consumer pipeline**:

```
Microphone → Transcriber → LLM Agent → Synthesizer → Speaker
               (STT)      (streaming)    (TTS)
```

Each stage runs as an **async worker** communicating via queues.

---

## 1. Transcription (Speech-to-Text)
**Providers**: Deepgram, AssemblyAI, Azure Speech, Google Cloud Speech

Key principle: Use **streaming transcription** (not batch) for low latency.

```python
async def transcribe_stream(audio_chunks):
    async for chunk in audio_chunks:
        transcription = await transcriber.transcribe(chunk)
        yield transcription.text
```

---

## 2. LLM Agent (Streaming)
Always stream LLM responses to enable early TTS synthesis.

```python
# ✅ Stream chunks as they arrive
async def generate_response(prompt):
    async for chunk in openai.complete(prompt, stream=True):
        yield chunk
```

---

## 3. Synthesis (Text-to-Speech)
**Providers**: ElevenLabs, Azure TTS, Google TTS, Amazon Polly, Play.ht

Buffer the **entire LLM response** before synthesizing to avoid audio jumping:

```python
# ✅ Buffer full response before TTS
full_response = ""
async for chunk in llm_stream:
    full_response += chunk
yield synthesizer.synthesize(full_response)
```

---

## 4. Interrupts
Users should be able to interrupt the bot mid-sentence.

```python
# Mute transcriber while bot speaks (prevents echo)
self.transcriber.mute()
play_audio(audio)
self.transcriber.unmute()

# Broadcast interrupt on user speech
async def on_user_speech(transcription):
    if self.bot_speaking:
        self.broadcast_interrupt()
```

---

## 5. Rate Limiting Audio Playback
Rate-limit chunks to match real-time playback (enables interrupts):

```python
async for chunk in synthesis_result.chunk_generator:
    start_time = time.time()
    output_device.consume_nonblocking(chunk)
    processing_time = time.time() - start_time
    await asyncio.sleep(max(seconds_per_chunk - processing_time, 0))
```

---

## Common Pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Audio jumps/cuts off | Small TTS chunks | Buffer full LLM response before TTS |
| Echo/feedback loop | Transcriber active while bot speaks | Mute during bot speech |
| Interrupts not working | All audio sent at once | Rate-limit audio chunks |
| Memory leaks | Unclosed WebSocket streams | Use context managers + cleanup |

---

## Implementation Steps

1. Implement async base workers
2. Add streaming transcriber
3. Add streaming LLM agent
4. Add TTS synthesizer
5. Wire pipeline with queues
6. Add interrupt system
7. Expose via WebSocket
8. Add error handling + monitoring

---

## Key Libraries

- `asyncio`, `websockets`, `FastAPI` — async backbone
- `pydub`, `numpy` — audio processing
- `aiolimiter` — rate limiting
