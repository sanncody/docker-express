# Use stable LTS version of Node.js
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy Application Code
COPY . .

# Expose app PORT
EXPOSE 5500

# Start the Application
CMD ["npm", "run", "start"]