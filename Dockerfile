FROM registry.access.redhat.com/ubi8/nodejs-18:latest
COPY artifacts/ .
EXPOSE 3000
CMD ["node", "index.js"]