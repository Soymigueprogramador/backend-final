import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for my API'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js'] // Rutas de tu aplicación que deseas documentar
};

const specs = swaggerJsdoc(options);

export default specs;
