# opensourcenuxtfirbasesample

opensourcenuxtfirbasesample is an open-source Nuxt.js project integrated with Firebase and Tailwind CSS, designed to kickstart applications requiring user authentication. This template offers a modern, responsive design and a secure authentication system, making it ideal for developers looking to build scalable web applications.

## Features

- **Nuxt.js Framework**: Utilizing Nuxt.js for server-side rendering, static site generation, and a streamlined development experience.
- **Firebase Integration**: Secure and scalable user authentication system implemented with Firebase.
- **Tailwind CSS**: Stylish and responsive design with Tailwind CSS for a customizable and modern UI.
- **Easy Customization**: Well-structured and documented codebase for easy modification and enhancement.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js
- npm or yarn

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/remosingh/opensourcenuxtfirbasesample.git

2. **Enter Firebase API information:**
   ```bash
     modules: [
    [
      "@nuxtjs/firebase",
      {
        config: {
          // REQUIRED: Official config for firebase.initializeApp(config):
          apiKey: "<apiKey>",
          authDomain: "<authDomain>",
          projectId: "<projectId>",
          storageBucket: "<storageBucket>",
          messagingSenderId: "<messagingSenderId>",
          appId: "<appId>",
          measurementId: "<measurementId>",
        },
        services: {
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            },
            ssr: true,
          },
          firestore: true,
          storage: true,
        },
      },
    ],
  ],
Ensure the following Firebase details are provided from your firebase project settings. This is set in the nuxt.config.js file. Firebase can be setup from here: https://firebase.google.com/


3. **Run NPM install:**
   ```bash
   npm install

4. **Run the app:**
   ```bash
   npm run dev
You should now be able to use the skeleton app on the given url. Open the Terminal for the url.

## Contributing

I welcome contributions to opensourcenuxtfirbasesample. Here's how you can contribute:

## Fork the Project

Create your Feature Branch (git checkout -b feature/YourAmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/YourAmazingFeature)
Open a Pull Request

## License

This project is freely  available to anyone on the internet for personal or commercial use.
