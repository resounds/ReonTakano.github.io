# Design Spec: git-automation Skill

## 1. Overview
開発タスクの開始から完了まで、ブランチ作成・コミット・プッシュといったGit操作をAIが完全に自律して行うためのSkill。

## 2. Triggering Conditions (When to Use)
- 新しい機能実装やバグ修正のタスクを開始する直前。
- `writing-plans` を実行し、具体的な実装フェーズに入るタイミング。

## 3. Architecture & Flow
1. **Initiation**: タスク開始時にSkillをロード。
2. **Branching**: `feature/{task-name}` 形式でブランチを自動作成。
3. **Continuous Sync**:
    - 実装TODOの各項目完了時に `git commit` を実行。
    - コミット後、即座に `git push` を実行。
4. **Finalization**: 全てのタスク完了後、必要に応じてPR作成（オプション）。

## 4. Logic & Rules
- **Branch Naming**: 
    - 形式: `feature/{short-kebab-case-description}`
    - 例: `feature/add-contact-form`
- **Commit Messages**:
    - Conventional Commits形式を採用 (`feat:`, `fix:`, `docs:`, `chore:` 等)。
    - 変更されたコードのdiffを分析してメッセージを生成。
- **Commit Timing**:
    - 各実装ステップの完了直後。
    - 複数ファイルに跨る変更が1つの目的のために行われた直後。

## 5. Testing Strategy (TDD for Skill)
- **Scenario**: 
    1. `about.md` ファイルを新規作成。
    2. `README.md` に `about.md` へのリンクを追記。
- **Success Criteria**:
    - 開始時にブランチが作成されている。
    - ステップ1完了後に自動でコミット＆プッシュされている。
    - ステップ2完了後に自動でコミット＆プッシュされている。
    - コミットメッセージが内容と一致している。

## 6. Implementation Notes
- Gitコマンドの実行には `run_shell_command` を使用。
- エラー（ブランチが既に存在する、プッシュ権限がない等）が発生した場合は、速やかにユーザーに報告し指示を仰ぐ。
