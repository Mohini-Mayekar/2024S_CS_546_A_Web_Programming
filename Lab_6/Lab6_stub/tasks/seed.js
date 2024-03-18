import { dbConnection, closeConnection } from '../config/mongoConnection.js';
import { productsData, reviewsData } from '../data/index.js';

const db = await dbConnection();
await db.dropDatabase();

const product1 = await productsData.create("83 inch LG C3 OLED TV", "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
    "OLED83C3PUA", 4757.29, "LG", "http://www.lgelectronics.com", ["TV", "Smart TV", "OLED", "LG", "Big Screen", "83 Inch"], ["Electronics", "Television & Video", "Televisions", "OLED TVs"],
    "02/10/2024", false);

const product1_id = product1._id;

const product2 = await productsData.create("Samsung Galaxy S22 Ultra", "The Samsung Galaxy S22 Ultra is the headliner of the S22 series. It's the first S series phone to include Samsung's S Pen. Specifications are top-notch including 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 1 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage. In the camera department, a quad-camera setup is presented with two telephoto sensors.", "SG22U", 1299.99, "Samsung", "http://www.samsung.com", ["Smartphone", "Samsung", "Android", "Flagship", "Camera"], ["Electronics", "Mobile Phones", "Smartphones"], "03/01/2024", false);
const product2_id = product2._id;
const product3 = await productsData.create("Apple MacBook Pro 2023", "The Apple MacBook Pro 2023 redefines productivity and performance for professionals and enthusiasts alike. With its sleek design and powerful hardware, the MacBook Pro 2023 is built to handle the most demanding tasks with ease. Featuring the latest Intel processors and up to 32GB of RAM, this laptop delivers lightning-fast performance for multitasking, creative work, and multimedia tasks.The MacBook Pro 2023 boasts a stunning Retina display with True Tone technology, providing vibrant colors and crisp detail for an immersive viewing experience.Whether you're editing photos, designing graphics, or watching movies, the display delivers stunning visuals with remarkable accuracy. Equipped with Thunderbolt 4 ports, the MacBook Pro 2023 offers lightning - fast data transfer and connectivity options, allowing you to connect to a wide range of peripherals and accessories with ease.Additionally, the new Magic Keyboard provides a comfortable typing experience with improved key stability and responsiveness. With macOS, the MacBook Pro 2023 offers a seamless and intuitive user experience, empowering you to work more efficiently and creatively.Whether you're editing videos, coding software, or browsing the web, macOS provides powerful tools and features to help you get the job done. From professionals to creative enthusiasts, the Apple MacBook Pro 2023 sets a new standard for performance, versatility, and innovation.Whether you're at home, in the office, or on the go, this laptop is designed to meet your needs and exceed your expectations.",
    "MBP23", 2199.99, "Apple", "http://www.apple.com", ["Laptop", "Apple", "MacOS", "Productivity"], ["Electronics", "Computers & Tablets", "Laptops"], "01/15/2023", false);
