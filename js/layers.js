addLayer("p", {
    name: "Pennies",
    symbol: "P",
    position: 0,
    startData() { return {                  
        unlocked: true,                     
        points: new Decimal(0),           
    }},

    color: "#4BDC13",                       
    resource: "pennies",            
    row: 0,                               

    baseResource: "points",                 
    baseAmount() { return player.points },  

    requires: new Decimal(10),             
    
    type: "normal",                         
    exponent: 0.5,                          

    gainMult() {                            
        return new Decimal(1)               
    },
    gainExp() {                             
        return new Decimal(1)
    },

    layerShown() { return true },          
    },
})
