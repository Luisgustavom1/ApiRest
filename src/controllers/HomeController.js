class HomeController {
  index(req, res) {
    res.json({
      'Tudo Certo': true,
    });
  }
}

export default new HomeController();
