$(function() {

    describe("RSS Feeds", function() {

        it("each have url defined", function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it("each have url defined", function() {

            for (var i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].url.length).not.toBe(0);
                expect(allFeeds[i].url).toBeDefined();

            }
        });

        it("each feed has name defined", function() {

            for (var i = 0; i < allFeeds.length; i++) {

                expect(allFeeds[i].name.length).not.toBe(0);
                expect(allFeeds[i].name).toBeDefined();

            }
        });
    });

    describe("The menu", function() {

        it("should be hidden by default", function() {
            var hiddenMenu = $("body").hasClass("menu-hidden");
            expect(hiddenMenu).toBe(true);
        });

        describe("when clicked", function() {

            it("should display the menu if hidden", function() {
                $(".menu-icon-link").trigger("click");
                var hiddenMenu = $("body").hasClass("menu-hidden");
                expect(hiddenMenu).not.toBe(true);
            });

            it("should hide the menu if visible", function() {
                $(".menu-icon-link").trigger("click");
                var hiddenMenu = $("body").hasClass("menu-hidden");
                expect(hiddenMenu).toBe(true);
            });
        });
    });

    describe("Initial entries", function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("should contain at least a single entry", function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    describe("New Feed Selection", function() {

        var initialContent;

        beforeEach(function(done) {

            loadFeed(0, function() {
                initialContent = $(".feed .entry").text();
                done();
            });
        });

        it("should change the content after async load completes", function(done) {

            loadFeed(1, function() {
                var newContent = $(".feed .entry").text();
                expect(newContent).not.toBe(initialContent);
                done();
            });
        });
    });
});
