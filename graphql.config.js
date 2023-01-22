// {
//   "name": "Remote Schema",
//   "schemaPath": "remote-schema.graphql",
//   "extensions": {
//     "endpoints": {
//       "Remote GraphQL Endpoint": {
//         "url": "http://localhost:8055/graphql",
//         "headers": {
//           "user-agent": "JS GraphQL"
//         },
//         "introspect": true
//       }
//     }
//   }
// }

// graphql.config.js
module.exports = {
  projects: {
    app: {
      schema: ["src/schema.graphql", "directives.graphql"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}", "my/fragments.graphql"],
      extensions: {
        endpoints: {
          default: {
            url: "http://x6tl4oix.directus.app/graphql",
            headers: {
                "user-agent": "JS GraphQL"
             },
          },
        },
      },
    },
  },
}
