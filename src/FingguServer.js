const bodyParser = require('body-parser');
const fingguComplianceChecker = require('./FingguComplianceChecker');
const fingguAlertService = require('./FingguAlertService');

function FingguServer(app) {
  app.use(bodyParser.json());

  app.post('/api/check', (req, res) => {
    const complianceResult = fingguComplianceChecker.checkCompliance(req.body);
    res.json(complianceResult);
  });

  app.get('/api/alerts', (req, res) => {
    const alerts = fingguAlertService.getAlerts();
    res.json(alerts);
  });
}

module.exports = FingguServer;