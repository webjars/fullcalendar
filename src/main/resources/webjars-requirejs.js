requirejs.config({
  paths: { 
    "fullcalendar": webjars.path("fullcalendar", "fullcalendar"),
    "fullcalendar-css": webjars.path("fullcalendar", "fullcalendar")  
  },
  shim: { "fullcalendar": [ "jquery" ] }
});
