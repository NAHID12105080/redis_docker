
# Redis Setup using Docker 
To start Redis locally and expose it on the default port `6379`:
```bash
docker run --name my-redis -d -p 6379:6379 redis 
```
connecting to a container:
```bash	
docker exec -it container_id /bin/bash
```
connecting to the redis cli(redis has a inbuild cli to communicate with it ):
```bash
redis-cli
```

# redis as DB:

## SET/GET/DEL

- setting data:
```bash
SET mykey "Nahid"(only strings)
```
- getting data:
```bash
GET mykey
```			
- Deleting data
```bash
DEL mykey
```
## HSET/HGET/HDEL(H=Hash):
```bash
HSET user:1 name "Nahid Hassan" email "nahid@gmail.com" age "30"
HGET user:1 name
HGET user:1 email
```
for a specific user based on conidition to give access:
```bash
SET user:2 "[{name:'zahid',age:'30'}]
GET user:2
```

# Redis as queue:
codeforces problem submission:
pushing to a queue:
```bash
LPUSH problems 1
LPUSH problems 2
```
Popping from a queue :
```bash
RPOP problems
RPOP problems
```

blocking pop:
```bash
BRPOP problems
```
>BRPOP problems 0 
>means it will block the thread infinite time until a request reaches to it 
## Code Implementation for Codeforce type platfrom problem submission:

### create an empty node.js project 
- initialize 2 folders inside it 
- express-server
- worker

### Initialize an empty node.js typescript project in both of them 
- step1:
```bash
npm init -y
npm i -D typescript
npx tsc --init 
```
- step2:
install dependencies in express-server:
```bash
npm i express @types/express redis
```
- step3:
compile the typescript file 
```bash
npx tsc -b
\\run the compiled file using node <compiled-file-name>
```
this will start the server 
***install dependices in worker:***
repeat the step1 from the previous process:

```bash
npm i redis
```
compile the typescript file 
```bash
npx tsc -b
\\run the compiled file using `node `file name``
```
Now go to postman:
sent `post` request to: 
> http://localhost:3000/submit

now start multiple workers using node `<compiled-file-name>`,
you will see each worker is picking a task when u send any request from the postman
