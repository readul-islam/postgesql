const { VendorEmpanelment ,Entity} = require('../../database');

exports.allVendorEmpanelment =(requestBody)=>{
 return VendorEmpanelment.findAll({
    include:[{model:Entity, as:"vendor"}]
 })
}