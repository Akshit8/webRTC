# dockerfile for peerJs server
# peerjs provides peer-to-peer connection for  browser's webRTC

# pulling base image of node 14
FROM node:14.8.0-alpine3.12

# image maintained by
LABEL maintainer="akshitsadana@gmail.com"

# setting working directory
WORKDIR /app

# installing dependencies
RUN npm install -g peer

# copying start scipt
COPY ./script.sh ./
# providing exec permissions to start scipt
RUN chmod +x ./script.sh

# exposing network interface 3001   
EXPOSE 3001

# triggering start script on formation of container
ENTRYPOINT ["sh", "./script.sh"]