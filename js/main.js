Vue.component('navbar', {
  template:
  `
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a href="index.html" class="nav-item nav-brand"><strong>Øko Clean</strong></a>
        <a href="hvorfor-oekologisk-rengoering.html" class="nav-item">Hvorfor økologi?</a>
        <a href="rengoering-tilbud.html" class="nav-item">Vi tilbyder</a>
        <a href="om-oekoclean.html" class="nav-item">Om os</a>
        <a href="kontakt.html" class="nav-item">Kontakt</a>
      </div>
    </div>
  </nav>
  `
});

Vue.component('footer-view', {
  template:
  `
  <footer class="footer">
    <div class="container">
      <div class="content">
        <div class="columns">
          <div class="column is-three-quarters">
            <span class="footer-text">
              <strong>Øko Clean</strong> • Cvr 33799349 – Tlf. 27 28 92 53 – <a href="mailto:lena@oekoclean.dk">lena@oekoclean.dk</a><br>
              <address>
              Halkærvej 25<br>
              3660 Stenløse
              </address>
            </span>
          </div>
          <div class="column has-text-right">
            <a href="https://www.facebook.com/oekoclean.dk" class="button is-facebook">
              <span class="icon is-medium">
                <i class="fa fa-facebook"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `
});

Vue.component('cta-box', {
  template:
  `
  <section class="hero is-small is-cta is-primary is-bold" @click="gotoContact">
    <div class="hero-body has-text-centered">
      <div class="container">
        <a href="kontakt.html">
          <h1 class="title">Klik her</h1>
          <h2 class="subtitle">og få et uforpligende tilbud</h2>
        </a>
      </div>
    </div>
  </section>
  `,

  methods: {
    gotoContact: function() {
      window.location.href = "kontakt.html";
    }
  }
});

var app = new Vue({
  el: '#app'
});
