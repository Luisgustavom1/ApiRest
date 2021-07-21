import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Server Rodando na porta ${port}`);
  console.log(`CRTL + Click em https://localhost:${port}`);
});
