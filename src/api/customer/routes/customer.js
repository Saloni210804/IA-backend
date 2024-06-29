'use strict';

/**
 * customer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::customer.customer');
module.exports = {
    async sendVerification(ctx) {
      // Your verification logic here
    },
    // Other methods
  };
  