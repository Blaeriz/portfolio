<script>
  import { onMount } from "svelte";
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import { DownloadIcon, MapPin} from 'lucide-svelte';
  import Icon from '@iconify/svelte'

  let scrollPosition = 0;

  let latestWorkCardStyles = "group transition-transform transform hover:scale-110"
  let cardH3Styles = "text-[#8a8b8b] font-[700] text-xl py-2 text-left group-hover:text-[#e0e0e0]"
  let cardPStyles = "text-[#8a8b8b] font-[400] text-l text-left group-hover:text-[#e0e0e0]"
  let cardImageStyles = "transition-transform transform group-hover:scale-110"
  let titleStyles = "uppercase text-white font-[700] text-4xl"
  let subTitleStyles = "text-[#8a8b8b] font-[400] text-l text-center"
  let skillsCardLiStyles = "flexrelative flex-auto text-center items-center p-[5px] justify-between text-[#8a8a8a] font-extrabold md:w-1/3 sm:w-1/2 transition"
  let skillsCardDivStyles = "border border-[2px_solid] p-3 w-full h-full text-xs md:text-lg flex justify-center items-center hover:text-[#211d26] hover:bg-[#8a8a8a] tracking-wide transition"
  let latestWorkTopOffset = 0;
  let contactFormInputStyles = "h-10 w-full rounded-md p-2 text-xl placeholder-black"
  let contactFormMessageInputStyles = "h-28 w-full rounded-md p-2 text-xl placeholder-black resize-none text-start"
  

  onMount(() => {
    window.scrollTo(0, 0);

    // // Update the scrollPosition variable with the current scroll position
    // scrollPosition = window.scrollY;
    // var blurElement = document.getElementsByClassName('mannualBlur');
    // // @ts-ignore
    // blurElement[0].style.filter = "blur(" + scrollPosition/60 + "px)";


    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    var knowMoreElement = document.getElementsByClassName('knowMore');
    console.log(knowMoreElement);

    if(knowMoreElement){
      // @ts-ignore
      latestWorkTopOffset = knowMoreElement[0].offsetTop;
    }

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let name = '';
  let email = '';
  let message = '';
  // let isNameValid = false;
  // let isMessageValid = false;

  // const validateName = () => {
  //   isNameValid = name.trim() !== '';
  // };

  // const validateMessage = () => {
  //   isMessageValid = message.trim() !== '';
  // };

  // const handleSubmit = () => {
  //   // You can handle form submission logic here

  //   if(isMessageValid && isNameValid){
  //     console.log('Name:', name);
  //     console.log('Email:', email);
  //     console.log('Message:', message);

  //     // Reset the form fields after submission
  //     name = '';
  //     email = '';
  //     message = '';
  //   }else{
  //     alert('Please fill all the fields');
  //   }
  // };

  
  
  /**
   * @param {number} start
   * @param {number} target
   * @param {number} duration
   */
  function animateScroll(start, target, duration) {
  /**
       * @type {number | null}
       */
  var startTime = null;

  /**
       * @param {number | null} currentTime
       */
  function step(currentTime) {
    if (!startTime) startTime = currentTime;

    // @ts-ignore
    var progress = currentTime - startTime;
    var percentage = Math.min(progress / duration, 1);

    window.scrollTo(0, start + percentage * (target - start));

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

  function knowMore(){
      animateScroll(0, latestWorkTopOffset, 1000);
  }

  function scrollTop(){
      animateScroll(window.scrollY, 0, 1000);
  }

  function handleScroll() {
    // Update the scrollPosition variable with the current scroll position
    // @ts-ignore
    scrollPosition = window.scrollY;
    var blurElement = document.getElementsByClassName('mannualBlur');
    // @ts-ignore
    blurElement[0].style.filter = "blur(" + scrollPosition/60 + "px)";
    
  }
</script>

<style>
  
</style>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Hrishikesh Pingle Portfolio</title>
</head>

<main>
  {#if scrollPosition !== 0}
    <button class="fixed bottom-[20px] right-[20px] bg-white p-[10px_20px] text-[#000000] border-none rounded-[50%] cursor-pointer z-50 text-2xl text-center" on:click={scrollTop}><i class="fa-solid fa-arrow-up"></i></button>
  {/if}
  
  <!-- Your Svelte component content goes here -->
   <div class="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] sticky top-0 mannualBlur">
    <div class="flex flex-row justify-between">
      <p class="flex flex-row gap-2 justify-between text-white uppercase m-2 text-2xl"><Icon icon="lucide:map-pin" height="auto"></Icon> Mumbai, IN</p>
      <div class="flex flex-row gap-2 m-2 text-white">
        <a href="https://www.linkedin.com/in/hppingle" target="_blank" rel="noopener noreferrer" class="h-full w-full"><Icon icon="mdi:linkedin" style="font-size: 32px;" class="h-full w-full"></Icon></a>
        <a href="https://www.github.com/Blaeriz" target="_blank" rel="noopener noreferrer" class="h-full w-full"><Icon icon="mdi:github" style="font-size: 32px;" class="h-full w-full"></Icon></a>
      </div>
    </div>
    <div class="flex flex-col min-w-full min-h-[100vh] mt-32">
        <div class="mannualBlur text-center">
            <h1 class="block uppercase text-[32px] tracking-wider font-bold animate-charcter md:text-[75px] lg:text-[100px]">Hrishikesh Pingle</h1>
            <p class="block text-2xl w-[75vw] md:text-5xl max-w-[900px] m-[1em_auto] font-[400] text-[#ffffff]">Tech is cool.</p>
            <p class="block text-3xl font-bold w-[75vw] max-w-[900px] m-[1em_auto] text-[#ffffff]">¯\_(ツ)_/¯</p>
            <div class="flex flex-row justify-center gap-5 md:gap-10">
              <button class="text-sm text-black mix-blend-difference font-[700] text-[12px] bg-white uppercase px-[5px] py-[10px] tracking-wide rounded-md md:px-[10px] md:py-[15px] md:text-[15px]" on:click={knowMore}>Know More</button>
              <a class="flex flex-row gap-2 justify-between text-[12px] font-[700] bg-transparent text-[#ffffff] border border-white uppercase px-[5px] py-[10px] tracking-wide rounded-md md:px-[10px] md:py-[15px] md:text-[15px]" href='https://hppingleblog.netlify.app'><Icon icon="mdi:blog-outline" width="24" height="24" /> Blog</a>
              <a class="flex flex-row gap-2 justify-between text-[12px] font-[700] bg-transparent text-[#ffffff] border border-white uppercase px-[5px] py-[10px] tracking-wide rounded-md md:px-[10px] md:py-[15px] md:text-[15px]" href='/download_resume'><DownloadIcon></DownloadIcon> Resume</a>
            </div>
        </div>
    </div>
   </div>
  
  
  <div class="knowMore flex flex-row justify-center align-middle bg-none min-h-[100vh] text-center sticky top-0 p-0 mx-auto w-[90%]">

      <div class="flex flex-col w-full">
        <!-- Experience -->
        <div class="pt-5 pb-16 text-center">
          <h2 class={titleStyles}>Experience</h2>
        </div>

        <section id="experience" class="flex flex-col w-[90%]" aria-label="Work experience">
          <div>
              <ol class="group/list">
                  <li class="mb-12">
                      <div class="flex flex-row align-middle justify-center items-center pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 w-full">
                          <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Jun – Jul 2024">Jun – Jul 2024</header>
                          <div class="flex flex-col align-middle justify-center items-center flex-[3_6]">
                              <h3 class="font-medium leading-snug text-slate-200 ">
                                  <div>
                                      <a
                                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                          href="https://www.onwardgroup.com/"
                                          target="_blank"
                                          rel="noreferrer noopener"
                                          aria-label="Software Engineer, Intern at Onward Technologies"
                                      >
                                          <span class="text-3xl">
                                              Software Engineer, Intern ·<!-- -->
                                              <span class="inline-block">
                                                  Onward Technologies
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 20 20"
                                                      fill="currentColor"
                                                      class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                      aria-hidden="true"
                                                  >
                                                      <path
                                                          fill-rule="evenodd"
                                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                          clip-rule="evenodd"
                                                      ></path>
                                                  </svg>
                                              </span>
                                          </span>
                                      </a>
                                  </div>
                              </h3>
                              <p class="mt-2 leading-normal text-white hidden md:block pl-2 text-xs md:text-xl text-center">
                                During my internship as a Software Engineering Intern at Bentley Motors, I conducted in-depth Exploratory Data Analysis (EDA) and developed three proof-of-concept (POC) models for the marketing team, which led to a 40% improvement in targeted campaign effectiveness and engagement. I collaborated with the team using Jupyter Notebook and worked extensively with tools, for data cleaning, processing, and visualization. Additionally, I engineered an interactive dashboard using Svelte to visualize cloud expenses from Azure, AWS, and GCP APIs. This dashboard featured real-time tracking and integrated a forecasting system that predicted monthly costs with an 85% accuracy rate.
                              </p>
                              <ul class="mt-2 flex flex-wrap items-center pl-2" aria-label="Technologies used">
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Jupyter Notebook</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Pandas</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">NumPy</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">SciPy</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Matplotlib</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Seaborn</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Scikit-learn</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Statsmodels</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Plotly</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Svelte</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Azure</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">AWS</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">GCP</div>
                                </li>                                
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Salesforce</div>
                                </li>
                                <li class="mr-1.5 mt-2">
                                  <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Carporate Jargon</div>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </li>
                  <li class="mb-12 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="flex flex-row align-middle justify-center items-center pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Jun – Jul 2024">Dec - Jan 2024</header>
                        <div class="flex flex-col align-middle justify-center items-center flex-[3_6]">
                            <h3 class="font-medium leading-snug text-slate-200 ">
                                <div>
                                    <a
                                        class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                        href="https://winspectindia.com"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Software Engineer, Intern at WinspectTechnologies Pvt. Ltd."
                                    >
                                        <span class="text-3xl">
                                            Software Engineer, Intern ·<!-- -->
                                            <span class="inline-block">
                                                Winspect Technologies Pvt. Ltd.
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </h3>
                            <p class="mt-2 text-xs md:text-xl leading-normal text-white hidden md:block pl-2">
                              I built a multi-page, comprehensive website showcasing over 20 products and services, which led to a 40% increase in online engagement within the first quarter of launch. By streamlining the user experience through innovative design and intuitive navigation, I reduced bounce rates by 30% and improved average session duration by 25%. Additionally, I optimized the site’s performance using SEO best practices, achieving a top-three ranking for target keywords and increasing organic traffic by 150%, significantly boosting brand visibility.
                            </p>
                            <ul class="mt-2 flex flex-wrap pl-2" aria-label="Technologies used">
                              <li class="mr-1.5 mt-2">
                                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">WebDev</div>
                              </li>
                              <li class="mr-1.5 mt-2">
                                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">UI/UX</div>
                              </li>
                              <li class="mr-1.5 mt-2">
                                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">SEO</div>
                              </li>
                              <li class="mr-1.5 mt-2">
                                <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs md:text-lg font-medium leading-5 text-teal-300">Corporate Jargon</div>
                              </li>
                            </ul>
                        </div>
                    </div>
                </li>
              </ol>
          </div>
      </section>

      <div class="flex flex-col w-[90%] align-middle justify-center items-center mx-auto">
        <!-- Skills/Languages -->
        <div class="pt-5 pb-16 w-[90%] text-center">
          <h2 class={titleStyles}>Skills/Languages</h2>
        </div>

        <!-- Add Skills/Languages Here -->
        <ul class="list-none flex flex-wrap w-[90%] box-border flex-row m-0 p-[0_20px] mb-8 transition">
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Python</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Rust</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>ROS2</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Java</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>C/C++</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>C#</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>HTML</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>CSS</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>JavaScript</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>TypeScript</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>React/NextJs</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Svelte</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>ExpressJs</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>NodeJS</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Flutter</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>MySql</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Git/Github</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>STM32/ESP32</div>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>Arduino/RaspberryPI</div>
          </li>
        </ul>
        <!-- Certifications -->
        <div class="pt-5 pb-16 w-[90%] text-center">
          <h2 class={titleStyles}>Certifications</h2>
        </div>

        <ul class="list-none flex flex-wrap w-[90%] box-border flex-row m-0 p-[0_20px] mb-8 transition">
          <li class={skillsCardLiStyles}>
            <a href="https://www.coursera.org/account/accomplishments/verify/FWSCYAFWA7AE" target="_blank" rel="noopener noreferrer">
              <div class={skillsCardDivStyles}>Google - Foundations of Cybersecurity</div>
            </a>
          </li>
          <li class={skillsCardLiStyles}>
            <a href="https://www.coursera.org/account/accomplishments/verify/13L6W0289JF0" target="_blank" rel="noopener noreferrer">
              <div class={skillsCardDivStyles}>ISC2 - Security Principles</div>
            </a>
          </li>
          <li class={skillsCardLiStyles}>
            <a href="https://www.coursera.org/account/accomplishments/verify/FBA2KMV7SVQN" target="_blank" rel="noopener noreferrer">
              <div class={skillsCardDivStyles}>IBM - Introduction to Cybersecurity Tools and Attacks</div>
            </a>
          </li>
          <li class={skillsCardLiStyles}>
            <div class={skillsCardDivStyles}>University of California San Diego - Data Structures</div>
            <a href="https://www.coursera.org/account/accomplishments/verify/64HEV2WQJKGO" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          <li class={skillsCardLiStyles}>
            <a href="https://www.coursera.org/account/accomplishments/verify/XR8PHLJVTUWU" target="_blank" rel="noopener noreferrer">
              <div class={skillsCardDivStyles}>IBM - Databases and SQL for Data Science with Python</div>
            </a>
          </li>
        </ul>
      </div>
  </div>
</main>
