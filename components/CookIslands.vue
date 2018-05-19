<template>
  <div>
    <div class="container container-md mb-2">
      <div class="text-center mb-4">
        <img v-cl-image="'cinsf-logo'" width="auto" responsive fetch_format="auto" quality="auto">
      </div>
      <div class="row pt-2 mb-3">
        <div class="col-sm-6">
          <p class="text-lg">The Cook Islands National Super Fund (CINSF) is designed to provide members with a means to save for their retirement.</p>
        </div>
        <div class="col-sm-6">
          <p class="text-lg">We are developing an app to help manage the reconciliation of employer &amp; employee contributions, and to ensure
            that all payments are correctly accounted for.</p>
        </div>
      </div>
    </div>

    <div class="container container-lg">
      <figure class="project-image col-12">
        <img v-cl-image="'cinsf-desktop-reconciliation'" width="auto" responsive fetch_format="auto" quality="auto">
        <figcaption>Reconciliaiton Screen</figcaption>
      </figure>
    </div>

    <div class="container container-md my-4">
      <h3 class="text-lg">Employer App</h3>
      <div class="row">
        <div class="col-sm-6">
          <p class="text-lg">Cook Island Employers will get their own app for managing their employee contributions.</p>
        </div>
      </div>
    </div>


    <div class="container container-lg mb2">
      <div class="row">
        <div class="col-sm-6">
          <figure class="project-image">
            <img v-cl-image="'CINSF-Dashboard'" width="auto" responsive fetch_format="auto" quality="auto">
            <figcaption>When employers log into the app, they can see their outstanding issues</figcaption>
          </figure>
        </div>
        <div class="col-sm-6">
          <figure class="project-image">
            <img v-cl-image="'CINSF-Declarations'" width="auto" responsive fetch_format="auto" quality="auto">
            <figcaption>Employers can see a list of all declarations made, and create new ones.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
