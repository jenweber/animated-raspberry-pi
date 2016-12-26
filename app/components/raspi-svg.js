import Ember from 'ember';

export default Ember.Component.extend({
  showGpio: false, // boolean controls whether to show the description for GPIO in the template
  actions: {
    toggleGpio() {
      // changes the value of showGpio to either true or false
      this.toggleProperty('showGpioDescription');
    }
  }
});
