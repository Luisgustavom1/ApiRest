"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _HomeRoute = require('./Routes/HomeRoute'); var _HomeRoute2 = _interopRequireDefault(_HomeRoute);
var _UserRoute = require('./Routes/UserRoute'); var _UserRoute2 = _interopRequireDefault(_UserRoute);
var _TokenRoute = require('./Routes/TokenRoute'); var _TokenRoute2 = _interopRequireDefault(_TokenRoute);
var _AlunoRoute = require('./Routes/AlunoRoute'); var _AlunoRoute2 = _interopRequireDefault(_AlunoRoute);
var _FotosRoute = require('./Routes/FotosRoute'); var _FotosRoute2 = _interopRequireDefault(_FotosRoute);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(_express.urlencoded.call(void 0, { extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _HomeRoute2.default);
    this.app.use('/users/', _UserRoute2.default);
    this.app.use('/token/', _TokenRoute2.default);
    this.app.use('/aluno/', _AlunoRoute2.default);
    this.app.use('/foto/', _FotosRoute2.default);
  }
}

exports. default = new App().app;
