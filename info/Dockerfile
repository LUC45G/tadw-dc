# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the working directory
COPY . .

# Install the project dependencies
RUN npm install

# Expose the port your app runs on
EXPOSE 3004

# Command to run your application
CMD ["npm", "start"]
