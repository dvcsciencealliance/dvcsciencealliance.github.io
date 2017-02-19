$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['splash-page', 'annoucements', 'about-us', 'projects', 'calendar', 'resources', 'contact-us', 'footer'],
    sectionsColor: ['#000000', '#27ae60', '#3498db', '#34495e', '#9b59b6', '#e74c3c', '#e67e22', '#16a085'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['', 'Annoucements', 'About Us', 'Projects', 'Calendar', 'Resources', 'Contact Us', ''],
    scrollOverflow: true
  });
});
