document.addEventListener("DOMContentLoaded", function() {
  
  const applyStyle = (domElement,styleSheet) => {
    for( style in styleSheet){
      domElement.style[style] = styleSheet[style];
    }
  }

  const menubarStyle = {
    width: 'fit-content', 
    height: 'fit-content',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '100px',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    background: 'rgba(70, 72, 75, 0.60)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(14px)',
  }

  const mainContianerStyle = {
    width: '280px',
    height: 'calc(100vh - 100px)',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    overflow:"scroll",
    background:"black",
    padding:"20px",
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    background: 'rgba(70, 72, 75, 0.60)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(14px)',
  }


  const menuItem = () => {
    const menuItemElement = document.querySelector("#menubar");
    applyStyle(menuItemElement,menubarStyle)
  }

  menuItem();

  const optionsStyle = {
    maxHeight: "calc(100vh - 80px)"
  }
  const list = () => {
    const options = document.querySelector('.options');
    console.log(options)
    applyStyle(options,optionsStyle)
  }
  list()

  const panelStyles = {
    display : "block"
  }
  const tabsStyle = {
    display:"none"
  }
  const PropertiesStyles = {
    display:"block"
  }

  const geometry = () => {
    const geometryElement = document.querySelectorAll("#geometry");
    const materialElement = document.querySelectorAll("#material");
    const objectElement = document.querySelectorAll("#object");

    applyStyle(geometryElement[0],tabsStyle)
    applyStyle(materialElement[0],tabsStyle)
    applyStyle(objectElement[0],tabsStyle)
    applyStyle(geometryElement[1], PropertiesStyles);
    applyStyle(materialElement[1], PropertiesStyles);
    applyStyle(objectElement[1], PropertiesStyles);

    const mainContainer = document.createElement("div");
    mainContainer.id = "mainContainer"

  // Create containers for geometry, material, and object
  const geometryTab = document.createElement("div");
  const materialTab = document.createElement("div");
  const objectTab = document.createElement("div");

  // Create headings for each tab
  const geometryHeading = document.createElement("p");
  geometryHeading.textContent = "geometry";
  geometryTab.appendChild(geometryHeading);

  const materialHeading = document.createElement("p");
  materialHeading.textContent = "material";
  materialTab.appendChild(materialHeading);

  const objectHeading = document.createElement("p");
  objectHeading.textContent = "Object";
  objectTab.appendChild(objectHeading);

  const geometryContainer = document.createElement("div");
  geometryContainer.appendChild(geometryElement[1])
  geometryTab.appendChild(geometryContainer);
  
  const materialContainer = document.createElement("div");
  materialContainer.appendChild(materialElement[1])
  materialTab.appendChild(materialContainer);
  
  const objectContainer = document.createElement("div");
  objectContainer.appendChild(objectElement[1])
  objectTab.appendChild(objectContainer);

  mainContainer.appendChild(geometryTab);
  mainContainer.appendChild(materialTab);
  mainContainer.appendChild(objectTab);

  applyStyle(mainContainer, mainContianerStyle);

  document.body.appendChild(mainContainer);
    
  };
  
  geometry();
  
  const outlinerStyle = {
    width: '280px',
    height: 'calc(100vh - 100px)',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
    left: '20px',
    background:"black",
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    background: 'rgba(70, 72, 75, 0.60)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(14px)',
  };
  

  const outLiner = () => {
    const outlinerElement = document.querySelector("#outliner") 
    applyStyle(outlinerElement,outlinerStyle)
    this.body.appendChild(outlinerElement)
  }
  outLiner()

  const toolbarStyle = {
    top:"60px",
    left:"310px",
    zIndex:"-1"
  }

  const toolBar = () => {
    const toolbarElement = document.querySelector("#toolbar")
    applyStyle(toolbarElement,toolbarStyle)
  }
  toolBar()

  // const viewHelperStyles = {
  //   position:"absolute",
  //   top:"100px",
  //   top:"280px"
  // }

  // const viewHelper = () => {
  //   const viewHelperElement = document.querySelector("#viewHelper")
  //   applyStyle(viewHelperElement,viewHelperStyles)
  // }
  // viewHelper()

  const sideBarStyles = {
    display:"none"
  }

  const sideBar = () => {
    const sideBarElement = document.querySelector("#sidebar")
    applyStyle(sideBarElement,sideBarStyles)
  }
  sideBar()

  });

const avatar = document.createElement("img")
avatar.id = "avatar"
avatar.src = "../public/google.svg"
avatar.style.width = "60px"
// avatar.style.display = "absoulte"
avatar.style.borderRadius = "50%"
avatar.style.zIndex = "1000"
avatar.style.display = "none"

document.body.appendChild(avatar);

const signOutButton = document.createElement("button")
signOutButton.id = "signOut"
signOutButton.innerHTML = "signout"
signOutButton.style.display = "absolute"
signOutButton.style.top = "10px"
signOutButton.style.left = "80px"
signOutButton.style.display = "none"
signOutButton.style.zIndex = 1000

const menubar = document.querySelector("#menubar")

document.body.appendChild(signOutButton)