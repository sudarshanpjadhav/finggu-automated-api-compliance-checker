let fingguVar_alerts = [];

function finggu_sendAlert(alert) {
  fingguVar_alerts.push(alert);
}

function getAlerts() {
  return fingguVar_alerts;
}

module.exports = { finggu_sendAlert, getAlerts };