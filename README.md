
## react模板

## 使用

```bash
# 安装依赖
$ yarn

# 启动服务
$ yarn start  # visit http://localhost:8800

# 构建开发环境
$ yarn build:dev

# 构建测试环境
$ yarn build:test

# 构建线上环境
$ yarn build
```

## 目录

```md
├── dist/                          # 构建产物
├── mock/                          # 本地模拟数据
│   ├── index.ts
├── public/
│   └── favicon.png                # Favicon
├── src/                           # 源码路径
│   ├── components/                # 自定义业务组件
│   │   └── Auth/
│   │       ├── index.tsx
│   │       ├── index.module.less
│   ├── layouts/                   # 布局组件
│   │   └── BasicLayout/
│   │       ├── index.tsx
│   │       └── index.module.less
│   ├── pages/                     # 页面
│   │   └── Home/                  # home 页面，约定路由转成小写
│   │       ├── components/        # 页面级自定义业务组件
│   │       ├── models.tsx         # 页面级数据状态
│   │       ├── index.tsx          # 页面入口
│   │       └── index.module.less  # 页面样式文件
│   ├── models/                    # [可选] 应用级数据状态
│   │   └── global.ts
│   ├── services/                  # [可选] 接口请求
│   │   └── global.ts
│   ├── utils/                     # [可选] 工具库
│   ├── global.less                # 全局样式
│   ├── routes.ts                  # 路由配置
│   └── App.tsx                    # 应用入口脚本
├── vite.config.ts                 # 工程配置
├── README.md
├── index.html                     # 应用入口 HTML
├── package.json
├── .editorconfig
├── .eslintignore
├── .lintstagedrc.js
├── .eslintrc.cjs
├── .gitignore
├── .stylelintignore
├── commitlint.config.js
├── .stylelintrc.[j,t]s
├── .gitignore
└── tsconfig.json
```
### sentry 配置

build.json 开启 sourcemap` "sourceMap": true,`
安装依赖

```
yarn add @sentry/react @sentry/tracing
yarn add @sentry/cli  --dev
```

集成

```
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import * as pkg from '../package.json';
Sentry.init({
  dsn: "https://7c9946d1ca1845c7aa4f97f234193b53@sentry.gonglu.info:900/9",
  integrations: [new Integrations.BrowserTracing()],
  environment: APP_MODE === 'prod' ? 'production' : 'test',
  release: pkg.version,
  tracesSampleRate: 1.0,
});
```

sourcemap
项目根目录新增`.sentryclirc`

```
[auth]
token=1a161fbcdfd84e4d9a5ba277c3435167ff6c24b3333e4833a5e61ae5aee1a556
[defaults]
url=https://sentry.gonglu.info:900
org=sentry
project=front-web-template

```



tips
```
 react组件导出为组件形式。例如: export deault Form，不然HMR失效
```
