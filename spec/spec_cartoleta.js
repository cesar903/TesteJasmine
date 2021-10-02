// DESCRIBE - conjunto de teste
// IT - caso de teste
// EXPECT- asserção - pergunta sobre o que está sendo enviado e recebido
// exemplo. expect(10).toBe(10)  
// **********************************************************************************
// Matchers - pontos para perguntar sobre o expect
// toBe, toBeGreaterThan , not.toBe , not.toBeGreaterThan
// No livro digital página e no material web página 152 SA2 Etapa 2 página 100
// Saiba mais sobre matchers em https://imasters.com.br/front-end/jasmine-entendendo-os-matchers




describe("Teste de validação valor_do_jogo ", function() {

  it("Valores Sorteio do Placar ", function() {

	//Com base nas opções de Matchers acima, complete os testes abaixo
	

  //Tem que ser maior que o primeiro(sorteio tem que ser maior que 1)
	expect( sorteio() ).toBeGreaterThan(-1);
	
  //Tem que ser diferente de 5 (Não pode ser igual a 5)
	expect( sorteio() ).not.toBe(5);
	
  //tem que ser menor que 6 (Sorteio tem que ser abaixo de 6)
	expect( sorteio() ).toBeLessThan(6);
    
  });


});


describe("Teste de validação validar_pontos ", function() {

  it("Validar Campeões ", function() {


    //O primeiro resultado não pode ser maior que o segundo
    expect( validar_pontos(1,3) ).not.toBeGreaterThan("Vitória do Time 2");

    //O primeiro resultado não pode ser menor que o segundo
	  expect( validar_pontos(3,1) ).not.toBeLessThan("Vitória do Time 1");

    //Resultados iguais
	  expect( validar_pontos(1,1) ).toBe("Empate");
	
    
  });


});
 


describe("Teste de validação validar_pontos INVALIDOS", function() {

  it("Validar Campeões ", function() {

    //O primeiro resultado pode ser maior que o segundo
    expect( validar_pontos(3,1) ).not.toBeGreaterThan ("Vitória do Time 2");	
	
    //O primeiro resultado não pode ser menor que o segundo
    expect( validar_pontos(1,3) ).not.toBeLessThan  ("Vitória do Time 1");	
    

    //Resultados iguais
    expect( validar_pontos(3,3) ).toBe("Empate");
    
    
  });


});