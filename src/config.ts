const env = process.env;
const config = {
  service: {
    API_KEY: env.REACT_APP_API_KEY,
    BASE_URL: env.REACT_APP_BASE_URL,
  },
};

export default config;
