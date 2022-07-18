let arabic=document.getElementById('arabic');
let English=document.getElementById('English');
let test1_p=document.getElementById("test_P");
let li1=document.getElementById("li1");
let li2=document.getElementById("li2");
let li3=document.getElementById("li3");
let li4=document.getElementById("li4");
let p_p_test=document.getElementById("p_p_test");
let p_p_title=document.getElementById("p_p_title");


let a7=document.getElementById("a7");
let a8=document.getElementById("a8");


let a5=document.getElementById("a5");
let a6=document.getElementById("a6");


let test_h3=document.getElementById("test_h3");
let test_h3_1=document.getElementById("test_h3_1");
let test_h3_11=document.getElementById("test_h3_11");



arabic.onclick=()=>{

lang("arabic");
localStorage.setItem("keys","arabic");



}

English.onclick=()=>{

lang("English");
localStorage.setItem("keys","English");

	
}

onload=()=>{

lang(localStorage.getItem("keys"))

}


function lang(data) {

	if ( data ==="arabic" ) {

		test1_p.innerHTML="على محمد  على  ";
		li1.innerHTML="الصفحة الرئسية";
		li2.innerHTML="الاتصال";
		li3.innerHTML="SUPPCNRT";
		li4.innerHTML="ابكت";
		p_p_test.innerHTML="لا بدّ من إرسال بعض العبارات المعبرة عن المودة الدائمة، حتى عندما تكون العلاقة ممتازة <br>بين الزوجين ومن العبارات الجميلةقرأ المزيد على مو";
		p_p_title.innerHTML="بناء قادة أفضل";
		a7.innerHTML="بناء قادة أفضل";
		a5.innerHTML="بناء قادة أفضل";
		a8.innerHTML="لا بدّ من إرسال بعض العبارات المعبرة عن المودة الدائمة، حتى عندما تكون العلاقة ممتازة <br>بين الزوجين ومن العبارات الجميلةقرأ المزيد على مو";
		a6.innerHTML="لا بدّ من إرسال بعض العبارات المعبرة عن المودة الدائمة، حتى عندما تكون العلاقة ممتازة <br>بين الزوجين ومن العبارات الجميلةقرأ المزيد على مو";
            test_h3.innerHTML="بيان ميسون";
       test_h3_1.innerHTML="تاريخ";
       test_h3_11.innerHTML="مجلس الإدارة";
	



	}else if ( data ===  "English") {

		test1_p.innerHTML=" CENTER FOR <br>	NONPROFIT <br>	MANAGEMENT ";
		li1.innerHTML="HOME";
		li2.innerHTML="CONTACT";
		li3.innerHTML="SUPPCNRT";
		li4.innerHTML="ABCUT";
		p_p_test.innerHTML="ipsum dolor sit amet,consectetur adipisicing elit<br>tempor incididunt ut labore et dolore magna aliqua.";
        p_p_title.innerHTML="Building Better leaders" ; 

        a7.innerHTML="Building Better leaders" ; 
        a8.innerHTML="Building Better leaders" ; 
		a5.innerHTML="ipsum dolor sit amet,consectetur adipisicing elit<br>tempor incididunt ut labore et dolore magna aliqua.";
		a6.innerHTML="ipsum dolor sit amet,consectetur adipisicing elit<br>tempor incididunt ut labore et dolore magna aliqua.";
       test_h3.innerHTML="MISSON STATEMENT";
       test_h3_1.innerHTML="HISTORY";
       test_h3_11.innerHTML="BOARD OF DIRECTOR";


	}
	

}