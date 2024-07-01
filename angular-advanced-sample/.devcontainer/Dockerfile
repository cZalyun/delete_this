# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /workspace

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli @nx/cli

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the app
CMD ["npx", "nx", "run", "angular-advanced-sample:serve:development"]