const product3_id = product3._id;
const product4 = await productsData.create("Sony WH-1000XM5 Noise Cancelling Headphones", "The Sony WH-1000XM5 Noise Cancelling Headphones offer an immersive audio experience, blocking out ambient noise with industry-leading noise cancellation technology. Whether you're commuting, working, or relaxing, these headphones deliver crisp, clear sound with powerful bass and detailed highs. Equipped with adaptive sound control, they adjust the audio settings based on your environment for optimal performance. With up to 30 hours of battery life and quick charging capabilities, you can enjoy uninterrupted listening for extended periods. The ergonomic design ensures long-term comfort, while intuitive touch controls make it easy to manage your music and calls. Stay connected with Bluetooth and NFC pairing, and access voice assistants with just a touch. Whether you're a music enthusiast or a frequent traveler, the Sony WH-1000XM5 headphones provide an unparalleled listening experience wherever you go.", "WH1000XM5", 349.99, "Sony", "http://www.sonyElectronics.com", ["Headphones", "Sony", "Wireless", "Noise Cancelling"], ["Electronics", "Audio", "Headphones"], "05/20/2023", false);
const product4_id = product4._id;
const product5 = await productsData.create("Canon EOS R5 Mirrorless Camera", "The Canon EOS R5 Mirrorless Camera is a game-changer for professional photographers and videographers alike. Equipped with a powerful 45-megapixel full-frame CMOS sensor and the DIGIC X image processor, this camera delivers stunning image quality with exceptional detail and clarity. It offers advanced autofocus capabilities with Dual Pixel CMOS AF II, providing lightning-fast and precise focus tracking for both stills and video. Capable of shooting 8K video footage at 30p and 4K video at up to 120p, the EOS R5 redefines the boundaries of filmmaking.With in -body image stabilization(IBIS) and enhanced heat management, you can capture smooth, steady footage even in challenging shooting conditions.The EOS R5 also features a high - resolution electronic viewfinder and a vari - angle touchscreen LCD for intuitive control and composition. Built -in Wi - Fi and Bluetooth connectivity enable seamless sharing and remote camera control, while dual card slots support CFexpress and SD UHS - II memory cards for versatile storage options.Whether you're shooting portraits, landscapes, or high-action scenes, the Canon EOS R5 Mirrorless Camera empowers you to unleash your creativity and capture every moment with unparalleled precision and quality.", "EOSR5", 3899.99, "Canon", "http://www.canon.com", ["Camera", "Canon", "Mirrorless", "8K"], ["Electronics", "Cameras", "Mirrorless Cameras"], "07/10/2023", false);
const product5_id = product5._id;
const product6 = await productsData.create("Microsoft Xbox Series X", "Microsoft Xbox Series X is the pinnacle of gaming technology, delivering unparalleled performance and immersion. With its powerful custom-designed processor, cutting-edge graphics architecture, and lightning-fast SSD storage, the Xbox Series X sets a new standard for console gaming. Experience games in stunning 4K resolution at smooth 60 frames per second or even up to 120 frames per second for a buttery-smooth gaming experience. The innovative Xbox Velocity Architecture ensures reduced load times, faster game launches, and seamless transitions between worlds. Immerse yourself in rich, lifelike worlds with support for advanced ray tracing and true-to-life lighting effects. The Xbox Series X also doubles as a media powerhouse, offering a wide range of entertainment options including streaming services, Blu-ray playback, and compatibility with your favorite apps. With its sleek design and silent operation, the Xbox Series X is not just a gaming console but a centerpiece of your entertainment setup. Get ready to elevate your gaming experience to new heights with the Microsoft Xbox Series X.", "XSX", 499.99, "Microsoft", "http://www.microsoft.com", ["Gaming", "Xbox", "Console", "4K"], ["Electronics", "Gaming", "Consoles"], "11/15/2020", false);
const product6_id = product6._id;
const product7 = await productsData.create("Amazon Echo Dot (4th Gen)", "Introducing the Amazon Echo Dot (4th Gen), your compact and versatile smart speaker companion. With its sleek design and powerful capabilities, the Echo Dot brings the intelligence of Alexa into any room of your home. Use voice commands to play music, control smart home devices, set alarms, ask questions, and much more. The Echo Dot features improved sound quality, delivering crisp vocals and balanced bass for an immersive listening experience. Plus, with built-in privacy features like a microphone off button and automatic data deletion, you can have peace of mind knowing your privacy is protected. Elevate your smart home setup with the Amazon Echo Dot (4th Gen) today!", "ECHODOT4", 49.99, "Amazon", "http://www.amazon.com", ["Smart Speaker", "Amazon", "Alexa", "Home Automation"], ["Electronics", "Smart Home", "Smart Speakers"], "10/22/2020", false);
const product7_id = product7._id;
const product8 = await productsData.create("Nike Air Zoom Pegasus 38 Running Shoes", "The Nike Air Zoom Pegasus 38 continues to build on its legendary status with an updated design that offers responsive cushioning and a secure fit for your daily runs. With a breathable mesh upper and strategically placed overlays, this shoe provides targeted support where you need it most. The full-length Nike Zoom Air unit delivers a smooth and responsive ride, while the Cushlon foam midsole offers lightweight cushioning for added comfort mile after mile. Whether you're tackling long distances or short sprints, the Nike Air Zoom Pegasus 38 is ready to take on any challenge and help you achieve your running goals.", "PEG38", 129.99, "Nike", "http://www.nikeShoes.com", ["Shoes", "Nike", "Running", "Athletic"], ["Clothing & Accessories", "Shoes", "Running Shoes"], "04/05/2023", false);
const product8_id = product8._id;
const product9 = await productsData.create("Dyson V15 Detect Vacuum Cleaner", "The Dyson V15 Detect Vacuum Cleaner is the pinnacle of cleaning technology, offering unparalleled suction power and advanced features to ensure your home is spotless with minimal effort. Equipped with Dyson's innovative Detect technology, this vacuum can intelligently sense and capture microscopic dust particles and allergens, providing a cleaner living environment for you and your family. With its powerful V15 motor, this vacuum delivers unrivaled suction performance, effortlessly removing dirt and debris from carpets, hardwood floors, and other surfaces. The V15's high-torque cleaner head adapts to different floor types, ensuring optimal cleaning results every time. One of the standout features of the Dyson V15 Detect is its laser dust detection system, which illuminates hidden dust and debris that would otherwise go unnoticed. This allows you to target and remove even the smallest particles with precision, leaving your home cleaner than ever before. Designed with convenience in mind, the Dyson V15 Detect is cordless and lightweight, providing maximum maneuverability and flexibility as you clean. Its long-lasting battery ensures extended cleaning sessions without interruption, while the hygienic bin emptying mechanism makes disposing of dirt and debris quick and mess-free. Experience the ultimate cleaning performance with the Dyson V15 Detect Vacuum Cleaner and enjoy a healthier, happier home environment.",
    "V15", 699.99, "Dyson", "http://www.dyson.com", ["Vacuum Cleaner", "Dyson", "Cordless", "Detect Technology"], ["Home & Garden", "Cleaning", "Vacuum Cleaners"], "08/15/2023", false);
