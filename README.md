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
## swagger integrated
>  first must add  hapi-swagger &&  inert && vision 
> if you git clone the project and yarn it would install
> other see below

* install  hapi-swagger inert vision
```sh
 yarn add hapi-swagger inert vision
```
* run and see the swagger api docs
```sh
 yarn run start
 http://localhost:8000/documentation 
```

## reference docs
```
https://github.com/glennjones/hapi-swagger/blob/master/usageguide.md
```


