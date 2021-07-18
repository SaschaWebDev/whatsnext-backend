const server = require("./server");
/* const db = require('./database'); */

server.listen(process.env.PORT || 5000, () =>
  /* db.query('SELECT 1', (error) => {
    if (error) {
      console.log('Connection to database failed. ', error);
      throw error;
    }
    console.log('Connection to database successful.');
    console.log(
      `\n *** pum-erp-backend API server ${process.env.CUSTOMCONNSTR_DEPLOYMENT} environment running on ${process.env.CUSTOMCONNSTR_SERVER_URL} ***\n`
    );
  }) */
  console.log(
    `\n *** whats-next API server ${process.env.DEPLOYMENT} environment running on ${process.env.SERVER_URL} ***\n`
  )
);
