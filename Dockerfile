FROM registry.access.redhat.com/ubi8/nodejs-18:latest
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]