const product9_id = product9._id;
const product10 = await productsData.create("Fitbit Versa 4 Smartwatch", "The Fitbit Versa 4 Smartwatch is your ultimate companion for tracking fitness and staying connected. With its sleek design and advanced features, this smartwatch is designed to enhance your active lifestyle. Track your steps, heart rate, sleep patterns, and more with precision, thanks to Fitbit's cutting-edge technology. Whether you're hitting the gym, going for a run, or just tackling your daily tasks, the Versa 4 keeps you motivated and informed every step of the way. Stay connected on the go with smart notifications for calls, texts, and calendar alerts, right on your wrist.Plus, with built -in GPS, you can accurately track your outdoor activities without needing to carry your phone.And when it's time to unwind, use the Versa 4's guided breathing sessions and relaxation features to help you de - stress and find your balance. With customizable watch faces and interchangeable bands, you can personalize your Versa 4 to suit your style and mood.And with up to 7 days of battery life on a single charge, you can wear it day and night without missing a beat. Experience the next level of fitness tracking and smartwatch technology with the Fitbit Versa 4. Whether you're a fitness enthusiast, a busy professional, or just someone who wants to stay connected and informed, this smartwatch has everything you need to live your best life.", "Versa4", 199.99, "Fitbit", "http://www.fitbit.com", ["Smartwatch", "Fitbit", "Fitness Tracker", "Health"], ["Electronics", "Wearable Technology", "Smartwatches"], "02/28/2023", false);
const product10_id = product10._id;


const p1_review1 = await reviewsData.createReview(product1_id, "Great Picture Quality, But Expensive",
    "Budget Shopper",
    "While the picture quality of this LG OLED TV is undeniably great, I found the price to be a bit steep. It's a significant investment, and I'm not sure if the picture quality justifies the high cost.",
    3.5);
const p1_review2 = await reviewsData.createReview(product1_id, "Disappointing Sound Quality",
    "Audio Enthusiast",
    "I was expecting better sound quality from this TV, especially considering its high price tag. The audio lacks depth and clarity, and I found myself needing to use external speakers to get a more immersive experience.",
    2.5);
