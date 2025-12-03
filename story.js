
let page = 0;
const max = 3;	
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const chap = document.getElementById("chap");
const story = document.getElementById("story").getElementsByTagName("div")[0].id;

getStoryPage();    
next.addEventListener("click", () => {
	if (page + 1 < max) {
		page++;
		getStoryPage();

				
		chap.textContent = "Chapter " + (page + 1);
	}
});

prev.addEventListener("click", () => {
	if (page > 0) {
		page--;
		getStoryPage();
			
		chap.textContent = "Chapter " + (page + 1);	
	}
});

function getStoryPage() {
	fetch(story + (page + 1) + ".txt")
			.then(response => {
				if (!response.ok) throw new Error("File not found");
				return response.text();
			})
			.then(text => {
				document.getElementById(story).innerHTML = text;			
			})
			.catch(err => {
				document.getElementById(story).textContent = "Error: " + err.message;
			});
}
