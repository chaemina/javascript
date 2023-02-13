//html 코드 지우고 콘솔창으로 출력해보기 

console.log("지역변수와 전역변수");
   
        var x =100; //전역변수 
        function f(){
            var y;
            var x=10; //지역변수 x 새로 생성 
            y=20; //지역변수 y에 20 저장
            z=30; //새로운 전역변수 z가 선언되고 30 저장
            if(y==20){
                let b =40; //if블록에서만 사용되는 블록변수 b 선언
                b++;
                console.log("if블록내 블록변수 b = "+b+" "); 

            }
            //이곳에는 블록변수 b 접근할 수 없음 
            console.log("함수 f() 내 지역변수 y =" +y+" ");
            console.log("함수 f() 내 전역변수 this.x =" +this.x+" ");  //노드에서는 this 사용 불가 
        
        }

        f();
        console.log("전역변수 x =" + x + "");
        console.log("전역변수 z = " +z+"");
 



// const express = require('express');
// const app = express();
// const http = require("http");

// var server = http.createServer((req,res)=>{
//     res.write(200,{'Content-Type':'text/html'})
//     res.end("hello nodejs")
// })

// server.listen(8081,()=>{
//     console.log("서버실행")
// })