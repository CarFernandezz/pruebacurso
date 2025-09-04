describe("login", () => {
  it("login", () => {
    cy.visit("https://ticketazo.com.ar/auth/registerUser");

    cy.get('.grid > :nth-child(1) > .relative > .inline-flex').type('renata');
    cy.get('.grid > :nth-child(2) > .relative').type('aguero');
    cy.get(':nth-child(3) > .relative > .inline-flex').type('3814830567');
    cy.get(':nth-child(4) > .relative > .inline-flex').type('458625792');

    cy.get('[data-cy="select-provincia"]').type("Buenos Aires");
    cy.wait(500); 
    cy.get('[data-cy="select-provincia"]').type("{downarrow}{enter}");

    cy.get('[data-cy="select-localidad"]').type("belgrano");
    cy.wait(500); 
    cy.get('[data-cy="select-localidad"]').type("{downarrow}{enter}");



cy.get('[data-slot="selector-button"]').click().then(()=>{
             cy.get('[data-slot="header"]').click().then(()=>{
            cy.get('[data-slot="picker-month-list"]').then((meses)=>{
                cy.wrap(meses).contains("enero").click();
                cy.wait(500)
                ;
            }).then(()=>{
              cy.get('[data-slot="picker-year-list"]').then((años)=>{
              cy.wrap(años).contains("1985").click();
                cy.wait(500)
              });  
            })
        cy.get('[data-slot="header"]').click().then(()=>{
            cy.get('[data-slot="grid-body"] tr').each((fila)=>{
                cy.wrap(fila).find('td').each((celda) => {
                    const disabled = celda.attr("aria-disabled") === "true";
                    if(celda.text().trim() === "17" && !disabled){
                        cy.wrap(celda).click();
                    }
                });
            })
        });
        })
     })


    cy.get(':nth-child(8) > .relative > .inline-flex').type('cualquiera@gmail.com');
    cy.get(':nth-child(9) > .relative > .inline-flex').type('cualquiera@gmail.com');
    cy.get(':nth-child(10) > .relative').type('Ho1234567.');
    cy.get(':nth-child(11) > .relative > .inline-flex').type('Ho1234567.');

    cy.get('[data-cy="btn-registrarse"]').click();
  });
});