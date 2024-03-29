#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
#set -e

# 生成静态文件
#yarn build

# 停止已有容器
docker stop $(docker ps -a |  grep "urpmfont"  | awk '{print $1}')

# 删除已有容器
docker rm $(docker ps -a |  grep "urpmfont"  | awk '{print $1}')

# 删除已有镜像
docker rmi $(docker images -a |  grep "urpmfont"  | awk '{print $1}')

# 创建docker镜像
docker build . -t urpmfont

# 运行docker
docker run -d --name urpmfont -p 8080:80 urpmfont