sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "stk/starterkit/model/formatter"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, Formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.EmployeeList", {
            formatter: Formatter,


            onInit: function () {

            },
            handleNavButtonPress: function () {

                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomersList");
            },

            onMotivate: function (oEvent) {

                var oSource = oEvent.getSource();

                MessageToast.show("success");
                var oEmployee = oSource.getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "abctest.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    
               
            },
            onFire: function (oEvent) {

                var oSource = oEvent.getSource();

                $.ajax({
                    url: "/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },

                    success: function (oResponse) {
                        MessageToast.show("Failure");
                        var oEmployee = oSource.getBindingContext().getObject();
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "abctest.com";
                        var sSubject = "Awful job!";
                        var sBody =  oResponse.insult;
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }
        });
    });