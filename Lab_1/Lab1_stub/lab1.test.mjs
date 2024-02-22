import * as lab1 from './lab1.mjs';

// //TODO: Write and call each function in lab1.js 5 times each, passing in different input
console.log("questionOne");
console.log(lab1.questionOne(7)); // returns and then outputs: 13

console.log(lab1.questionOne(10)); // returns and then outputs: 55 

console.log(lab1.questionOne(4)); // returns and then outputs: 3

console.log(lab1.questionOne(-2)); 

console.log(lab1.questionOne(45)); 


console.log("questionTwo"); 
console.log(lab1.questionTwo([5, 10, 9, 2, 7, 9, 1013]));

console.log(lab1.questionTwo([])); 
// returns and then outputs: {}

console.log(lab1.questionTwo()); 
// returns and then outputs: {}

console.log(lab1.questionTwo([93, 357, 251, 677, 655, 7, 844, 604, 558, 751, 320, 148, 889, 16, 590, 825, 10, 383, 389, 374, 851, 233, 649, 622, 584, 849, 244, 700, 358, 5, 387, 529, 132, 134, 894, 615, 800, 506, 483, 792, 278, 947, 752, 658, 955, 229, 290, 462, 595, 226, 109, 688, 891, 890, 384, 203, 555, 550, 936, 533, 727, 78, 241, 436, 606, 970, 56, 292, 565, 929, 528, 18, 958, 976, 61, 294, 185, 514, 122, 854, 297, 428, 91, 617, 645, 532, 972, 536, 667, 820, 68, 470, 50, 39, 965, 942, 193, 883, 337, 626]));

console.log(lab1.questionTwo([196037, 557464, 423935, 224288, 959392, 740836, 771396, 686313, 960492, 872250, 715843, 150755, 684743, 78609, 182354, 299191, 123395, 204166, 828313, 980074, 508514, 500560, 767073, 84981, 284349, 271257, 914094, 498108, 137226, 203879, 66498, 522359, 651564, 73112, 537152, 33502, 77850, 741803, 492254, 160168, 842747, 889885, 502433, 745188, 628146, 276554, 551175, 858692, 666590, 6856, 496841, 400640, 619226, 984760, 902708, 426163, 368612, 746847, 69458, 282169, 969617, 670159, 759881, 945184, 65756, 68439, 358417, 997822, 694167, 305523, 150918, 196693, 575901, 696289, 88540, 586103, 668603, 288308, 907156, 13992, 739797, 928711, 977319, 913203, 248080, 267353, 551993, 136272, 504869, 934792, 85636, 324383, 97650, 487687, 393730, 656778, 694258, 392304, 211812, 550338]));

console.log("questionThree");
console.log(lab1.questionThree("The quick brown fox jumps over the lazy dog.")); 
// returns and then outputs: {consonants: 24, vowels: 11, numbers: 0, spaces: 8, punctuation: 1, specialCharacters: 0}

console.log(lab1.questionThree("One day, the kids from the neighborhood carried my mother's groceries all the way home. You know why? It was out of respect."));
// returns and then outputs: {consonants: 61, vowels: 36, numbers: 0, spaces: 22, punctuation: 5, specialCharacters: 0}

console.log(lab1.questionThree("CS 546 is going to be fun & I'm looking forward to working with you all this semester!!" )); 
// returns and then outputs: {consonants: 40, vowels: 23, numbers: 3, spaces: 17, punctuation: 3, specialCharacters: 1}

console.log(lab1.questionThree("")); 
// returns and then outputs: {consonants: 0, vowels: 0, numbers:0, spaces: 0, punctuation: 0, specialCharacters: 0}

