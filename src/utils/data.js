// src/utils/data.js
export const parseData = (data) => {
    const alertCategories = {};
    const alertSeverities = {};
    const alertTrends = {};
  
    data.forEach(alert => {
      const { category, severity } = alert.alert;
      const timestamp = new Date(alert.timestamp).toLocaleDateString();
  
      // Count by category
      alertCategories[category] = (alertCategories[category] || 0) + 1;
  
      // Count by severity
      alertSeverities[severity] = (alertSeverities[severity] || 0) + 1;
  
      // Count by date
      alertTrends[timestamp] = (alertTrends[timestamp] || 0) + 1;
    });
  
    return { alertCategories, alertSeverities, alertTrends };
  };