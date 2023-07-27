describe('Scroll test', () => {


    it('Scroll page: (x, y) in px', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('input[id="twotabsearchtextbox"]').type('Iphone 14{enter}')
        cy.scrollTo(0, 1200)                        //scroll method №1. Scroll 1200px down the list
        cy.get('[data-asin="B0BWTGMCRK"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section').click()
    })


    it('Scroll page (position)', () => {
        cy.viewport(1000, 1080)
        cy.visit('https://www.amazon.com/')
        cy.scrollTo('bottomRight')
        cy.wait(1000) // Used for easy viewing of scrolling methods
        cy.scrollTo('topLeft')
        cy.wait(1000)
        cy.scrollTo('right')
        cy.wait(1000)
        cy.scrollTo('bottomLeft')
        cy.wait(1000)
        cy.scrollTo('left')
        cy.wait(1000)
        cy.scrollTo('bottom')
        cy.wait(1000)
        cy.scrollTo('center')
        cy.wait(1000)
        cy.scrollTo('top')
        cy.get('input[id="twotabsearchtextbox"]').type('Iphone 14{enter}')
        cy.wait(1000)
        cy.get('#p_n_feature_thirty-eight_browse-bin-title > .a-size-base').scrollTo('0%', '25%')
    })


    it('Scrolling to the bottom over 5000ms', () => {
        cy.viewport(1000, 1080)
        cy.visit('https://www.amazon.com/')
        cy.scrollTo('bottom', { duration: 5000 }) //Scrolling to the bottom over 5000ms
    })


    it('linear easing animation scroll', () => {
        cy.viewport(1000, 1080)
        cy.visit('https://www.amazon.com/')
        cy.scrollTo('bottom', { easing: 'linear' }) //linear scroll down
    })


    it('Scroll element: (x, y) in px', () => {
        cy.viewport(1000, 1080)
        cy.visit('https://output.jsbin.com/xipobeyeja')
        cy.get('tbody').scrollTo('50%', '0%')                    //scroll the table 50% right   
    })


    it('Scroll the window 500px to the right', () => {
        cy.viewport(400, 1080)
        cy.visit('https://www.amazon.com/')
        cy.scrollTo('500px')                  //Scroll the window 500px to the right
    })


    it('scrolling the element into the visible area of the browser window', () => {

        cy.visit('https://www.amazon.com/')

        cy.get('input[id="twotabsearchtextbox"]')
            .type('Iphone 14{enter}')

        cy.get('#p_n_feature_thirty-four_browse-bin-title > .a-size-base')
            .scrollIntoView()                                                  // scrolling the element into the visible area of the browser window.
    })


})   
