
const getBackendURL = () => {
    if (process.env.NODE_ENV === "development") {
        return process.env.NEXT_PUBLIC_APP_BACKEND_URL;
      } else {
        return process.env.APP_BACKEND_URL;
      }
}

export default getBackendURL;