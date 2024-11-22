       document.getElementById('buttontime').onclick=function(){
      document.querySelector('section').classList.remove("section--light");
       const sec=document.querySelector('section');
       if(sec.classList.contains('section--light')){
         sec.classList.remove('section--light');
         sec.classList.add('section--drak');
         document.querySelector('body').classList.remove('section--light');
         document.querySelector('body').classList.add('section--drak');
         sec.querySelector('button').querySelector('svg').innerHTML='<g fill="#FFF" fill-rule="nonzero"><path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zM15.635 5.344l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zM19.312 9.312h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zM15.608 14.656a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zM4.365 14.656L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zM4.365 5.344a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"/></g>';
       }
       else
       {
        document.querySelector('body').classList.remove('section--drak');
        document.querySelector('body').classList.add('section--light');
         sec.classList.remove('section--drak');
         sec.classList.add('section--light');
         sec.querySelector('button').querySelector('svg').innerHTML='<path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z" fill="#697C9A" fill-rule="nonzero"/>';
    }
     }
     const labels = document.getElementById("formation_user").querySelectorAll("label");
     const linName = document.getElementById("formation_user").querySelector('a');
     const formation = document.getElementById("formation_followe").querySelectorAll("p");
     const contact = document.getElementById('container_contact').querySelectorAll('p');
     console.log(document.getElementById('container_contact'));
     async function numnre(line){
        try{
            const res = await fetch(line);
            if(!res.ok){
                throw new Error("not fend");
            }
            const jso = await res.json();
            localStorage.setItem('value',jso.length);
            return jso.length;
        }
        catch(err){
            console.log(err.message);
        }
        
        return 0;
    }
    async function getData(nom) {
        const url = `https://api.github.com/users/${nom}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`not finde`);
          }
      
          const json = await response.json();
      
          if (json.login === nom) {
            document.getElementById('imagepfofile').src=json.avatar_url;
            labels[0].innerText =  json.name;
            // linName.href=`https://github.com/${nom}`
            labels[1].innerText = "@"+ json.login ;
            labels[2].innerText = json.created_at;
            
            formation[3].innerText = await numnre(json.repos_url); ;
            
            formation[4].innerText =  await numnre(json.followers_url);
            
            formation[5].innerText = await numnre(json.following_url);
            
            contact[0].innerText=json.location ||'location';

            contact[1].innerText=json.blog ||'Not Available';

            contact[2].innerText=json.twitter_username ||'Not Available';

            contact[3].innerText=json.company ||'Not Available';
            console.log(contact[3]);

          }
        }catch(err){
            console.log(err.message);
        }
        
      }
      
      getData('lakrouehamza');
 
function search(){
    getData(document.getElementById('inputFind').value);
}