/* Calendly CTA — centralised handler for all [data-calendly-url] links */
document.addEventListener('click', function (e) {
  var trigger = e.target.closest('[data-calendly-url]');
  if (trigger) {
    e.preventDefault();
    Calendly.initPopupWidget({ url: trigger.dataset.calendlyUrl });
  }
});