const p1_review3 = await reviewsData.createReview(product1_id, "Impressive Features, Worth the Investment",
    "Tech Geek",
    "I'm thoroughly impressed by the features of this LG OLED TV. The AI-powered picture enhancement, smart features, and gaming capabilities make it worth the investment. It's a versatile TV that offers an exceptional viewing experience.",
    4.5);
const p1_review4 = await reviewsData.createReview(product1_id, "Difficult to Set Up",
    "Tech Challenged",
    "I struggled with setting up this TV initially. The instructions weren't very clear, and I had trouble connecting it to my other devices. Once I got it up and running, though, the picture quality was impressive.",
    3.0);
const p1_review5 = await reviewsData.createReview(product1_id, "Beautiful Design, But Not User-Friendly",
    "Interior Designer",
    "The design of this LG OLED TV is beautiful, with its slim bezels and sleek profile. However, I found the user interface to be clunky and unintuitive. Navigating through menus and settings was more complicated than it should be.",
    3.8);

const p2_review1 = await reviewsData.createReview(product2_id, "Amazing Camera, Average Battery Life",
    "Photography Enthusiast",
    "The camera quality of the Samsung Galaxy S22 Ultra is truly amazing, capturing stunning photos with incredible detail. However, I was disappointed by the battery life, which didn't last as long as I expected, especially with heavy camera usage.",
    4.0);
const p2_review2 = await reviewsData.createReview(product2_id, "Excellent Performance, But Overpriced",
    "Bargain Hunter",
    "The performance of the Samsung Galaxy S22 Ultra is top-notch, with its fast processor and smooth multitasking capabilities. However, I feel that it's overpriced compared to other flagship smartphones on the market.",
    3.7);
const p2_review3 = await reviewsData.createReview(product2_id, "Sleek Design, But Fragile Build",
    "Accident Prone",
    "I love the sleek design of the Samsung Galaxy S22 Ultra, but I found the build quality to be lacking. The glass back is prone to scratches and cracks, and I worry about its durability in the long run.",
    3.2);
const p2_review4 = await reviewsData.createReview(product2_id, "Great Value for Money",
    "Smart Shopper",
    "Despite its high price tag, I believe the Samsung Galaxy S22 Ultra offers great value for money. The combination of its premium design, powerful performance, and advanced camera capabilities make it worth the investment.",
    4.3);
const p2_review5 = await reviewsData.createReview(product2_id, "Decent Phone, But Not Revolutionary",
    "Tech Enthusiast",
    "While the Samsung Galaxy S22 Ultra is undeniably a decent phone, I didn't find it to be as revolutionary as some of its predecessors. The improvements are incremental rather than groundbreaking, and I expected more innovation from Samsung.",
    3.9);

const p3_review1 = await reviewsData.createReview(product3_id, "Exceptional Performance, But Pricey",
    "Professional User",
    "The performance of the Apple MacBook Pro 2023 is exceptional, handling demanding tasks with ease. However, the high price may be a barrier for some buyers, especially considering the availability of cheaper alternatives with similar specs.",
    4.2);
const p3_review2 = await reviewsData.createReview(product3_id, "Beautiful Display, But Limited Ports",
    "Multimedia Creator",
    "The Retina display on the MacBook Pro 2023 is beautiful, with vibrant colors and sharp details. However, I was disappointed by the limited port selection, which made it difficult to connect all my peripherals without using dongles.",
    3.6);
const p3_review3 = await reviewsData.createReview(product3_id, "Great Build Quality, But Heavy",
    "Frequent Traveler",
    "The build quality of the MacBook Pro 2023 is excellent, with its aluminum chassis feeling sturdy and durable. However, the weight of the laptop makes it less than ideal for frequent travelers like myself, who value portability.",
    3.9);
const p3_review4 = await reviewsData.createReview(product3_id, "Fantastic Keyboard, But Pricey Accessories",
    "Typing Enthusiast",
    "I love the feel of the keyboard on the MacBook Pro 2023, with its tactile feedback and comfortable key travel. However, I was disappointed by the high price of accessories such as the Magic Mouse and Magic Trackpad, which should have been included.",
    4.1);
