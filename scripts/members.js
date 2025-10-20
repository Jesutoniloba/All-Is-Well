const churchUnits = {
    choir : [{
       name : "John Doe",
         role: "Choir Member", 
         image:"images/worshipchurch1-1280x640.jpg"
    },{
        name : "John Doe",
         role: "Choir Member", 
         image:"images/worshipchurch1-1280x640.jpg"
    },{
       name : "John Doe",
         role: "Choir Member", 
         image:"images/worshipchurch1-1280x640.jpg"
    } ],

    ushering : [{
        name : "John Doe",
         role: "ushering", 
         image:"images/worshipchurch1-1280x640.jpg"
    },{
        name : "John Doe",
         role: "ushering", 
         image:"images/worshipchurch1-1280x640.jpg"
    },{
       name : "John Doe",
         role: "ushering", 
         image:"images/worshipchurch1-1280x640.jpg"
    } ],

      minsiter: [{
         name : "John Doe",
         role: "minister", 
         image:"images/images/worshipchurch1-1280x640.jpg"
    },{
         name : "John Doe",
         role: "minister", 
         image:"images/images/worshipchurch1-1280x640.jpg"
    },{
         name : "John Doe",
         role: "minister", 
         image:"images/worshipchurch1-1280x640.jpg"
    }]
};

// Loop through each units
for(const [unitsName, members] of Object.entries(churchUnits)){
    const container = document.getElementById(unitsName);

    if (!container) continue;

    members.forEach(members => {
        const card = `
         <div class="member-card">
          <img src="${members.image}" alt="${members.name}" />
          <h3>${members.name}</h3>
          <p>${members.role}</p>
        </div>`;
        container.innerHTML += card;
    });
}