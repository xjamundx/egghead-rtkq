# Understand the RTK Query Mental Model Compared to Redux Thunks

In [redux](https://redux.js.org/) we typically model network fetching and caching like this.

- You have a component, which subscribes to data from the redux store via selectors
- In a useEffect hook you check if the data doesn’t exist and then dispatch a thunk
- Your thunk will use a tool like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [axios](https://axios-http.com/docs/intro) to grab data from over the network
- As it fetches data your thunk will dispatch actions into the redux store such as pending, fulfilled and rejected (error).
- This is complicated to setup and maintain

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) provides a better way.

![](https://paper-attachments.dropboxusercontent.com/s_118F96EA7D62F679A47C2AD439C93DC9203009C47C6538B354532E5ADE3FA23F_1676627146090_redux-graphs.png)

RTK Query generates hooks for you at runtime that allow you to query and cache data or run mutations. Loading and error states are available automatically in your component via the hook and cache invalidation is easily manageable.

In this course we’re going a take simple website for a dog grooming company written in react and redux and bring in RTK query over a number of lessons. The network data will all be powered through a REST API using [mock service worker](https://mswjs.io/).

So go ahead checkout the git repo, [download the code](https://github.com/xjamundx/egghead-rtkq) and get ready to learn how to move your app from redux to RTK query.
