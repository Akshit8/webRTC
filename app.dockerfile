# pulling base image of node 14
FROM node:14.8.0-alpine3.12

# image maintained by
LABEL maintainer="akshitsadana@gmail.com"

# setting working directory
WORKDIR /app

# copying package files
COPY package*json ./

# installing production dependencies
RUN npm ci --only=production --no-optional

# copying all files generated inside build folder
COPY . .

# exposing network interface 3000
# make sure app runs on 0.0.0.0
EXPOSE 3000

# triggering start script on formation of container
CMD ["npm", "start"]