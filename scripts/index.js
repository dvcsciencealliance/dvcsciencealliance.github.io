$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['top', 'annoucements', 'about-us', 'undertakings', 'calendar', 'resources', 'executive-board', 'bottom'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', 'Annoucements', 'About Us', 'Undertakings', 'Calendar', 'Resources', 'Executive Board', ''],
    scrollOverflow: true,
    sectionsColor: ['#000000', '#27ae60', '#3498db', '#34495e', '#9b59b6', '#e74c3c', '#e67e22', '#2c3e50']
  });
  $('#year').html(new Date().getFullYear());
});
