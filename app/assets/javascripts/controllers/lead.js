App.LeadController = Em.ObjectController.extend({
  showUnsavedMessage: function() {
    //used in an if block so needs to return true/false
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving'),
  actions: {
    saveChanges: function() {
      this.get('model').save()
    }
  }
})
