beforeEach(function() {
  this.addMatchers({
    toBeA: function(selector) {
      return this.actual.is(selector);
    },

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
    },

    toBeSelected: function() {
      return this.actual.is(':selected');
    },

    toBeChecked: function() {
      return this.actual.is(':checked');
    },

    toBeEmpty: function() {
      return this.actual.is(':empty');
    },

    toExist: function() {
      return this.actual.size() > 0;
    },

    toHaveAttr: function(attributeName, expectedAttributeValue) {
      return hasProperty(this.actual.attr(attributeName), expectedAttributeValue);
    },

    toHaveId: function(id) {
      return this.actual.attr('id') == id;
    },

    toHaveValue: function(value) {
      return this.actual.val() == value;
    },

    toHaveData: function(key, expectedValue) {
      return hasProperty(this.actual.data(key), expectedValue);
    },

    toBe: function(selector) {
      return this.actual.is(selector);
    },

    toContain: function(selector) {
      return this.actual.find(selector).size() > 0;
    },

    toBeDisabled: function(selector){
      return this.actual.attr("disabled") == true;
    }
  });
});
