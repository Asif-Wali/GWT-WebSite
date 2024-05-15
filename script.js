const onClickScroll = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const showMenuButton = document.getElementById("showMenuButton");
const closeMenuButton = document.getElementById("closeMenuButton");
const smScrnNavbar = document.getElementById("smScrnNavbar");

const showMobileNavBar = () => {
  showMenuButton.style.display = "none";
  closeMenuButton.style.display = "block";
  smScrnNavbar.classList.remove("hidden");
  smScrnNavbar.classList.add("flex");
};

const hideMobileNavBar = () => {
  smScrnNavbar.classList.remove("flex");
  smScrnNavbar.classList.add("hidden");
  closeMenuButton.style.display = "none";
  showMenuButton.style.display = "block";
};

const onClickScrollSmScrn = (elementId) => {
  hideMobileNavBar();
  onClickScroll(elementId);
};

let ServicesItems = [
  {
    name: "Web Development",
    details:
      "Web development is the process of creating and maintaining websites or web applications for the internet. It encompasses a range of tasks, including web design, web programming, content management, and server management.",
    image:
      "https://www.stickyit.com/wp-content/uploads/2019/01/web-development.png",
  },
  {
    name: "Mobile Development",
    details:
      "Our mobile development services encompass both Android and iOS platforms, ensuring widespread reach and engagement for our clients.",
    image: "https://qfonapp.com/assets/img/android.png",
  },
  {
    name: "UI/UX Design",
    details:
      "Our UI/UX design team crafts visually appealing and user-friendly interfaces, ensuring seamless and intuitive experiences for our clients and their users.",
    image:
      "https://images.ctfassets.net/s600jj41gsex/vcl6NFlfpbhsRE1Nk6Q2Z/e166aa107dbe64ff958d0e7f8dd02282/Guide_to_placeholder_text_best_practice_in_TinyMCE.png?w=768&q=50&fit=scale",
  },
  {
    name: "Pay-Per-Click(Google Adward)",
    details:
      "Advertising is one of the premium services offered by Global Web Technology, designed to drive targeted traffic, generate leads, and maximize return on investment (ROI) for our clients.",
    image: "https://www.marketingnotch.com/img/google-pay-per-click-1.svg",
  },
  {
    name: "Cloud Management",
    details:
      "Our expert team takes care of all aspects of cloud and website management, allowing our clients to focus on their core business activities.",
    image: "../assets/images/cloud_management.jpeg",
  },
  {
    name: "SEO",
    details:
      "Billions of web browsing sessions begin with a search query every day. With more than a billion websites competing for the top spot in search results, it can be difficult to drive traffic to your site from search engines.",
    image: "https://rankworks.com/wp-content/uploads/2017/03/seo.jpg",
  },
  {
    name: "Custom Software",
    details:
      "Custom software development involves creating unique software solutions tailored to the specific needs and requirements of businesses. Our team of experienced developers uses cutting-edge technologies to build scalable and efficient software applications that help businesses streamline their processes and achieve their goals.",
    image:
      "https://www.dignited.com/wp-content/uploads/2022/08/top10lan-1024x576.jpg",
  },
  {
    name: "AI Development",
    details:
      "AI development involves creating intelligent software solutions that can perform tasks that typically require human intelligence. Our team of AI experts uses advanced algorithms and machine learning techniques to build AI applications that can analyze data, make predictions, and automate complex processes. With AI development, businesses can gain valuable insights, improve decision-making, and enhance efficiency.",
    image:
      "https://www.marktechpost.com/wp-content/uploads/2023/04/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled.jpg",
  },
];

function appendServices() {
  let container = document.getElementById("servicesHolder");

  let htmlContent = "";
  for (const item of ServicesItems) {
    let ServiceHTML = `<div class="w-full lg:w-[45%] bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col gap-10 justify-between group cursor-pointer transition-all duration-500"
           
           >
             <div
               class="flex flex-col md:flex-row lg:flex-col gap-10 text-gray-200 items-center justify-center"
             >
               <div class="min-h-60 min-w-60">
                 <img
                   class="transition-all duration-500 w-full h-72 group-hover:h-80 rounded-lg"
                   src="${item.image}"
                   alt="item.image"
                   priority
                 />
               </div>
               <div>
                 <h1 class=" text-[24px]" >${item.name}</h1>
                 <p class="text-lg">${item.details}</p>
               </div>
             </div>
             <button class="w-full bg-white text-black font-medium text-base tracking-wider font py-2 rounded shadow-md " >
               Enquire Now
             </button>
           </div>`;
    htmlContent += ServiceHTML;
  }
  container.innerHTML = htmlContent;
}
appendServices();

