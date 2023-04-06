sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            onInit: function () {
                
              
            },
            onCustomerPress: function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails",{
                 //   CustomerID: oEvent.getSource().getBindingContext().getPath(),
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
                })
            },
            onPress: function(oEvent){
             
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateCustomer")
            },
            onPerformance: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("EmployeeList", {
                });
            }
})
  
 } );

  