# Server

This server functionality is inspired by our need to persist JSON data across multiple clients.

## Dev server

The dev server is designed for speed running simple projects with virtually zero users.

After all, don't most of our projects begin with virtually zero users? Don't we want our projects to remain simple?

### TL;DR

It's dangerous to go alone! Take this.

```bash
deno run --allow-net server/default/main.ts
```

## Developers

A storage service is required for end-to-end testing the frontend of this project.

This storage service is required to with a simple HTTP client on the frontend.

In particular, our _Tile Management System (TMS)_ uses this storage service for storing individual tile resources and tile systems.

### Getting started

Install the HTTP client as an NPM module.

Required: [Deno](https://deno.land/manual/getting_started/installation)

```bash
# $REF = main
# $SEMVER = 0.0.1
deno run --reload -A https://github.com/ethanthatonekid/generic-storage/raw/$REF/build_npm/main.ts $SEMVER -r

npm i ./npm
```

Note: The `-A` flag grants this script **all** permissions. Construct your commands carefully; you have been warned.

### Local dev server

Required: [Deno](https://deno.land/manual/getting_started/installation)

There are two ways of running the dev server locally:
1. [Run the forked copy (recommended)](#forked-dev-server)
1. [Run the default server](#default-server)

#### Forked dev server

This is the recommended way of running the dev server locally.

```bash
deno run --allow-net server/default/main.ts
```

Note: New dev servers (e.g. TMS) are to be located in the `server` directory.

#### Default server

For simplicity, feel free to run the default server.

```bash
deno run -A https://github.com/ethanthatonekid/generic-storage/raw/main/demos/default/main.ts
```

### Deno Deploy dev server

Deploy a [new Deno Deploy project](https://dash.deno.com/new) linked to a compatible file on GitHub. This file must resemble <https://github.com/ethanthatonekid/generic-storage/raw/main/demos/default/main.ts>. In our case, link to [`demos/default/main.ts`](./default/main.ts).

Note the domain name allocated to you by Deno Deploy for this dev server. Give this dev server address to your HTTP client to interact with the storage service.