let str1 = "In the 21st century, technological advancements have revolutionized every aspect of our lives. From smartphones and social media to artificial intelligence and blockchain, the world is interconnected in ways unimaginable just a few decades ago. The rapid pace of change brings both excitement and challenges. Cybersecurity has become a paramount concern, with hackers constantly probing for vulnerabilities. Organizations must adapt and implement robust measures to safeguard sensitive data. The proliferation of data-driven decision-making is transforming industries, enhancing efficiency, and unlocking new possibilities. However, ethical considerations surrounding privacy and security are essential in this digital era."
let str2 ="The rise of automation and machine learning is reshaping the job market. Traditional roles are evolving, and new skill sets are in demand. Individuals need to cultivate a diverse skill portfolio to thrive in this dynamic landscape. Coding, data analysis, and critical thinking are increasingly valuable assets. Continuous learning is no longer a luxury but a necessity. As we navigate the complexities of the digital age, collaboration and adaptability become key drivers of success. The fusion of human intelligence with cutting-edge technology holds the promise of solving global challenges and creating a more sustainable future."
let str3 = "Exploring the cosmos has been a fundamental human endeavor since the dawn of civilization. Today, space agencies and private enterprises are pushing the boundaries of space exploration. Mars, with its tantalizing potential for past or present life, is a focal point of scientific curiosity. Robotic rovers traverse the Martian surface, conducting experiments and collecting valuable data. The dream of human colonization of Mars is no longer confined to the realm of science fiction. Ambitious plans and innovative technologies are being developed to make this vision a reality. Space tourism is also on the horizon, allowing civilians to experience the wonders of space firsthand."
let str4 = "Email : mmayekar@stevens.edu @#&*$!%_+^?~`/|{}[]=;:'<>,.;,Back on Earth, environmental sustainability is a critical concern. Climate change, deforestation, and pollution pose significant threats to our planet. The urgency to adopt eco-friendly practices and renewable energy sources is greater than ever. Governments, businesses, and individuals must collaborate to address these challenges and protect the delicate balance of our ecosystems. Awareness and education play pivotal roles in fostering a collective responsibility towards the environment. As we gaze at the stars and ponder the mysteries of the universe, let us also strive to preserve and cherish the precious blue planet we call home."
console.log(lab1.questionThree(str1+str2+str3+str4));

console.log("questionFour");
console.log(lab1.questionFour([1, 1, 1, 1, 1, 1])); 
//returns and then outputs: [1]

console.log(lab1.questionFour([1, '1', 1, '1', 2, 3, 'a', 'b', 3, '1'])); 

console.log(lab1.questionFour([2207, 'fig', 1050, 947, 4895, 6626, 'grape', 'fig', 'lemon', 'apple', 'apple', 'banana', 364, 'lemon', 'honeydew', 2023, 5762, 'apple', 'kiwi', 3575, 4507, 1606, 2845, 4552, 'elderberry', 'cherry', 'cherry', 9874, 'honeydew', 1692, 'apple', 6775, 'honeydew', 'grape', 'apple', 'lemon', 4691, 9670, 'lemon', 'cherry', 2925, 6534, 2036, 3357, 2858, 2684, 'lemon', 'cherry', 883, 3370, 1771, 5916, 'honeydew', 5482, 'cherry', 'elderberry', 'fig', 5394, 1584, 329, 'lemon', 'banana', 4369, 8765, 'honeydew', 1923, 2458, 9736, 3410, 4146, 'banana', 'date', 4982, 'elderberry', 'elderberry', 8860, 364, 'banana', 7014, 'fig', 'date', 6211, 'honeydew', 3945, 'honeydew', 'apple', 'honeydew', 7382, 5523, 'elderberry', 4474, 'fig', 'honeydew', 5713, 'elderberry', 'banana', 'grape', 6148, 'honeydew', 'banana']));

console.log(lab1.questionFour([]));

console.log(lab1.questionFour([5, 6, 'cherry', 3, 5, 'apple', 3, 'cherry', 'cherry', 7, 'banana', 9, 'cherry', 'apple', 6, 'banana', 3, 'apple', 10, 9, 7, 1, 6, 'cherry', 5, 'banana', 9, 'apple', 'cherry', 1, 7, 'banana', 'apple', 'banana', 'banana', 6, 'apple', 6, 6, 'banana', 'cherry', 3, 'banana', 'cherry', 'apple', 7, 2, 8, 'banana', 3, 1, 10, 'apple', 10, 8, 'apple', 3, 'apple', 'apple', 'banana', 'cherry', 10, 'cherry', 'apple', 'banana', 'cherry', 5, 7, 2, 1, 'cherry', 'apple', 'cherry', 'apple', 'banana', 'apple', 'banana', 'cherry', 2, 'banana', 2, 3, 'apple', 'cherry', 6, 1, 'cherry', 7, 'banana', 'banana', 10, 5, 4, 'cherry', 7, 8, 9, 7, 'banana', 7]));


