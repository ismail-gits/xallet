FROM node:current-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json ./

COPY apps ./apps
COPY prisma ./prisma
COPY packages ./packages

# Install Dependencies
RUN npm install

# Generate prisma client
RUN npm run db:generate

RUN npm run build

CMD [ "npm", "run", "start-user-app" ]