$(document).ready(init);

function init() {
    renderProjects()
    renderModals()
    $('.submit').click(sendMail)
}

function renderProjects() {
    var projects = getProjects()
    var strHtml = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.modalID}">
        <div class="portfolio-hover">
        <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
        </div>
        </div>
        <img class="img-fluid" src="img/portfolio/proj${project.modalID}-thumbnail.png" alt="">
        </a>
        <div class="portfolio-caption">
        <h4>${project.name}</h4>
         <p class="text-muted">${project.title}</p>
        </div>`
    })
    $('.render-here').html(strHtml)

}

function renderModals() {
    var projects = getProjects()
    var strHtml = projects.map(function (project) {
        return `  
        <div class="portfolio-modal modal fade" id="portfolioModal${project.modalID}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/proj${project.modalID}.jpg" alt="">
                    <p>${project.description}</p>
                    <ul class="list-inline">
                      <li>Date:${new Date(project.publishedAt)}</li>
                      <li><a target="_blank" href="${project.url}">
                       <span>Game Link</span></a></li>
                      <li>Category:${project.labels}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
    $('.modal-render').html(strHtml);

}

function sendMail() {
    var email = "idanngez@gmail.com"
    var userEmail = $('.email').val();
    var subject = $('.subject').val();
    var text = $('.txt').val();

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${text + userEmail}`);
}
