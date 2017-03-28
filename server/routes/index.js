module.exports = app => {
  app.route('/healthcheck').get((req, res) => {
    res.send('OK');
  });

  app.route('/wizard').post((req, res) => {
    setTimeout(
      () =>
        res.send({
          message: 'POSTED',
          data: req.body,
        }),
      2000
    );
  });
};
