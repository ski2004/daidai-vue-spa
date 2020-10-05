FROM node:12

COPY . ./usr/src/app/
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# RUN npm install -g @vue/cli
RUN npm install
Run npm rebuild node-sass
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production
# Bundle app source
# COPY . .

EXPOSE 80
CMD [ "node", "server.js" ]