const p3_review5 = await reviewsData.createReview(product3_id, "Smooth Performance, But Heating Issues",
    "Heat Sensitive",
    "While the MacBook Pro 2023 delivers smooth performance overall, I experienced heating issues during heavy usage, particularly when editing videos or running multiple virtual machines. It's a minor inconvenience, but worth noting.",
    3.8);

const p4_review1 = await reviewsData.createReview(product4_id, "Excellent Noise Cancelling, But Uncomfortable",
    "Comfort Conscious",
    "The noise cancelling capabilities of the Sony WH-1000XM5 are excellent, blocking out background noise effectively. However, I found the ear cups to be uncomfortable for extended wear, especially for those with larger ears.",
    3.7);
const p4_review2 = await reviewsData.createReview(product4_id, "Superb Sound Quality, But Pricey",
    "Audiophile",
    "As an audiophile, I was blown away by the sound quality of these headphones. The bass is deep and punchy, the mids are clear and detailed, and the highs are crisp and well-defined. However, the high price may deter budget-conscious buyers.",
    4.5);
const p4_review3 = await reviewsData.createReview(product4_id, "Sleek Design, But Fragile Build",
    "Gentle Handler",
    "I love the sleek design of the Sony WH-1000XM5, but I found the build quality to be lacking. The plastic construction feels flimsy, and I worry about its durability over time, especially with frequent use.",
    3.4);
const p4_review4 = await reviewsData.createReview(product4_id, "Long Battery Life, But Bulky Design",
    "OnTheGo",
    "The battery life of the Sony WH-1000XM5 is impressive, lasting me through long flights and commutes without needing to recharge. However, the bulky design and lack of folding hinges make them less portable than other options on the market.",
    4.0);
const p4_review5 = await reviewsData.createReview(product4_id, "Great Noise Cancelling, But Limited Customization",
    "Tech Savvy",
    "The noise cancelling performance of these headphones is top-notch, creating a quiet oasis even in noisy environments. However, I was disappointed by the limited customization options in the companion app, which didn't allow me to fine-tune the sound to my preferences.",
    3.9);

const p5_review1 = await reviewsData.createReview(product5_id, "Outstanding Image Quality, But Heavy",
    "Photography Pro",
    "The image quality of the Canon EOS R5 is outstanding, capturing stunning photos with rich colors and sharp details. However, the weight of the camera body can be a burden during long photo shoots or travel.",
    4.4);
const p5_review2 = await reviewsData.createReview(product5_id, "Versatile and Reliable, But Expensive Lenses",
    "LensLover",
    "The Canon EOS R5 is a versatile and reliable camera that excels in various shooting scenarios. However, I was disappointed by the high cost of RF lenses, which are necessary to fully unlock the camera's potential.",
    4.1);
const p5_review3 = await reviewsData.createReview(product5_id, "Great for Videography, But Limited Battery Life",
    "Videography Pro",
    "As a videographer, I appreciate the advanced video features of the Canon EOS R5, including 8K recording and in-body image stabilization. However, the battery life is a concern, especially when shooting in high-resolution formats.",
    4.3);
const p5_review4 = await reviewsData.createReview(product5_id, "Easy to Use, But No Dual Card Slots",
    "Backup Enthusiast",
    "The Canon EOS R5 is easy to use, with intuitive controls and a user-friendly interface. However, the lack of dual card slots is a drawback for professional photographers who require redundancy and backup storage for their photos.",
    3.8);
const p5_review5 = await reviewsData.createReview(product5_id, "Excellent Low-light Performance, But Pricey Accessories",
    "Night Photographer",
    "I'm impressed by the low-light performance of the Canon EOS R5, which produces clean and noise-free images even in challenging lighting conditions. However, the high price of RF lenses and accessories can make it a costly investment.",
    4.2);

const p6_review1 = await reviewsData.createReview(product6_id, "Exceptional Graphics, But Limited Exclusives",
    "Gamer123",
    "The graphics of the Xbox Series X are exceptional, delivering stunning visuals with smooth frame rates. However, I was disappointed by the limited selection of exclusive games, which didn't fully leverage the console's capabilities.",
    4.3);
