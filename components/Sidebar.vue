<template>
  <div class="sidebar">
      <div class="p-3">
          <div class="text-center">
              <div class="avatar mb-3">
                <img v-cl-image="'me-2016'" width="auto" responsive fetch_format="auto" quality="auto">
                </div>
              <h1 class="text-xl font-weight-bold">Tom Rishworth</h1>
              <div class="line ml-auto mr-auto"></div>
          </div>
          <div class="text-center text-muted">
              <p>I'm a product designer and frontend developer based in Auckland, NZ. </p>
              <p>Currently working at <a href="http://webscope.co.nz">Webscope NZ</a></p>
          </div>
          <div class="d-flex justify-content-center">
              <div class="px-1"><a class="p-1" href="https://codepen.io/tomrishworth/"><img width="25px" src="../assets/icons/codepen.svg"/></a></div>
              <div class="px-1"><a class="p-1" href="https://github.com/tomrishworth"><img width="25px" src="../assets/icons/github.svg"/></a></div>
              <div class="px-1"><a class="p-1" href="https://twitter.com/tomrishworth"><img width="25px" src="../assets/icons/twitter.svg"/></a></div>
              <div class="px-1"><a id="email" class="p-1" href="mailto:tomrishworth@gmail.com"><img width="25px" src="../assets/icons/envelope.svg"/></a></div>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

.sidebar {
  box-shadow: 0 0 25px 0 rgba(0,0,0,0.1);
  border-bottom: 1px solid #eee;
  @include media-breakpoint-up(lg) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 330px;
    border-right: 1px solid #eee;
    box-shadow: 0 0 25px 0 rgba(0,0,0,0.1);
  }
}

.avatar img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #ddd;
}

</style>



