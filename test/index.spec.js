describe("Should open google page", function(){
    beforeEach(function(){
        browser().navigateTo("/index.html");
        sleep(1);
    });

   it("should get karma home page", function(){
        expect(element('title').text()).toBe("Karma - Spectacular Test Runner for Javascript");
   })
});