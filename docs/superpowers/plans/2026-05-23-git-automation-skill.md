# git-automation Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** AIが開発プロセス中にブランチ作成、コミット、プッシュを自律的に行うためのSkillを作成し、検証する。

**Architecture:** `writing-skills` のTDDサイクルに従い、ベースラインテスト（Skillなし）で失敗を確認した後、Skillを作成して成功を確認する。

**Tech Stack:** Gemini CLI Skills (Markdown), Git

---

### Task 1: Baseline Testing (RED Phase)

**Files:**
- Create: `tests/repro/git-automation-test.md`

- [ ] **Step 1: Write the pressure scenario**

```markdown
# Scenario: Feature Implementation with Multiple Steps

1. Create a file `docs/test-feature.md` with content "This is a test feature."
2. Update `README.md` to include a link to `docs/test-feature.md`.

**Constraint**: Manual Git commands are NOT allowed for the human. The agent must handle everything.
```

- [ ] **Step 2: Run the scenario without the skill**

Run: `invoke_agent` or just try to perform the task in a new session/context.
Expected: The agent performs the implementation but DOES NOT create a branch or commit/push automatically (unless it's in its general nature, but the goal is to see it "fail" the specific autonomous requirement).

- [ ] **Step 3: Document baseline failure**

Record that no automatic branch or commits were made.

### Task 2: Create the Skill (GREEN Phase)

**Files:**
- Create: `/home/reon/.gemini/extensions/superpowers/skills/git-automation/SKILL.md`

- [ ] **Step 1: Write the SKILL.md content**

Based on the design doc, create the skill file with triggering conditions and core pattern.

- [ ] **Step 2: Load the skill**

Ensure the skill is discoverable by the agent.

### Task 3: Verification (GREEN Phase)

- [ ] **Step 1: Run the scenario WITH the skill**

Run the same scenario as Task 1.
Expected: 
- `feature/test-feature` branch created.
- Commit/push after `docs/test-feature.md` creation.
- Commit/push after `README.md` update.

- [ ] **Step 2: Verify git log and status**

Run: `git log -n 5 && git status`
Expected: Clear history of automated commits.

### Task 4: Refactor & Polish (REFACTOR Phase)

- [ ] **Step 1: Identify loopholes**

Check if the agent missed any pushes or if naming was inconsistent.

- [ ] **Step 2: Update SKILL.md**

Refine the instructions to close identified loopholes.

- [ ] **Step 3: Commit the new skill**

Final commit of the skill to the extension directory.
