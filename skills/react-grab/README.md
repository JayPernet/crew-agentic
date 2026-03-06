# React Grab Skill

This skill empowers Gemini CLI to interact with your React UI in real-time. It uses [React Grab](https://react-grab.com) to provide exact source code locations for any element you select in your browser.

## Installation

To enable React Grab in your project, run:

```bash
npx @react-grab/cli@latest
```

Follow the prompts to initialize and add the `gemini` agent integration.

## Usage

1.  **Hover:** Move your mouse over the UI element you want to edit.
2.  **Grab:** Press `⌘C` (Mac) or `Ctrl+C` (Windows/Linux).
3.  **Paste:** Paste the resulting `<selected_element>` block into the Gemini CLI chat.
4.  **Instruct:** Tell the agent what you want to change (e.g., "Change this button to be red and use a secondary variant").

## Benefits
- **Zero Search:** No more searching for `index.tsx` vs `Page.tsx`.
- **Exact Edits:** High-confidence changes based on precise line numbers.
- **Visual Context:** The agent sees the HTML structure exactly as it is rendered.
