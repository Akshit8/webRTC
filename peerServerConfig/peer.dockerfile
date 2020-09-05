# pulling base image of node 14
FROM node:14.8.0-alpine3.12

# image maintained by
LABEL maintainer="akshitsadana@gmail.com"

# setting working directory
WORKDIR /app

# installing production dependencies
RUN npm install -g peer

# copying all files generated inside build folder
COPY ./script.sh ./

RUN chmod +x ./script.sh

# exposing network interface 3001   
EXPOSE 3001

# triggering start script on formation of container
ENTRYPOINT ["sh", "./script.sh"]