# --- build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# 依存関係インストール
COPY package.json package-lock.json ./
RUN npm ci

# ソースコピー
COPY . .

# ビルド
RUN npm run build

# --- production stage ---
FROM nginx:alpine

# ビルド成果物をコピー
COPY --from=builder /app/dist /usr/share/nginx/html

# 任意: カスタム nginx.conf（存在する場合のみコピー）
# nginx.conf を上書き
COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
