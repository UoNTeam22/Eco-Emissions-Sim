FROM node:16

# Create working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Run the base server
CMD [ "npm", "start" ]