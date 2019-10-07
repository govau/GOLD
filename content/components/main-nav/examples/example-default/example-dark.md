<nav class="au-main-nav au-main-nav--dark" aria-label="main">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="main-nav-default--dark" class="au-main-nav__content">
          <button
            aria-controls="main-nav-default--dark"
            aria-expanded="false"
            class="au-main-nav__toggle au-main-nav__toggle--open"
            onClick="return AU.mainNav.Toggle( this )">
            Menu
          </button>
          <div class="au-main-nav__menu">
            <div class="au-main-nav__menu-inner">
              <div class="au-main-nav__focus-trap-top"></div>
              <button
                aria-controls="main-nav-default--dark"
                class="au-main-nav__toggle au-main-nav__toggle--close"
                onClick="return AU.mainNav.Toggle( this )">
                Close
              </button>
              <ul class="au-link-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Documentation</a></li>
                <li class="active"><a href="#" aria-current="page">Components</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Support</a></li>
              </ul>
              <div class="au-main-nav__focus-trap-bottom"></div>
            </div>
          </div>
          <div
            class="au-main-nav__overlay"
            aria-controls="main-nav-default--dark"
            onClick="return AU.mainNav.Toggle( this )">
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
