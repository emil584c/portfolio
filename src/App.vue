

<template>

<header class="border-2 border-primary-black py-1">

<nav class=" md:flex justify-between items-center">
  <p class=" font-rubik font-medium text-2xl">Lind.gg</p>

  <div class="  md:hidden cursor-pointer flex flex-col gap-1">
    <div class=" bg-primary-black w-3 h-1"></div>
    <div class=" bg-primary-black w-2 h-1"></div>
    <div class=" bg-primary-black w-1 h-1"></div>
  </div>

  <ul class="md:flex md:items-center gap-4 md:static absolute bg-primary-cream md:w-auto w-full  duration-700 ease-in">
    <li class="font-rubik font-normal text-base text-primary-black text-center max-w-phone lg:max-w-lg lg:text-lg"><a href=""></a>Home</li>
    <li class="font-rubik font-normal text-base text-primary-black text-center max-w-phone lg:max-w-lg lg:text-lg"><a href=""></a>Who am i</li>
    <li class="font-rubik font-normal text-base text-primary-black text-center max-w-phone lg:max-w-lg lg:text-lg"><a href=""></a>My work</li>
    <button class=" text-primary-white px-8 py-3 bg-primary-blue border-solid border-2 border-primary-blue text-xl font-rubik">Hire me</button>
  </ul>
</nav>
        
