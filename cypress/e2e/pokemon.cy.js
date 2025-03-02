describe('Проверка авторизации', function () {

    it('Покупка нового аватара', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         //cy.wait();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get(':nth-child(4) > .shop__button').click();
         cy.get('.credit').type('4111111111111111');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('0725');                           
         cy.get('.k_input_name').type('NAME');                          
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();   
         cy.wait(5000);                  
         cy.contains('Покупка прошла успешно').should('be.visible');
     })
     
     
 
    
})

 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 