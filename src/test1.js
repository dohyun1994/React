



function App() {
    const itemStyle = {
     width: '100%',
     /* height: 300px; */ 
     marginBottom: '10px',
     background: 'skyblue',
     display: 'inline-block' /* 컬럼 짤림 방지*/
   }
     return (
      // <div className="App">
         <div id="container">
           <h1>사전검색 서비스</h1>
         {/* 데이터 =>HTML 템플릿 */}
         {/* map: 데이터 순회 filter:삭제 , 검색 reduce :기존배열을 참조하여 새로운배열을 만듬*/}
         {words.map(word => {
           return (
             <>
               <div class="item" style ={itemStyle}>
                 <div class="word">
                   <a href={word.r_link} target="_blank" rel="noreferrer">
                     {word.r_word}
                     <sup>
                       {word.r_seq ? word.r_seq : ""}
                     </sup> 
                     {word.r_chi}
                     </a> - {word.r_pos}</div>
                 <p class="description">{word.r_des}</p>
               </div>
               <hr></hr>
             </>
           )
         }
         )}
       </div>
     );
   }
   export default App;
   