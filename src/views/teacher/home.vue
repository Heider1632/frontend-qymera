<template>
<div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-100 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Bienvenido a Qymera</h1>
            <h1 class="subtitle"> {{ teacher.name }} {{ teacher.lastname }} </h1>
          </div>
          <br>
          <nav-tool></nav-tool>

        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
            >
            <h2 class="title text-center">Let's talk product</h2>
              <h5 class="description">
                This is the paragraph where you can write more details about
                your product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Free Chat</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>verified_user</md-icon>
                  </div>
                  <h4 class="info-title">Verified Users</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>fingerprint</md-icon>
                  </div>
                  <h4 class="info-title">Fingerprint</h4>
                  <p>
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg1"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Gigi Hadid
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg2"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Carla Hortensia
                      <br />
                      <small class="card-description text-muted"
                        >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                        :src="teamImg3"
                        alt="Thumbnail Image"
                        class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Kendall Jenner
                      <br />
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { NavTool } from "@/components";
export default {
  components: {
    NavTool
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      teacher: {
        name: "Heider",
        lastname: "Zapa"
      }
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
