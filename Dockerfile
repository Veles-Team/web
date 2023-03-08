# Specify the base image Alpine is slim
FROM node:19-alpine3.16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 4173 for the application to listen on
EXPOSE 4173

# Set the command to run the application
CMD ["npm", "run", "preview"]

