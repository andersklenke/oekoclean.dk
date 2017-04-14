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
            <a href="https://www.facebook.com/oekoclean.dk" target="_blank"><svg enable-background="new 0 0 512 512" height="50px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><linearGradient gradientTransform="matrix(1 0 0 -1 -41.66 349.04)" gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="97.4419" x2="513.1827" y1="293.2585" y2="-122.4817"><stop offset="0" style="stop-color:#3B5998"/><stop offset="1" style="stop-color:#336699"/></linearGradient><path d="M348.49,35.511H163.512c-70.692,0-128,57.307-128,128v184.978c0,70.693,57.308,128,128,128h97.091  v-163.96h-55.542v-69.428h55.542v-41.657c0-57.194,32.284-97.199,83.313-97.199c24.438,0,41.656,0,55.542,0v69.428h-27.771  c-27.743,0-41.657,13.885-41.657,41.657v27.771h69.428l-13.886,69.428h-55.542v163.96h18.459c70.693,0,128-57.307,128-128V163.511  C476.49,92.819,419.183,35.511,348.49,35.511z" fill="url(#SVGID_1_)"/></svg></a>
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
          <h2 class="subtitle">og få et uforpligtende tilbud</h2>
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
