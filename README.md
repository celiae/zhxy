# 智慧校园运维管理系统

### 文件结构

- adimn-react 管理员前端(react)
- admin-springboot 管理员后端(springboot)
- client-react 用户前端(react)
- docker 应用镜像

## 使用方法

首先下载源代码 -> 解压.zip

![](/home/celiae/Projects/Full-Stack/zhxy/screenshot/download_code.png)

### 环境部署

#### MySQL 数据库

```bash
docker pull mysql
```

```
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=a -d mysql
```

#### 静态资源服务

```
docker pull nginx
```

```
docker build -t zhxy-nginx .
```

```
docker run --name some-nginx -v /some/content:/usr/share/nginx/html:ro -d zhxy-nginx
```

### 开发模式

在项目文件夹下, 开两个终端

1. 第一个终端

   ```bash
   cd admin-springboot
   ```

   - Linux, MacOS

     ```
     ./mvnw spring-boot:run
     ```

   - Windos

     ```
     mvnw.cmd spring-boot:run
     ```

     

2. 第二个终端

   ```bash
   cd admin-react
   ```

   ```bash
   npm run dev
   ```


