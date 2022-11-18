# Eco Emissions Simulator
<div align="center">
    <img src="assets/BJSS-Logo-Blue&Navy-RGB.svg" width="200" height="200" alt="Eco Emissions Simulator">
    <br>
    <img src="https://img.shields.io/badge/-Node.js-3776AB?style=flat&logo=Node.js&logoColor=white" \>
    <img src="https://img.shields.io/badge/React.js-3776AB.svg?logo=react&amp;logoColor=white" \>
    <img src="https://img.shields.io/badge/Docker-3776AB.svg?logo=docker&amp;logoColor=white" \>
    <img src="https://img.shields.io/badge/Mocha-3776AB.svg?logo=Mocha&amp;logoColor=white" \>
    <img src="https://img.shields.io/badge/Chai-3776AB.svg?logo=Chai&amp;logoColor=white" \>
    <br>
    <img src="https://github.com/UoNTeam22/Eco-Emissions-Sim/actions/workflows/back-tests.yml/badge.svg">
    <img src="https://github.com/UoNTeam22/Eco-Emissions-Sim/actions/workflows/front-tests.yml/badge.svg">
    <br>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-GPL%203.0-02B302?style=flat"></a>
</div>

## This Project
This project was created as part of the [UoN](https://www.nottingham.ac.uk/) BSc Computer Science year 2 group project, and is created and sponsored by [BJSS](https://bjss.com). 

The aim of the project was to create a web application that would allow users to calculate the affects that different emissions have on the environment around the world. It does this by using a hand made climate change model for extrapolating the affects of different emissions on the environment. The user will be able to see potential affects on sea levels, temperature, CO2 levels, and more.

We plan to include a number of different factors that affect the environment, such as:

- Fossil Fuels
- Vegetarianism / Veganism
- Public Transport
- Recycling

## Setup

In this section, we will go over two possible setup senarios, one for development and one for production, however the general pre-requisites are the same for both:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

> **Note:** Our testing is mostly done on GNU/Linux based systems so we cannot guarantee that the following instructions will work on all systems!

### Production

To run the application in production, you will simply need to run the following command:

```bash
docker-compose up -d --build
```

> **Note:** This will take a while to run the first time, as it will need to download and build all the images.

Once the command has be ran, the application will start compiling the front-end and pass it to the nginx container, which will then serve it to the user.

By default, the application will be available at [localhost](http://localhost), you can change the port that the application is served on by changing the `ports` section of the [`docker-compose.yml`](docker-compose.yml) file.

You may want to adjust the [nginx configuration file](nginx/live.conf) to add better security settings for your given environment, such as:

- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [Rate Limiting](https://en.wikipedia.org/wiki/Rate_limiting)

> _These may be added in the future, but for now, they are not included in the default configuration._

To stop the application, you can run the following command:

```bash
docker-compose down
```

### Development

To try and make the development process as painless as possible, we have included a [`docker-compose.debug.yml`](docker-compose.debug.yml) file, which will allow you to run the application in development mode that mimics the production environment but allows auto-reloading of the front-end.

To run the application in development mode, you will need to run the following command:

```bash
docker-compose -f docker-compose.debug.yml up --build
```
> **Note:** You may like to attach to the compose to view the logs, alternatively you can use the `-d` flag to run the application in the background and view the logs with `docker-compose logs -f`.

The default port for the application in development mode is `8000`, you can change this by changing the `ports` section of the [`docker-compose.debug.yml`](docker-compose.debug.yml) file, however it was chosen to be different to the production port to avoid any conflicts.

> **Note:** The container may say that it is running on port `3000`, however this is only relevant to the container and not the host machine, the host machine will be running on the port specified in the [`docker-compose.debug.yml`](docker-compose.debug.yml) file.

To close the application, you can simply press `Ctrl+C` to stop the application, or run the following command:

```bash
docker-compose -f docker-compose.debug.yml down
```

## Contact
If you have any questions, please feel free to make an [issue](https://github.com/UoNTeam22/Eco-Emissions-Sim/issues).
