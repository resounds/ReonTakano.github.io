---
name: git-automation
description: 新しい機能実装、バグ修正、またはドキュメント作成タスクを開始する際に、ブランチ作成、コミット、およびプッシュを自律的に行い、作業内容を継続的に同期するために使用します。
---

# Git Automation

## Overview
開発プロセスにおけるGit操作（ブランチ作成、コミット、プッシュ）をAIが自律的に管理し、作業の継続的な同期と履歴の整合性を保証するためのスキルです。

## When to Use
- `writing-plans` 等で作成した実装プランに基づき、実際の作業を開始する直前。
- 複数のステップにわたる変更を、ステップごとに確実に記録・同期したい場合。

## Core Pattern

### 1. 初期化 (Initialization)
タスク開始時に適切なブランチを作成し、クリーンな状態で作業を開始します。
- **命名規則**: `feature/{task-name}` または `fix/{bug-description}` (kebab-case)
- **手順**: `git checkout -b feature/user-auth-impl`

### 2. 継続的同期 (Continuous Sync)
プランの各項目（TODO）が完了するたび、または論理的な変更の区切りごとに、コミットとプッシュをセットで行います。
- **コミットメッセージ**: Conventional Commits 形式 (`feat:`, `fix:`, `docs:`, `chore:`) を使用し、変更内容を簡潔かつ正確に記述します。
- **同期サイクル**: `git add` -> `git commit` -> `git push`

### 3. エラーハンドリング (Handling Errors)
プッシュ失敗（競合、権限エラー、ネットワーク問題等）が発生した場合は、以下の原則に従います。
- **即座に報告**: 失敗した理由と原因を特定し、速やかにユーザーに報告して指示を仰ぎます。
- **無限リトライの禁止**: 解決の目処がないまま自動でリトライを繰り返してはいけません。

### 4. PR作成 (Optional: PR Creation)
全てのプラン項目が完了し、検証（テストやリンター等）をパスした後、必要に応じて Pull Request の作成をユーザーに提案します。

## Red Flags
- 一度のコミットに、複数の無関係な変更（リファクタリングと機能追加など）を混ぜる。
- Gitのコマンドエラーが発生しているにもかかわらず、原因を確認せずに作業を続行する。
- プッシュが成功したことを確認せずにタスク完了を宣言する。

## Quick Reference
| 項目 | 推奨パターン / コマンド |
| --- | --- |
| ブランチ名 | `feature/short-description` |
| コミット | `type: description` (Conventional Commits) |
| 同期 | コミット後、即座に `push` を実行 |