</header>


  <!-- hero section -->
  <main class=" bg-primary-cream">
    <section class="border-2 border-primary-black py-8">
      <div class="flex flex-col lg:flex-row lg:max-w-6xl mx-auto">
        <div class="flex flex-col max-w-sm mx-auto items-center gap-8 lg:max-w-5xl">
          <h1 class="font-rubik font-bold text-3xl text-center max-w-phone text-primary-grey lg:text-6xl lg:max-w-5xl lg:leading-tight">Hi, I´m <span class=" text-primary-black">Emil Lind</span> <br>A Frontend Developer <br>Based in Odense</h1>
          <p class="font-rubik font-normal text-base text-primary-black text-center max-w-phone lg:max-w-lg lg:text-lg">I am an aspiring front end developer with a passion for designing and creating websites with HTML, CSS & JS.</p>
          <div>
            <button class=" text-primary-black px-8 py-3 border-solid border-2 border-primary-black text-xl font-rubik">Projects</button>
            <button class=" text-primary-white px-8 py-3 bg-primary-blue border-solid border-2 border-primary-blue text-xl font-rubik">Hire me</button>
          </div>
        </div>
        
      </div>
    </section>
    <!-- who am i section -->
    <section class="mt-8">
      <div class=" max-w-phone mx-auto flex flex-col items-center lg:max-w-6xl">
        <h2 class="text-center my-8 font-rubik font-medium text-2xl">Who am i</h2>
        <div class="border-2 border-primary-black p-4 flex flex-col items-center max-w-phone lg:max-w-5xl lg:flex-row lg:justify-between lg:w-full lg:px-12">
          <p class=" font-rubik font-normal text-base text-primary-black text-center max-w-xs lg:max-w-xl lg:text-left">Hi! My name is Emil, I am 21 years old and studying in Odense. I am an aspiring front end developer trying to find my place in the market. I have a passion for coding in HTML and CSS and I am hoping to learn javascript later on down the road. I also have an interest in creating content. <br><br> I am experienced in most Adobe programs, but I also enjoy the practical work such as filming or taking photos. In my free time I am a down to earth guy who loves either spending time with friends or perfecting my craft in my hobby, which happens to be coding.</p>
          <img class="" src="images/emillind.png" alt="Picture of Emil Lind">
        </div>
      </div>
    </section>
    <!-- my strengths section -->
    <section  >
      <h2 class="text-center my-8 font-rubik font-medium text-2xl">My strengths</h2>
      <div class="max-w-phone mx-auto flex flex-col items-center mt-8 lg:max-w-5xl lg:flex-row lg:flex-wrap">
        
          <article class="border-2 border-primary-black px-2 py-8 gap-4 flex flex-col items-center -mb-zzz lg:max-w-lg lg:w-full lg:-mr-bbb ">
            <img src="images/programming.png" alt="">
            <h3 class=" font-rubik font-medium text-xl">Coding in HTML, CSS & JS</h3>
            <p class=" font-rubik font-normal text-base text-primary-black text-center max-w-xs lg:max-w-textBox">I am experienced coding in HTML, CSS & JS aswell as Sass and TailwindCSS.</p>
          </article>
          <article class="border-2 border-primary-black px-2 py-8 gap-4 flex flex-col items-center -mb-zzz lg:max-w-lg lg:w-full">
            <img src="images/framework.png" alt="">
            <h3 class=" font-rubik font-medium text-xl">Modern JS Frameworks</h3>
            <p class=" font-rubik font-normal text-base text-primary-black text-center max-w-xs lg:max-w-textBox">I find concept creation exciting, and  i love creating new ideas and concepts for projects.</p>
          </article>
          <article class="border-2 border-primary-black px-2 py-8 gap-4 flex flex-col items-center -mb-zzz lg:max-w-lg lg:w-full lg:-mr-bbb lg:mb-ccc">
            <img src="images/concept.png" alt="">
            <h3 class=" font-rubik font-medium text-xl">Concept Creation</h3>
            <p class=" font-rubik font-normal text-base text-primary-black text-center max-w-xs lg:max-w-textBox">I have experience working with modern JS frameworks such as Vue.JS</p>
          </article>
          <article class="border-2 border-primary-black px-2 py-8 gap-4 flex flex-col items-center lg:max-w-lg lg:w-full lg:mb-ccc">
            <img src="images/problem.png" alt="">
            <h3 class=" font-rubik font-medium text-xl">Problem Solving</h3>
            <p class=" font-rubik font-normal text-base text-primary-black text-center max-w-xs lg:max-w-textBox">I love working on small or large problems for hours and developing solutions.</p>
          </article>

      </div>
    </section>
    <!-- my work section -->
    <section class="mt-8">
      <h2 class="text-center my-8 font-rubik font-medium text-2xl">My work</h2>
      <div class="lg:flex lg:justify-center">
        <div class="flex flex-col text-center">

          <a href="projectname1.html">
            <article class="border-2 border-primary-black max-w-phone py-8 mx-auto w-full h-project-phone -mb-bbb flex flex-col lg:w-project lg:max-w-project transition duration-300 hover:bg-secondary-cream cursor-pointer">
              <div class=" flex flex-col items-center">
                <h3 class=" font-rubik font-medium text-xl">Personal Portfolio</h3>
                <p class="font-rubik italic text-sm">Coded website design</p>
                <div class="flex gap-bbb mt-2">
                  <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Redesign</div>
                  <div class="border-2 border-primary-black font-rubik italic text-xs p-1">HTML</div>
                  <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Tailwind</div>
                  <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Vue.js</div>
                  <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Adobe Xd</div>
                </div>
                <img class="h-60" src="images/emillind.png" alt="Hydrovertic logo">
              </div>
            </article>
          </a>

          <article class="border-2 border-primary-black max-w-phone py-8 mx-auto w-full h-project-phone -mb-bbb flex flex-col lg:w-project lg:max-w-project transition duration-300 hover:bg-secondary-cream cursor-pointer">
            <div class=" flex flex-col items-center">
              <h3 class=" font-rubik font-medium text-xl">Glorious Family Foundation</h3>
              <p class="font-rubik italic text-sm">Coded website design</p>
              <div class="flex gap-bbb mt-2">
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Redesign</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">HTML</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Tailwind</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Vue.js</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Adobe Xd</div>
              </div>
              <img class=" h-28" src="images/gfm.png" alt="Our reworked Glorious Family Foundation logo">
            </div>
          </article>
          
        </div>
        <div class="lg:flex lg:flex-col lg:mt-24 lg:-ml-bbb">

          <article class="border-2 border-primary-black max-w-phone py-8 mx-auto w-full h-project-phone -mb-bbb flex flex-col lg:w-project lg:max-w-project transition duration-300 hover:bg-secondary-cream cursor-pointer">
            <div class=" flex flex-col items-center">
              <h3 class=" font-rubik font-medium text-xl">Hydrovertic</h3>
              <p class="font-rubik italic text-sm">Coded website design</p>
              <div class="flex gap-bbb mt-2">
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Redesign</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">HTML</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">CSS</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Client</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Adobe Xd</div>
              </div>
              <img class="" src="images/hydrovertic.png" alt="Hydrovertic logo">
            </div>
          </article>

          <article class="border-2 border-primary-black max-w-phone py-8 mx-auto w-full h-project-phone -mb-bbb flex flex-col lg:w-project lg:max-w-project transition duration-300 hover:bg-secondary-cream cursor-pointer">
            <div class=" flex flex-col items-center">
              <h3 class=" font-rubik font-medium text-xl">Fjord & Bælt</h3>
              <p class="font-rubik italic text-sm">Concept creation</p>
              <div class="flex gap-bbb mt-2">
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Client</div>
                <div class="border-2 border-primary-black font-rubik italic text-xs p-1">Concept</div>
              </div>
              <img class="h-28" src="images/fjordandbelt.png" alt="Fjord & Bælt logo">
            </div>
          </article>

        </div>
      </div>
    </section>

    <section class="mt-12">
      <h2 class="text-center my-8 font-rubik font-medium text-2xl">Contact me</h2>
      <div class="border-2 border-primary-black max-w-phone mx-auto p-4 lg:max-w-contact lg:p-8">

        <div class="flex flex-col gap-2 lg:flex-row lg:h-40 lg:items-center lg:justify-between">
          <p class=" font-rubik font-normal text-base text-primary-black text-center lg:max-w-md lg:text-left">I am always ready to answer questions about my work or possible projects in the future. noget med have a talk tænker jeg her, lidt mere åbent</p>
          
          <div class="flex flex-col gap-2">
            <div class="border-2 border-primary-black flex items-center p-2 lg:max-w-lg lg:max-h-12">
              <p class="font-rubik font-normal text-base text-primary-black text-center">emilwaellind@gmail.com</p>
            </div>
            <div class="border-2 border-primary-black flex items-center p-2 lg:max-w-lg lg:max-h-12">
              <p class="font-rubik font-normal text-base text-primary-black text-center">+45 42544888</p>
            </div>
          </div>

        </div>
        <img src="" alt="">
      </div>
    </section>

  </main>

</template>

<style scoped>
</style>


<script setup>



</script>