import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function(newTitle){
        this.store.createRecord('todo', {
          title: newTitle,
          isCompleted: false
        });
        this.set('newTitle', '');
        todo.save();
    },
    clearCompleted: function(){
      var model = this.get('model');
      var todoCompleted = this.filterBy('isCompleted', true);
      todoCompleted.invoke('deleteRecord');
      model.save();

    }
  },
  remaining: function(){
      return this.filterBy('isCompleted', false).get('length');

  }.property('@each.isCompleted'),
  inflection: function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),
  hasCompleted: function(){
    return this.filterBy('isCompleted', true).get('length') > 0;
  }.property('@each.isCompleted'),
  completed: function(){
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted')
});
