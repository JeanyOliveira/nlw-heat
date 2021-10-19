import { serverHttp } from "./app";

serverHttp.listen(5000, () =>
  console.log(`🚀  Server is running on PORT 5000`)
);