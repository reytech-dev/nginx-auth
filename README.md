# NGINX http_auth_request_module

## Description

This repository contains a small express and nginx setup to test the [http_auth_request_module](http://nginx.org/en/docs/http/ngx_http_auth_request_module.html).
Basically the nginx is sending a subrequest for the location "/private/". If the subrequest is not responding with a 200 statuscode,
the request is not authenticated and results in a 401 Unauthorized response. NGINX is returning the statuscode auf the subrequest.
Currently the express application returns a 401 statuscode.

Documentation:
[Authentication Based on Subrequest Result](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-subrequest-authentication/)

## Requirements

1. docker
2. docker-compose

## Setup

1. Add new hosts entry

```
echo "127.0.0.1 auth-poc.local" | sudo tee -a /etc/hosts
```

2. Run following command in project root

```
$ docker-compose up
```

3. Open [http://auth-poc.local/public/](http://auth-poc.local/public/) in your browser
