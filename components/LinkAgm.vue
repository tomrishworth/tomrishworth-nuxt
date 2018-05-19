<template>
  <div>
    <div class="container container-md">
      <div class="text-center mb-3">
        <img v-cl-image="'LMS_logo'" width="200" responsive fetch_format="auto" quality="auto">
      </div>
      <div class="row mb-3">
        <div class="col-sm-6">
          <p class="text-md">
            Involved in developing an app that allowed shareholders to vote in Annual General Meetings (AGMs), a first in Australasia. There where many technical UX challenges, as users need to be able to split there votes over multiple options, and also allow some users to vote on behalf of other (proxy vote).
          </p>
        </div>
        <div class="col-sm-6">
          <p class="text-md">Shortly after the release of the web based application, we developed a mobile app, built with Ionic. We then developed a dashboard that allows those running the AGM to get real time analytics of registrations, votes, questions, and voter locations.</p>
          <p class="text-md">So far used by Xero, Z Energy, Spark, Air NZ.</p>
        </div>
      </div>
    </div>

    <div class="container container-lg mb-5">
      <div class="row">
        <div class="col-sm-6">
          <figure class="project-image h-100">
            <img v-cl-image="'AGM1'" width="auto" responsive fetch_format="auto" quality="auto">
            <figcaption>Voting App</figcaption>
          </figure>
        </div>
        <div class="col-sm-6">
          <figure class="project-image h-100">
            <img v-cl-image="'AGM2'" width="auto" responsive fetch_format="auto" quality="auto">
            <figcaption>Split Vote</figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="container container-lg">
      <figure class="project-image h-100">
        <img v-cl-image="'lms-desktop'" width="auto" responsive fetch_format="auto" quality="auto">
      </figure>
    </div>
  </div>
</template>
