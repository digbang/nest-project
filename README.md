# node-base-project-hexagonal

Base project in nest js with hexagonal architecture for nodejs

# Collaborators

- Matías Capuano
- Darío Govergun
- Edgar Lovera
- Mariano Filipoff
- Gonzalo Patricio Telesio

# Install

Pre requirements : Make sure you have already installed both Docker Engine and Docker Compose.

- https://docs.docker.com/get-docker/
- https://docs.docker.com/compose/install/

```bash
npm run install:docker:develop
```

# Initialization

```bash
npm run start:docker:develop
```

# Test

```bash
npm run test
```

# Documentation

Pre requirements : It is necessary to have the project running to be able to raise the swagger

To be able to see the swagger with all the api documentation enter the path

```bash
<BASE_URL>/api/docs
```

# Technologies

## Lenguajes

Javascript

## Frameworks & Library

- NestJS
- Jest

## NOTE

The difference between

```bash
src/<module>/app/http/api/<module>.service.ts
```

and

```bash
src/<module>/domain/services/<module>.service.ts
```

are the domain's own business rules while the others are tied with the necessary logic in the api that escapes the domain.
