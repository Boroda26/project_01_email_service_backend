FROM node:16.13.1 AS builder
WORKDIR /app
COPY ../app/package.json ./
RUN npm install
COPY ../app .
RUN npm run build


FROM node:16.13.1-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "run", "start:dev"]




