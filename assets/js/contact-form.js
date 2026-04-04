document.addEventListener("DOMContentLoaded", () =>
{
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  if (!form || !popup) return;

  let hideTimeout;

  form.addEventListener("submit", async (e) =>
  {
    e.preventDefault();

    const data = new FormData(form);

    try
    {
      await fetch(form.action,
      {
        method: "POST",
        body: data,
        headers:
        {
          Accept: "application/json",
        },
      });

      form.reset();

      popup.classList.add("active");

      clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() =>
      {
        popup.classList.remove("active");
      }, 30000);

    }
    catch (err)
    {
      console.error(err);
    }
  });

  // CLICK ANYWHERE (INCLUDING BOX) CLOSES
  popup.addEventListener("click", () =>
  {
    popup.classList.remove("active");
  });

  // ESC closes
  document.addEventListener("keydown", (e) =>
  {
    if (e.key === "Escape")
    {
      popup.classList.remove("active");
    }
  });
});