const p6_review2 = await reviewsData.createReview(product6_id, "Fast Loading Times, But Noisy Fan",
    "Silent Gamer",
    "The loading times of the Xbox Series X are impressively fast, getting me into games and apps quickly. However, the fan can be noisy during intense gaming sessions, which can be distracting.",
    3.9);
const p6_review3 = await reviewsData.createReview(product6_id, "Sleek Design, But Bulky Size",
    "Space Conscious",
    "The design of the Xbox Series X is sleek and modern, but I found the console to be larger and bulkier than expected. It takes up a significant amount of space in my entertainment center, which may be a concern for those with limited space.",
    4.0);
const p6_review4 = await reviewsData.createReview(product6_id, "Great Controller, But Connectivity Issues",
    "Controller Pro",
    "The Xbox Series X controller is great, with its ergonomic design and responsive buttons. However, I experienced occasional connectivity issues, where the controller would disconnect from the console intermittently.",
    3.7);
const p6_review5 = await reviewsData.createReview(product6_id, "Impressive Performance, But Lack of Innovation",
    "Tech Enthusiast",
    "The performance of the Xbox Series X is impressive, with fast load times and smooth gameplay. However, I was hoping for more innovation in terms of features and gameplay experiences, rather than just a bump in specs from the previous generation.",
    4.2);

const p7_review1 = await reviewsData.createReview(product7_id, "Convenient Smart Assistant, But Mediocre Sound",
    "Tech Savvy",
    "The Amazon Echo Dot is a convenient smart assistant that makes it easy to control smart home devices and access information hands-free. However, I found the sound quality to be mediocre, lacking depth and clarity.",
    3.5);
const p7_review2 = await reviewsData.createReview(product7_id, "Affordable Price, But Limited Features",
    "Budget Buyer",
    "The Echo Dot is an affordable way to add Alexa to any room in your home, but I found the features to be somewhat limited compared to other smart speakers on the market. It's a basic entry-level option for those on a budget.",
    3.8);
const p7_review3 = await reviewsData.createReview(product7_id, "Easy Setup, But Unreliable Connectivity",
    "Connection Woes",
    "Setting up the Echo Dot was a breeze, thanks to the user-friendly app. However, I experienced unreliable connectivity issues, where the device would frequently drop its Wi-Fi connection and require manual reconnection.",
    3.2);
const p7_review4 = await reviewsData.createReview(product7_id, "Good Sound Quality, But Limited Voice Commands",
    "Music Lover",
    "The sound quality of the Echo Dot is surprisingly good for its size, with clear vocals and decent bass. However, I was disappointed by the limited range of voice commands supported by Alexa, which made it less useful for controlling my smart home devices.",
    4.0);
const p7_review5 = await reviewsData.createReview(product7_id, "Compact Design, But Lack of Customization",
    "Design Enthusiast",
    "I love the compact design of the Echo Dot, which fits perfectly on my bedside table. However, I wish there were more options for customization, such as interchangeable covers or accessories to match different decor styles.",
    3.9);

const p8_review1 = await reviewsData.createReview(product8_id, "Comfortable Fit, But Durability Concerns",
    "Runner Girl",
    "The Nike Air Zoom Pegasus 38 offers a comfortable fit with ample cushioning and support. However, I have concerns about the durability of the shoes, as the outsole started to show signs of wear after just a few runs.",
    4.0);
const p8_review2 = await reviewsData.createReview(product8_id, "Great for Long Runs, But Narrow Toe Box",
    "Marathon Man",
    "As a long-distance runner, I appreciate the cushioning and responsiveness of the Nike Air Zoom Pegasus 38. However, I found the toe box to be too narrow, causing discomfort and rubbing on longer runs.",
    3.8);
const p8_review3 = await reviewsData.createReview(product8_id, "Stylish Design, But Limited Color Options",
    "Fashion Forward",
    "The Nike Air Zoom Pegasus 38 features a stylish design that looks great both on and off the track. However, I wish there were more color options available, as the current selection is somewhat limited.",
    4.2);
const p8_review4 = await reviewsData.createReview(product8_id, "Versatile Performance, But Sizing Issues",
    "Size Matters",
    "The Nike Air Zoom Pegasus 38 offers versatile performance, suitable for both casual runs and speed workouts. However, I found the sizing to be inconsistent, with the shoes running slightly larger than expected.",
    3.5);
