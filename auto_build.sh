#! /bin/bash

CONTAINER_NAME="echo-front"

container_id=$(docker ps -a | grep $CONTAINER_NAME | awk '{print $1}')

if [[ $container_id == "" ]]
then
        echo "create"
        docker run \
                -d \
                -p 80:80 \
                -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf \
                -v $(pwd)/build:/usr/share/nginx/html \
                --name $CONTAINER_NAME
                nginx

else
        echo "restart"
        docker restart $container_id
fi