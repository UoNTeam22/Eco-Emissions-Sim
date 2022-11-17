FROM node:16

# Create working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# By default, run the base server
CMD [ "npm", "start" ]