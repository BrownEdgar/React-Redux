//////////////////////////////////////////////////////////////
// ԱՅՍ ՖԱՅԼՈՒՄ ՀԱՎԱՔՎԱԾ ԵՆ ԲՈԼՈՐ "async" ՖՈՒՆԿՑԻԱՆԵՐԸ
// * Օրինակ 1վրկ․ հետո վերադարձվում է 3-րդ սերյալը Promise-ից, որը հետո կպահվի Store-ում
//////////////////////////////////////////////////////////////
export function getASYNCSerials() {
	 return new Promise((resolve) => {
	  setTimeout(() => {
		  resolve({
			  id: 5,
			  title: "async Serials",
			  ratings: "9.8",
			  actors: ['Այս սերիալը գալիս է հեռու տեղից 1վարկյանում'],
			  poster: "https://wallpapercave.com/wp/wp3256631.jpg"
		  });
	  }, 1000); 
	});
}