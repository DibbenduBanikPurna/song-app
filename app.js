 document.getElementById('search').addEventListener('click',function(){
       const songInput=document.getElementById('song-input').value;
       if(songInput==""){
         alert("please enter your song")
       }
    
       fetch(`https://api.lyrics.ovh/suggest/${songInput}`)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
           let bio=data.data;
         bio=bio.slice(0,5)
           const searchArea=document.getElementById('search-area');
         searchArea.innerHTML=""
         for(let i=0;i<bio.length;i++){
             let element=bio[i]
             
         const p=document.createElement('p');
        p.innerHTML=`<p class="author lead"><strong>${element.title}</strong> Album By <span>${element.artist.name}</span> <button onClick="show('${element.artist.name}','${element.title}')" class="btn btn-success">Get Lyrics</button></p>`
         searchArea.appendChild(p);
     
         }
           
       })
     
       
       
        })
        function show(artist,title){
          fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
          .then(res=>res.json())
          .then(data=>{
            
          const showLyrics= document.getElementById('lyrics').innerHTML=`<div class="single-lyrics text-light text-left col-md-6 m-auto ">${data.lyrics}</div>`
         
        })
          

        }
    
       
        
      
