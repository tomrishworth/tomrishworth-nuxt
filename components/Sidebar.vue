<template>
  <div class="sidebar">
      <div class="p-3">
          <div class="text-center">
              <div class="avatar mb-3"><img src="http://res.cloudinary.com/atmosphere-studios/image/upload/v1506112626/me-2016-bw_illaj7.jpg"
                  /></div>
              <h1 class="text-xl font-weight-bold">Tom Rishworth</h1>
              <div class="line ml-auto mr-auto"></div>
          </div>
          <div class="text-center text-muted">
              <p>I'm a product designer and frontend developer based in Auckland, NZ. </p>
              <p>Currently working at <a href="http://webscope.co.nz">Webscope NZ</a></p>
          </div>
          <div class="d-flex justify-content-center">
              <div class="px-1"><a class="p-1" href="#"><img width="30px" src="../assets/icons/codepen.svg"/></a></div>
              <div class="px-1"><a class="p-1" href="#"><img width="30px" src="../assets/icons/github.svg"/></a></div>
              <div class="px-1"><a class="p-1" href="#"><img width="30px" src="../assets/icons/twitter.svg"/></a></div>
              <div class="px-1"><a class="p-1" href="#"><img width="30px" src="../assets/icons/envelope.svg"/></a></div>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>

.sidebar {
  box-shadow: 0 0 25px 0 rgba(0,0,0,0.1);
  border-bottom: 1px solid #eee;
  @include media-breakpoint-up(sm) {
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
