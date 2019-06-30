<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-gutter md-title"></h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
 
             <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Examples</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <a href="#/landing">
                            <i class="material-icons">view_day</i>
                            <p>Landing Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/login">
                            <i class="material-icons">fingerprint</i>
                            <p>Login Page</p>
                          </a>
                        </li>
                        <li>
                          <a href="#/profile">
                            <i class="material-icons">account_circle</i>
                            <p>Profile Page</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>

              <!-- button options -->
              <div class="md-collapse">
                    <md-list>
                      <md-list-item href="javascript:void(0)">
                        <p>Calendario</p>
                      </md-list-item>

                      <md-list-item href="javascript:void(0)">
                        <p>Contactanos</p>
                      </md-list-item>

                      <li class="md-list-item">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean"
                        >
                          <div class="md-list-item-content">
                            <md-button class="md-rose md-just-icon md-round"
                              ><md-icon>email</md-icon></md-button
                            >
                          </div>
                        </a>
                      </li>

                      <li class="md-list-item">
                        <a
                          href="javascript:void(0)"
                          class="md-list-item-router md-list-item-container md-button-clean dropdown"
                        >
                          <div class="md-list-item-content">
                            <drop-down direction="down" class="profile-photo">
                              <div
                                class="profile-photo-small"
                                slot="title"
                                data-toggle="dropdown"
                              >
                                <img :src="img" alt="Circle Image" />
                              </div>
                              <ul class="dropdown-menu dropdown-menu-right">
                                <li>
                                  <router-link 
                                    to="/teacher/1/profile"
                                    class="dropdown-item"
                                  >
                                  Mi perfil
                                  </router-link>
                                </li>
                                <li>
                                  <a href="#pablo" class="dropdown-item"
                                    >Settings and other stuff</a
                                  >
                                </li>
                                <li>
                                  <a href="#pablo" class="dropdown-item"
                                    >Sign Out</a
                                  >
                                </li>
                              </ul>
                            </drop-down>
                          </div>
                        </a>
                      </li>
                    </md-list>
                  </div>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();
      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  name: "NavbarTeacher",
  props: {
    type: {
      type: String,
      default: "dark"
    },
    colorOnScroll: {
      type: Number,
      default: 400
    },
    image: {
      type: String,
      default: require("@/assets/img/bg.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      teacher: {
        name: "Heider",
        lastname: "Zapa"
      }
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");
      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);
        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>