[Gist link](https://gist.github.com/myas92/d3e96ae34fc36e7562fbb6d91edbb80b)

[How to install docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

- Docker's internal repos is not supported on 20.04 yet so
- before installation
  - use a proxy or vpn `sudo openconnect 986.9104.945.9196`
- `sudo apt-get install -y docker.io` based on [stackoverflow answer](https://stackoverflow.com/questions/61401626/docker-installation-failed-on-ubuntu-20-04-ltsvmware) 
 - for getting images form dockerhub
 - add nameserver of shekan to `/etc/resolve.conf` -- `(sudo /etc/resolve.conf)`
    - nameserver 192.168.1.58
    - nameserver 192.168.1.100
 - and sign in to docker
 - `sudo docker login` then enter username and password of docker account based on [this answer](https://stackoverflow.com/questions/53477114/using-proxy-on-docker-compose-in-server/69240785#69240785)


How to create a image (Node)
- bease on [this tutorial](https://docs.docker.com/language/nodejs/build-images/)
-  create a Dockerfile
- `sudo docker build -t yaser/node-hello-app .` (run many many times)
   - for each times create a new image if codes have edited 
-  `sudo docker image ls`
-  `sudo docker run --rm -d -p 3000:3001 yaser/node-hello-app`
   - 3000 port of my laptop to 3001 of container
- NOTE: if there is error in Dockerfile, the container will not create;
   
  