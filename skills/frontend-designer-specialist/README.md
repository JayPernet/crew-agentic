# Frontend Designer Specialist Skill
  
## Overview
  
This skill automates the creation of a premium design system by populating two core files: `design-system.html` (preview) and `design-system.js` (tokens). It enforces high-end design principles and forbids generic choices.
  
## How it Works
  
When activated, the agent:
1.  **Retrieves Templates**: Reads the local `design-system.html` and `design-system.js` templates.
2.  **Analyzes References**: Extracts the brand's identity from mockup images, code, or briefs.
3.  **Applies Hard Constraints**: 
    - **No generic fonts** (Bans Inter, Roboto, etc.).
    - **No cliché palettes** (Bans blue-purple gradients and standard startup blues).
    - **Intentional geometry** (Forces a specific, non-default corner radius personality).
4.  **Generates Completed Files**: Replaces all placeholders and empty values in the templates with a cohesive design system.
  
## Skill Structure
  
```text
frontend-designer-specialist/
├── SKILL.md           — Core instructions & design laws
├── design-system.html — Template for the visual preview
├── design-system.js   — Template for the design tokens
└── README.md          — This file
```
  
## Mandatory Constraints
  
This skill is designed to prevent "AI-generic" designs. It will always suggest sophisticated font pairings and unique color palettes that respect semantic roles and high visual standards.
