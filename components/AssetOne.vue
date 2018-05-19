<template>
  <div>
    <div class="container container-md">
      <div class="text-center mb-3">
        <img v-cl-image="'asset-one-logo'" width="auto" responsive fetch_format="auto" quality="auto">
      </div>
      <div class="row mb-3">
        <div class="col-sm-6">
          <p class="text-md">A bespoke application built for Alpha West City Towing to help increase the efficiency and accuracy
                  of running their business.</p>
        </div>
        <div class="col-sm-6">
          <p class="text-md">The app manages all aspects of the day-to-day running of a towing business, from taking the initial
                  job details, to dispatching jobs and managing the storage of vehicles, through to generating
                  invoices and producing detailed job logs which are send to the police.</p>
        </div>
      </div>
    </div>
    <div class="container container-xl">
      <figure class="project-image col-12">
        <img v-cl-image="'asset-one-dispatch'" width="auto" responsive fetch_format="auto" quality="auto">
        <figcaption>Dispatch Screen - Overview of all unscheduled jobs. Jobs can be assisgned to drivers from this screen.</figcaption>
      </figure>
      <figure class="project-image col-12">
        <img v-cl-image="'asset-one-edit-letter'" width="auto" responsive fetch_format="auto" quality="auto">
        <figcaption>Letter Generator - Creates a template for generating letters that are prepopluated with all customer
              &amp; job details</figcaption>
      </figure>
    </div>
    <div class="container container-md my-4">
        <div class="row">
            <div class="col-sm-6">
              <div class="pl-sm-5 mb-2">
                  <img v-cl-image="'asset-one-app-icon'" width="auto" responsive fetch_format="auto" quality="auto">
              </div>
              <h3 class="text-lg">Companion Driver App</h3>
              <p class="text-md">We also built a native android app for drivers to use during the day, to see their upcoming jobs,
                    and get detailed job info. The app automatically tracks the driver via gps, and updates their
                    status as they progress through the various stages of completing a job. This then updates
                    their status in the main app, so dispatchers can monitor their progress.</p>
            </div>
        </div>
    </div>
    <div class="container container-lg my-4">
      <div class="row mb-3 mb-md-5">
        <div class="col-sm-6">
          <figure class="project-image h-100">
            <img v-cl-image="'driver-app'" width="auto" responsive fetch_format="auto" quality="auto">

            <figcaption>Drivers can see all upcoming jobs for the day</figcaption>
          </figure>
        </div>
        <div class="col-sm-6">
          <figure class="project-image h-100">
              <img v-cl-image="'driver-app2'" width="auto" responsive fetch_format="auto" quality="auto">
              <figcaption>Drivers can get an overview of the job at a glance, and click into each section for more
                    details</figcaption>
          </figure>
        </div>
      </div>
    </div>
    <div class="container container-lg my-4">
      <div class="row">
        <div class="col-sm-6">
          <div class="">
            <h3 class="text-lg font-weight-bold">My Responsibilties</h3>
            <ul class="text-md">
              <li>Initial concepts and wireframes (Whiteboarding and Sketches)</li>
              <li>Low-fi mockups &amp; UX Protoyping</li>
              <li>Full App Design &amp; Styleguide (Sketch App and Invision)</li>
              <li>App build - Produced all html templates and scss (with Bootstrap and BASSCSS frameworks),
                  and worked with Angular JS to extract &amp; present API data.</li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="">
            <h3 class="text-lg font-weight-bold">Outcomes</h3>
            <p class="text-md">This project has been a huge success, with a return on initial investment within 7 months
                  of launch. This is mostly due to less errors now being made with invoicing, with the
                  app automating much of this process. Next steps are to roll out a SAAS version for other
                  compaines to use.
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
