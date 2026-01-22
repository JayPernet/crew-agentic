# Product Strategy and Best Practices Guide

This guide serves as a reference for the principles and methods that guide product creation and evolution at StarIAup.

---

## 1. The Foundation: Vision and Research

### 1.1. Product Vision
Vision is our "North Star". It is the aspirational statement that describes the impact we want to have on the world. It should be inspiring and guide all our decisions.

- **Vision:** The long-term "why". Ex: "Make healthy and personalized nutrition accessible to everyone."
- **Mission:** The "how" we will achieve the vision. Ex: "Building an intelligent platform that creates meal plans adapted to each individual's needs."

### 1.2. Research and Discovery
We don't build products based on assumptions. Strategy starts with a deep understanding of the problem, the market, and the user.

- **User Research:** The goal is to understand user "pain points", needs, and behavior, not to ask what features they want.
  - **Techniques:** Interviews, contextual observation, surveys, personas.
- **Competitive Analysis:** Map direct and indirect competitors to identify opportunities, threats, and differentiators.

## 2. Defining Success: Goals and Metrics

### 2.1. OKRs (Objectives and Key Results)
OKRs align the team around clear and measurable goals.

- **Objective:** What do we want to achieve? Should be qualitative, ambitious, and inspiring.
  - *Example:* "Launch a successful MVP that validates our value proposition."
- **Key Results:** How will we know we've achieved the objective? Should be quantitative and measurable.
  - *Example KR1:* "Achieve a 40% retention rate in the first week (D7)."
  - *Example KR2:* "Reach a satisfaction score (CSAT) of 8/10 among the first 100 users."

### 2.2. Metrics that Matter
Focus on actionable metrics that reflect real user behavior and business value. Avoid "vanity metrics".

- **Actionable Metrics:** Conversion rate, retention, task time, engagement per feature.
- **Vanity Metrics:** Total downloads, number of registrations, page views (without context).

## 3. From Idea to Backlog: User Stories

### 3.1. Writing Quality User Stories
A User Story describes a functionality from the perspective of the person who wants it.

- **Standard Format:** "As a [TYPE OF USER], I want to [PERFORM AN ACTION], so that [I GET A BENEFIT]."
- **INVEST Criteria:** Stories should be:
  - **I**ndependent
  - **N**egotiable
  - **V**aluable
  - **E**stimable
  - **S**mall
  - **T**estable

### 3.2. Acceptance Criteria
These are the conditions that a story must satisfy to be considered "done". They remove ambiguity and are the basis for testing.

- **Gherkin Format:** "Given [the context], When [an action happens], Then [the expected result]."
- **Example (Login):**
  - **User Story:** "As a registered user, I want to log in, so that I can access my profile."
  - **Acceptance Criterion 1:** "Given that I am on the login page, when I enter my correct email and password and click 'Enter', then I am redirected to my dashboard."
  - **Acceptance Criterion 2:** "Given that I am on the login page, when I enter an incorrect password, then I see the message 'Invalid email or password'."

## 4. The Art of Prioritization: Focus on What Generates More Value

No team has infinite resources. Prioritizing is key.

### 4.1. MoSCoW Method
Simple and effective for aligning the team on what is critical.

- **Must Have:** Essential for delivery. Without this, the product doesn't work or is illegal. Non-negotiable.
- **Should Have:** Important, but not vital. Its absence weakens the product, but doesn't break it.
- **Could Have:** Desirable, "nice to have". Improves the experience, but has low impact if not done.
- **Won't Have:** What has been explicitly decided will **not** be done in this version/release.

### 4.2. RICE Method
Framework for more objective and data-driven prioritization.

- **R**each: How many people will be impacted by this feature in a time period? (Ex: 500 users/month)
- **I**mpact: What is the size of the impact for these users? (Use a scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low)
- **C**onfidence: How confident are you in your reach and impact estimates? (100%, 80%, 50%)
- **E**ffort: How much work time (person-week, story points) will this require?

**Formula: `(Reach × Impact × Confidence) / Effort = RICE Score`**

## 5. Managing Scope and the Future

### 5.1. The MVP (Minimum Viable Product)
The MVP is not a bad or incomplete product. It is the **smallest version of the product that can be launched to deliver value to the user and generate validated learning for the business.**

### 5.2. Strategic Roadmapping
A good roadmap communicates strategy, not just a list of features with dates.

- **Theme/Objective-Based Roadmap:** Instead of "Q1: Login Feature, Profile Feature", use "Q1: Focus on Acquisition and Onboarding". This gives the team autonomy to find the best solution for the objective.

### 5.3. Dealing with "Feature Creep" (Scope Increase)
The desire for "just one more thing" is natural. Know how to manage it.

- **Ask "Why?":** What user problem does this new idea solve? How does it connect with our current objective?
- **Use the "Parking Lot":** Create a place to write down good ideas that aren't a priority now. This shows that the idea was heard, but keeps the focus.
- **Argue with Data:** "I understand the idea, but our data shows that 90% of users are struggling with flow X. I propose we keep our focus on that for now."
