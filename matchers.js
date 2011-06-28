beforeEach(function() {
  this.addMatchers({
    toBeACalendar: function() {
      return this.actual.hasClass("hasDatepicker");             
    },

    toBeClosed: function() {
      return !this.actual.dialog("isOpen");
    },

    toBeADialog: function() {
      return this.actual.parent().hasClass("ui-dialog");             
    },

    toBeASlider: function() {
      return this.actual.hasClass("ui-slider");             
    },

    toBeATextInput: function() {
      return this.actual.is(":text");
    },

    toBeDefaultPrevented: function() {
      return this.actual.isDefaultPrevented();                    
    },

    toBeEmpty: function() {
      return this.actual.length == 0;         
    },

    toBeHidden: function() {
      return this.actual.is(":hidden");             
    },

    toBeVisible: function() {
      return this.actual.is(":visible");             
    },

    toHaveClass: function(className) {
      return this.actual.hasClass(className);             
    }
  });
});
