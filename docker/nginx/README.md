```bash
docker build -t zhxy-nginx .
```

```bash
docker run -p 30060:80 --name zhxy-nginx-container -d zhxy-nginx
```

```bash
docker rm -f zhxy-nginx-container
```
