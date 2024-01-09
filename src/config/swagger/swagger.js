const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger test API Course APP',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, 'routes', 'index.js')], // Thay đổi đường dẫn dựa trên cấu trúc thư mục của bạn
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;