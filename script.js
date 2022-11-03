const myBtn = document.getElementById("cantik");
const myBtn2 = document.getElementById("form");
function halaman(){
    var styles = `* * {
        text-decoration: none;
        margin: 0px;
        padding: 0px;
    }
    body{
        background-image: url(bgg.jpeg);
        background-repeat:no-repeat;
        background-position: center;
        background-size:cover;
        background-attachment: fixed;
        height:100px;
        max-width:100%;
        max-height: 100%;
        align-items:center
    }
    .link{
        background-color: #d8cece;
        border: 6px solid #aebabc;  
        border-radius: 89px;  
        font-size: 27px;
        font-family: cooper;
        margin-top: 20px;
        margin-bottom: 20px;
    
    }
    a{
        padding : 10px;
    }
    .wrapper {
        width: 1100px;
        margin: auto;
        position: relative;
    }
    .step1{
        display: flex;
        width: 100%;
        font-family: 'Gill Sans', 'Gill Sans MT', sans-serif;
        padding-left: 20px;
        min-height: 40vh;
    }
    .step1 .text h1{
        text-align: center;
        background: #a4dfe7;
        border: 10px solid #314d35;  
        margin-right: 350px;
        color: black;
        border-radius: 89px;  
        margin-left: 10px;
        
    }
    .step1 .text p{
        font-size: 20px;
        background: #a4dfe7;
        text-shadow: 4px 3px 5px rebeccapurple;
        word-spacing: 20px;
        padding: 10px;
        border-radius: 30px;
        margin-left: 10px;
    }
    .part2{
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', sans-serif;
        padding-left: 20px;
    }
    .part2 h2{
        background: #a4dfe7;
        border: 10px solid #314d35;  
        margin-right: 1050px;
        color: black;
        border-radius: 60px;
        margin-bottom: 10px;
    }
    .part2 p{
        font-size: 20px;
        background: #a4dfe7;
        text-shadow: 4px 3px 5px rebeccapurple;
        word-spacing: 20px;
        padding: 10px;
        border-radius: 30px;
        margin-bottom: 30px;
    }
    .video {
        background-color: rgba(0, 0, 0, 0.577);
        margin-right: 740px;
        border-radius: 40px;
    }
    .video .ket{
        font-size: 20px;
        background: #a4dfe7;
        text-shadow: 4px 3px 5px rebeccapurple;
        word-spacing: 20px;
        padding: 10px;
        border-radius: 30px;
        margin-bottom: 30px;
    }
    .part3{
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', sans-serif;
        padding-left: 20px;
    }
    .part3 h2{
        background: #a4dfe7;
        border: 10px solid #314d35;  
        margin-right: 900px;
        color: black;
        border-radius: 60px;
        margin-bottom: 20px;
    }
    .part3 thead{
        background-color: #3fcfe2;
    }
    .part3 tbody{
        background-color: #a4dfe7;
    }
    .part4 {
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', sans-serif;
        padding-left: 20px;
        margin-top: 20px;
    
    }
    .part4 h2{
        background: #a4dfe7;
        border: 10px solid #314d35;  
        margin-right: 1050px;
        color: black;
        border-radius: 60px;
        margin-bottom: 20px;
    }
    .part4 table{
        background-color: #a4dfe7cc;
        border-radius: 10px;
    }
    .part5 {
        font-size: large;
        font-family: 'Gill Sans', 'Gill Sans MT', sans-serif;
        padding-left: 20px;
        margin-top: 20px;
    }
    .part5 h2{
        background: #a4dfe7;
        border: 10px solid #314d35;  
        margin-right: 1000px;
        color: black;
        border-radius: 60px;
        margin-bottom: 20px;
    }
    .part5 ul{
        background-color: #a4dfe7;
        adding: 10px;
        border-radius: 10px;
        margin-right: 700px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .part5 div{
        background-color: #a4dfe7;
        padding: 10px;
        border-radius: 20px;
    
    }
    .button {
        background-color: #03A9F4;
        padding: 1px;
        border: 4px solid #00BCD4;
        border-radius: 40px;
        text-align: center;
        margin-top: 30px;
        margin-left: 150px;
        margin-right: 150px;
        font-size: 20px;
        font-style: italic;
        font-family: cooper;
        margin-bottom: 40px;
    }
    
    `;

    var styleSheet = document.querySelector('style');
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
}

function forms(){
    // Membuat virtual dom.
    let divElement = document.createElement('div');
    // divElement.classList.add('container');

    // Remove child element.

    // Form element.
    let formElement = `
    <form action="#">
        <div>
        <p>Sudah menonton video saya?</p>
        <input type="radio" name="sudah" id="sudah" />
        <label for="Sudah">Sudah</label>
        <br />
        <input type="radio" name="Belum" id="belum" />
        <label for="Belum">Belum</label>
        </div>
        <br />
        <div>
        <p>Jika anda sudah menonton video saya, apa yang anda pikiran tentang saya?</p>
        <input type="checkbox" name="Option 1" id="Option 1" />
        <label for="Option 1">Terlihat Membosankan</label><br />
        <input type="checkbox" name="Option 2" id="Option 2" />
        <label for="Option 2">Cukup Menarik</label><br />
        <input type="checkbox" name="Option 3" id="Option 3" />
        <label for="Option 1">Seperti manusia pada umumnya</label>
        </div>
        <br>
        <div>
        <input type="submit" value="Kirim" />
        </div>
    </form>`;
    divElement.insertAdjacentHTML("beforeend", formElement);

    // Tempelkan ke halaman.
    const formWrapper = document.querySelector('.form-wrapper')
    formWrapper.appendChild(divElement);
}

myBtn.addEventListener("click", halaman);
myBtn2.addEventListener("click", forms);