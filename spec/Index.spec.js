describe('Directive Test', function() {
    browser.get('http://localhost:8080');

    it ('should show the information correctly', function(){
        var directive = element.all(by.css('user-profile'));


        expect(directive.get(0).getText()).toContain('Name');
        expect(directive.get(0).getText()).toContain('Position');
        expect(directive.get(0).getText()).toContain('Description');
        expect(directive.get(0).getText()).toContain('Chairman');
        expect(directive.get(0).getText()).toContain('Bill Gates');
    })
 
});