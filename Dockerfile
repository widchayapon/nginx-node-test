# 1️⃣ Base image
FROM node:18-alpine

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4️⃣ Copy source code
COPY . .

# 5️⃣ Set environment variables (optional)
ENV PORT=3000

# 6️⃣ Expose port
EXPOSE 3000

# 7️⃣ Start server
CMD ["node", "server.js"]
