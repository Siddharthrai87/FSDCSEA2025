// const parent =document.getElementById('parent');

// const root =ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{},"ABES Engineering College");
// const li1=React.createElement("li",{},"React");
// const li2=React.createElement("li",{},"Java");
// const li3=React.createElement("li",{},"Python");
// const ul=React.createElement("ul",{style:{backgroundColor:'black',color:'white'}},li1,li2,li3);
// const img=React.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png",style:{height:100,width:100}});
// const myName=React.createElement('h3',{style:{marginLeft:'200px'}},'Siddharth Rai')

// const imgName=React.createElement('div',{style:{display:'flex'}},img,myName);
// const wrapper =React.createElement('div',{},h2,imgName,ul);
// root.render(h21);



// JSX

const parent =document.getElementById('parent');
const root =ReactDOM.createRoot(parent);

const h21=<h2>Hello, I am using jsx</h2>
root.render(h21);