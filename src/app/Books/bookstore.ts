export class bookStore{
    data(){
        if(localStorage.getItem('books') === null || localStorage.getItem('books')==undefined){
            console.log("Initialising Books List...");
			var books=[{
                	Title:'Harry Potter',
	                Author:'J.K Rowling',
	                ISBN:1,
	                Publication_Date:'unkown',
	                Publisher:'unkmown',
                    Price:200,
	                Genre :'Adventure',
	                Format :'pdf'
            },
            {
                	Title:'Mortal Instrument',
	                Author:'unknown',
	                ISBN:2,
	                Publication_Date:'---',
	                Publisher:'---',
                    Price:300,
	                Genre :'Fantasy',
	                Format :'pdf'
            },
            {
                	Title:'Percy Jackson',
	                Author:'---',
	                ISBN:3,
	                Publication_Date:'----',
	                Publisher:'----',
                    Price:200,
	                Genre :'Adventure',
	                Format :'pdf'
            },
            {
                	Title:'Clockwork Princess',
	                Author:'---',
	                ISBN:4,
	                Publication_Date:'----',
	                Publisher:'---',
                    Price:300,
	                Genre :'Horror',
	                Format :'pdf'
            },
            {
                	Title:'Selection series',
	                Author:'----',
	                ISBN:5,
	                Publication_Date:'----',
	                Publisher:'----',
                    Price:500,
	                Genre :'Horror',
	                Format :'pdf'
            },
            {
                	Title:'Lost Symbol',
	                Author:'Dan Brown',
	                ISBN:6,
	                Publication_Date:'-----',
	                Publisher:'---',
                    Price:400,
	                Genre :'Mystery',
	                Format :'pdf'
            }
            
            ];
			localStorage.setItem('books',JSON.stringify(books));

        }
		else{
			console.log("load books");
		}
    }
    
}