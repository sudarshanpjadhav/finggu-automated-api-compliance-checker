const FINGGU_DEFAULT_TEMPLATE = { name: 'Default Compliance Template', checks: [] };

class FingguTemplateManager {
  getTemplates() {
    return [FINGGU_DEFAULT_TEMPLATE];
  }

  addTemplate(template) {
    // Logic to add a new template
  }
}

module.exports = new FingguTemplateManager();