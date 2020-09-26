# Simple http server dedicated to make performance tests

## Usage

### Build and run container
Replacing `<method>` with the desired one, run the following command:
```sh
docker-compose -f <method>/docker-compose.yml up --remove-orphans
```
### Test endpoint
```sh
curl 'http://127.0.0.1:80/server.js?input=500'
```
*Default input=500*

### Using autocannon to get metrics
Quick reference:
```
  -c/--connections NUM
        The number of concurrent connections to use. default: 10.
  -p/--pipelining NUM
        The number of pipelined requests to use. default: 1.
  -d/--duration SEC
        The number of seconds to run the autocannnon. default: 10.
  -a/--amount NUM
        The amount of requests to make before exiting the benchmark. If set, duration is ignored.
  -l/--latency
        Print all the latency data. default: false.
  -H/--headers K=V
        The request headers.
```
##### Examples
- By time
```sh
autocannon -c 500 -d 20 'http://127.0.0.1:80/server.js?input=1000'
```
- By amount of requests
```sh
autocannon -c 100 -a 1000 'http://127.0.0.1:80/server.js?input=1000'
```

## Resources
* [node-worker-threads-pool](https://github.com/SUCHMOKUO/node-worker-threads-pool)
* [autocannon](https://github.com/mcollina/autocannon)
* [Scaling Right by devschacht](https://www.youtube.com/watch?v=K2bZ4alJUkA&t=526s)
* [pm2](https://github.com/Unitech/pm2)
