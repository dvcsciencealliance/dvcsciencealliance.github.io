$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['', 'annoucements', 'about-us', 'undertakings', 'calendar', 'resources', 'contact-us', 'bottom'],
    sectionsColor: ['#000000', '#27ae60', '#3498db', '#34495e', '#9b59b6', '#e74c3c', '#e67e22', '#2c3e50'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', 'Annoucements', 'About Us', 'Undertakings', 'Calendar', 'Resources', 'Contact Us', ''],
    scrollOverflow: true
  });
  $('#year').html(new Date().getFullYear());
});
