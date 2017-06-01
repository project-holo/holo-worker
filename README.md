# HOLO Worker

Discord worker for the open-source ProjectHOLO Discord bot project. This
micro-service project uses
[discord-worker-framework](https://github.com/project-holo/discord-worker-framework)
to receive messages published to a STOMP broker by
[discord-gateway-client](https://github.com/project-holo/discord-gateway-client).

## NOTE: THIS PACKAGE MAY BREAK AT ANY TIME

This package follows semver, and the major version is `0`. This means that
breaking changes can be introduced in any update. Do not use this in production
unless you know what you are doing.

### Usage

1. Clone or pull Docker image
2. Start with environment variables (see the top of [src/index.js](src/index.js)
   for more information)

### License

A copy of the MIT license can be found in [LICENSE](LICENSE).
