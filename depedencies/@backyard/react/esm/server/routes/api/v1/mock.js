module.exports = {
  method: "GET",
  path: "/api/v1/mock",
  handler: function handler(request, h) {
    return h.response({
      text: 'Loaded!'
    }).code(200);
  }
};