# HSR-Wiki · 星穹铁道百科

非官方粉丝向的《崩坏：星穹铁道》信息展示站：游戏日历、角色图鉴、光锥图鉴。Neo-brutalism 风格，纯前端 SPA，数据为本地静态文件。

> 本站与 miHoYo / HoYoverse 无关。数据为**示例数据**，正式使用前请按游戏内信息校对。立绘为程序生成的风格化 SVG（版权安全），可替换为自备素材。

## 快速开始

```bash
npm install
npm run dev        # 开发服务器 http://localhost:5173
npm run test       # Vitest 单测（service 层）
npm run build      # 类型检查 + 产物构建（dist/）
npm run gen:assets # 重新生成风格化 SVG 素材
```

## 目录结构

- `src/types/` —— 领域类型（角色 / 光锥 / 日历事件）
- `src/data/` —— 静态数据：`characters/`（每角色一个文件）、`lightcones/`、`calendar-events.ts`、`colors.ts`、`game-meta.ts`
- `src/services/` —— 纯函数业务逻辑（筛选/排序/月历/提醒），含 Vitest 单测
- `src/components/neo/` —— Neo-brutalism UI 套件（按钮/卡片/徽章等）
- `src/components/{calendar,character,lightcone,layout}/` —— 业务组件
- `src/pages/` —— 路由页面
- `public/assets/` —— 角色/光锥 SVG 素材

## 数据更新指南

**新增角色**：复制 `src/data/characters/seele.ts` 为 `<id>.ts`，按 `src/types/character.ts` 字段填写（数值/材料从游戏内或公开 Wiki 校对），在 `src/data/characters/index.ts` 注册，并在 `scripts/generate-assets.mjs` 的 `CHARACTERS` 中加一行后运行 `npm run gen:assets`（或自备图片放入 `public/assets/characters/<id>.svg|png|webp` 并把 `portrait` 指向它）。

**新增光锥**：同上，操作 `src/data/lightcones/` 与 `LIGHTCONES` 花名册。叠影数值：单参数技能用 `number[]`（5 项），多参数用 `number[][]`（5 行），模板文本用 `{0}` `{1}` 引用参数列。

**新增日历事件**：在 `src/data/calendar-events.ts` 追加一条 `CalendarEvent`；事件类型/颜色映射见 `src/services/calendarService.ts` 的 `EVENT_TYPE_META`；`relatedCharacters/relatedLightCones` 必须使用已存在的 id。

**更换正式美术**：将图片文件放入 `public/assets/characters|lightcones/`，把数据中的 `portrait` / `art` 指向新路径即可，无需改组件；`<img>` 已带加载失败回退（alt 文本 + 属性色背景）。

**扩展新模块**（如遗器图鉴）：按 `types → data → service(+测试) → components → page → App.tsx 注册路由` 的既有模式复制即可。

## 技术栈

Vite 7 · React 18 · TypeScript strict · Tailwind CSS v4 · React Router 7 · lucide-react · Vitest

## 许可证

GPLv3（见 LICENSE）
