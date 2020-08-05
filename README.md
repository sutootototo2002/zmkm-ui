# zmkm-ui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### 此项目是基于element-ui做得设置封装插件
```
1、安装element-ui
2、安装vuedraggable https://www.npmjs.com/package/vuedraggable
3、安装zmkm-ui 
4、table头文件之间接入
   <Flset :dHead="tabeHead"  @getHead="getHead" ></Flset>
   tabeHead:表格的头文件
   getHead:修改头文件出发父组件修改
    methods:{
     getHead(arr){
       console.log(arr)
       this.tabeHead = arr;
     }
   }
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
