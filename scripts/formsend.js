$('#my-form').submit(function(e) {
  console.log("HELLOOOO");
  e.preventDefault();
  $.ajax({
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScuecUcwUW6QGF0hyxqNUCNR5Qi0hxqPpXAGtlzg29B-XWf0w/formResponse',
    data: $('#my-form').serialize(),
    type: 'POST',
    dataType: "json",
    statusCode: {
      0: function(data) {
        $('#form-success').text('hooray!');
      },
      200: function(data) {
        $('#form-success').text('hooray!');
      },
      403: function(data) {
        alert('Oh no! something went wrong. we should check our code to make sure everything matches with Google');
      }
    }
  });
});
