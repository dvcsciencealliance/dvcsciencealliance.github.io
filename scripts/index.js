$(document).ready(function() {
  $('#year').html(new Date().getFullYear());
  $('#fullpage').fullpage({
    anchors: ['top', 'announcements', 'about-us', 'undertakings', 'calendar', 'resources', 'executive-board', 'bottom'],
    scrollingSpeed: 500,
    loopHorizontal: false,
    scrollOverflow: true,
    recordHistory: false,
    sectionsColor: ['#000000', '#27ae60', '#3498db', '#34495e', '#9b59b6', '#e74c3c', '#e67e22', '#2c3e50']
  });
});
