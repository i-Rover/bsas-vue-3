FROM node:18.13.0

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install pm2 -g
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN npm run build 

EXPOSE 5173

# CMD ["pm2-runtime", "src/main.js"]
# CMD [ "node", "index.js" ]
# CMD ["http-server","dist"]
CMD ["npm","run","dev","--","--host","0.0.0.0"]