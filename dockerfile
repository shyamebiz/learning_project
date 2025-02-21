# Stage 1: Build the Node.js application
FROM node:20-alpine 

# Set the working directory
WORKDIR /rtde-user-cps-dev

# Clean up old dependencies (if needed)
RUN rm -rf node_modules
RUN rm -rf package*-lock.json

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application source code
COPY . .

# Install git (if required for the project)
RUN apk add --no-cache git

# Expose HTTP and HTTPS ports
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
