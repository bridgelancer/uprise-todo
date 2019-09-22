# Uprise CRUD Todo Coding Test

This project could be deployed with Docker. To build the image, run

```bash
docker build -t todo:dev
```

The built image could then be run with the following

```bash
docker run -p 3000:3000 todo:dev
```

Or alternatively, uses npm to install and start a development server:

```bash
npm install
npm start
```

The CRUD todo list developed satisfies the basic requirements. It loads the 50 bogus todo tasks via
an HTTP request to the REST API of `jsonplaceholder.typicode.com` and renders the todo items. Data
was managed by Redux and the UI of the application was developed using ReactJS.

[MaterialUI](https://material-ui.com/) was used to put the data retrieved to a Paginated Table. The solution relies heavily on
the examples provided by the MaterialUI.

[Prettier](https://prettier.io/) was used to format codes. Certain coding conventions (eg File
extensions naming) was adopted according to the Airbnb JSX style guide as well.
