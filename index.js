const somaHorasExtras = (salario, valorHorasExtras) =>
  salario + valorHorasExtras;

const calculaDesconto = (salario, desconto) => salario - desconto;

export { somaHorasExtras, calculaDesconto };

/*const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        throw {};
      }
    },
  };
  return assercoes;
};

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`✅ ${titulo}`);
  } catch {
    console.error(`❌ ${titulo}`);
  }
};

teste('somaHorasExtras', (salario) => {
  const esperado = 2500;
  const retornado = somaHorasExtras(2000, 500);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('calculaDesconto', () => {
  const esperado = 2300;
  const retornado = calculaDesconto(2500, 200);

  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});*/
