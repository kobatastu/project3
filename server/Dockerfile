FROM node:12.19.1-slim

RUN mkdir -p /project3
RUN npm install
ADD ./ /project3

RUN npm run build

CMD ["node", "./build/app.js"]