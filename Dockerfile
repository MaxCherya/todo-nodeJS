# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full app *before* generating Prisma client
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Run the app
CMD ["node", "bootstrap.js"]