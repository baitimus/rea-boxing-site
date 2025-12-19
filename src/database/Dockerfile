FROM mongo:7.0

# Default credentials for development; override in compose or environment when needed.
ENV MONGO_INITDB_ROOT_USERNAME=reah \
    MONGO_INITDB_ROOT_PASSWORD=12345678 \
    MONGO_INITDB_DATABASE=mind-movment

EXPOSE 27017

CMD ["mongod", "--bind_ip_all"]
