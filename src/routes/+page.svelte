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
  let skillsCardLiStyles = "flexrelative flex-auto text-center items-center p-[5px] justify-between text-[#8a8a8a] font-extrabold md:w-1/3 sm:w-1/2"
  let skillsCardDivStyles = "border border-[2px_solid] p-3 w-full h-full flex justify-center items-center hover:text-[#211d26] hover:bg-[#8a8a8a] tracking-wide"
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
    <button class="fixed bottom-[20px] right-[20px] bg-[#9b5094] p-[10px_20px] text-[#232823] border-none rounded-[50%] cursor-pointer z-50 text-2xl text-center" on:click={scrollTop}><i class="fa-solid fa-arrow-up"></i></button>
  {/if}
  
  <!-- Your Svelte component content goes here -->
   <div class="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] sticky top-0 mannualBlur">
    <div class="flex flex-row justify-between">
      <p class="flex flex-row gap-2 justify-between text-white uppercase m-2"><Icon icon="lucide:map-pin" height="auto"></Icon> Mumbai, IN</p>
      <div class="flex flex-row gap-2 m-2 text-white">
        <a href="https://www.linkedin.com/in/hppingle" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:linkedin" height="auto"></Icon></a>
        <a href="https://www.github.com/Blaeriz" target="_blank" rel="noopener noreferrer"><Icon icon="mdi:github" height="auto"></Icon></a>
      </div>
    </div>
    <div class="flex flex-col min-w-full min-h-[100vh] mt-32">
        <div class="mannualBlur text-center">
            <h1 class="block uppercase text-[25px] animate-charcter md:text-[75px] lg:text-[100px]">Hrishikesh Pingle</h1>
            <p class="block text-[1em] lg:text-[1.5em] md:text-[1.2em] w-[75vw] max-w-[900px] m-[1em_auto] font-[400] text-[#ffffff]">I like building cool shit.</p>
            <div class="flex flex-row justify-center gap-20">
              <button class="text-[0.9em] text-black mix-blend-difference font-[700] bg-white uppercase px-[10px] py-[15px] tracking-widest rounded-md" on:click={knowMore}>Know More</button>
              <a class="flex flex-row gap-2 justify-between text-[1em] font-[700] bg-transparent text-[#ffffff] border border-white uppercase px-[10px] py-[15px] tracking-widest rounded-md" href='/download_resume'><DownloadIcon></DownloadIcon> Resume</a>
            </div>
        </div>
    </div>
   </div>
  
  
  <div class="knowMore flex flex-row justify-center bg-none min-h-[100vh] min-w-full text-center sticky top-0 p-0 m-0">

      <div class="flex flex-col justify-start w-[90%]">
        <!-- Experience -->
        <div class="pt-5 pb-16">
          <h2 class={titleStyles}>Experience</h2>
          <p class={subTitleStyles}>Revisiting Noteworthy Ventures: A Recap of Impactful Projects and Achievements</p>
        </div>
        <!-- Add Experience Here -->


        <!-- Skills/Languages -->
        <div class="pt-5 pb-16">
          <h2 class={titleStyles}>Skills/Languages</h2>
          <p class={subTitleStyles}>A diverse skillset with advanced knowledge spanning across both design and development.</p>
        </div>

        <!-- Add Skills/Languages Here -->
        <ul class="list-none flex flex-wrap justify-center box-border flex-row m-0 p-[0_20px]">
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
      </div>
  </div>
</main>
