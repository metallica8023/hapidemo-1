# hapi && inert  demo project

## init project
```js
yarn 
```
## start
```js
yarn run start
```
## docker run 
>  base image from node:9 and then add yarn  
>  or you can use the build image dalongrong/node-yarn
* docker build
``` sh
 docker build -t mytag .
``` 
* docker run 
```sh
docker run -d -p 8000:8000 mytag
```

