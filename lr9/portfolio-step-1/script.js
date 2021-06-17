let htmlsk = {     
    skillname: "html",  
    lvl: 60,     
    cssclass: "skill-html"  
  };

  let csssk = {     
    skillname: "css",  
    lvl: 40,     
    cssclass: "skill-css"  
  };
  

  let cshsk = {     
    skillname: "c#",  
    lvl: 45,     
    cssclass: "skill-csh"  
  };

  let arr = [htmlsk,csssk,cshsk];


  let a=document.createElement('dl');
  a.classList.add('skills-list');

  arr.forEach((element) => {
      let a1=document.createElement("dt");
      let a2=document.createElement("dd");
      let a3=document.createElement("div");
     a1.classList.add(element.cssclass);
     a1.textContent = element.skillname;
     a2.classList.add("level");
     a3.style.width = element.lvl + '%';
     a2.append(a3);
     a.append(a1);
     a.append(a2);
    })
    document.getElementById('s1').append(a);


