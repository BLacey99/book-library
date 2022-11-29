

let myLibrary = [];


function Book(name, author, pagecount, status) {
  const bookObject = [];
  
  bookObject.name = name;
  bookObject.author = author;
  bookObject.pagecount = pagecount;
  bookObject.status = status

  return bookObject;
}

addBook=(bookObject)=> {
  myLibrary.push(bookObject);
};


const container = document.getElementById("container");
//Calls back to printInfo. Each item in myLibrary is a bookObject. Passed to printInfo parameter as an argument. Performs printInfo and returns.
displayLibrary=()=> {
  myLibrary.forEach(printInfo);
};

printInfo=(bookObject)=>{
  console.log(Object.values(bookObject));

  var removeBookBtn = document.createElement('button');
  removeBookBtn.innerHTML=("REMOVE BOOK");
  
  removeBookBtn.onclick = removeBook=(bookObject)=> {
    myLibrary.pop(bookObject);
    console.log(
      `\nRemoved ${bookObject.name}\n---------------------------------------`
    );
    console.log(myLibrary);
    
  };

 // const bookDestructured = (Object.values(bookObject));
  var elemDiv = document.createElement('div');

  var bookTitle = document.createElement('h2');
  bookTitle.innerHTML = bookObject.name;


  var bookAuthor = document.createElement('h4');
  bookAuthor.innerHTML =bookObject.author;

  var bookPageCount = document.createElement('p');
  bookPageCount.innerHTML = bookObject.pagecount;

  var bookStatus = document.createElement('p');
  bookStatus.innerHTML = bookObject.status;


  elemDiv.append(bookTitle,bookAuthor, bookPageCount, bookStatus, removeBookBtn);


  
  container.appendChild(elemDiv);
  removeBookBtn.style.cssText='width:50%; height:5%; margin-left:auto; margin-right:auto;margin-top:45%;';
  elemDiv.style.cssText='border:1px red solid;background-color:green;width:250px; height:400px;text-align:center;display:flex;flex-direction:column;';
  container.style.cssText='gap:2px; border:3px black solid;height:100%;width:80%;padding:10px;display:flex;flex-direction:row;justify-content:center;margin-left:auto;margin-right:auto;flex-wrap:wrap;';
  

};




const testBook = new Book(
  "BookOne",
  "Jane Doe",
  "350",
  "Read: No"
);


const testTwo = new Book(
  "BookTwo",
  "None Auth",
  "312",
  "Read: Yes"
);



addBook(testBook);
addBook(testTwo);
addBook(testTwo);
addBook(testTwo);
addBook(testBook);
displayLibrary();


