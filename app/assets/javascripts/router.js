// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
  // AutoLocation API rids the url of hash bangs
  location: 'auto',
  this.resource('leads', {path: '/'}, function() {
    this.resource('lead', { path: '/leads/:id' })
  })
});
