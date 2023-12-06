FROM mongo:4.4.6

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin

COPY init.js /docker-entrypoint-initdb.d/
