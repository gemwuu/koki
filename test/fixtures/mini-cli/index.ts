import { Application } from 'core';
import path from 'path';

// export default class extends Application {
//   async start() {

//   }

//   async close() {

//   }


//   async command() {

//   }
// }

(async () => {
  const app = await Application.start({
    root: path.resolve(__dirname),
    name: 'app',
    configDir: 'config',
  });

  console.log(JSON.stringify(app.config));
  await app.close();
})();
