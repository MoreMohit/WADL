FROM node:18

WORKDIR /app
COPY . .           # Copy everything from current dir to /app
RUN npm install
EXPOSE 3000

CMD ["node", "server.js"]