const p8_review5 = await reviewsData.createReview(product8_id, "Good Value for Money, But Average Traction",
    "Trail Blazer",
    "The Nike Air Zoom Pegasus 38 offers good value for money, with its combination of comfort, performance, and durability. However, I was disappointed by the average traction on wet or slippery surfaces, which affected my confidence during trail runs.",
    4.1);

const p9_review1 = await reviewsData.createReview(product9_id, "Powerful Suction, But Bulky Design",
    "Compact Cleaner",
    "The Dyson V15 Detect offers powerful suction that effortlessly lifts dirt and debris from carpets and hard floors. However, I found the vacuum to be bulky and heavy, making it difficult to maneuver around furniture and tight spaces.",
    4.0);
const p9_review2 = await reviewsData.createReview(product9_id, "Innovative Features, But Short Battery Life",
    "Battery Drain",
    "I'm impressed by the innovative features of the Dyson V15 Detect, such as the laser detect technology and LCD screen. However, I was disappointed by the short battery life, which required frequent recharging during longer cleaning sessions.",
    3.6);
const p9_review3 = await reviewsData.createReview(product9_id, "Easy to Use, But Pricey Accessories",
    "Cost Conscious",
    "The Dyson V15 Detect is easy to use, with intuitive controls and a user-friendly design. However, I found the accessories, such as the additional brush heads and cleaning tools, to be overpriced for what they offer.",
    4.3);
const p9_review4 = await reviewsData.createReview(product9_id, "Great for Pet Owners, But Loud Operation",
    "Pet Parent",
    "As a pet owner, I appreciate how effectively the Dyson V15 Detect removes pet hair and dander from my home. However, the vacuum can be quite loud during operation, which may be unsettling for pets or disturb household members.",
    3.9);
const p9_review5 = await reviewsData.createReview(product9_id, "Excellent Filtration, But Limited Reach",
    "Allergy Sufferer",
    "The Dyson V15 Detect features excellent filtration that captures allergens and keeps the air clean and fresh. However, I found the vacuum's reach to be somewhat limited, especially when cleaning high or hard-to-reach areas.",
    4.2);

const p10_review1 = await reviewsData.createReview(product10_id, "Accurate Fitness Tracking, But Unreliable Connectivity",
    "Fitness Fanatic",
    "The Fitbit Versa 4 provides accurate fitness tracking data, including steps taken, calories burned, and heart rate monitoring. However, I experienced frequent connectivity issues with the companion app, which made it difficult to sync data reliably.",
    3.7);
const p10_review2 = await reviewsData.createReview(product10_id, "Stylish Design, But Limited App Selection",
    "Fashionable Fitbit",
    "The Fitbit Versa 4 features a stylish design that looks great on my wrist, whether I'm working out or going about my daily activities. However, I was disappointed by the limited selection of third-party apps available for download, which restricted its functionality.",
    4.0);
const p10_review3 = await reviewsData.createReview(product10_id, "Long Battery Life, But Slow Interface",
    "Battery Life",
    "The battery life of the Fitbit Versa 4 is impressive, lasting several days on a single charge. However, I found the interface to be slow and laggy at times, especially when navigating through menus or opening apps.",
    3.8);
const p10_review4 = await reviewsData.createReview(product10_id, "Convenient Smart Features, But Inaccurate Tracking",
    "Tech Enthusiast",
    "The Fitbit Versa 4 offers convenient smart features, such as notifications, music control, and weather updates, right on my wrist. However, I noticed discrepancies in the fitness tracking data compared to other wearable devices, which affected its reliability.",
    4.1);
const p10_review5 = await reviewsData.createReview(product10_id, "Comfortable to Wear, But Limited Customization",
    "Customization Fanatic",
    "The Fitbit Versa 4 is comfortable to wear, with its lightweight design and adjustable strap. However, I wish there were more options for customization, such as interchangeable bands or watch faces, to personalize the look and feel of the smartwatch.",
    3.9);


console.log('Done seeding database');

await closeConnection();