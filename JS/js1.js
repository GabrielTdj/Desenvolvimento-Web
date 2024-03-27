let lista = [1, 2, 3, 4, 5];

function minhaFunc(meuPar) {
  console.log('Recuperando elemento do final da lista:', lista.pop());
  console.log('Chamando a função com parâmetro:', meuPar);
  lista.unshift(meuPar);
  console.log('Tamanho da lista:', lista.length);
  console.log('Recuperando o primeiro elemento:', lista[0]);
  console.log('Adicionando elemento no final da lista:', meuPar);
  lista.push(meuPar);
  console.log('Tamanho da lista atualizado:', lista.length);
  return lista;
}

console.log('No meio');

lista.push('Novo');

console.log('Novo tamanho da lista:', lista.length);

console.log('Resultado da função minhaFunc:', minhaFunc(' Tudo '));

console.log('Lista final:', lista);

console.log('Terminou');
