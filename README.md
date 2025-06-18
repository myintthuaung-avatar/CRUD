Learn List
useState
props & reusability
useEffect
react-router-dom
git add .
git commit -m "Added add user form"
git push origin main
# Getting Started with Create React App

Configuring Route
 Each route has two required parts: a URL pattern to match the URL, and a file path to the route module that defines its behavior.
app/routes.ts
import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  route("some/path", "./some/file.tsx"),
  // pattern ^           ^ module file
] satisfies RouteConfig;