let ProjectItems = [
  {
    name: "Advark.in",
    details:
      "So  at Ardvark we give great weightage to variety and versatility while keeping the products afforable. ardvark's tag line Game for life advertises itself for a passionate  gamer. we strive  to make it  possible for passions to be enjoyed and the unforgettable to be experienced, all at a great cost.",
    type: "Web Development",
    images: [
      "./assets/ardvark_1.png",
      "./assets/ardvark_2_new.png",
      "./assets/ardvark_3.png",
      "./assets/ardvark_4_new.png",
    ],
    link: "https://ardvark.in/",
  },
  {
    name: "AskmeFurnitures",
    details:
      "your go-to destination for premium furniture that combines superior quality with unbeatable prices. As a leading furniture manufacturer, we take pride in producing exceptional pieces that are designed to enhance the beauty and functionality of your home or office",
    type: "Web Design",
    images: [
      "./assets/askmefurniture_1.png",
      "./assets/askmefurniture_2.png",
      "./assets/askmefurniture_3.png",
      "./assets/askmefurniture_4.png",
    ],
    link: "https://askmefurniture.com/",
  },
  {
    name: "Coffee Shop",
    details:
      "The coffee shop mobile application provides users with a convenient platform to explore and purchase a wide variety of coffees. With this app, users can browse through an extensive selection of different types of coffees, ranging from popular classics to unique and specialty blends.",
    type: "Mobile Development",
    images: [
      "./assets/coffee_shop_1.png",
      "./assets/coffee_shop_2.png",
      "./assets/coffee_shop_3.png",
      "./assets/coffee_shop_4.png",
    ],
    link: "https://drive.google.com/file/d/1DHPt3VJ_EWKfC6YcHZlkCeS4U6vC6KGn/view?usp=sharing",
  },
  {
    name: "Candus Carpet",
    details:
      "Candus is committed to the enduring expansion of the flooring market. We firmly believe that the adoption of innovative flooring solutions, such as SPC and laminate flooring as substitutes for hardwood, as well as the preference for carpet tiles and wall-to-wall carpets over handmade rugs, and the increasing popularity of artificial carpet grass instead of natural grass, will continue to surge.",
    type: "Web Development",
    images: [
      "./assets/canduscarpet_1.png",
      "./assets/canduscarpet_2.png",
      "./assets/canduscarpet_3.png",
      "./assets/canduscarpet_4.png",
    ],
    link: "https://canduscarpet.co.in/",
  },
];

function appendProjects() {
  let container = document.getElementById("project-container");
  let htmlContent = "";
  for (const project of ProjectItems) {
    let imagesHTML = project.images
      .map(
        (image) => `
       <div class="image-container [&:nth-child(2)]:lg:flex [&:nth-child(2)]:hidden [&:nth-child(3)]:lg:flex [&:nth-child(3)]:hidden first:lg:flex justify-center items-center h-48 transition-all duration-300 hover:h-60 w-full ">
           <img class="w-full h-full rounded" src="${image}" alt="${project.name}" />
       </div>
   `
      )
      .join("");

    let projectHTML = `
       <div class="w-full lg:w-[45%] bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col gap-10 justify-between group cursor-pointer transition-all duration-500">
           <div class="flex flex-col md:flex-row lg:flex-col gap-10 text-gray-200 items-center justify-center group">
               <div class="flex w-full gap-3 first:rounded-lg justify-between relative">
                   ${imagesHTML}
               </div>
               <div>
                 <h1 class=" text-[24px]" >${project.name}</h1>
                 <div class="text-gray-400 mb-4 text-lg">${project.type}</div>
                 <p class="text-lg">${project.details}</p>
               </div>
           </div>
           <a class="w-full" href="${project.link}" target="_blank">
               <button class="w-full font-medium hover:font-semibold bg-white text-black text-base tracking-wider font py-2 rounded shadow-md cursor-pointer ">
                   Visit this Website
               </button>
           </a>
       </div>
   `;
    htmlContent += projectHTML;
  }
  container.innerHTML = htmlContent;
}
appendProjects();

let WhyUs = [
  {
    title: "About Us",
    description:
      "At Global Web Technology, we are passionate about the digital world and committed to helping individuals, businesses, and organizations succeed online. Established in 2020, we've rapidly evolved into a leading provider of diverse digital services, specializing in web development, mobile app development, UI/UX design, Pay-Per-Click advertising, SEO, and cloud management.",
  },
  {
    title: "Why Choose Us?",
    description:
      "We pride ourselves on our dedication to quality, innovation, and a client-centric approach. Our team keeps pace with the ever-evolving digital landscape and we're more than service providers; we're your partners in growth. Transparency is our hallmark, and we're committed to delivering tangible results.At Global Web Technology, we don't just offer services; we offer solutions that unlock the full potential of the digital world. Join us on this exciting journey to create innovative websites, user-friendly mobile apps, and highly effective digital marketing campaigns. Together, we can make your business truly shine online.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is clear: to empower our clients to thrive in the digital age. We believe that every business, regardless of size or industry, deserves an exceptional online presence. Our services are designed to make this a reality. We aim to bridge the gap between innovation and accessibility, ensuring that the benefits of cutting-edge technology are within everyone's reach.",
  },
  {
    title: "Core Values",
    description:
      "We're dedicated to delivering the highest quality work in everything we do. Whether it's a website, mobile app, or marketing campaign, we strive for excellence.In the ever-evolving digital landscape, we keep our finger on the pulse of the latest technologies and trends. We're not just service providers; we're your digital partners in growth.We believe in collaboration and communication. Your success is our success, and we work closely with you to ensure your project aligns with your goals and vision.",
  },
];

function appendWhyUs() {
  let container = document.getElementById("whyUs-container");
  let htmlContent = "";
  for (const why of WhyUs) {
    let WhyUsHTML = `<div class="w-full lg:w-[45%] bg-gray-800 rounded-lg shadow-lg p-5 flex flex-col gap-2 group cursor-pointer transition-all duration-500"
                   
               >
                   <h1>${why.title}</h1>
                   <p class="text-lg">${why.description}</p>
               </div>`;

    htmlContent += WhyUsHTML;
  }
  container.innerHTML = htmlContent;
}
appendWhyUs();
