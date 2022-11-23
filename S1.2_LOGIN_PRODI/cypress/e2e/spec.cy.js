describe('empty spec', () => {
  it('passes', () => {

    //TEST CASE TC_LOGIN_PRODI_001
    cy.visit('https://obefib.arriansoft.com')
    cy.get(':nth-child(4) > a > .info-box > .info-box-content > .info-box-number').click()
    cy.get(':nth-child(2) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(3) > .form-control').type("0023087402")
    cy.get(':nth-child(4) > .form-control').type("sascinjiayou1")
    cy.get('.btn').click()

    //TEST CASE TC_LOGIN_PRODI_002
    cy.get(':nth-child(3) > .nav-link > .badge').click()
    cy.get(':nth-child(4) > a > .info-box > .info-box-content > .info-box-number').click()
    cy.get(':nth-child(2) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(3) > .form-control').type("0023087403") //NIDN SALAH
    cy.get(':nth-child(4) > .form-control').type("sascinjiayou1")
    cy.get('.btn').click()

    //TEST CASE TC_LOGIN_PRODI_003
    cy.get(':nth-child(3) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(4) > .form-control').type("0023087402")
    cy.get(':nth-child(5) > .form-control').type("sascinjiayou2") //PASSWORD SALAH
    cy.get('.btn').click()

    //TEST CASE TC_LOGIN_PRODI_004
    cy.get(':nth-child(3) > .form-control').get("select").select("PRANCIS").invoke("val").should("eq", "PRANCIS") // PRODI SALAH
    cy.get(':nth-child(4) > .form-control').type("0023087402")
    cy.get(':nth-child(5) > .form-control').type("sascinjiayou1")
    cy.get('.btn').click()
  })
})